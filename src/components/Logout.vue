<template>
  <div>
    <a class="dropdown-item" @click="logout">Log out</a>
  </div>
</template>
<script>
  import { useAuth0 } from '@auth0/auth0-vue';

  export default {
    name:'log-out',
    setup() {
      const { logout } = useAuth0();

      return {
        logout: () => {
          logout({ returnTo: window.location.origin });
        }
      };
    }
  };
</script>
<style>

</style>
