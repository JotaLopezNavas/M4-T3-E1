<template>
<div id="info">
  <b-container>
    <b-row>
      <b-col>
            <!-- <div id="container"> -->
              <div id="pageheader">
                <h1>NYSL Game Information</h1>
              </div>
      </b-col>
    </b-row>
    <b-row>
      <busqueda> </busqueda>
      <!-- <b-col class="ocultable">
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
      </b-col> -->
      <b-col>   
        <div v-show="!showS">
                <TableSep></TableSep>
        </div>
        <div  v-show="!showO">
                <TableOct></TableOct>
        </div>
      </b-col>
      <b-row>
        <b-col>
              <div id="bodycontent">
                <h2><em>Fall Schedule</em></h2>
                <p class="announcement">*All games take place on Saturday</p>

                <p><br /><strong>Facility Type:</strong> Outdoor</p>
                <p>
                  <strong>Additional Information:</strong> If deemed necessary by NYSL,
                  games may be shortened or cancelled due to extreme weather conditions.
                </p>
                <p>
                  <strong>Please direct all questions to:</strong> Michael Randall,
                  League Coordinator
                </p>
                <address>
                  <p>
                    <span style="float: left"
                      ><strong>Phone:</strong> (630) 690-8132</span
                    >
                  </p>
                  <p style="text-align: right">
                    <strong>Email:</strong>
                    <a href="mailto:michael.randall@chisoccer.org"
                      >michael.randall@chisoccer.org</a
                    >
                  </p>
                </address>
              </div>
            <!-- </div> -->
          </b-col>
          </b-row>
    </b-row>
    </b-container>
  </div>
</template>

<script>

import TableSep from '../components/TablaSep.vue'
import TableOct from '../components/TablaOct.vue'
import Busqueda from '../components/Busqueda'
export default {
  name: 'Info',
  components:{
    TableSep,
    TableOct,
    Busqueda
  }
}

</script>     