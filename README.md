This is a [Remix](https://remix.run/) project bootstrapped with [`npx create-remix`](https://remix.run/docs/en/v1).

It also includes:

- [x] [`flowbite`](https://flowbite.com)
- [x] [`flowbite-react`](https://flowbite-react.com)
- [x] [`react-icons`](https://react-icons.github.io/react-icons)
- [x] [`tailwindcss`](https://tailwindcss.com)
- [x] Quality of life tools, like
  - [x] [`eslint`](https://eslint.org) with some plugins
  - [x] [`prettier`](https://prettier.io)

## Getting started

`Remix` require [`Node.js`](https://nodejs.org).

If you don't already have `npm` and `yarn` available, make sure you set them up.

```bash
npm i -g npm yarn
```

Install the dependencies:

```bash
yarn install
```

Now you can run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/routes/index.tsx`. The page auto-updates as you edit the file.

## Learn more

### About Flowbite

[Flowbite](https://flowbite.com) is an open source collection of UI components built with the utility classes from Tailwind CSS that you can use as a starting point when coding user interfaces and websites.

In this repository, we setup [`flowbite-react`](https://flowbite-react.com) for you with examples of how to use the React components in `app/routes/index.tsx`.

### About Remix

- [Remix Docs](https://remix.run/docs)

#### Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

#### Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

#### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`

#### Using a Template

When you ran `npx create-remix@latest` there were a few choices for hosting. You can run that again to create a new project, then copy over your `app/` folder to the new project that's pre-configured for your target server.

```sh
cd ..
# create a new project, and pick a pre-configured host
npx create-remix@latest
cd my-new-remix-app
# remove the new project's app (not the old one!)
rm -rf app
# copy your app over
cp -R ../my-old-remix-app/app app
```
