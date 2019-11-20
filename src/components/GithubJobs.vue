<template>
  <div class="container">
    <div class="p-grid p-dir-col">
      <div class="p-col">
        <h1 class="h1title">Empregos do Github Jobs</h1>
      </div>
      <InputText id="vaga" type="text" v-model="value" />
    </div>
    <div class="p-grid">
      <div class="p-col">
        <InputText id="vaga" type="text" v-model="value" />
      </div>
      <div class="p-col-fixed" style="width:100px">
        <Button label="Pesquisar" />
      </div>
    </div>
  </div>
</template>

<script>
import InputText from 'primevue/components/inputtext/InputText';
import Button from 'primevue/components/button/Button';

export default {
  name: 'GithubJobs',
  props: {
    msg: String
  },
  data() {
    return {
      value: '',
    }
  },
	components: {
    'InputText': InputText,
    'Button' : Button
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.h1title {
  float: left;
}

.p-col-auto {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
}
</style>
