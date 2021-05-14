import { Routes, response, routing } from 'kretes';

const { Page } = response;
const { Route: { GET } } = routing;

export const routes: Routes = [
  GET('/widget', async ({ context }) => {
    const { performServerSideRendering } = context;

    const app = await performServerSideRendering('/widget') 

    return Page('widget', { app })
  }),
];