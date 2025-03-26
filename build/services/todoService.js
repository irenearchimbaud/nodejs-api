import { TodoRepository } from '../repositories/todoRepository';
import { NotFoundError } from '../errors/notFoundError';
export class TodoService {
    todoRepository;
    constructor() {
        this.todoRepository = new TodoRepository();
    }
    async findAll() {
        return this.todoRepository.findAll();
    }
    async findById(id) {
        const todo = await this.todoRepository.findById(id);
        if (!todo)
            throw new NotFoundError(`Todo with id ${id} not found`);
        return todo;
    }
    async create(data) {
        return this.todoRepository.create(data);
    }
    async update(id, data) {
        const updated = await this.todoRepository.update(id, data);
        if (!updated)
            throw new NotFoundError(`Todo with id ${id} not found`);
        return updated;
    }
    async delete(id) {
        const success = await this.todoRepository.delete(id);
        if (!success)
            throw new NotFoundError(`Todo with id ${id} not found`);
    }
    async toggleComplete(id) {
        const todo = await this.findById(id);
        const updated = await this.todoRepository.update(id, {
            completed: !todo.completed,
        });
        if (!updated) {
            throw new NotFoundError(`Todo with id ${id} not found during toggle`);
        }
        return updated;
    }
    async findByStatus(completed) {
        return this.todoRepository.findByStatus(completed);
    }
    async findByPriority(priority) {
        return this.todoRepository.findByPriority(priority);
    }
}
