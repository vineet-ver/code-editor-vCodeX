# 🚀 Code Editor - Setup & Installation Guide

## Prerequisites
- Node.js 18+ and npm installed
- A terminal/command prompt
- A code editor (VS Code recommended)

## Installation Steps

### Step 1: Navigate to Project Directory
Open PowerShell and navigate to the project:
```powershell
cd "f:\next js\code-editor"
```

### Step 2: Clean Install (If having issues)
```powershell
# Remove node_modules and lock files
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item package-lock.json -ErrorAction SilentlyContinue

# Install fresh
npm install
```

### Step 3: Run Development Server
```powershell
npm run dev
```

The app will start at: **http://localhost:3000**

## Project Structure

```
components/
├── ui/
│   ├── button.tsx        # Button component (shadcn/ui)
│   ├── card.tsx          # Card component (shadcn/ui)
│   └── select.tsx        # Select component (shadcn/ui)
├── code-editor.tsx       # Code editor textarea
└── console.tsx           # Console output display

app/
├── layout.tsx            # Root layout
├── page.tsx              # Main editor page
└── globals.css           # Global Tailwind styles

lib/
└── utils.ts              # Utility functions (cn helper)

components.json           # shadcn/ui config
```

## Features Implemented ✅

### 1. Code Editor Window
- Clean textarea editor with monospace font
- Supports all 6 languages
- Full line height and width coverage
- Focus ring styling

### 2. Language Selection
- Dropdown menu with 6 languages:
  - JavaScript
  - TypeScript
  - HTML
  - CSS
  - Python
  - JSON
- Default templates for each language
- Preserves code when switching languages

### 3. Run Button
- Executes JavaScript and TypeScript code
- Runs in isolated iframe for security
- Captures console output
- Shows error messages

### 4. Output Console
- Displays logs, errors, warnings, and info
- Color-coded message types
- Scrollable output area
- Clear console button

### 5. localStorage Persistence
- Automatically saves code as you type
- Stores code per language basis
- Data persists across browser sessions
- Auto-loads saved code on page load

## Available Commands

```powershell
# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## Testing the Editor

1. **JavaScript Example:**
   ```javascript
   console.log('Hello, World!');
   
   function add(a, b) {
     return a + b;
   }
   
   console.log(add(5, 3)); // 8
   ```

2. **Switch Languages** - Try HTML, CSS, Python, JSON
3. **Refresh Browser** - Code should still be there (localStorage)
4. **Reset Button** - Restores default example for current language

## Dependencies

### Core
- `next@16.0.1` - React framework
- `react@19.2.0` - UI library
- `tailwindcss@4` - Styling

### UI Components
- `@radix-ui/react-select` - Select dropdown
- `@radix-ui/react-slot` - Composition helper
- `lucide-react` - Icons (Play, Trash2)
- `class-variance-authority` - Component variants
- `clsx` & `tailwind-merge` - Utility helpers

## Troubleshooting

### Port 3000 Already in Use
```powershell
npm run dev -- -p 3001
```

### Dependencies Won't Install
```powershell
npm cache clean --force
npm install
```

### localStorage Not Working
- Check browser Privacy/Incognito mode
- Try a different browser
- Check DevTools > Application > localStorage

### Editor Not Loading
- Clear browser cache (Ctrl+Shift+Del)
- Try Ctrl+F5 (hard refresh)
- Check browser console for errors

## Next Steps (Optional Enhancements)

1. **Add Monaco Editor** - Better syntax highlighting
2. **Add Theme Toggle** - Light/Dark mode
3. **Code Formatting** - Prettier integration
4. **Export Code** - Download as file
5. **Share Code** - URL-based sharing
6. **Keyboard Shortcuts** - Ctrl+S to save, Ctrl+Enter to run
7. **File Management** - Multiple files/tabs

## Documentation Links

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Radix UI](https://radix-ui.com)
- [Lucide Icons](https://lucide.dev)

---

**Happy Coding! 🎉**

For issues or questions, check the README_EDITOR.md file.
