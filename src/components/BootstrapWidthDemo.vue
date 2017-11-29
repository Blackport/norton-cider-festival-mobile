<template>
  <div id="BootstrapWidthDemo" class="container-fluid fullHeightViewport">
    <div class="row fullHeightPercentage">
      <div class="col fullHeightPercentage">

        <div class="d-xs-block d-sm-none fullHeightPercentage">
          <h3 class="text-center">Extra Small</h3>
          <hr>
          <p class="text-center">This width targets phones in portrait mode.</p>

          <h5>Crafters</h5>
          <div v-for="crafter in attractions.crafters">
            <span>{{crafter}}</span><br/>
          </div>
        </div>

        <div class="d-none d-sm-block d-md-none fullHeightPercentage">
          <h3 class="text-center">Small</h3>
          <hr>
          <p class="text-center">This width targets phones in landscape mode.</p>
        </div>

        <div class="d-none d-md-block d-lg-none fullHeightPercentage">
          <h3 class="text-center">Medium</h3>
          <hr>
          <p class="text-center">This width targets tablets.</p>
        </div>

        <div class="d-none d-lg-block d-xl-none fullHeightPercentage">
          <h3 class="text-center">Large</h3>
          <hr>
          <p class="text-center">This width targets desktops without widescreens.</p>
        </div>

        <div class="d-none d-xl-block fullHeightPercentage">
          <h3 class="text-center">Extra Large</h3>
          <hr>
          <p class="text-center">This width targets desktops with widescreens.</p>
        </div>

      </div><!-- col -->
    </div><!-- row -->
  </div><!-- container -->
</template>

<script>
export default {
  name: 'BootstrapWidthDemo',

  data () {
    return {
      attractions: {}
    }
  },

  methods: {},

  created: function () {
    this.$http.get('http://www.nortonciderfestival.com/data.json')
      .then(function (Response) {
        console.log('All data:')
        console.log(Response.data)

        console.log('Crafters:')
        console.log(Response.data.attractions.crafters)

        this.attractions = Response.data.attractions
      })
  }
}
</script>

<style lang="scss">
  @import './../../node_modules/bootstrap/scss/bootstrap.scss';
  @import './../scss/BootstrapWidthDemo.scss';
</style>
