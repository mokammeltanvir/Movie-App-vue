<script setup>
</script>

<template>
  <header>    
  <router-link :to="{name: 'home' }">
    <h1>Movies <span>App</span></h1>    
  </router-link>
  </header>

  <main>
    <router-view />
  </main>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;

  &::selection {
    background: transparentize($color: #34d399, $amount: 0.5);
  }
}
body {
  background: #1f2937;
  color: #fff;
}
a{
  text-decoration: none;
  color: #fff;
}
header {
  background: #111827;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 6px rgba($color: #000, $alpha: 0.2);
  h1 {
    font-size: 28px;
    font-weight: 700;
    span {
      color: #34d399;
    }
  }
}

</style>
