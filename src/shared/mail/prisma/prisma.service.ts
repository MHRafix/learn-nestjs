import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
//@ts-ignore
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  private logger: Logger = new Logger(PrismaService.name);

  constructor(private readonly configService: ConfigService) {
    super({
      // log: ['query', 'info', 'warn'],
      errorFormat: 'pretty',
    });
  }
  onModuleInit() {
    throw new Error('Method not implemented.');
  }

  //   async onModuleInit() {
  //     await this.$connect();
  //     this.logger.log('Connected to database');
  //     if (this.configService.get('app.env') !== 'development') {
  //       return;
  //     }
  //   }

  //   async enableShutdownHooks(app: INestApplication) {
  //     this.$on('beforeExit', async () => {
  //       await app.close();
  //     });
  //   }
}
