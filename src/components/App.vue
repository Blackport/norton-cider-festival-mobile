<template>
  <div id="app" class="container-fluid fullHeightViewport">
    <div class="row fullHeightPercentage">
      <div class="col fullHeightPercentage">

        <div class="d-xs-block d-sm-none fullHeightPercentage">
          <h3 class="text-center">Extra Small</h3>
          <hr>
          <p class="text-center">This width targets phones in portrait mode.</p>
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
  name: 'app'
}
</script>

<style lang="scss">
  @import './../../node_modules/bootstrap/scss/bootstrap.scss';
  @import './../scss/sass.scss';
</style>
