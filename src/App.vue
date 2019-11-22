<template>
  <div id="app">

    <nav>
      <div class="nav-wrapper blue darken-1">
        <a href="#" class="brand-logo center">Github Jobs with Materialize and Vue</a>
      </div>
    </nav>

    <div class="container">

      <form>

          <label>Job Description</label>
          <input type="text" placeholder="Job Description">
          <label>Location</label>
          <input type="text" placeholder="Location">
          <label>Full Time</label>
          <p>
            <label>
              <input class="with-gap" name="Full time" type="radio" checked />
              <span>Yes</span>
            </label>
            <label>
              <input class="with-gap" name="Full time" type="radio" />
              <span>No</span>
            </label>
          </p>

          <button class="waves-effect waves-light btn-small">Pesquisar<i class="material-icons left">search</i></button>

      </form>

      <div class="row">
        <div class="col s4" v-for="job in jobs" :key="job.id">
          <!--h5 style="text-align: center">{{ job.title }}</h5-->
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <img align="right" height="50" width="100" v-bind:src="job.company_logo" />
              <span class="card-title">{{ job.title }}</span>
              {{ job.description }}
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
        <div class="col">
          <ul class="pagination">
            <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
            <li class="active"><a href="#!">1</a></li>
            <li class="waves-effect"><a href="#!">2</a></li>
            <li class="waves-effect"><a href="#!">3</a></li>
            <li class="waves-effect"><a href="#!">4</a></li>
            <li class="waves-effect"><a href="#!">5</a></li>
            <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
          </ul>
        </div>
      </div>
      
    </div>

  </div>
</template>

<script>
import Jobs from './services/jobs'

export default {

  name: 'app',
  data () {
    return {
      job:{
        id: '',
        type: '',
        url: '',
        created_at: '',
        company: '',
        company_url: '',
        location: '',
        title: '',
        description: '',
        how_to_apply: '',
        company_logo: ''
      },
      jobs: []
    }
  },

  mounted(){
    this.listar()
  },

  methods:{
    
    listar(){
      Jobs.listar().then(resposta => {
        this.jobs = resposta.data
      }).catch(e => {
        console.log(e)
      })
    }
  }
}
</script>

<style>
@media (min-width: 1200px) {
  .container {
    width: 1170px;
    margin: 10 auto;
  }
}
</style>
