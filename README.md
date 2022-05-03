# Template for svelte with typescript , tailwindcss run in fastapi
a pre prepared template using svelte served with fastapi and added typescript and tailwindcss

# Preparation
```bash
pipenv install
pnpm install
```


# development
```bash
pipenv run python -m server.run dev
pnpm run dev
```

also check and arrange the ports


# production
`pnpm build`
and run:
`pipenv run python -m server.run`