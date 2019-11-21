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

      <table>

        <thead>

          <tr>
            <th>NOME</th>
            <th>QTD</th>
            <th>VALOR</th>
            <th>OPÇÕES</th>
          </tr>

        </thead>

        <tbody>

          <tr>

            <td>Arduino</td>
            <td>100</td>
            <td>50.00</td>
            <td>
              <button class="waves-effect btn-small blue darken-1"><i class="material-icons">create</i></button>
              <button class="waves-effect btn-small red darken-1"><i class="material-icons">delete_sweep</i></button>
            </td>

          </tr>

        </tbody>
      
      </table>

    </div>

  </div>
</template>

<script>

</script>

<style>
@media (min-width: 1200px) {
  .container {
    width: 1170px;
    margin: 10 auto;
  }
}
</style>
