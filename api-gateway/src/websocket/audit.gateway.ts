/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
// websocket/audit.gateway.ts
import {
  WebSocketGateway,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  ConnectedSocket,
  MessageBody,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { PresenceService } from './presence.service';
import { Logger } from '@nestjs/common';

@WebSocketGateway({
  namespace: '/ws',
  cors: { origin: '*' },
})
export class AuditGateway implements OnGatewayConnection, OnGatewayDisconnect {
  private readonly logger = new Logger(AuditGateway.name);
  constructor(private readonly presence: PresenceService) {}

  handleConnection(client: Socket) {
    this.logger.log(`🟢 Cliente conectado: ${client.id}`);
    this.logger.log(`Handshake auth: ${JSON.stringify(client.handshake.auth)}`);

    client.emit('connected', {
      message: 'Conectado correctamente al gateway',
    });
  }

  handleDisconnect(client: Socket) {
    this.logger.warn(`🔴 Cliente desconectado: ${client.id}`);
  }

  @SubscribeMessage('audit-event')
  audit(@MessageBody() data: any, @ConnectedSocket() client: Socket) {
    console.log('AUDIT:', client.data.user.sub, data);
  }
}
