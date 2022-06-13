<template>

    <div>

        <h1 class="block text-center text-grey-darkest">Add New Track</h1>

        <!-- <form> -->

        <!-- <div class="flex items-center h-screen w-full bg-teal-lighter"> -->
        <div class="formBg bg-white rounded shadow-lg p-8 m-14">

            <form class="mb-4">
                <div class="mb-6">
                    <label for="default-input"
                        class="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-gray-300">Track
                        Title</label>
                    <input type="text" id="default-input" v-model="track.title"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                </div>

                <div class="mb-6">
                    <label for="default-input"
                        class="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-gray-300">Duration
                        </label>
                    <input type="text" id="default-input" v-model="track.duration"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                </div>
                 <div class="mb-6">
<label for="countries" class="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-gray-400">Select an album</label>
<select v-on:change="onChange($event)" id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected></option>
 
  <option :value="album.id" v-for="album in albums" :key="album.id" :album="album">{{album.name}}</option>
</select>
                 </div>
                
                 <div class="mb-6">
                    <label for="default-input"
                        class="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-gray-300">Track URL</label>
                    <input type="text" id="default-input" v-model="track.url"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                </div>               
                

            </form>

             <button type="submit"
        class="text-white mr-6 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        @click="saveTrack">Submit</button>
    <button type="submit"
        class="text-white bg-gray-500 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        @click="cancel()">Cancel</button>
        </div>
    </div>

</template>

<script>
import TrackDataService from "../services/TrackDataService";
import AlbumsDataService from "../services/AlbumsDataService";

export default {
    // name: "add-track",
    data() {
        return {
            track: {
                title: null,
                duration: "",
                url: "",
                albumid: "",
                albumName: ""
            },
            albums: [],
            message: "Enter data and click save",
        };
    },
    methods: {
        onChange(e){
            console.log("eeeeeee",e.target.name);
            console.log("nameee",e.target.options[e.target.options.selectedIndex].text)
            this.track.albumName = e.target.options[e.target.options.selectedIndex].text;
            this.track.albumid = e.target.value;

        },
        getAlbums() {
            AlbumsDataService.getAll()
                .then(response => {
                    this.albums = response.data;

                })
                .catch(e => {
                    this.message = e.response.data.message;
                });
        },
        saveTrack() {
            var data = {
                title : this.track.title,
                 duration: this.track.duration,
                description: this.track.url,
                albumName: this.track.albumName
            };

            //  this.$router.push({ name: 'home' });

            var albumid=this.track.albumid;
       
            TrackDataService.createTrack(albumid, data)
                .then(response => {
                   // this.album.id = response.data.id;
                    this.$router.push({ name: 'track' });
                })
                .catch(e => {
                    
                    this.message = e.response.data.message;
                     
                });
        },
        cancel() {
            this.$router.push({ name: 'track' });
        }
    },
     mounted() {
        this.getAlbums();
    }
}

</script>

<style>
.formBg {
    margin-left: 30%;
    margin-right: 30%;
}
</style>
