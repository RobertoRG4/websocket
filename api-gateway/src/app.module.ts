import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuditGateway } from './websocket/audit.gateway';
import { PresenceService } from './websocket/presence.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, AuditGateway, PresenceService],
})
export class AppModule {}
