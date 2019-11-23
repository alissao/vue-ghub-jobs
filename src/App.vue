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
          <input type="text" placeholder="Job Description" v-model="search.description">
          <label>Location</label>
          <input type="text" placeholder="Location" v-model="search.location">
          <label>Full Time</label>
          <p>
            <label>
              <input class="with-gap" name="Full time" type="radio" checked v-model="search.full_time"/>
              <span>Yes</span>
            </label>
            <label>
              <input class="with-gap" name="Full time" type="radio" />
              <span>No</span>
            </label>
          </p>

          <button @click="listar(1, search.description, search.local, search.full_time)" class="waves-effect waves-light btn-small">Search<i class="material-icons left">search</i></button>

      </form>

      <div class="row">
        <div class="col s4" v-for="job in jobs" :key="job.id">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <img align="right" height="50" width="100" v-bind:src="job.company_logo" />
              <span class="card-title">{{ job.title }}</span>
              <a>{{ job.location }}</a>
              <p>{{  job.type }}</p>
              <div class="wrap">
                <div class="show" v-html="job.description"></div>
                <div class="noshow" v-html="job.description"></div>
              </div>
            </div>
            <div class="card-action">
              <p style="width:80% height:15%" v-html="job.how_to_apply"></p>
              <a v-bind:href="job.company_url">Company's site</a>
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
      jobs: [],
      search:{
        description: '',
        location: '',
        full_time: ''
      }
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

.wrap {
    outline: 1px;
    height: 300px;
}
.noshow, .wrap:hover .show {
    display: none;
}
.wrap:hover .noshow {
    display: inline;
}
</style>
