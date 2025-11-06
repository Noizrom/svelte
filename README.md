# SvelteKit Template

This is a SvelteKit template with preinstalled features such as:

- [x] **Svelte 5** with runes and modern syntax
- [x] **SvelteKit** with static adapter for pre-rendering
- [x] **Typescript** support
- [x] **Python** backend with `FastAPI`
- [x] **Tailwind CSS v4** (configless setup)
- [x] **PWA** configured
- [x] **Deno** as the package manager and task runner

# Installation

To install this template, run:

```bash
degit noizrom/svelte <project-name>

# then cd into the project directory
cd <project-name>
```

# Initial Setup

To get started, run:

```bash
# Installing backend dependencies
uv sync

# Installing frontend dependencies (Deno will auto-install on first run)
deno task dev
```

# Running the app

```bash
# Starting the backend server
uv run python -m server.run dev

# Starting the frontend development server
deno task dev
```

- the python server will run on `http://localhost:7000`. check the api by going to `http://localhost:7000/docs`
- the frontend dev server will run on `http://localhost:5173`

# Building app for production

```bash
deno task build
```

This will generate a static site in the `build` directory.

# Deploying to a server

```bash
uv run python -m server.run
```

- python server hosts static files directly from the `build/` directory

## Framework Details

- **SvelteKit**: Using the static adapter for pre-rendering all pages
- **Svelte 5**: Modern runes-based reactivity with `$props()`, `$state()`, etc.
- **Tailwind CSS v4**: Configless setup using `@import "tailwindcss"` in CSS
- **Deno**: Package management via `deno.json` imports map

## Todos:

- [ ] Add simple config for ports and hostnames
- [ ] Configure PWA for SvelteKit static builds
