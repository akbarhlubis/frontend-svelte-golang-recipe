import NotFound from "../lib/NotFound.svelte";
import Login from "../lib/pages/auth/Login.svelte";
import Register from "../lib/pages/auth/Register.svelte";
import Landing from "../lib/pages/Landing.svelte";


export const routes = {
    // Halaman Utama
    '/': Landing,
  
    // Halaman Auth
    '/login': Login,
    '/register': Register,
  
    // Jika selain url tadi
    '*': NotFound,
}