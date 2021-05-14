import React from 'react';
import ReactDOMServer from 'react-dom/server'

import { QueryClient, QueryClientProvider } from 'react-query'
import { dehydrate, Hydrate } from 'react-query/hydration'

// must specify the actual component after the `from`
// otherwise a circular dependency
import { App } from '@/components/App'

export async function render() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('example', () => ({"city":"New York City","ip":"11.11.0.11"}));
  const dehydratedState = dehydrate(queryClient);

  return ReactDOMServer.renderToString(
    <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydratedState}>
        <App />
      </Hydrate>
    </QueryClientProvider>
  )
}
