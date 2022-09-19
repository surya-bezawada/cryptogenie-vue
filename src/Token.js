import router from '../../../router/index'
const auth0HandleAuthentication = (context) => {
  context.state.auth0.parseHash((err, authResult) => {
    if (authResult && authResult.accessToken && authResult.idToken) {
      let expiresAt = JSON.stringify(
        (process.env.VUE_APP_EXPIRY * 1000) + new Date().getTime()
      );
      
      localStorage.setItem("access_token", authResult.accessToken);
      localStorage.setItem("id_token", authResult.idToken);
      localStorage.setItem("expires_at", expiresAt);
      router.push({ name : "dashboard"})
    }
    else if (err) {
      alert("There's is an issue with signing up", err)
      router.replace({ name: "home" })
    }
  })
};
export default auth0HandleAuthentication;