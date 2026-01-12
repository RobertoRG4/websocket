"use client";

import { useEffect, useState } from "react";
import { wsService } from "../service/ws.service";

export function useSocket() {
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const unsubscribe = wsService.subscribe(setConnected);
    return unsubscribe;
  }, []);

  return {
    connected,
    connect: () => wsService.connect(),
    disconnect: () => wsService.disconnect(),
  };
}
