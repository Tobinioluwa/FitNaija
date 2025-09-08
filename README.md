To run the FitNaija app locally on your system, you'll need to set up a React development environment. Here's how to do it:

Prerequisites
Make sure you have Node.js installed on your system. You can download it from nodejs.org.

Setup Instructions

Create a new React project with Vite (recommended):
```bash
npm create vite@latest fitnaija-app -- --template react-ts
cd fitnaija-app
```

Install dependencies:
```bash
npm install
npm install lucide-react
npm install @radix-ui/react-avatar @radix-ui/react-badge @radix-ui/react-card @radix-ui/react-progress @radix-ui/react-tabs @radix-ui/react-separator
```

Set up Tailwind CSS v4:
```bash
npm install tailwindcss@next @tailwindcss/vite@next
```

Replace the default files with your FitNaija code:
Copy all your component files to the `src/components/` directory
Replace `src/App.tsx` with your App.tsx content
Replace `src/index.css` with your `styles/globals.css` content

Update `vite.config.ts`:
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
```

Update import paths in your components:
   Change all imports from `"./components/..."` to `"@/components/..."` or adjust the paths to match your src structure.

Create a simple `src/main.tsx`:
```typescript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

Run the development server:
```bash
npm run dev
```

Alternative: Quick Setup with Package.json

If you want to quickly set up the exact project structure, create these files in a new directory:

package.json:
```json
{
  "name": "fitnaija-app",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "lucide-react": "^0.263.1",
    "@radix-ui/react-avatar": "^1.0.3",
    "@radix-ui/react-badge": "^1.0.3",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^1.14.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.15",
    "@types/react-dom": "^18.2.7",
    "@vitejs/plugin-react": "^4.0.3",
    "typescript": "^5.0.2",
    "vite": "^4.4.5",
    "tailwindcss": "^4.0.0-alpha.25",
    "@tailwindcss/vite": "^4.0.0-alpha.25"
  }
}
```

Then run:
```bash
npm install
npm run dev
```

Notes:
The app uses Tailwind CSS v4 (alpha), so make sure you have the correct version
Some ShadCN components might need additional Radix UI dependencies
You may need to adjust image paths and ensure the ImageWithFallback component works in your local environment
The Unsplash images will work as they're using direct URLs

Your app should now be running locally at `http://localhost:5173` (or similar)!
