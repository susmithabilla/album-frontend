<template>
  <!-- navbar goes here -->
  <nav class="bg-teal-500 fixed inset-x-0">
   
    <div class="mx-auto px-4">
      
      <div class="flex">
         <router-link to="/" class="navbar-brand inline-flex">
<img :src="logo" width="100" height="80" />
    
   
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    
    <span class="appName font-semibold tracking-tight">Music Album Management</span>
  </div>
   </router-link>
        <div class="flex">
         
          <div class="hidden ml-10 md:flex items-center space-x-1">
            <router-link to="/" class="navbar-brand">
              <p
                class="
                  py-5
                  px-3
                  cursor-pointer
                  text-white
                  hover:text-gray-300
                "
              >
                Home
              </p>
            </router-link>
            <router-link to="/" class="navbar-brand">
            <p
              class="py-5 px-3 cursor-pointer text-white hover:text-gray-300"
            >
              Albums
            </p>
            </router-link>
            <p
              class="py-5 px-3 cursor-pointer text-white hover:text-gray-300" @click="showtracks"
            >
              Tracks
            </p>
            <p
              class="py-5 px-3 cursor-pointer text-white hover:text-gray-300" @click="showartists"
            >
              Artists
            </p>
          </div>
        </div>
        <!-- secondary nav -->
        <div class="hidden md:flex items-center space-x-1 mx-auto">
          <p
            @click="createalbum"
            class="
              py-2
              px-3
              cursor-pointer
              bg-green-600
              text-white
              hover:bg-green-700
              text-sm
              hover:text-white-800
              rounded
              transition
              duration-300
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 plus"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              /></svg
            >Add Album
          </p>
        </div>

        <!-- mobile button goes here -->
        <div class="md:hidden flex items-center">
          <button class="mobile-menu-button focus:outline-none">
            <i class="bx bx-menu text-3xl mt-1"></i>
          </button>
        </div>
      </div>
    </div>
    <!-- mobile menu -->
    <div class="mobile-menu hidden md:hidden">
      <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Home</a>
      <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Albums</a>
      <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Tracks</a>
      <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Artists</a>
    </div>
  </nav>
  <!-- content goes here -->

  <div class="py-32 pageContent p-3"><router-view /></div>
</template>

<script>
import logo from "./assets/music3.png";

export default {
  name: "App",

  data: () => ({
    logo,
  }),
  methods: {
    createalbum() {
      this.$router.push({ name: "createalbum" });
    },
    showtracks(){
this.$router.push({ name: "track" });
    },
    showartists(){
this.$router.push({ name: "artist" });
    },
    search() {
      this.$emit("changeUsername");
      this.$router.push({ name: "searchpage" });
    },
  },
};
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

.plus {
  display: inline;
}

.appName {
  font-size: 30px;
  margin-left: 10px;
}

.pageContent{
  background: linear-gradient(#cd988f, #5a87a3)
}

.addBtn {
  margin-left: 50%;
}
</style>
