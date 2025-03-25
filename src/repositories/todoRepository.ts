import { MongooseRepository } from './mongooseRepository';
import { TodoModel, TodoDocument } from '../models/todo.model';

export class TodoRepository extends MongooseRepository<TodoDocument> {
  constructor() {
    super(TodoModel);
  }

  async findByStatus(completed: boolean): Promise<TodoDocument[]> {
    return this.model.find({ completed });
  }

  async findByPriority(priority: 'LOW' | 'MEDIUM' | 'HIGH'): Promise<TodoDocument[]> {
    return this.model.find({ priority });
  }
}