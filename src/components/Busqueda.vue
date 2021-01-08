<template >
    <b-col class="ocultable">
            <div>
              <div id="porMes">
                <b-button @click="showS = !showS" class="mb-2" variant="success">September</b-button>
                <b-button @click="showO = !showO" class="mb-2" variant="info">October</b-button>
                </div>
              <div>
                <h3>Our teams</h3>
                <b-list-group>
                  <b-list-group-item><img src="../assets/icon/G1.png" alt="icono" class="avat">The sharks</b-list-group-item>
                  <b-list-group-item><img src="../assets/icon/G2.png" alt="icono" class="avat">The pelicans</b-list-group-item>
                  <b-list-group-item><img src="../assets/icon/G3.png" alt="icono" class="avat">The rattlesnakes</b-list-group-item>
                  <b-list-group-item><img src="../assets/icon/G4.png" alt="icono" class="avat">The squirreles</b-list-group-item>
                  <b-list-group-item><img src="../assets/icon/G5.png" alt="icono" class="avat">The stegosaurus</b-list-group-item>
                  <b-list-group-item><img src="../assets/icon/G6.png" alt="icono" class="avat">The unicorn</b-list-group-item>
                </b-list-group>
              </div>
          </div>
      </b-col>
</template>

<script>
export default {
    data () {
    return {
      showS: true,
      showO: true,
      isVisible: false
    }
  },
  methods: {
    handleVisibility (isVisible) {
      this.isVisible = isVisible
    }
  }
}

</script>
