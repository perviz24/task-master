'use client'

import { useState } from 'react'
import { TaskForm } from '@/components/task-form'
import { TaskList } from '@/components/task-list'
import { FilterTabs } from '@/components/filter-tabs'

// Mock data for static UI
const mockTasks = [
  {
    _id: '1',
    title: 'Build task manager app',
    description: 'Create a simple task manager with Next.js and Convex',
    isCompleted: false,
  },
  {
    _id: '2',
    title: 'Review TypeScript errors',
    description: '',
    isCompleted: true,
  },
  {
    _id: '3',
    title: 'Deploy to Vercel',
    isCompleted: false,
  },
]

export default function Home() {
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all')

  const filteredTasks = mockTasks.filter((task) => {
    if (filter === 'active') return !task.isCompleted
    if (filter === 'completed') return task.isCompleted
    return true
  })

  const taskCounts = {
    all: mockTasks.length,
    active: mockTasks.filter((t) => !t.isCompleted).length,
    completed: mockTasks.filter((t) => t.isCompleted).length,
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-8">
        <h1 className="mb-8 text-3xl font-bold tracking-tight">Task Master</h1>
        <div className="space-y-6">
          <TaskForm />
          <FilterTabs
            currentFilter={filter}
            onFilterChange={setFilter}
            taskCounts={taskCounts}
          />
          <TaskList tasks={filteredTasks} />
        </div>
      </div>
    </div>
  )
}
