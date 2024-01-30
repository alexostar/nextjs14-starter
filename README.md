## About this starter

Created from scratch:

```
npx create-nextjs-app@latest // default choices
npm i prisma
npm i @prisma/client
npx prisma init
npx shadcn-ui@latest init // default choices
% npm i prettier prettier-plugin-tailwindcss

```

- config prettier in a .prettierrc file
- .env added to .gitignore
- Database in schema.prisma is in mysql on my MacBook (same model as in Mosh
  Issue Tracker - prepared for NextAuth)
- DB name defined in .env (nextjs14starter)

- Select theme at https://ui.shadcn.com/themes, copy code and replace the
  exising code in the globals.css file

- Create a prisma "client.ts" file and put it in the primsa directory (otherwise
  the client does not behave while projects are under development)

```
npx prisma generate
```

OBS: The correct client is also created by the next command

```
npx prisma db push // Create the database
npx prisma studio // Manage the database
```

The following is not included yet:

```
npx shadcn-ui@latest add form
npm install next-auth
```

For the next-auth, add the necessary environment variables.
