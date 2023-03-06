<script>
  import { request } from "$lib/fetch";
  import { page } from '$app/stores'

  const signOutUser = async () => {
      await request("/api/auth", "DELETE");
      window.location.replace("/login")
  };
</script>
<div>
  {#if $page.data.user}
   <p>Username : {$page.data.user.displayName}</p>
   <p>Email : {$page.data.user.email}</p>
   {:else}
   Dont have account dont worry create here
   <a href="/login">Login</a>
   <a href="/register">Register</a>
  {/if}
</div>