import type { ReactNode } from "react";
import { Section } from "./Section";
import { Layout, Smartphone, Database, Wrench } from "lucide-react";

function ReactIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

function ReactNativeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect x="5" y="2" width="14" height="20" rx="3" stroke="#61DAFB" strokeWidth="1.5" />
      <circle cx="12" cy="18" r="1" fill="#61DAFB" />
      <circle cx="12" cy="9.5" r="1.3" fill="#61DAFB" />
      <ellipse cx="12" cy="9.5" rx="4.2" ry="1.6" stroke="#61DAFB" strokeWidth="0.9" />
      <ellipse
        cx="12"
        cy="9.5"
        rx="4.2"
        ry="1.6"
        stroke="#61DAFB"
        strokeWidth="0.9"
        transform="rotate(60 12 9.5)"
      />
      <ellipse
        cx="12"
        cy="9.5"
        rx="4.2"
        ry="1.6"
        stroke="#61DAFB"
        strokeWidth="0.9"
        transform="rotate(120 12 9.5)"
      />
    </svg>
  );
}

function AndroidIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#3DDC84">
      <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v6c0 .83.67 1.5 1.5 1.5S5 16.33 5 15.5v-6C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-6c0-.83-.67-1.5-1.5-1.5zm-4.97-4.84l1.3-1.3c.2-.2.2-.51 0-.71a.495.495 0 00-.7 0l-1.48 1.48C13.85 2.23 12.95 2 12 2c-.96 0-1.86.23-2.66.63L7.85 1.15a.495.495 0 00-.7 0c-.2.2-.2.51 0 .71l1.31 1.31C6.97 4.26 6 5.92 6 7.8h12c0-1.88-.97-3.54-2.47-4.64zM9 6c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
    </svg>
  );
}

function AppleIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 0.93-2.85-.9.04-1.98.6-2.61 1.34-.56.64-1.04 1.7-0.92 2.72 1 .08 2.02-.48 2.6-1.21z" />
    </svg>
  );
}

function JavaScriptIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="#F7DF1E" />
      <path
        d="M6 16.5c.5.8 1.2 1.3 2.2 1.3 1.2 0 1.8-.6 1.8-1.5v-7.3h2v7.3c0 2-1.3 3.2-3.8 3.2-1.7 0-2.8-.7-3.4-1.9l1.2-1.1zm8.2 2.7c1.1.6 2.3.9 3.4.9 2 0 3.2-1 3.2-2.6 0-1.5-1-2.2-2.5-2.8l-.8-.3c-.9-.4-1.4-.7-1.4-1.4 0-.7.6-1.2 1.6-1.2.9 0 1.8.3 2.4.8l.9-1.4c-.8-.6-1.9-1-3.3-1-2.1 0-3.3 1.2-3.3 2.7 0 1.4.9 2.2 2.4 2.8l.8.3c1 .4 1.6.8 1.6 1.5 0 .8-.7 1.3-1.8 1.3-1.2 0-2.2-.4-3-1.1l-.9 1.4z"
        fill="#000000"
      />
    </svg>
  );
}

function TypeScriptIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <path
        d="M4.5 10.5h6v2h-2v7h-2v-7h-2v-2zm8.7 6.4c.8.5 1.7.8 2.6.8 1.4 0 2.2-.6 2.2-1.6 0-.9-.6-1.4-1.8-1.8l-.8-.3c-1.6-.6-2.5-1.3-2.5-2.7 0-1.8 1.4-2.8 3.5-2.8 1.3 0 2.4.3 3.1.8l-.8 1.7c-.6-.4-1.4-.7-2.3-.7-1 0-1.6.4-1.6 1.1 0 .7.5 1.1 1.5 1.4l.7.3c1.9.7 2.7 1.5 2.7 3 0 1.9-1.5 3-3.8 3-1.4 0-2.7-.4-3.5-1l.7-1.9z"
        fill="#ffffff"
      />
    </svg>
  );
}

function HTML5Icon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M3 2l1.8 18.2L12 22l7.2-1.8L21 2H3zm15.4 5.3l-.2 2.3H9.2l.2 2.4h8.3l-.6 6.8L12 20.2l-5.1-1.4-.3-3.6h2.2l.2 1.8 3 0.8 3-.8.3-3.4H6.8L6 5.3h12.4z"
        fill="#E34F26"
      />
    </svg>
  );
}

function CSS3Icon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M3 2l1.8 18.2L12 22l7.2-1.8L21 2H3zm14.7 5.3H8.3l-.2-2h9.8l.2-2.3H5.8l.6 6.6h9.5l-.3 3.6-3.6 1-3.6-1-.2-2.3H6l.3 4.2 5.7 1.6 5.7-1.6.7-7.8z"
        fill="#1572B6"
      />
    </svg>
  );
}

function TailwindIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#06B6D4">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
    </svg>
  );
}

function BootstrapIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="5" fill="#7952B3" />
      <path
        d="M8.5 6.5h4.2c1.7 0 2.8.9 2.8 2.2 0 .9-.5 1.6-1.3 1.9 1.1.3 1.8 1.2 1.8 2.3 0 1.6-1.3 2.6-3.1 2.6H8.5V6.5zm2.1 3.4h1.9c.7 0 1.2-.4 1.2-1s-.5-1-1.2-1h-1.9v2zm0 3.7h2.1c.8 0 1.4-.4 1.4-1.1s-.6-1.1-1.4-1.1h-2.1v2.2z"
        fill="#ffffff"
      />
    </svg>
  );
}

function ReactNavigationIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#7B61FF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="3 11 22 2 13 21 11 13 3 11" fill="#7B61FF" fillOpacity="0.25" />
    </svg>
  );
}

function NativeWindIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#38BDF8"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.7 7.7A7.5 7.5 0 0 0 5 10.5M4 14.5a7.5 7.5 0 0 0 12.7 2.8M15 3l4 4-4 4M9 21l-4-4 4-4" />
    </svg>
  );
}

function CliIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#61DAFB"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  );
}

function NodeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#5FA04E">
      <path d="M12 2l9 5.2v10.4l-9 5.2-9-5.2V7.2L12 2zm0 2.3L4.8 8.5v7l7.2 4.2 7.2-4.2v-7L12 4.3z" />
    </svg>
  );
}

function ExpressIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.5h-4v-1.5h4zm2.5-3.5h-6.5V11.5h6.5zm1.5-3.5H7V8h10z" />
    </svg>
  );
}

function FastApiIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#05998B" />
      <path d="M13 3L6 14h5l-1 7 7-11h-5l1-7z" fill="#ffffff" />
    </svg>
  );
}

function PostgresIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#4169E1"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="6" rx="8" ry="3" fill="#4169E1" fillOpacity="0.2" />
      <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
      <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
    </svg>
  );
}

function RestApiIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#38BDF8"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 7h16M4 12h16M4 17h10" />
      <circle cx="18" cy="17" r="2" fill="#38BDF8" />
    </svg>
  );
}

function SupabaseIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#3ECF8E">
      <path d="M13.4 2.1c-.6-.8-1.9-.4-2 .6l-1.3 10.3h7.6c1.1 0 1.8 1.3 1.1 2.2L9.6 22.8c-.8.9-2.2.3-2.1-.8l1.4-10H2.3c-1.1 0-1.8-1.3-1.1-2.2L13.4 2.1z" />
    </svg>
  );
}

function PythonIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M11.9 2c-3.1 0-4.9.4-4.9 1.8v2.7h5v.9H4.8C3.1 7.4 2 8.6 2 10.7c0 2 1.3 3.3 3 3.3h1.8v-2.5c0-1.8 1.5-3.3 3.3-3.3h5.1V6.8c0-1.9-1.6-4.8-3.3-4.8zm-1.8 1.4c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z"
        fill="#387EB8"
      />
      <path
        d="M12.1 22c3.1 0 4.9-.4 4.9-1.8v-2.7h-5v-.9h7.2c1.7 0 2.8-1.2 2.8-3.3 0-2-1.3-3.3-3-3.3h-1.8v2.5c0 1.8-1.5 3.3-3.3 3.3H8.8v1.4c0 1.9 1.6 4.8 3.3 4.8zm1.8-1.4c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z"
        fill="#FFE052"
      />
    </svg>
  );
}

function GitIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#F05032">
      <path d="M21.6 10.9L13.1 2.4c-.8-.8-2-.8-2.8 0l-2 2 3.6 3.6c.6-.2 1.3 0 1.8.5.5.5.6 1.2.4 1.8l3.4 3.4c.6-.2 1.3 0 1.8.5.8.8.8 2 0 2.8s-2 .8-2.8 0c-.6-.6-.7-1.4-.4-2.1l-3.2-3.2v4.8c.4.3.7.8.7 1.4 0 1.1-.9 2-2 2s-2-.9-2-2c0-.7.4-1.3 1-1.6V8.6c-.6-.3-1-.9-1-1.6 0-.8.5-1.5 1.2-1.8L8.8 3.2 2.4 9.6c-.8.8-.8 2 0 2.8l8.5 8.5c.8.8 2 .8 2.8 0l7.9-7.9c.8-.8.8-2.1 0-2.9z" />
    </svg>
  );
}

function GitHubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function PostmanIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#FF6C37">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5l-3.5-3.5 1.4-1.4 2.1 2.1 4.6-4.6 1.4 1.4L13 16.5z" />
    </svg>
  );
}

function VsCodeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#007ACC">
      <path d="M17.4 2.2l-9.8 8.9L3.5 8 2 8.9l3.8 3.1L2 15.1l1.5.9 4.1-3.1 9.8 8.9c.7.6 1.7.5 2.2-.2.3-.4.4-.8.4-1.3V3.7c0-.5-.1-.9-.4-1.3-.5-.7-1.5-.8-2.2-.2zm.6 15.4l-7.2-5.6 7.2-5.6v11.2z" />
    </svg>
  );
}

function VercelIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 1L24 22H0L12 1z" />
    </svg>
  );
}

function NetlifyIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00C7B7">
      <path d="M12 2L3 8.5v7L12 22l9-6.5v-7L12 2zm-1 3.2v4.3L6.3 12 11 14.5v4.3L5 14.5v-5l6-4.3zm2 0l6 4.3v5l-6 4.3v-4.3l4.7-2.5L13 9.5V5.2z" />
    </svg>
  );
}

interface SkillItem {
  name: string;
  icon: ReactNode;
}

interface SkillCategory {
  title: string;
  icon: ReactNode;
  items: SkillItem[];
}

const groups: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: <Layout className="h-4 w-4 text-primary" />,
    items: [
      { name: "React.js", icon: <ReactIcon /> },
      { name: "JavaScript (ES6+)", icon: <JavaScriptIcon /> },
      { name: "TypeScript", icon: <TypeScriptIcon /> },
      { name: "HTML5", icon: <HTML5Icon /> },
      { name: "CSS3", icon: <CSS3Icon /> },
      { name: "Tailwind CSS", icon: <TailwindIcon /> },
      { name: "Bootstrap", icon: <BootstrapIcon /> },
    ],
  },
  {
    title: "Mobile Application Development",
    icon: <Smartphone className="h-4 w-4 text-accent" />,
    items: [
      { name: "React Native", icon: <ReactNativeIcon /> },
      { name: "React Native CLI", icon: <CliIcon /> },
      { name: "Android Development", icon: <AndroidIcon /> },
      { name: "iOS Development", icon: <AppleIcon /> },
      { name: "React Navigation", icon: <ReactNavigationIcon /> },
      { name: "NativeWind", icon: <NativeWindIcon /> },
    ],
  },
  {
    title: "Backend & Database",
    icon: <Database className="h-4 w-4 text-emerald-400" />,
    items: [
      { name: "Node.js", icon: <NodeIcon /> },
      { name: "Express.js", icon: <ExpressIcon /> },
      { name: "FastAPI", icon: <FastApiIcon /> },
      { name: "PostgreSQL", icon: <PostgresIcon /> },
      { name: "REST API Integration", icon: <RestApiIcon /> },
      { name: "Supabase", icon: <SupabaseIcon /> },
      { name: "Python", icon: <PythonIcon /> },
    ],
  },
  {
    title: "Tools & Technologies",
    icon: <Wrench className="h-4 w-4 text-amber-400" />,
    items: [
      { name: "Git", icon: <GitIcon /> },
      { name: "GitHub", icon: <GitHubIcon /> },
      { name: "Postman", icon: <PostmanIcon /> },
      { name: "VS Code", icon: <VsCodeIcon /> },
      { name: "Vercel", icon: <VercelIcon /> },
      { name: "Netlify", icon: <NetlifyIcon /> },
    ],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="The tools I reach for."
      description="A pragmatic stack focused on shipping reliable, scalable web and mobile applications."
    >
      <div className="grid sm:grid-cols-2 gap-5">
        {groups.map((g) => (
          <div
            key={g.title}
            className="rounded-xl border border-border/70 bg-card/60 p-6 hover:border-primary/40 transition-colors flex flex-col"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="grid place-items-center h-7 w-7 rounded-md bg-card border border-border/70">
                  {g.icon}
                </span>
                <h3 className="text-sm font-semibold tracking-tight text-foreground">{g.title}</h3>
              </div>
              <span className="text-xs font-mono text-muted-foreground bg-background/60 border border-border/60 rounded-full px-2 py-0.5">
                {g.items.length}
              </span>
            </div>
            <ul className="mt-5 flex flex-wrap gap-2">
              {g.items.map((s) => (
                <li
                  key={s.name}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm px-3 py-1.5 rounded-lg bg-background/60 border border-border/60 text-foreground/90 hover:border-border hover:bg-background/90 transition-colors"
                >
                  <span className="shrink-0 flex items-center justify-center w-4 h-4">
                    {s.icon}
                  </span>
                  <span>{s.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
