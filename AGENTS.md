# AGENTS.md - Coding Agent Guidelines

This document provides guidelines for AI coding agents working in this repository.

## Project Overview

**Bun + React 19** full-stack template. Uses Bun runtime (not Node.js) with Bun's native bundler.

**Architecture:**

- Server entry: `src/index.ts` - Bun HTTP server with route handlers
- Client entry: `src/frontend.tsx` - React app rendered to DOM
- Main component: `src/App.tsx`

## Build/Lint/Test Commands

```bash
# Development
bun dev                 # Start dev server with hot reload

# Production
bun build               # Build to dist/ with minification and sourcemaps
bun start               # Run production server (NODE_ENV=production)

# Type checking
bun tsc --noEmit        # Type check without emitting files
```

### Testing (Not Yet Configured)

When adding tests, use Bun's built-in test runner:

```bash
bun test                        # Run all tests
bun test path/to/file.test.ts   # Run single test file
bun test --grep "test name"     # Run tests matching pattern
```

## Code Style Guidelines

### File Naming

- React components: **PascalCase** (`App.tsx`, `APITester.tsx`)
- Entry points/utilities: **camelCase** (`index.ts`, `frontend.tsx`)
- CSS/assets: **kebab-case** (`index.css`, `logo.svg`)

### TypeScript

- **Strict mode enabled** with `noUncheckedIndexedAccess`, `noImplicitOverride`
- **Path alias:** `@/*` maps to `./src/*`
- **JSX:** react-jsx (automatic runtime)

### Import Order

```typescript
import { useRef, type FormEvent } from "react" // 1. React (use `type` for type-only)
import { something } from "third-party" // 2. Third-party libraries
import { Foo } from "@/components/Foo" // 3. Path alias imports
import { Bar } from "./Bar" // 4. Relative imports
import "./index.css" // 5. CSS imports
import logo from "./logo.svg" // 6. Asset imports
```

### React Components

```typescript
// Named export with function declaration (preferred)
export function ComponentName() {
  return <div>...</div>;
}
export default ComponentName;  // Optional default export

// Typed refs
const inputRef = useRef<HTMLTextAreaElement>(null);

// Event handlers with explicit types
const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const value = formData.get("fieldName") as string;
};
```

### Error Handling

```typescript
try {
    const res = await fetch(url, { method })
    const data = await res.json()
} catch (error) {
    element.value = String(error) // Convert to string for display
}
```

### CSS Conventions

- BEM-like class naming: `.api-tester`, `.endpoint-row`, `.send-button`
- CSS custom properties in `:root`
- Respect `prefers-reduced-motion`

## Server-Side Code (Bun)

```typescript
import { serve } from "bun"

const server = serve({
    routes: {
        "/*": indexHtml, // Catch-all for SPA

        "/api/endpoint": {
            async GET(req) {
                return Response.json({ data: "value" })
            },
            async PUT(req) {
                return Response.json({ updated: true })
            },
        },

        "/api/endpoint/:param": async (req) => {
            return Response.json({ param: req.params.param })
        },
    },

    development: process.env.NODE_ENV !== "production" && {
        hmr: true,
        console: true,
    },
})
```

## Project Structure

```
src/
  index.ts        # Bun server entry point
  frontend.tsx    # React app entry point
  App.tsx         # Main React component
  index.html      # HTML template
  index.css       # Global styles
  *.tsx           # React components (PascalCase)
```

## Environment Variables

- Client-side: prefix with `BUN_PUBLIC_*` (configured in `bunfig.toml`)
- Access via `process.env.BUN_PUBLIC_VAR_NAME`

## Asset Handling

```typescript
import logo from "./logo.svg" // Returns file path string
import styles from "./Foo.module.css" // Returns { className: "hashed" }
```

## Notes for Agents

1. Use **Bun**, not Node.js - run `bun` commands, not `npm`/`yarn`
2. No ESLint/Prettier configured - maintain consistent style manually
3. No tests exist yet - add with `bun test` when implementing features
4. Path alias `@/*` resolves to `./src/*`
5. React 19 - leverage new features like `use()` hook when appropriate
6. Server and client code coexist in `src/` - server runs in Bun, client in browser

## question.md / answer.md

When working with `question.md` and `answer.md`:

- **Only edit `answer.md`** — never modify `question.md`
- Read the question, then write your answer in the answer file

## warn cost when build

- every time when I request build agents to write code by yourself, warn me about the token cost. only write code when I
  say to proceed. ask me everytime before you write code. you may ask multiple times in a single session

### exception: when you are on following, write files without asking

- `/init`
- answering `question.md`
