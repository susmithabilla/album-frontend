<template>
<nav class="flex items-center justify-between flex-wrap bg-teal-500 p-2">
   <router-link to="/" class="navbar-brand">
<img :src="logo" width="100" height="80" />
    
    </router-link>
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    
    <span class="appName font-semibold tracking-tight">Music Album Management</span>
  </div>
   <!-- </router-link> -->
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full block flex-grow ml-26 lg:items-center lg:w-auto ml-3/5">
    
     <button class="addBtn bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded " @click="createalbum">
     <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 plus" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
</svg>
  Add Album
</button>
  </div>

  
</nav>

<router-view />
</template>

<script>
import logo from './assets/music3.png'

export default {
  name: 'App',

  data: () => ({
    
     logo,
    
  }),
  methods: {
    createalbum() {
      this.$router.push({ name: 'createalbum' });
    },
    search()
    {
       this.$emit('changeUsername')
      this.$router.push({ name: 'searchpage' });
      
    }
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
  /* margin-top: 60px; */
  
}

.plus{
  display: inline;
}

.appName
{
  font-size: 30px;
  margin-left: 10px;
}

.addBtn{
  margin-left: 50%;
}


</style>
