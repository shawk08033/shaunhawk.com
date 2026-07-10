import type { APIRoute } from "astro";
import { PROJECTS } from "@/data/projects";

export const GET: APIRoute = async () => {
  const projectList = PROJECTS.map((project) => {
    const highlights = project.highlights?.map((item) => `- ${item}`).join("\n") ?? "";
    return `### ${project.title} (${project.status})\n\n${project.description}${highlights ? `\n\n${highlights}` : ""}\n\n[${project.external ? "Visit" : "Read more"}](${project.href})`;
  }).join("\n\n");

  const markdownContent = `# Projects

What I'm building at work and on the side.

${projectList}

---

[Back to home](/index.md)`;

  return new Response(markdownContent, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
