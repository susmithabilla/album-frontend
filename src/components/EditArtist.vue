<template>

    <div>

        <h1 class="block text-center text-grey-darkest">Edit Artist</h1>

        <!-- <form> -->

        <!-- <div class="flex items-center h-screen w-full bg-teal-lighter"> -->
        <div class="formBg bg-white rounded shadow-lg p-8 m-14">

            <form class="mb-4">
                <div class="mb-6">
                    <label for="default-input"
                        class="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-gray-300">Artist
                        Name</label>
                    <input type="text" id="default-input" v-model="artist.name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                </div>

                <div class="mb-6">
                    <label for="default-input"
                        class="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-gray-300">Description
                        </label>
                    <input type="text" id="default-input" v-model="artist.description"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                </div>
               


            </form>

            <button type="submit"
                class="text-white mr-6 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                @click="saveartist()">Submit</button>
            <button type="submit"
                class="text-white bg-gray-500 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                @click="cancel()">Cancel</button>
        </div>
    </div>

</template>

<script>
import ArtistDataService from "../services/ArtistDataService";
export default {
    name: "edit-artist",
    props: ['id'],
    data() {
        return {
            artist: {
                id: null,
                name: "",
                description: ""
            },
            message: "Enter data and click save",
            inputfile: null,
            preImg:null
        };
    },
    methods: {
        inputfile_(event) {
            this.inputfile = event.target.files[0];
        },
        retrieveArtist(){
            ArtistDataService.get(this.id)
        .then(response => {
          var a = new Array(response.data);
          let result = a[0];
          if (result.data != null) {
            var blob = result.data;
            var buffbase64 = new Buffer(blob.data, 'binary').toString('base64');
            var imgBase64 = "data:image/jpeg;base64," + buffbase64;
            a[0]["URL"] = imgBase64;
          }
          this.artist = a[0];
          this.preImg=this.artist.URL;

       
        })
        .catch(e => {
          this.message = e.response.data.message;
        });

        },
        saveartist() {
            var data = {
                id:this.artist.id,
                name: this.artist.name,
                description: this.artist.description
            };


            //  this.$router.push({ name: 'home' });

            ArtistDataService.update(data)
                .then(response => {
                    this.artist.id = response.data.id;
                    this.$router.push({ name: 'artist' });
                })
                .catch(e => {

                    this.message = e.response.data.message;

                });
        },
        cancel() {
            this.$router.push({ name: 'artist' });
        }
    },

    mounted() {
    this.retrieveArtist();
  }
}

</script>

<style>
.formBg {
    margin-left: 30%;
    margin-right: 30%;
}
</style>
