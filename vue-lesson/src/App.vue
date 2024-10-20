<script setup>
import HelloWorld from './components/HelloWorld.vue'
import router from './router'
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
    <nav class="nav">
      <router-link to="/">
        <p>Home</p>
      </router-link>
      <router-link to="/conditions">
        <p>Conditions</p>
      </router-link>
      <router-link to="/components_lesson">
        <p>Components</p>
      </router-link>
      <router-link to="/props_lesson">
        <p>Props</p>
      </router-link>
      <router-link to="/internal_structure_lesson">
        <p>InternalStructure</p>
      </router-link>
      <router-link to="/components_highlevel_lesson">
        <p>ComponentsHighLevel</p>
      </router-link>
    </nav>
  </header>
  <main>
    <router-view></router-view>
    <!-- <TheWelcome /> -->
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.nav {
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: 1.5rem auto;
}
.nav p {
  font-size: 1.5rem;
}
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
