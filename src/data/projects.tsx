import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiElectron,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVercel,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({
  live,
  repo,
  liveLabel = "Visit Website",
}: {
  live: string;
  repo?: string;
  liveLabel?: string;
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          {liveLabel}
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  electron: {
    title: "Electron",
    bg: "black",
    fg: "white",
    icon: <SiElectron />,
  },
  vercel: {
    title: "Vercel",
    bg: "black",
    fg: "white",
    icon: <SiVercel />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  /** Optional logo shown on the card when there is no screenshot (`src` is empty). */
  icon?: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "screenshot-enhancer",
    category: "Open Source · Desktop App",
    title: "Screenshot Enhancer",
    src: "",
    icon: "/assets/projects-screenshots/screenshot-enhancer/icon.png",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.electron],
      backend: [PROJECT_SKILLS.node],
    },
    live: "https://github.com/Primeteumm/Screenshot-Enhancer/releases/latest",
    github: "https://github.com/Primeteumm/Screenshot-Enhancer",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            The macOS screenshot preview, for Windows.
          </TypographyP>
          <TypographyP className="font-mono">
            Take a screenshot the way you always do and a floating thumbnail
            pops up next to your cursor. Drag it straight into WhatsApp, Slack,
            Discord, a browser upload field or any folder. No hunting for
            files, no opening, no renaming.
          </TypographyP>
          <ProjectsLinks
            live={this.live}
            repo={this.github}
            liveLabel="Download for Windows"
          />
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <ul className="font-mono list-disc ml-6 space-y-2 text-sm md:text-base">
            <li>
              Catches every screenshot: PrtSc, Alt+PrtSc, Win+Shift+S, Snipping
              Tool and Win+PrtSc.
            </li>
            <li>
              Built-in region and full-screen capture with rebindable
              shortcuts.
            </li>
            <li>
              Drag &amp; drop anywhere, including several thumbnails at once.
            </li>
            <li>
              Copy text from images with OCR, powered by the built-in Windows
              engine. Nothing leaves your machine.
            </li>
            <li>Multi-monitor aware, deeply customizable and multilingual.</li>
            <li>Fully offline: no account, no telemetry.</li>
          </ul>
          <TypographyP className="font-mono mt-8">
            Built with Electron and released under the MIT license. Grab the
            installer from the latest GitHub release.
          </TypographyP>
        </div>
      );
    },
  },
  {
    id: "qrkodcum",
    category: "Web App · SaaS",
    title: "QR Kodcum",
    src: "/assets/projects-screenshots/qrkodcum/1.jpg",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.next, PROJECT_SKILLS.react, PROJECT_SKILLS.ts],
      backend: [PROJECT_SKILLS.supabase, PROJECT_SKILLS.vercel],
    },
    live: "https://qrkodcum.tr",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Create QR codes and track every scan in real time.
          </TypographyP>
          <TypographyP className="font-mono">
            QR Kodcum is a dynamic QR code platform. Generate a code once, then
            change where it points any time without reprinting it, and watch
            scans come in live with device and country breakdowns, all from a
            single dashboard.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <ul className="font-mono list-disc ml-6 space-y-2 text-sm md:text-base">
            <li>
              Dynamic QR codes with editable destinations and no scan limits.
            </li>
            <li>
              Real-time analytics: scans over time, device types and countries.
            </li>
            <li>Instant redirects served from Vercel&apos;s edge network.</li>
            <li>
              Digital QR menus for restaurants: categories, photos, prices,
              7 languages, waiter calls and bill requests.
            </li>
            <li>Download codes as PNG, JPG, SVG or WEBP.</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "project-3",
    category: "Coming Soon",
    title: "Coming Soon",
    src: "",
    screenshots: [],
    skills: { frontend: [], backend: [] },
    live: "",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-center">
            🚧 This project is currently under construction. Stay tuned! 🚀
          </TypographyP>
        </div>
      );
    },
  },
];
export default projects;
