import { io, Socket } from "socket.io-client";

type Listener = (connected: boolean) => void;

class WebSocketService {
  private socket: Socket | null = null;
  private readonly listeners = new Set<Listener>();

  connect() {
    if (this.socket) return;

    this.socket = io("http://localhost:8080/ws", {
      transports: ["websocket"],
      reconnection: false,
    });

    this.socket.on("connected", () => {
      this.notify(true);
    });

    this.socket.on("disconnect", () => {
      this.notify(false);
    });
  }

  disconnect() {
    this.socket?.disconnect();
    this.socket = null;
    this.notify(false);
  }

  subscribe(listener: Listener) {
    this.listeners.add(listener);
    listener(!!this.socket?.connected);

    return () => {
      this.listeners.delete(listener);
    };
  }

  private notify(state: boolean) {
    this.listeners.forEach((l) => l(state));
  }
}

export const wsService = new WebSocketService();
