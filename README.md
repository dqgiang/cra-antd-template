# CRA Template with Typescript and Ant Design

## What's included

1. CRA with Typescript template
2. ESLint, Prettier, Husky, lint-staged preconfigued with Semi-StandardJS style.
Code is automatically formatted on save, without changing editor settings.
3. Include `.editorconfig` to maintain consistent style across editors.

## Local development

- Create `.env` file

```sh
cp .env.example .env
```

- Install dependencies and start local dev

```sh
npm i
npm start
```

- Production build. Output is stored in `build` directory.

```sh
npm run build
```