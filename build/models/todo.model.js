import mongoose, { Schema } from 'mongoose';
import { TodoPriority } from '../types/todo.interface.js';
const TodoSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    completed: { type: Boolean, default: false },
    dueDate: { type: Date },
    priority: {
        type: String,
        enum: Object.values(TodoPriority),
        default: TodoPriority.LOW,
    },
}, {
    timestamps: true,
});
export const TodoModel = mongoose.model('Todo', TodoSchema);
