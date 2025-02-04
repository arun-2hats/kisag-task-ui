<script setup>
  import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
</script>

<template>
  <div class="main">
    <Header/>
    <router-view />
  </div>
</template>
