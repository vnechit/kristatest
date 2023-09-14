<template>
  <app-form></app-form>
  <app-table :posts="postsStore.posts"></app-table>
</template>

<script>
  import MyTable from './components/Table.vue'
  import MyForma from './components/Forma.vue'

  export default {
    name: 'App',
    components: {
      'app-table': MyTable,
      'app-form': MyForma,
    }
  }
</script>

<script setup>
  import { usePostsStore } from './stores/PostsStore'

  const postsStore = usePostsStore()
  postsStore.getData()
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
