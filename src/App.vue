<template>
  <div id="app">
    <GithubJobs>

    </GithubJobs>
  </div>
</template>

<script>
import GithubJobs from './components/GithubJobs.vue'

export default {
  name: 'app',
  components: {
    GithubJobs
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}

@media (min-width: 1200px) {
  .container {
    width: 1170px;
    margin: 0 auto;
  }
}
</style>
