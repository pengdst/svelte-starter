<script>
  import { Router, Route, link } from 'svelte-routing';
  import Home from './pages/Home.svelte';
  import Counter from './pages/Counter.svelte';

  import { QueryClient, QueryClientProvider } from '@sveltestack/svelte-query';
  const queryClient = new QueryClient();
</script>

<nav class="flex justify-center space-x-1">
  <a href="/" use:link>
    <button class="border px-3 py-1 rounded bg-blue-500 text-white">Home</button>
  </a>
  <a href="/counter" use:link>
    <button class="border px-3 py-1 rounded bg-blue-500 text-white">Counter</button>
  </a>
</nav>

<QueryClientProvider client={queryClient}>
  <Router>
    <Route path='/'><Home /></Route>
    <Route path='/counter'><Counter /></Route>
  </Router>
</QueryClientProvider>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
