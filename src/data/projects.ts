export interface Project {
  title: string;
  description: string;
  highlights?: string[];
  href: string;
  tags: string[];
  status: "Active" | "Published" | "In Progress";
  external?: boolean;
}

export const PROJECTS: Project[] = [
  {
    title: "Huckleberry Services",
    description:
      "Huckleberry is FSM Controls' platform for utility data, building analytics, and field operations — used by energy and facilities teams to track accounts, equipment, and site performance across commercial portfolios.",
    highlights: [
      "Ingests utility bills and interval data via automated imports (SFTP, CSV, Excel) into centralized dashboards.",
      "Connects to building management systems through Niagara and SkySpark to surface live HVAC, boiler, solar, and meter readings.",
      "Supports field data collection workflows and reporting for audits, retrofits, and ongoing facilities management.",
      "I'm leading the full rollout, modernization, and go-to-market — moving the product toward a React and TypeScript front end.",
    ],
    href: "https://huckleberryservices.com/",
    tags: ["React", "TypeScript", "BMS", "Niagara"],
    status: "Active",
    external: true,
  },
  {
    title: "Buckhead of Tallahassee HOA",
    description:
      "I manage and maintain the Buckhead of Tallahassee HOA website and community email newsletter for residents in the neighborhood.",
    highlights: [
      "Keeps the public site updated with community news, documents, and neighborhood information.",
      "Produces and sends the community email newsletter to keep residents informed.",
    ],
    href: "https://buckheadoftallahassee.com/",
    tags: ["WordPress", "Community", "HOA"],
    status: "Active",
    external: true,
  },
  {
    title: "Codex Research Skill",
    description:
      "A Claude Code skill that offloads live web research to Codex while Claude handles decomposition and synthesis.",
    href: "/posts/2026/codex-research-skill",
    tags: ["AI", "Claude", "Open Source"],
    status: "Published",
  },
];

export const FOCUS_AREAS = ["AI Tooling", "Homelab", "Developer Workflow", "Energy Tech"];
