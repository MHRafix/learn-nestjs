import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/CreateUser.dto';

@Injectable()
export class UserService {
  constructor() {} // private readonly prisma: PrismaService, // private readonly userService: UserService, // private readonly mailService: MailService, // private readonly eventEmitter: EventEmitter2,

  async create(payload: CreateUserDto) {
    console.log(payload);
    // const user = await this.prisma.user.create({
    //   data: {
    //     name: payload.name,
    //     email: payload?.email,
    //     avatar: payload?.avatar,
    //     hash: payload?.hash,
    //     role: payload.role,
    //     creator: payload.creator,
    //   },
    // });
    return {
      name: 'payload?.name',
      email: 'payload?.email',
      avatar: 'payload?.avatar',
      hash: 'payload?.hash',
      role: 'payload?.role',
      creator: 'payload?.creator',
    };
  }
}
