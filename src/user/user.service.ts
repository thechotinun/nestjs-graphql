import { Injectable } from '@nestjs/common';
import { JsonPlaceholderService } from '../services/jsonPlaceholderService';
import { User } from './user.schema';

@Injectable()
export class UserSerivce {
  constructor(
    private readonly jsonPlaceholderService: JsonPlaceholderService,
  ) {}
  helloWorld(): string {
    return 'hello world';
  }
  async getUsers(): Promise<User[]> {
    const response = await this.jsonPlaceholderService.getUsers();
    return response.data;
  }
}
