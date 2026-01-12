// websocket/presence.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class PresenceService {
  private readonly connections = new Map<string, number>();

  connect(userId: string) {
    const c = this.connections.get(userId) || 0;
    this.connections.set(userId, c + 1);
  }

  disconnect(userId: string) {
    const c = (this.connections.get(userId) || 1) - 1;
    if (c <= 0) this.connections.delete(userId);
    else this.connections.set(userId, c);
  }

  isOnline(userId: string) {
    return this.connections.has(userId);
  }
}
