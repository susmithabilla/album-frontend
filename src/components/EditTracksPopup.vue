<template>
    <div v-if="show1" class="modal fixed w-full h-full top-0 left-0 flex items-center justify-center" :id="id">
        <div @click.self="close_modal()" class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

        <div class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">


            <div class="modal-content py-4 text-left px-6">

                <div class="flex justify-center items-center pb-3">
                    <p class="text-2xl font-bold text-center">Edit Track</p>
                </div>

                <form class="mt-6">
                    <!-- <p>Canfirm the deletion of this item</p> -->
                    <div>
                        <label for="username" class="block text-sm text-gray-800 dark:text-gray-200">Tracks
                            Title</label>
                        <input type="text" v-model="trackdata.title"
                            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                    </div>
                    <div>
                        <label for="duration" class="block text-sm text-gray-800 dark:text-gray-200"> Duration</label>
                        <input type="text" v-model="trackdata.duration"
                            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                    </div>

                    <div class="mt-4">
                        <div class="flex items-center justify-between">
                            <label for="password" class="block text-sm text-gray-800 dark:text-gray-200">Track
                                URL</label>
                        </div>

                        <input type="text" v-model="trackdata.description"
                            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                    </div>
                </form>

                <div class="mt-6">
                    <button type="submit"
                        class="px-6 py-2 mr-4 font-medium text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:bg-blue-400 focus:outline-none">

                        <span class="m-2  text-white" @click="edittracks">Save</span>
                    </button>
                    <button @click="close_modal()"
                        class="px-6 py-2 mr-4 font-medium text-white transition-colors duration-200 transform bg-gray-500 rounded-md hover:bg-gray-400 focus:bg-gray-400 focus:outline-none">
                        Cancel
                    </button>
                </div>

            </div>
        </div>
    </div>

</template>

<script>
import TrackDataService from "../services/TrackDataService";
import AlbumsDataService from "../services/AlbumsDataService";

export default {
    name: "StudentsRegistration",

    props: {
        show1: Boolean,
        id: "",
        trackdata: Object
    },
    data() {
        return {
            title: "",
            url: "",
            duration: "",
            albumid: "",
            albums: [],
        }
    },

    methods: {
        onChange(e) {
            console.log("eeeeeee", e.target.value);
            this.albumid = e.target.value;

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
        close_modal() {

            this.$emit("close")
        },
        edittracks() {
            var data = {
                title: this.trackdata.title,
                duration: this.trackdata.duration,
                description: this.trackdata.description
            }

             console.log("dddd1111",this.trackdata);

            console.log("dddd",data);
            TrackDataService.updateTrack(this.trackdata.albumid, this.trackdata.id, data)
                .then(response => {
                    //  this.tracks = response.data;
                    // this.title="";
                    //  this.url="";
                    this.$emit("close")


                })
                .catch(e => {
                    this.message = e.response.data.message;
                });
        }

    },
    mounted() {
        this.getAlbums();
    }
}
</script>