'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, AlertCircle, CheckCircle, AlertTriangle, Info } from 'lucide-react';
import { ConsoleMessage } from './console';

interface TerminalConsoleProps {
  messages: ConsoleMessage[];
}

export function TerminalConsole({ messages }: TerminalConsoleProps) {
  const getIcon = (type: string) => {
    switch (type) {
      case 'error':
        return <AlertCircle className="w-4 h-4 text-red-400" />;
      case 'warn':
        return <AlertTriangle className="w-4 h-4 text-yellow-400" />;
      case 'info':
        return <Info className="w-4 h-4 text-blue-400" />;
      default:
        return <CheckCircle className="w-4 h-4 text-green-400" />;
    }
  };

  const getTextColor = (type: string) => {
    switch (type) {
      case 'error':
        return 'text-red-400';
      case 'warn':
        return 'text-yellow-400';
      case 'info':
        return 'text-blue-400';
      default:
        return 'text-green-400';
    }
  };

  return (
    <div className="h-full flex flex-col glass-heavy border border-purple-400/30 rounded-xl overflow-hidden">
      {/* Terminal Header */}
      <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-black/40 dark:bg-black/40 border-b border-white/10">
        <Terminal className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
        <span className="text-xs sm:text-sm text-purple-300 dark:text-purple-300 font-semibold">Output Console</span>
        <div className="flex items-center gap-1 sm:gap-1.5 ml-auto">
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500/50 border border-red-500" />
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500/50 border border-yellow-500" />
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500/50 border border-green-500" />
        </div>
      </div>

      {/* Terminal Content */}
      <div className="flex-1 overflow-y-auto p-3 sm:p-4 font-mono text-xs sm:text-sm bg-black/60 dark:bg-black/60">
        {messages.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center h-full text-gray-500 dark:text-gray-500"
          >
            <Terminal className="w-8 h-8 sm:w-12 sm:h-12 mb-3 sm:mb-4 opacity-20" />
            <p className="text-xs sm:text-sm">No output yet. Run your code to see results.</p>
            <p className="text-xs mt-2 text-gray-600 dark:text-gray-600 hidden sm:block">Press Ctrl+Enter to execute</p>
          </motion.div>
        ) : (
          <AnimatePresence mode="popLayout">
            {messages.map((msg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.2, delay: idx * 0.05 }}
                className="flex items-start gap-2 sm:gap-3 mb-2 p-1.5 sm:p-2 rounded hover:bg-white/5 transition-colors border-l-2 border-transparent hover:border-cyan-400/50"
              >
                <div className="mt-0.5">{getIcon(msg.type)}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-gray-500 dark:text-gray-500 uppercase font-semibold">
                      {msg.type}
                    </span>
                    <span className="text-xs text-gray-600 dark:text-gray-600 hidden sm:inline">
                      {new Date(msg.timestamp).toLocaleTimeString()}
                    </span>
                  </div>
                  <pre className={`whitespace-pre-wrap break-words ${getTextColor(msg.type)}`}>
                    {msg.message}
                  </pre>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}
