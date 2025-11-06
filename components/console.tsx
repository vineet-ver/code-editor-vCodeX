'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ConsoleMessage {
  type: 'log' | 'error' | 'warn' | 'info';
  message: string;
  timestamp: number;
}

interface ConsoleProps {
  messages: ConsoleMessage[];
}

export function Console({ messages }: ConsoleProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="py-3">
        <CardTitle className="text-sm">Output Console</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 overflow-auto font-mono text-xs p-4">
        {messages.length === 0 ? (
          <p className="text-muted-foreground">No output yet. Run your code to see results.</p>
        ) : (
          <div className="space-y-1">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`${
                  msg.type === 'error'
                    ? 'text-red-500'
                    : msg.type === 'warn'
                    ? 'text-yellow-500'
                    : msg.type === 'info'
                    ? 'text-blue-500'
                    : 'text-foreground'
                }`}
              >
                <span className="text-muted-foreground mr-2">
                  [{msg.type.toUpperCase()}]
                </span>
                {msg.message}
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export type { ConsoleMessage };
