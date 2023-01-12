import { ForbiddenException, Injectable } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
// import { MailService } from '@/shared/mail/mail.service';

@Injectable()
export class AuthService {
  private supabase: SupabaseClient;

  // private readonly configService: ConfigService
  // private readonly eventEmitter: EventEmitter2,
  // private otpService: OtpService, // private mail: MailService,
  constructor() {
    this.supabase = createClient(
      'https://fgtbiltyzrjbnakoipvj.supabase.co',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZndGJpbHR5enJqYm5ha29pcHZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzI3Mjg5NzcsImV4cCI6MTk4ODMwNDk3N30.VDZZEZt3V0wiAT-UkdrZnpautUJcPvrhrE6nxwZAVAM',
    );
  }

  /**
   * send otp to the user email
   * @param email email address of the user
   * @returns
   */

  async sendOtpToEmail(email: string) {
    const { error } = await this.supabase.auth.signInWithOtp({
      email,
    });

    if (error) throw new ForbiddenException(error.message);
  }

  // last brase
}
