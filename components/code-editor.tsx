'use client';

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  language: string;
}

export function CodeEditor({ value, onChange, language }: CodeEditorProps) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full h-full p-4 bg-slate-900 text-white font-mono text-sm border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
      spellCheck="false"
      placeholder="Write your code here..."
    />
  );
}

