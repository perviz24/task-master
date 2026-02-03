'use client'

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

type FilterValue = 'all' | 'active' | 'completed'

type FilterTabsProps = {
  currentFilter: FilterValue
  onFilterChange: (filter: FilterValue) => void
  taskCounts: {
    all: number
    active: number
    completed: number
  }
}

export function FilterTabs({
  currentFilter,
  onFilterChange,
  taskCounts,
}: FilterTabsProps) {
  return (
    <Tabs value={currentFilter} onValueChange={(v) => onFilterChange(v as FilterValue)}>
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="all">
          All ({taskCounts.all})
        </TabsTrigger>
        <TabsTrigger value="active">
          Active ({taskCounts.active})
        </TabsTrigger>
        <TabsTrigger value="completed">
          Completed ({taskCounts.completed})
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
