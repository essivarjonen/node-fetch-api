<script>
  import { onMount } from "svelte";
  import API_URL from "../config.js";

  export let name;
  let url = "";
  let dog = "";
  let image = "";

  async function fetchDog() {
    try {
      const response = await fetch(`${API_URL}/dog`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("Dogdata", data);
      image = data[0].url;
      dogId = data[0].id;
      console.log("dogId", data[0].id);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  }

  onMount(() => {
    fetchDog();
  });
</script>

<main>
  <h1>Hello {name}!</h1>
  <h1>{dog}</h1>
  <img src={image} />

  {#if url}
    <p>{url}</p>
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
