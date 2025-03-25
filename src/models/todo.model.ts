import mongoose, { Schema, Document } from 'mongoose';
import { TodoPriority } from '../types/todo.interface.js';

export interface TodoDocument extends Document {
  title: string;
  description?: string;
  completed: boolean;
  dueDate?: Date;
  priority: TodoPriority;
  createdAt: Date;
  updatedAt: Date;
}

const TodoSchema = new Schema<TodoDocument>(
  {
    title: { type: String, required: true },
    description: { type: String },
    completed: { type: Boolean, default: false },
    dueDate: { type: Date },
    priority: {
      type: String,
      enum: Object.values(TodoPriority),
      default: TodoPriority.LOW,
    },
  },
  {
    timestamps: true,
  }
);

export const TodoModel = mongoose.model<TodoDocument>('Todo', TodoSchema);
