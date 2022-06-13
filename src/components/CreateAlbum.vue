<template>

    <div>

        <h1 class="block text-center text-grey-darkest">Add New Album</h1>

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

                <div class="mb-6">
                        <label for="formFile" class="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-gray-300">Cover Image</label>
                    <input type="file" ref="file" @change="inputfile_" id="formFile" 
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                </div>

                <div class="mb-6">
                    <label for="default-input"
                        class="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-gray-300">Artist
                        Name</label>
                    <input type="text" id="default-input" v-model="album.artist"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                </div>
                 <div class="mb-6">
                    <label for="default-input"
                        class="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-gray-300">Released Year</label>
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
        @click="saveAlbum">Submit</button>
    <button type="submit"
        class="text-white bg-gray-500 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        @click="cancel()">Cancel</button>
        </div>
    </div>

</template>

<script>
import AlbumsDataService from "../services/AlbumsDataService";
export default {
    // name: "add-album",
    data() {
        return {
            album: {
                id: null,
                name: "",
                description: "",
                published: false,
                artist:"",
                publishedYear:"",
            },
            message: "Enter data and click save",
            inputfile: null,
        };
    },
    methods: {
        inputfile_(event) {
            this.inputfile = event.target.files[0];
    },
        saveAlbum() {
            var data = {
                name: this.album.name,
                artist: this.album.artist,
                description: this.album.description,
                year: this.album.publishedYear
            };

            //  this.$router.push({ name: 'home' });
       
            AlbumsDataService.create(data,this.inputfile)
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
    }
}

</script>

<style>
.formBg {
    margin-left: 30%;
    margin-right: 30%;
}
</style>
