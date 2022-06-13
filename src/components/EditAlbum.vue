<template>

    <div>

        <h1 class="block text-center text-grey-darkest">Edit Album</h1>

        <!-- <form> -->

        <!-- <div class="flex items-center h-screen w-full bg-teal-lighter"> -->
        <div class="formBg bg-white rounded shadow-lg p-8 m-14">

            <form class="mb-4">
                <div class="mb-6">
                    <label for="default-input"
                        class="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-gray-300">Album
                        Title</label>
                    <input type="text" id="default-input" v-model="album.name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                </div>

                <!-- <div class="mb-6">
                    <label for="default-input"
                        class="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-gray-300">Artist
                        Name</label>
                    <input type="text" id="default-input" v-model="album.artist"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                </div> -->
                  <div class="mb-6">
<label for="artists" class="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-gray-400">Select artist</label>
<select v-on:change="onChange($event)" id="artists" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>{{album.artist}}</option>
 
  <option :value="artist.id" v-for="artist in artists" :key="artist.id" :artist="artist">{{artist.name}}</option>
</select>
                 </div>
                <div class="mb-6">
                    <label for="default-input"
                        class="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-gray-300">Released
                        Year</label>
                    <input type="text" id="default-input" v-model="album.publishedYear"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                </div>
                <div class="mb-6">
                    <label for="large-input"
                        class="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-gray-300">Description</label>
                    <textarea id="large-input" v-model="album.description"
                        class="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
                </div>



            </form>

            <button type="submit"
                class="text-white mr-6 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                @click="savealbum()">Submit</button>
            <button type="submit"
                class="text-white bg-gray-500 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                @click="cancel()">Cancel</button>
        </div>
    </div>

</template>

<script>
import AlbumsDataService from "../services/AlbumsDataService";
import ArtistDataService from "../services/ArtistDataService";
export default {
    name: "edit-album",
    props: ['id'],
    data() {
        return {
            album: {
                id: null,
                name: "",
                description: "",
                published: false,
                artist:"",
                artistId: ""
            },
            message: "Enter data and click save",
            inputfile: null,
            preImg:null,
            artists:[]
        };
    },
    methods: {
         onChange(e){
            console.log("eeeeeee",e.target.value);
            console.log("nameee",e.target.options[e.target.options.selectedIndex].text)
            this.album.artist = e.target.options[e.target.options.selectedIndex].text;
            this.album.artistId = e.target.value;

        },
        inputfile_(event) {
            this.inputfile = event.target.files[0];
        },
        retrieveAlbum(){
            AlbumsDataService.get(this.id)
        .then(response => {
        //   var a = new Array(response.data);
        //   let result = a[0];
        //   if (result.data != null) {
        //     var blob = result.data;
        //     var buffbase64 = new Buffer(blob.data, 'binary').toString('base64');
        //     var imgBase64 = "data:image/jpeg;base64," + buffbase64;
        //     a[0]["URL"] = imgBase64;
        //   }
        //   this.album = a[0];
        //   this.preImg=this.album.URL;
        this.album = response.data;
        console.log("aaaaaa",this.album)

       
        })
        .catch(e => {
          this.message = e.response.data.message;
        });

        },
         getArtists() {
             ArtistDataService.getAll()
                .then(response => {
                    this.artists = response.data;

                    console.log("Artists:::",this.artists)

                })
                .catch(e => {
                    this.message = e.response.data.message;
                });
        },
        savealbum() {
            var data = {
                id:this.album.id,
                name: this.album.name,
                artist: this.album.artist,
                publishedYear:this.album.publishedYear,
                description: this.album.description,
                artistId: this.album.artistId
            };


            //  this.$router.push({ name: 'home' });

            AlbumsDataService.update(data)
                .then(response => {
                    this.album.id = response.data.id;
                    this.$router.push({ name: 'home' });
                })
                .catch(e => {

                    this.message = e.response.data.message;

                });
        },
        cancel() {
            this.$router.push({ name: 'home' });
        }
    },

    mounted() {
    this.retrieveAlbum();
     this.getArtists();
  }
}

</script>

<style>
.formBg {
    margin-left: 30%;
    margin-right: 30%;
}
</style>
