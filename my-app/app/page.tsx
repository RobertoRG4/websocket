"use client";

import Image from "next/image";
import { useSocket } from "@/app/hooks/useSocket";

export default function Home() {
  const { connected, connect, disconnect } = useSocket();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col items-center gap-10 p-10 bg-white dark:bg-black">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />

        <h1 className="text-2xl font-semibold">WebSocket API Gateway</h1>

        <button
          onClick={connected ? disconnect : connect}
          className={`h-12 px-6 rounded-full font-medium transition
            ${
              connected
                ? "bg-red-600 text-white hover:bg-red-700"
                : "bg-green-600 text-white hover:bg-green-700"
            }`}
        >
          {connected ? "Desconectar" : "Conectar"}
        </button>

        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Estado:{" "}
          <span className={connected ? "text-green-600" : "text-red-600"}>
            {connected ? "ONLINE" : "OFFLINE"}
          </span>
        </p>
      </main>
    </div>
  );
}
