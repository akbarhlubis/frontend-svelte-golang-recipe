<script>
  import Router, {link,location} from "svelte-spa-router";
  import { routes } from "./routes";

</script>

<main>
  <nav>
    <a href="/" use:link>Landing Page</a>
    <a href="/login" use:link>Login</a>
    <a href="/register" use:link>Register</a>
    <p>{$location}</p>
  </nav>
  <Router {routes}/>
</main>

<style>
  *{
    user-select: none;
  }
</style>
