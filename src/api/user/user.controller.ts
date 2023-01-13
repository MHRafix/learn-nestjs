import AppResponse from '@/src/app/utils/app-response.class';
import { Body, Controller, HttpStatus, Post, Req } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/CreateUser.dto';
import { UserService } from './user.service';

@Controller('api/user')
@ApiTags('User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'User create api' })
  @Post('/create')
  //   @Authenticated()
  // @IsUserRole('ADMIN')
  async create(@Body() payload: CreateUserDto, @Req() req: any) {
    const data = await this.userService.create(payload);
    return new AppResponse({
      data,
      message: 'User created successfully',
      statusCode: HttpStatus.CREATED,
    });
  }
}
