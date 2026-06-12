# joonhe.dev

Personal website — Blog, Portfolio & Indie Dev Log.

Built with [Next.js](https://nextjs.org) (App Router), [Tailwind CSS](https://tailwindcss.com), [Prisma](https://prisma.io) + MySQL.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Database | MySQL (via Prisma ORM) |
| Content | MDX (next-mdx-remote) |
| Deployment | Vercel |

## Getting Started

```bash
# 1. Clone
git clone https://github.com/joonhe-dev/joonhe.dev.git
cd joonhe.dev

# 2. Install dependencies
npm install

# 3. Set up environment
cp .env.example .env
# Edit .env with your MySQL connection string

# 4. Initialize database
npx prisma migrate dev --name init

# 5. Start dev server
npm run dev
```

## Project Structure

```
src/
├── app/            # Next.js App Router pages
│   ├── blog/       # Blog section
│   ├── projects/   # Projects section
│   └── about/      # About page
├── components/     # Reusable components
│   ├── layout/     # Header, Footer
│   ├── blog/       # Blog-specific components
│   └── ui/         # Generic UI components
├── content/        # MDX content files
│   ├── blog/       # Blog posts
│   └── projects/   # Project pages
└── lib/            # Utility functions & config
```

## Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run start     # Start production server
npm run lint      # Run ESLint
npx prisma studio # Open Prisma Studio (DB GUI)
```

## License

MIT
