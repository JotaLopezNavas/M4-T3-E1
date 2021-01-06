<template>
    <div id="navbar">
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="/">NYLS</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <router-link class="letra01" to="/"><b-nav-item>Home</b-nav-item></router-link>
        <router-link to="/about"><b-nav-item>About</b-nav-item></router-link>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">

        <b-nav-item-dropdown text="More" right>
          <router-link to="/info"><b-dropdown-item>Info</b-dropdown-item></router-link>
         <router-link to="/rules"><b-dropdown-item>Rules</b-dropdown-item></router-link>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <router-view/>
</div>
</template>
