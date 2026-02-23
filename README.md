# Contact Manager

<p align="center">
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js" />
  <img alt="React" src="https://img.shields.io/badge/React-19-149ECA?style=for-the-badge&logo=react&logoColor=white" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img alt="JSON Server" src="https://img.shields.io/badge/JSON--Server-API-FC427B?style=for-the-badge" />
</p>

<p align="center">
  A modern contact manager built with Next.js App Router, server actions, and cookie-based auth.
</p>

## Live Demo

`🔗` **Live URL:** (https://contact-manager-coral-one.vercel.app/)

`📝` Replace the URL above with your deployed app (Vercel/Render/etc.).

## What This Project Does

- `🔐` Login with email/password (mocked via JSON Server).
- `🍪` Creates and clears an HTTP-only session cookie.
- `📇` Shows only the logged-in user's contacts.
- `➕` Create a new contact.
- `✏️` Edit an existing contact.
- `🗑️` Delete a contact with confirmation.
- `⚡` Revalidates contact list after create/update/delete.

## Tech Stack

- `Next.js 16` (App Router + Server Actions)
- `React 19`
- `TypeScript`
- `Tailwind CSS v4`
- `Axios`
- `JSON Server` (mock backend)

## Project Structure

```text
app/
  actions/          # Server actions (auth + contacts)
  api/              # Axios API wrappers
  contact/          # Contact routes (list, new, edit)
  _components/      # UI components
  _lib/             # Session helpers
  _types/           # Shared TypeScript types
  _data/db.json     # Mock database
```

## Routes

- `/` Home page
- `/login` Login page
- `/contact` Contact list
- `/contact/new` Create contact
- `/contact/edit/[id]` Edit contact

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Start mock API server:

```bash
npm run server
```

3. Start Next.js app:

```bash
npm run dev
```

4. Open:

```text
http://localhost:3000
```

## Demo Credentials

- Email: `user1@example.com`
- Password: `123456`

## Available Scripts

- `npm run dev` Start development server
- `npm run build` Build for production
- `npm run start` Run production build
- `npm run lint` Run ESLint
- `npm run server` Run JSON Server on port `3001`

## API Base URL

- Default: `http://localhost:3001`
- Optional env:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

## Quality Status

- `✅` TypeScript build passes
- `✅` ESLint passes
- `✅` Core auth/contact flows wired and working
