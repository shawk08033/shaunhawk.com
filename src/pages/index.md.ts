import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const markdownContent = `# Shaun Hawk

Lead Developer of Huckleberry Services at FSM Controls. Still pumping out PHP while slowly moving to JS/TS, Rust and Go.

<iframe src="https://github.com/sponsors/shawk08033/button" title="Sponsor shawk08033" height="32" width="114" style="border: 0; border-radius: 6px;"></iframe>

## Navigation

- [About](/about.md)
- [Resume](/resume)
- [Recent Posts](/posts.md)
- [Archives](/archives.md)
- [RSS Feed](/rss.xml)

## Links

- X: [@ShaunHawkCode](https://x.com/ShaunHawkCode)
- GitHub: [@shawk08033](https://github.com/shawk08033)
- Bluesky: [@shaunhawk.com](https://bsky.app/profile/shaunhawk.com)
- LinkedIn: [shaun-r-hawk-3b2ab174](https://linkedin.com/in/shaun-r-hawk-3b2ab174)

---

*This is the markdown-only version of shaunhawk.com. Visit [shaunhawk.com](https://shaunhawk.com) for the full experience.*`;

  return new Response(markdownContent, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
