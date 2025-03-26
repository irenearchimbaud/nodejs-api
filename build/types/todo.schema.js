import { z } from 'zod';
import { TodoPriority } from './todo.interface';
export const createTodoSchema = z.object({
    title: z.string().min(1, 'Title is required'),
    description: z.string().optional(),
    dueDate: z.coerce.date().optional(),
    priority: z.nativeEnum(TodoPriority),
});
export const updateTodoSchema = z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    dueDate: z.coerce.date().optional(),
    priority: z.nativeEnum(TodoPriority).optional(),
    completed: z.boolean().optional(),
});
