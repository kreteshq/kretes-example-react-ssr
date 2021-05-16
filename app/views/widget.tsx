import React from 'react';
import ReactDOMServer from 'react-dom/server'

import { QueryClient, QueryClientProvider } from 'react-query'
import { dehydrate, Hydrate } from 'react-query/hydration'

// must specify the actual component after the `from`
// otherwise a circular dependency
import { App } from '@/components/App'

export async function render(bindings: object) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('example', () => bindings);
  const dehydratedState = dehydrate(queryClient);

  return ReactDOMServer.renderToString(
    <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydratedState}>
        <App />
      </Hydrate>
    </QueryClientProvider>
  )
}
