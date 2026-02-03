import { v } from 'convex/values'
import { mutation, query } from './_generated/server'

export const getTasks = query({
  handler: async (ctx) => {
    return await ctx.db.query('tasks').order('desc').collect()
  },
})

export const addTask = mutation({
  args: {
    title: v.string(),
    description: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const taskId = await ctx.db.insert('tasks', {
      title: args.title,
      description: args.description,
      isCompleted: false,
      createdAt: Date.now(),
    })
    return taskId
  },
})

export const toggleComplete = mutation({
  args: {
    id: v.id('tasks'),
  },
  handler: async (ctx, args) => {
    const task = await ctx.db.get(args.id)
    if (!task) {
      throw new Error('Task not found')
    }
    await ctx.db.patch(args.id, {
      isCompleted: !task.isCompleted,
    })
  },
})

export const deleteTask = mutation({
  args: {
    id: v.id('tasks'),
  },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id)
  },
})
