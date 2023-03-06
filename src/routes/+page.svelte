<script>
  import { request } from "$lib/fetch";
  import { page } from '$app/stores'
  import { goto } from "$app/navigation";

  let username, email, password;

  const signup = async () => {
      const userRecord = await createUserWithEmailAndPassword(
          auth,
          email,
          password
      );
      await updateProfile(userRecord.user, { displayName: username });
      const idToken = await getIdToken(userRecord.user, true);
      await request("/api/auth", "POST", { idToken });
      goto("/");
  };

  const signOutUser = async () => {
      await request("/api/auth", "DELETE");
      goto("/login");
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
   <button on:click={signOutUser}>Logout</button>
  {/if}
</div>