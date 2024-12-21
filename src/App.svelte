<script>
import Layout from "./lib/components/Layout.svelte";
import Login from "./lib/pages/auth/Login.svelte";
import Register from "./lib/pages/auth/Register.svelte";
import Landing from "./lib/pages/Landing.svelte";

let component = Landing;
</script>

<main>
  <nav>
    <button on:click={() => (component = Landing)}>Landing Page</button>
    <button on:click={() => (component = Login)}>Login</button>
    <button on:click={() => (component = Register)}>Register</button>
  </nav>
<Layout>
  <svelte:component this={component}/>
</Layout>
</main>

<style>
  *{
    user-select: none;
  }
</style>
