import { Module } from '@nestjs/common';
import { JsonPlaceholderService } from '../services/jsonPlaceholderService';
import { UserResolver } from './user.resovler';
import { UserSerivce } from './user.service';

@Module({
  imports: [],
  providers: [UserResolver, UserSerivce, JsonPlaceholderService],
})
export class UserModule {}
