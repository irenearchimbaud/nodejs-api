import { TodoService } from '../services/todoService.js';
import { asyncHandler } from '../utils/asyncHandler.js';
const todoService = new TodoService();
export const getAllTodos = asyncHandler(async (req, res) => {
    const { completed, priority } = req.query;
    if (completed !== undefined) {
        const result = await todoService.findByStatus(completed === 'true');
        return res.json(result);
    }
    if (priority !== undefined) {
        const result = await todoService.findByPriority(priority);
        return res.json(result);
    }
    const todos = await todoService.findAll();
    res.json(todos);
});
export const getTodo = asyncHandler(async (req, res) => {
    const todo = await todoService.findById(req.params.id);
    res.json(todo);
});
export const createTodo = asyncHandler(async (req, res) => {
    const todo = await todoService.create(req.body);
    res.status(201).json(todo);
});
export const updateTodo = asyncHandler(async (req, res) => {
    const updated = await todoService.update(req.params.id, req.body);
    res.json(updated);
});
export const deleteTodo = asyncHandler(async (req, res) => {
    await todoService.delete(req.params.id);
    res.status(204).send();
});
export const toggleTodoComplete = asyncHandler(async (req, res) => {
    const updated = await todoService.toggleComplete(req.params.id);
    res.json(updated);
});
