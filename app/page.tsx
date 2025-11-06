'use client';

import { useState, useEffect } from 'react';
import { Navbar } from '@/components/navbar';
import { MonacoEditor } from '@/components/monaco-editor';
import { TerminalConsole } from '@/components/terminal-console';
import { FAB } from '@/components/fab';
import { ConsoleMessage } from '@/components/console';

const LANGUAGES = [
  { value: 'javascript', label: 'JavaScript' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'python', label: 'Python' },
  { value: 'html', label: 'HTML' },
  { value: 'css', label: 'CSS' },
  { value: 'json', label: 'JSON' },
];

const DEFAULT_CODE: Record<string, string> = {
  javascript: `// Welcome to VCodeX!
console.log('Hello VCodeX!');
const msg = 'Futuristic IDE';
console.log(msg);`,
  typescript: `// TypeScript
const greeting: string = 'Hello';
console.log(greeting);`,
  python: `# Python
print("Hello VCodeX!")`,
  html: `<!DOCTYPE html>
<html>
<body>
  <h1>VCodeX</h1>
</body>
</html>`,
  css: `body {
  background: #0a0e27;
}`,
  json: `{
  "name": "CodeX"
}`
};

export default function Home() {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('javascript');
  const [consoleMessages, setConsoleMessages] = useState<ConsoleMessage[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const savedCode = localStorage.getItem(`code-${language}`);
    setCode(savedCode || DEFAULT_CODE[language] || '');
  }, [language]);

  useEffect(() => {
    if (isClient && code) {
      localStorage.setItem(`code-${language}`, code);
    }
  }, [code, language, isClient]);

  const runCode = () => {
    if (language === 'javascript' || language === 'typescript') {
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
      const iframeWindow = iframe.contentWindow;
      const messages: ConsoleMessage[] = [];
      if (iframeWindow) {
        // Type assertion to allow console override
        (iframeWindow as any).console = {
          log: (...args: unknown[]) => {
            messages.push({ type: 'log', message: args.map(arg => String(arg)).join(' '), timestamp: Date.now() });
          },
          error: (...args: unknown[]) => {
            messages.push({ type: 'error', message: args.map(arg => String(arg)).join(' '), timestamp: Date.now() });
          },
          warn: (...args: unknown[]) => {
            messages.push({ type: 'warn', message: args.map(arg => String(arg)).join(' '), timestamp: Date.now() });
          },
          info: (...args: unknown[]) => {
            messages.push({ type: 'info', message: args.map(arg => String(arg)).join(' '), timestamp: Date.now() });
          },
        };
        try {
          (iframeWindow as any).eval(code);
          setConsoleMessages(messages);
        } catch (error: unknown) {
          messages.push({ type: 'error', message: error instanceof Error ? error.message : String(error), timestamp: Date.now() });
          setConsoleMessages(messages);
        }
      }
      document.body.removeChild(iframe);
    } else {
      setConsoleMessages([{ type: 'warn', message: `Execution only for JS/TS. Current: ${language}`, timestamp: Date.now() }]);
    }
  };

  const clearConsole = () => setConsoleMessages([]);

  if (!isClient) return null;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar language={language} onLanguageChange={setLanguage} onRunCode={runCode} onClearConsole={clearConsole} languages={LANGUAGES} />
      <main className="flex-1 container mx-auto px-3 sm:px-6 py-4 sm:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 h-[calc(100vh-10rem)] sm:h-[calc(100vh-12rem)]">
          <div className="h-[50vh] lg:h-full">
            <MonacoEditor value={code} onChange={setCode} language={language} />
          </div>
          <div className="h-[50vh] lg:h-full">
            <TerminalConsole messages={consoleMessages} />
          </div>
        </div>
      </main>
      <footer className="glass-light border-t border-white/10 py-3 sm:py-4">
        <div className="container mx-auto px-3 sm:px-6 text-center text-xs sm:text-sm text-gray-400">
          <span className=" font-semibold">Built by Vineet 🚀</span>
        </div>
      </footer>
      <FAB />
    </div>
  );
}
