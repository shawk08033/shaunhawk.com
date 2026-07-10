# Shaun Hawk — Personal Website

Source for [shaunhawk.com](https://shaunhawk.com), a personal blog and portfolio built with [Astro](https://astro.build) and deployed on [Vercel](https://vercel.com).

## About

I'm Shaun Hawk, Senior Manager of Data Management & Technology at FSM Controls. This site hosts my blog, resume, and notes on AI tooling, homelab projects, and software development.

## Project Structure

```text
├── public/               # Static assets (images, fonts, favicon)
├── src/
│   ├── assets/          # Icons and images used in components
│   ├── components/      # Reusable UI components
│   ├── content/blog/    # Blog posts in Markdown (organized by year)
│   ├── layouts/         # Page layouts and templates
│   ├── pages/           # Routes and pages
│   ├── styles/          # Global styles and CSS
│   └── utils/           # Utility functions
├── astro.config.mjs     # Astro configuration
├── vercel.json          # Vercel deployment and CSP configuration
└── package.json         # Project dependencies and scripts
```

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Installs dependencies                       |
| `npm run dev`     | Starts local dev server at `localhost:4321` |
| `npm run build`   | Build the production site to `./dist/`      |
| `npm run preview` | Preview the build locally, before deploying |

## Deployment

Connect this repository to Vercel and it will build and deploy automatically on push.

## License

- **Documentation & Blog Posts**: [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/)
- **Code & Code Snippets**: [MIT License](LICENSE)

## Credits

Built on [AstroPaper](https://github.com/satnaing/astro-paper) by [Sat Naing](https://github.com/satnaing), with additional inspiration from [steipete.me](https://github.com/steipete/steipete.me).
