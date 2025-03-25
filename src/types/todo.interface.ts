export enum TodoPriority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
}

export interface Todo {
  id?: string;
  title: string;
  description?: string;
  completed: boolean;
  dueDate?: Date;
  priority: TodoPriority;
  createdAt?: Date;
  updatedAt?: Date;
}