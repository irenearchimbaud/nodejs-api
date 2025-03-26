import { Router } from 'express';
import {
  getAllTodos,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
  toggleTodoComplete,
} from '../controllers/todoController.js';
import { validate } from '../middleware/validate.js';
import { createTodoSchema, updateTodoSchema } from '../types/todo.schema.js';

const router = Router();

router.get('/todos', getAllTodos);
router.get('/todos/:id', getTodo);
router.post('/todos', validate(createTodoSchema), createTodo);
router.patch('/todos/:id', validate(updateTodoSchema), updateTodo);
router.delete('/todos/:id', deleteTodo);
router.patch('/todos/:id/toggle', toggleTodoComplete);

console.log("je suis router")
export default router;