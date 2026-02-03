'use client'

import { useState } from 'react'
import { useQuery } from 'convex/react'
import { api } from '../../convex/_generated/api'
import { TaskForm } from '@/components/task-form'
import { TaskList } from '@/components/task-list'
import { FilterTabs } from '@/components/filter-tabs'

export default function Home() {
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all')
  const tasks = useQuery(api.tasks.getTasks) ?? []

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.isCompleted
    if (filter === 'completed') return task.isCompleted
    return true
  })

  const taskCounts = {
    all: tasks.length,
    active: tasks.filter((t) => !t.isCompleted).length,
    completed: tasks.filter((t) => t.isCompleted).length,
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
