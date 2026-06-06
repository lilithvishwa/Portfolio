# G. Lilith Vishwa — Developer Portfolio

A premium, production-quality developer portfolio built with **React 19 + TypeScript + TanStack Start + Tailwind CSS v4 + Framer Motion**.

---

## Tech Stack

- **Framework:** TanStack Start v1 (React 19, Vite 7, file-based routing)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 + custom OKLCH design tokens
- **Animations:** Framer Motion
- **Icons:** lucide-react
- **Package manager:** Bun (npm/pnpm also work)

---

## Project Structure

```
src/
├── routes/
│   ├── __root.tsx         # App shell, <head>, fonts, global meta
│   └── index.tsx          # Home page — assembles all portfolio sections
├── components/
│   └── portfolio/
│       ├── Nav.tsx           # Sticky top navigation with scroll blur
│       ├── Hero.tsx          # Landing hero — name, role, terminal visual, CTAs
│       ├── About.tsx         # "About me" pillars (4 cards)
│       ├── Experience.tsx    # Timeline — VRNexGen internship + VRXLEARN LMS
│       ├── Skills.tsx        # Categorized tech stack (Frontend, Backend, etc.)
│       ├── Projects.tsx      # Project cards with live links + GitHub
│       ├── Certifications.tsx# NPTEL / Udemy / Simplilearn certs
│       ├── Contact.tsx       # Contact form (mailto) + social links
│       ├── Footer.tsx        # Footer with email, GitHub, LinkedIn
│       └── Section.tsx       # Reusable animated section wrapper
├── components/ui/         # shadcn/ui primitives (button, card, input, …)
├── lib/                   # Utilities, error reporting
├── styles.css             # Tailwind v4 + design tokens (OKLCH dark theme)
├── router.tsx             # Router config
└── start.ts               # TanStack Start entrypoint
```

### Which component renders what

| Section on the page | Component file |
|---|---|
| Top navigation bar | `src/components/portfolio/Nav.tsx` |
| Hero / landing screen | `src/components/portfolio/Hero.tsx` |
| About me cards | `src/components/portfolio/About.tsx` |
| Work experience timeline | `src/components/portfolio/Experience.tsx` |
| Skills grid | `src/components/portfolio/Skills.tsx` |
| Projects showcase | `src/components/portfolio/Projects.tsx` |
| Certifications | `src/components/portfolio/Certifications.tsx` |
| Contact form | `src/components/portfolio/Contact.tsx` |
| Footer | `src/components/portfolio/Footer.tsx` |
| Page meta / SEO | `src/routes/__root.tsx` + `src/routes/index.tsx` |
| Theme tokens / colors | `src/styles.css` |

---

## Run Locally in VS Code

### 1. Prerequisites
- **Node.js 20+** — https://nodejs.org
- **Bun** (recommended) — https://bun.sh  
  Install: `curl -fsSL https://bun.sh/install | bash` (macOS/Linux) or `powershell -c "irm bun.sh/install.ps1 | iex"` (Windows)
- **VS Code** — https://code.visualstudio.com
- **Git** — https://git-scm.com

### 2. Open the project
```bash
unzip portfolio.zip
cd portfolio
code .
```

### 3. Recommended VS Code extensions
- **ESLint** (dbaeumer.vscode-eslint)
- **Tailwind CSS IntelliSense** (bradlc.vscode-tailwindcss)
- **Prettier** (esbenp.prettier-vscode)
- **TypeScript Nightly** (optional, for newest TS features)

### 4. Install dependencies
```bash
bun install
```
*(or `npm install` / `pnpm install` if you prefer)*

### 5. Start the dev server
```bash
bun run dev
```
Open the URL it prints (usually `http://localhost:5173`). Hot reload is on — edit any file in `src/` and the browser updates.

### 6. Build for production
```bash
bun run build
bun run start    # preview the production build
```

---

## Customizing

- **Personal info / links:** edit text directly inside each component in `src/components/portfolio/`.
- **Colors / theme:** edit OKLCH tokens at the top of `src/styles.css` (`--background`, `--primary`, `--accent`, …).
- **SEO meta tags:** `src/routes/__root.tsx` (global) and `src/routes/index.tsx` (home page).
- **Add a new section:** create a component in `src/components/portfolio/`, wrap it with `<Section>`, then import & render it in `src/routes/index.tsx`.
- **Add a new page/route:** drop a file in `src/routes/` (e.g. `blog.tsx` → `/blog`). The router auto-generates `routeTree.gen.ts`.

---

## Deployment

Works out of the box on **Vercel**, **Netlify**, or **Cloudflare Pages**. Push to GitHub and connect the repo — the build command is `bun run build` and the output is handled by TanStack Start's Vite plugin.

---

**Author:** G. Lilith Vishwa — Frontend Developer (React.js)  
Email: lilith04062005@gmail.com · GitHub: [@lilithvishwa](https://github.com/lilithvishwa) · LinkedIn: [lilithvishwa2005](https://linkedin.com/in/lilithvishwa2005)
