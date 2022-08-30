<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-dark bg-white">
      <a class="navbar-brand" href="#">
        <img src="../assets/Logo.svg" alt="" />
      </a>

      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/features">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">FAQ</a>
        </li>
      </ul>
      <div class="register">
        <ul class="nav justify-content-end">
          <li class="nav-item fw-700px fs-16px">
            <a href="/signup" class="nav-link fs-16 fw-700 active-link exact-active-link">SignUp</a>
          </li>
          <li class="nav-item">
            <a class="nav-link fs-16 fw-700 signin" id="button" href="#"
              >SignIn</a
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
  <hr />
</template>

<script>
export default {
  name: "nav-page",
};
</script>
<style scoped>
ul {
  margin: 0 auto;
}
.signin {
  color: #000000;
  box-sizing: border-box;
  padding: 8px 24px;
  gap: 10px;
  width: 99px;
  height: 40px;
  border: 1px solid #e3e7ed;
}
.signin:hover {
  border: 2px dotted #6237de;
}
a {
  color: #000000;
}
a:hover {
    color: #000000;

}

</style>
