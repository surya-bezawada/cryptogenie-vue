<template>
  <div>
    <button class="login" @click="login" >Sign in</button>
   
  </div>
</template>
<script>
  import {  useAuth0 } from '@auth0/auth0-vue';
 

 

  export default {
    name:'log-in',
    //mixins: [mixins],
    setup() {
      const { loginWithRedirect, } = useAuth0();

      return {
        login: () => {
          loginWithRedirect();
        },
       
          
         
       
      };
    },
    
  };
</script>
<style>
  .login {
  color: #000000;
  box-sizing: border-box;
  padding: 8px 24px;
  gap: 10px;
  /* width: 99px; */
  height: 40px;
  border: 2px solid #e3e7ed;
  background: none;
}

.login:hover {
  border: 2px dotted #6237de;
}
</style>

