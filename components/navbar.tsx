'use client';

import { motion } from 'framer-motion';
import { Moon, Sun, Zap, Play, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface NavbarProps {
  language: string;
  onLanguageChange: (value: string) => void;
  onRunCode: () => void;
  onClearConsole: () => void;
  languages: { value: string; label: string }[];
}

export function Navbar({
  language,
  onLanguageChange,
  onRunCode,
  onClearConsole,
  languages,
}: NavbarProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="glass-heavy border-b border-white/10 sticky top-0 z-50"
    >
      <div className="container mx-auto px-3 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2 sm:gap-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <div className="relative">
              <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 glow-cyan" />
              <motion.div
                className="absolute inset-0"
                animate={{
                  boxShadow: [
                    '0 0 10px rgba(0, 255, 255, 0.3)',
                    '0 0 20px rgba(0, 255, 255, 0.6)',
                    '0 0 10px rgba(0, 255, 255, 0.3)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl sm:text-2xl font-bold gradient-text">CodeX</h1>
              <p className="text-xs text-gray-400">Futuristic IDE</p>
            </div>
          </motion.div>

          {/* Controls */}
          <div className="flex items-center gap-1.5 sm:gap-4">
            {/* Language Selector */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="hidden md:block"
            >
              <Select value={language} onValueChange={onLanguageChange}>
                <SelectTrigger className="w-[140px] sm:w-[180px] glass border-white/20 hover:border-cyan-400/50 transition-all">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent className="glass-heavy border-white/20">
                  {languages.map((lang) => (
                    <SelectItem
                      key={lang.value}
                      value={lang.value}
                      className="hover:bg-cyan-400/10 cursor-pointer"
                    >
                      {lang.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </motion.div>

            {/* Mobile Language Selector */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="md:hidden"
            >
              <Select value={language} onValueChange={onLanguageChange}>
                <SelectTrigger className="w-[100px] glass border-white/20 hover:border-cyan-400/50 transition-all text-xs">
                  <SelectValue placeholder="Lang" />
                </SelectTrigger>
                <SelectContent className="glass-heavy border-white/20">
                  {languages.map((lang) => (
                    <SelectItem
                      key={lang.value}
                      value={lang.value}
                      className="hover:bg-cyan-400/10 cursor-pointer text-xs"
                    >
                      {lang.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex items-center gap-1.5 sm:gap-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Button
                onClick={onClearConsole}
                variant="outline"
                size="sm"
                className="glass border-white/20 hover:border-red-400/50 hover:bg-red-400/10 transition-all group hidden sm:flex"
              >
                <Trash2 className="w-4 h-4 mr-2 group-hover:text-red-400 transition-colors" />
                Clear
              </Button>
              
              {/* Mobile Clear Button */}
              <Button
                onClick={onClearConsole}
                variant="outline"
                size="sm"
                className="glass border-white/20 hover:border-red-400/50 hover:bg-red-400/10 transition-all group sm:hidden p-2"
              >
                <Trash2 className="w-4 h-4 group-hover:text-red-400 transition-colors" />
              </Button>
              
              <Button
                onClick={onRunCode}
                size="sm"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 border-0 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all group hidden sm:flex"
              >
                <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Run Code
              </Button>
              
              {/* Mobile Run Button */}
              <Button
                onClick={onRunCode}
                size="sm"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 border-0 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all group sm:hidden p-2"
              >
                <Play className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </Button>
            </motion.div>

            {/* Theme Toggle */}
            {mounted && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, type: 'spring' }}
              >
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="glass border-white/20 hover:border-purple-400/50 hover:bg-purple-400/10 transition-all w-8 h-8 sm:w-10 sm:h-10"
                >
                  {theme === 'dark' ? (
                    <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                  ) : (
                    <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                  )}
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.header>
  );
}
