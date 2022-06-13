<template>
    <div v-if="show" class="modal fixed w-full h-full top-0 left-0 flex items-center justify-center">
        <div @click.self="close_modal()" class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

        <div class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">

           
            <div class="modal-content py-4 text-left px-6">

                <div class="flex justify-center items-center pb-3">
                    <p class="text-2xl font-bold text-center">Add New Tracks</p>
                </div>

                <form class="mt-6">
                <!-- <p>Canfirm the deletion of this item</p> -->
                    <div>
                        <label for="username" class="block text-sm text-gray-800 dark:text-gray-200">Tracks Title</label>
                        <input type="text" v-model="title" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                    </div>
                    <div>
                        <label for="duration" class="block text-sm text-gray-800 dark:text-gray-200"> Duration</label>
                        <input type="text" v-model="duration" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                    </div>

                    <div class="mt-4">
                        <div class="flex items-center justify-between">
                            <label for="password" class="block text-sm text-gray-800 dark:text-gray-200">Track URL</label>
                        </div>

                        <input type="text" v-model="url" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                    </div>              
                   

                  


                </form>

                  <div class="mt-6">
                        <button type="submit"   class="px-6 py-2 mr-4 font-medium text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:bg-blue-400 focus:outline-none">
                        
                        <span class="m-2  text-white" @click="savetracks">Save Track</span>
                    </button>
                    <button
              @click="close_modal()"
              class="px-6 py-2 mr-4 font-medium text-white transition-colors duration-200 transform bg-gray-500 rounded-md hover:bg-gray-400 focus:bg-gray-400 focus:outline-none"
            >
              Cancel
            </button>
                    </div>
            
            </div>
        </div>
    </div>
    
</template>

<script>
import TrackDataService from "../services/TrackDataService";

    export default {
        name: "addTracks-popup",

        props: {
            show: Boolean,
            id: ""
        },
        data() {
            return{
                 title: "",
                 url: "",
                 duration: ""
            }
        },

        methods:{
            close_modal() {
                this.$emit("close")
            },
            savetracks()
        {
            var data = {
                title : this.title,
                 duration: this.duration,
                description: this.url
            }
            TrackDataService.createTrack(this.id, data)
            .then(response => {
              this.tracks = response.data;
              this.title="";
              this.url="";
              this.$emit("close")
              
              
            })
            .catch(e => {
              this.message = e.response.data.message;
            });
        }

        }
    }
</script>