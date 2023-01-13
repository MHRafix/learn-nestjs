import { ApiProperty } from '@nestjs/swagger';
import { USER_ROLE } from '@prisma/client';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ required: false })
  @IsOptional()
  name: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  email: string;

  @ApiProperty({ required: false })
  @IsOptional()
  avatar: string;

  @ApiProperty({
    required: true,
    description: 'User domain',
    enum: USER_ROLE,
    default: USER_ROLE.MODERATOR,
  })
  role: USER_ROLE;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  hash: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  creator: string;
}
