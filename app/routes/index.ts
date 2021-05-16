import { Routes, response, routing } from 'kretes';

const { Page } = response;
const { Route: { GET } } = routing;

export const routes: Routes = [
  GET('/widget', async ({ context }) => {
    const { performServerSideRendering } = context;

    const bindings = {
      city: "New York City",
      ip: "11.11.0.11"
    }

    const app = await performServerSideRendering('/widget', bindings) 

    return Page('widget', { app })
  }),
];