import { TodoPriority } from './todo.interface';

export interface CreateTodoDto {
  title: string;
  description?: string;
  dueDate?: Date;
  priority: TodoPriority;
}

export interface UpdateTodoDto {
  title?: string;
  description?: string;
  dueDate?: Date;
  priority?: TodoPriority;
  completed?: boolean;
}