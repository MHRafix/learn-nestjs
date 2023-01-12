import { Controller, Get } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Get()
  sendTestMail() {
    return this.mailService.sendTestMail();
    // return this.mailService.sendMail({
    //   subject: 'Test',
    //   to: 'rayhan095@gmail.com',
    //   text: 'Test',
    //   html: '<b>Test</b>',
    // });
  }
}
