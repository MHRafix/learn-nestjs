import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createTransport } from 'nodemailer';

@Injectable()
export class MailService {
  sendTestMail() {
    // mjmlUtils
    //   .inject(template, {
    //     name: 'Rayhan',
    //   })
    //   .then((html: any) => {
    //     return html;
    //   });
    // throw new Error('Method not implemented.');
  }
  constructor(private readonly config: ConfigService) {}

  private transport() {
    const mailConfig = {
      host: this.config.get('mail.host'),
      port: this.config.get('mail.port'),
      secure: this.config.get('mail.secure'), // true for 465, false for other ports
      auth: {
        user: this.config.get('mail.auth_user'),
        pass: this.config.get('mail.auth_password'),
      },
    };
    return createTransport(mailConfig);
  }

  /**
   * Send a mail
   * @param param0 { to: string, subject: string, text: string }
   * @returns
   */
  public async sendMail({
    to,
    subject,
    text,
    html,
  }: {
    to: string;
    subject: string;
    text?: string;
    html?: string;
  }) {
    const email = this.config.get('mail.defaultEmail');
    const mailOptions = {
      from: `"${this.config.get('mail.defaultName')}" <${email}>`,
      to,
      subject,
      text,
      html,
    };
    const info = await this.transport().sendMail(mailOptions);
    return info;
  }
}
