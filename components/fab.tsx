'use client';

import { motion } from 'framer-motion';
import { Plus, FileCode, Share2, Download } from 'lucide-react';
import { useState } from 'react';

export function FAB() {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    { icon: FileCode, label: 'New File', color: 'from-cyan-500 to-blue-600' },
    { icon: Share2, label: 'Share', color: 'from-purple-500 to-pink-600' },
    { icon: Download, label: 'Export', color: 'from-green-500 to-emerald-600' },
  ];

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50">
      <div className="relative">
        {/* Action Buttons */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-16 sm:bottom-20 right-0 flex flex-col gap-2 sm:gap-3"
            >
              {actions.map((action, index) => (
                <motion.button
                  key={action.label}
                  initial={{ opacity: 0, scale: 0, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 sm:gap-3 px-3 py-2 sm:px-4 rounded-full bg-gradient-to-r ${action.color} shadow-lg text-white text-xs sm:text-sm font-medium`}
                >
                  <action.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">{action.label}</span>
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main FAB */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{ rotate: isOpen ? 45 : 0 }}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 shadow-lg shadow-cyan-500/50 flex items-center justify-center text-white hover:shadow-cyan-500/70 transition-shadow"
        >
          <Plus className="w-5 h-5 sm:w-6 sm:h-6" />
        </motion.button>
      </div>
    </div>
  );
}

function AnimatePresence({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
