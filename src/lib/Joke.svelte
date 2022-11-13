<script>
  import {getJoke} from "../services/jokes_service";

  const joke = getJoke()
</script>

{#if $joke.isSuccess}
  <p class="text-center">
    {@html $joke.data?.joke}
  </p>
{/if}

{#if $joke.isError}
  <p class="text-center">
    Error while loading the joke.
  </p>
{/if}

{#if $joke.isLoading || $joke.isRefetching}
  <p class="text-center">
    Loading...
  </p>
{/if}

<button on:click={() => $joke.refetch()} class="border px-3 py-1 rounded bg-green-500 text-white">
  Refresh
</button>
