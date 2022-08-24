import { Logger } from '@/data/protocols/utils';
import { Task } from '@/schedule/protocols';

export class ExampleTask implements Task {
  constructor(private readonly logger: Logger) {}
  async handle(state: Task.State, next: Task.Next): Task.Result {
    try {
      this.logger.log({ level: 'info', message: "Hello i'm a task" });
      next();
    } catch (error) {
      this.logger.log(error);
    }
  }
}
