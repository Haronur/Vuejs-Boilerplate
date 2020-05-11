<template>
  <div id="app">
    <nav>
      <router-link to='/'>Home</router-link>
      <router-link :to="{name: 'about'}">About</router-link>
      <router-link to='/register'>Register</router-link>
      <router-link to='/login'>Login</router-link>
      <!-- <router-link to="/student/:id">Student</router-link> -->
      <router-link :to="{name: 'student', params: {id: 2}}">Student</router-link>
      <router-link :to="{name: 'redirect'}">Go To Home</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
  export default {
  }
</script>
<style>
#app {
  margin: 30px 39px;
}
nav a {
  margin: 9px;
  padding: 8px;
  background-color: #222;
  color: #fff;
  text-decoration: navajowhite;
  text-transform: uppercase;
}

.router-link-exact-active.router-link-active {
  margin: 9px;
  padding: 8px;
  background-color: #048e00;
}
</style>
