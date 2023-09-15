<template>
  <app-form></app-form>
  <app-table :posts="postsStoreStore.posts"></app-table>
</template>

<script>
  import MyTable from './components/Table.vue'
  import MyForma from './components/Forma.vue'

  import { usePostsStore } from './stores/PostsStore'

  import { mapStores } from 'pinia'


  export default {
    name: 'App',
    components: {
      'app-table': MyTable,
      'app-form': MyForma,
    },
    mounted () {
      this.postsStoreStore.getData()
    },
    computed: {
      ...mapStores(usePostsStore)
    },
  }
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
