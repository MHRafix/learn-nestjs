import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginOTPRequestDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
