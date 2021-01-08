<template>
    <div class="card text-center">
  <div class="card-header">
    NorthSide Youth Soccer League
  </div>
  <div class="card-body" >
    <h5 class="card-title">Let's play!</h5>
    <Social></Social>
  </div>
  <div class="card-footer text-muted">
    7 de enero de 2021
  </div>
</div>
</template>

<script>
import Social from './Social.vue'

export default {
  name:'Footer',
  components:{
    Social,
  }
}
</script>