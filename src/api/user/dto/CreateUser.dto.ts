import { ApiProperty } from '@nestjs/swagger';
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

  @ApiProperty({ required: true })
  @IsNotEmpty()
  role: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  hash: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  creator: string;
}
