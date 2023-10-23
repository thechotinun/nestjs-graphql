import { Query, Resolver } from '@nestjs/graphql';
import { User } from './user.schema';
import { UserSerivce } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserSerivce) {}
  @Query(() => String)
  helloWorld() {
    return this.userService.helloWorld();
  }
  @Query(() => [User])
  getUsers() {
    return this.userService.getUsers();
  }
}
