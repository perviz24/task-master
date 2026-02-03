'use client'

import { useMutation } from 'convex/react'
import { api } from '../../convex/_generated/api'
import { Id } from '../../convex/_generated/dataModel'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Trash2 } from 'lucide-react'

type Task = {
  _id: Id<'tasks'>
  title: string
  description?: string
  isCompleted: boolean
}

type TaskListProps = {
  tasks: Task[]
}

export function TaskList({ tasks }: TaskListProps) {
  const toggleComplete = useMutation(api.tasks.toggleComplete)
  const deleteTask = useMutation(api.tasks.deleteTask)

  const handleToggle = (taskId: Id<'tasks'>) => {
    toggleComplete({ id: taskId })
  }

  const handleDelete = (taskId: Id<'tasks'>) => {
    deleteTask({ id: taskId })
  }

  if (tasks.length === 0) {
    return (
      <Card>
        <CardContent className="py-8 text-center text-muted-foreground">
          No tasks yet. Add one above to get started!
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <Card key={task._id}>
          <CardContent className="flex items-start gap-4 py-4">
            <Checkbox
              checked={task.isCompleted}
              onCheckedChange={() => handleToggle(task._id)}
              className="mt-1"
            />
            <div className="flex-1 space-y-1">
              <p
                className={`font-medium ${
                  task.isCompleted
                    ? 'text-muted-foreground line-through'
                    : 'text-foreground'
                }`}
              >
                {task.title}
              </p>
              {task.description && (
                <p className="text-sm text-muted-foreground">
                  {task.description}
                </p>
              )}
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleDelete(task._id)}
              className="text-muted-foreground hover:text-destructive"
              aria-label={`Delete task: ${task.title}`}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
