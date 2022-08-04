# Svelte Template (Experimental)

A small experimental feature

- serve public/ to python `pywebview`

## Requirements

```bash
pip install pywebview
```

## Usage

```bash
# go to public/
cd public/

# run the webviewwer
python webviewer.py
```

---

# Svelte Template

This is a svelte template with preinstalled features such as:

- [x] **Typescript** support
- [x] **Python** backend with `FastAPI`
- [x] **Tailwind** configured on the go
- [x] **PWA** configured

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
pipenv install

# Installing fronend dependencies
pnpm install
```

- note that you can also use `npm` or `yarn` to install frontend dependencies

# Running the app

```bash
# Starting the backend server
pipenv run python -m server.run dev

# Starting the frontend developement server
pnpm run dev
```

- the python server will run in `http://localhost:7000`. check the api by going to `http://localhost:7000/docs`

# Building app for production

```bash
pnpm build
```

# Deploying to a server

```bash
pipenv run python -m server.run
```

- python server hosts `public/` files directly

## Todos:

- [ ] Add simple config for ports and hostnames
- [ ] Manage python server using poetry
