<script setup>

</script>

<template>
  <nav>
    <div class="container">
      <div class="company"  @click="$router.push('/')" >
        <img src="/src/assets/clinic logo.png" class="logo">
        <span class="name">My Clinic</span>
      </div>
      
    </div>
  </nav>
</template>

<style scoped lang="scss">
@import './style/top-nav.scss';
h3{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif ;
  color: var(--text-light-gray);
}
</style>