import { TodoRepository } from '../repositories/todoRepository';
import { CreateTodoDto, UpdateTodoDto } from '../types/todo.dto';
import { TodoDocument } from '../models/todo.model';
import { NotFoundError } from '../errors/notFoundError';

export class TodoService {
  private todoRepository: TodoRepository;

  constructor() {
    this.todoRepository = new TodoRepository();
  }

  async findAll(): Promise<TodoDocument[]> {
    return this.todoRepository.findAll();
  }

  async findById(id: string): Promise<TodoDocument> {
    const todo = await this.todoRepository.findById(id);
    if (!todo) throw new NotFoundError(`Todo with id ${id} not found`);
    return todo;
  }

  async create(data: CreateTodoDto): Promise<TodoDocument> {
    return this.todoRepository.create(data);
  }

  async update(id: string, data: UpdateTodoDto): Promise<TodoDocument> {
    const updated = await this.todoRepository.update(id, data);
    if (!updated) throw new NotFoundError(`Todo with id ${id} not found`);
    return updated;
  }

  async delete(id: string): Promise<void> {
    const success = await this.todoRepository.delete(id);
    if (!success) throw new NotFoundError(`Todo with id ${id} not found`);
  }

  async toggleComplete(id: string): Promise<TodoDocument> {
    const todo = await this.findById(id);
  
    const updated = await this.todoRepository.update(id, {
      completed: !todo.completed,
    });
  
    if (!updated) {
      throw new NotFoundError(`Todo with id ${id} not found during toggle`);
    }
  
    return updated;
  }

  async findByStatus(completed: boolean): Promise<TodoDocument[]> {
    return this.todoRepository.findByStatus(completed);
  }

  async findByPriority(priority: 'LOW' | 'MEDIUM' | 'HIGH'): Promise<TodoDocument[]> {
    return this.todoRepository.findByPriority(priority);
  }
}