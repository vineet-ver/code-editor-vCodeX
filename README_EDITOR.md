# 🧠 Code Editor

A simple, fast browser-based code editor built with **Next.js** and **shadcn/ui**. Write, run, and save code all in one place!

## ✨ Features

✅ **Code Editor** - Clean textarea interface for writing code  
✅ **Multiple Languages** - JavaScript, TypeScript, HTML, CSS, Python, JSON  
✅ **Code Execution** - Run JavaScript/TypeScript code in isolated iframes  
✅ **Output Console** - View logs, errors, warnings, and info messages  
✅ **Auto-Save** - Code is automatically saved to localStorage  
✅ **Dark Theme** - Beautiful dark UI with Tailwind CSS  

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd "f:\next js\code-editor"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to `http://localhost:3000`

## 🛠️ Tech Stack

- **Framework:** Next.js 16 with App Router
- **Styling:** Tailwind CSS 4
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Storage:** localStorage (browser)
- **Utilities:** clsx, tailwind-merge, class-variance-authority

## 📝 Usage

1. **Select a Language** - Choose from the language dropdown (JavaScript, TypeScript, HTML, CSS, Python, JSON)
2. **Write Code** - Type your code in the left editor panel
3. **Run Code** - Click the "Run Code" button to execute JavaScript/TypeScript
4. **View Output** - Check the right console panel for results
5. **Auto-Save** - Your code is automatically saved to localStorage per language

## 💾 Local Storage

- Code is saved per language as `code-{language}`
- Data persists across browser sessions
- Click "Reset" to restore default examples

## 🎨 Default Examples

Each language comes with a pre-filled example to help you get started:

- **JavaScript** - Hello World with a greet function
- **TypeScript** - Typed greetings and calculator
- **HTML** - Basic HTML structure
- **CSS** - Styling example
- **Python** - Print and function example
- **JSON** - Sample configuration

## 🔧 Available Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## 📦 Project Structure

```
code-editor/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── ui/
│   │   ├── button.tsx      # Button component
│   │   ├── card.tsx        # Card component
│   │   └── select.tsx      # Select component
│   ├── code-editor.tsx     # Code editor component
│   └── console.tsx         # Console output component
├── lib/
│   └── utils.ts            # Utility functions
├── package.json            # Dependencies
└── README.md               # This file
```

## 🚀 Deployment

Ready to deploy? You can deploy this Next.js app on:
- [Vercel](https://vercel.com) (recommended)
- [Netlify](https://netlify.com)
- [GitHub Pages](https://pages.github.com)

## 📝 Notes

- JavaScript/TypeScript code is executed in an isolated iframe for security
- Other languages show a message that execution is not supported in the browser
- localStorage is limited to ~5-10MB depending on the browser
- Code is stored per language, so switching languages preserves your work

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Radix UI](https://radix-ui.com)

## 📄 License

This project is open source and available under the MIT License.

---

**Happy Coding! 🚀**
