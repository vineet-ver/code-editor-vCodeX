'use client';

import { motion } from 'framer-motion';
import Editor from '@monaco-editor/react';
import { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import { useTheme } from 'next-themes';

interface MonacoEditorProps {
  value: string;
  onChange: (value: string) => void;
  language: string;
}

export function MonacoEditor({ value, onChange, language }: MonacoEditorProps) {
  const [showSaved, setShowSaved] = useState(false);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (value: string | undefined) => {
    if (value !== undefined) {
      onChange(value);
      setShowSaved(true);
      setTimeout(() => setShowSaved(false), 2000);
    }
  };

  const editorOptions = {
    minimap: { enabled: true },
    fontSize: 14,
    fontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace",
    lineNumbers: 'on' as const,
    roundedSelection: true,
    scrollBeyondLastLine: false,
    automaticLayout: true,
    tabSize: 2,
    wordWrap: 'on' as const,
    padding: { top: 16, bottom: 16 },
    smoothScrolling: true,
    cursorBlinking: 'smooth' as const,
    cursorSmoothCaretAnimation: 'on' as const,
    renderLineHighlight: 'all' as const,
    bracketPairColorization: {
      enabled: true,
    },
  };

  const editorTheme = mounted && theme === 'light' ? 'light' : 'vs-dark';

  return (
    <div className="relative h-full rounded-xl overflow-hidden glass border border-cyan-400/30 glow-border-cyan">
      {/* Tabs Simulation */}
      <div className="flex items-center gap-1 px-3 sm:px-4 py-2 bg-black/40 dark:bg-black/40 border-b border-white/10">
        <div className="flex items-center gap-2 px-2 sm:px-3 py-1 bg-cyan-400/10 border border-cyan-400/30 rounded-t-lg text-xs sm:text-sm text-cyan-300 dark:text-cyan-300">
          <span>main.{language === 'javascript' ? 'js' : language === 'typescript' ? 'ts' : language === 'python' ? 'py' : language === 'html' ? 'html' : language === 'css' ? 'css' : 'json'}</span>
        </div>
        
        {/* Saved Indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: showSaved ? 1 : 0, scale: showSaved ? 1 : 0.8 }}
          className="flex items-center gap-1 text-xs text-green-400 ml-auto"
        >
          <Check className="w-3 h-3" />
          <span className="hidden sm:inline">Saved</span>
        </motion.div>
      </div>

      {/* Editor */}
      <div className="h-[calc(100%-40px)]">
        <Editor
          height="100%"
          language={language}
          value={value}
          onChange={handleChange}
          options={editorOptions}
          theme={editorTheme}
          loading={
            <div className="flex items-center justify-center h-full">
              <div className="shimmer w-full h-full rounded-lg" />
            </div>
          }
        />
      </div>
    </div>
  );
}
