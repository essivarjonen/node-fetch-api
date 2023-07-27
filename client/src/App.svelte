<script>
  import { onMount } from "svelte";
  import API_URL from "../config.js";

  export let name;
  let message = "";

  async function getData() {
    try {
      const response = await fetch(`${API_URL}/api/data`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      message = data.message;
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  }
  onMount(() => {
    getData();
  });
</script>

<main>
  <h1>Hello {name}!</h1>
  <p>
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>
  {#if message}
    <p>{message}</p>
  {:else}
    <p>Loading...</p>
  {/if}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
