import AppResponse from '@/src/app/utils/app-response.class';
import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginOTPRequestDTO } from './dto/LoginRequest.dto';

@Controller('auth')
@ApiTags('Authentication')
export class AuthController {
  constructor(private readonly AuthService: AuthService) {}

  @ApiOperation({ summary: 'User authentication api' })
  @Post('signup')
  async signup(@Body() payload: LoginOTPRequestDTO) {
    this.AuthService.sendOtpToEmail(payload.email);
    return new AppResponse({
      statusCode: HttpStatus.OK,
      message: 'OTP send to your email!',
    });
  }
}
