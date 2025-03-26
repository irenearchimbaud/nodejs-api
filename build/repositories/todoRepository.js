import { MongooseRepository } from './mongooseRepository';
import { TodoModel } from '../models/todo.model';
export class TodoRepository extends MongooseRepository {
    constructor() {
        super(TodoModel);
    }
    async findByStatus(completed) {
        return this.model.find({ completed });
    }
    async findByPriority(priority) {
        return this.model.find({ priority });
    }
}
