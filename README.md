# Switch Website

The official landing page for [**Switch Electric**](https://github.com/WhyNotSwitch), a company building web3 metering infrastructure and a platform for tokenizing rooftop solar assets.

🌐 **Live site:** [whynotswitch.vercel.app](https://whynotswitch.vercel.app)
🏢 **Organization:** [@WhyNotSwitch](https://github.com/WhyNotSwitch)

---

## About Switch Electric

Switch Electric is building the technological infrastructure for a decentralized energy internet and a peer-to-peer marketplace where producers can sell excess energy directly at wholesale prices. The long-term vision is a cost-effective, decentralized energy network serving Africa's 1 billion people.

Its flagship hardware, the **Cumulus**, uses real-time sensors and web3 technologies to enable metering in decentralized energy systems such as microgrids. It samples voltage, current, frequency and power factor to calculate accurate readings of energy produced or consumed, and supports features like remote asset administration, anomaly and energy-loss detection, and a remotely controllable relay.

This repository contains the source for the public website that introduces the company, its products and its mission. Product documentation lives in the organization's [Maxwell-Docs](https://github.com/WhyNotSwitch/Maxwell-Docs) repository.

## Tech Stack

| Layer                | Tool                                                                                 |
| -------------------- | ------------------------------------------------------------------------------------ |
| Framework            | [TanStack Start](https://tanstack.com/start)                                         |
| Routing              | [TanStack Router](https://tanstack.com/router) (file-based)                          |
| Language             | [TypeScript](https://www.typescriptlang.org/)                                        |
| Bundler / dev server | [Vite](https://vite.dev/)                                                            |
| Server adapter       | [Nitro](https://nitro.build/)                                                        |
| Styling              | [Tailwind CSS](https://tailwindcss.com/)                                             |
| UI components        | [shadcn/ui](https://ui.shadcn.com/)                                                  |
| Linting / formatting | [ESLint](https://eslint.org/) (TanStack config) and [Prettier](https://prettier.io/) |
| Package manager      | [pnpm](https://pnpm.io/)                                                             |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (current LTS recommended)
- [pnpm](https://pnpm.io/installation)

### Installation

```bash
git clone https://github.com/michaelchristwin/switch-website.git
cd switch-website
pnpm install
```

### Development

```bash
pnpm dev
```

The dev server prints the local URL when it starts, so check your terminal for the port.

### Production Build

```bash
pnpm build
```

The build output is a self-contained Node server in `dist/`. To run it locally:

```bash
node dist/server/index.mjs
```

### Linting & Formatting

```bash
pnpm lint      # run ESLint
pnpm format    # run Prettier
pnpm check     # run formatting and lint fixes together
```

## Project Structure

```
.
├── public/                # Static assets served as-is
├── src/
│   ├── routes/            # File-based routes (TanStack Router)
│   └── styles.css         # Global styles and Tailwind import
├── components.json        # shadcn/ui configuration
├── eslint.config.js       # ESLint configuration
├── prettier.config.js     # Prettier configuration
├── tsr.config.json        # TanStack Router configuration
├── vite.config.ts         # Vite configuration
└── package.json
```

## Working With the Codebase

**Adding a route.** Create a new file in `src/routes/`. TanStack Router generates the route boilerplate automatically. Use the `Link` component from `@tanstack/react-router` for client-side navigation:

```tsx
import { Link } from '@tanstack/react-router'

;<Link to="/about">About</Link>
```

**Shared layout.** The root layout lives in `src/routes/__root.tsx`. Anything placed there appears on every page.

**Adding UI components.** Use the shadcn CLI:

```bash
pnpm dlx shadcn@latest add button
```

## Deployment

The production site is hosted on [Vercel](https://whynotswitch.vercel.app). Because the project uses Nitro as a generic server adapter, it can also run on any Node-compatible host (Render, Fly.io, a VPS, and so on) by deploying the `dist/` output and running `node dist/server/index.mjs`.

For host-specific presets (Vercel, Netlify, Cloudflare, AWS Lambda and others), see the [Nitro deployment docs](https://v3.nitro.build/deploy).

## Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-change`
3. Run `pnpm check` before committing
4. Commit your changes: `git commit -m "feat: describe your change"`
5. Push to your branch and open a pull request

For bugs or suggestions, please [open an issue](https://github.com/michaelchristwin/switch-website/issues).

## Related

- [Switch Electric on GitHub](https://github.com/WhyNotSwitch)
- [Brand-kit](https://github.com/WhyNotSwitch/Brand-kit): brand assets

## License

No license has been specified yet. Add a `LICENSE` file to clarify how others may use this code.
