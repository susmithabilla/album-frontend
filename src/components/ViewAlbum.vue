<template>
    <div class="mt-6 grid grid-cols-2 ">
        <div>
            <img :src="album.URL" class="mb-16 max-w-sm h-auto"
                alt="">
            <div>
                <p class="mb-4 text-left text-white text-4xl ...">{{album.name}}</p>
                <p class="mb-4 text-left text-white ...">Artist : {{album.artist}}</p>
                <p class="mb-4 text-left text-white ...">Published Year : {{ album.publishedYear }}</p>
                <p class="mb-4 text-left text-white ...">Summary : </p>
                <p class="mb-4 text-left text-white ...">{{album.description}}</p>
            </div>
        </div>

        <div>
            <button @click="editAlbum(album)"
                class="bg-gray-500 mr-6 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
                Edit Album
            </button>
            <button @click="showModal = true"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Add Tracks
            </button>
            <div v-if="tracks.length" class="rounded-r-xl mr-16">
                <p class="text-2xl mt-16">Playlist</p>
                 <table class="w-full divide-y divide-gray-300 mr-5 ">
                        <thead class="bg-gray-800 ">
                            <tr>
                             <th class="px-6 py-2 text-xs text-white">
                            S.No
                            </th>

                                <th class="px-6 py-2 text-xs text-white">
                                    Song
                                </th>
                                <th class="px-6 py-2 text-xs text-white">
                                    Duration
                                </th>
                                 <th class="px-6 py-2 text-xs text-white">
                                    URL
                                </th>
                                <th class="px-6 py-2 text-xs text-white">
                                    Edit
                                </th>
                                <th class="px-6 py-2 text-xs text-white">
                                    Delete
                                </th>
                                
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-300">
                              
                            <tr class="whitespace-nowrap" v-for="track in tracks" :key="track.id" :track="track">
                             <td>
                            </td>

                                <td class="px-6 py-4">
                                    <div class="text-sm text-gray-900">
                                        {{ track.title }}
                                    </div>
                                </td>
                                <td class="px-6 py-4">
                                   
                                    <div class="text-sm text-gray-500">{{track.duration}}</div>
                                </td>
                                <td class="px-6 py-4">
                                   
                                    <div class="text-sm text-gray-500"><a :href="track.description" target="_blank" class="text-blue-600 hover:text-blue-700 transition duration-300 ease-in-out underline">{{ track.description }}</a></div>
                                </td>
                                 <td class="px-6 py-4 cursor-pointer" @click="editTrack(track)">
                                   
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-blue-400"
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                    
                                </td>
                                <td class="px-6 py-4 cursor-pointer" @click="deleteTrack(track.id)">
                                   
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-red-400" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                   
                                </td>
                            </tr>

                        </tbody>
                    </table>
            </div>

        </div>

    </div>


    <AddTracks :show="showModal" @close="getAlbum()" :id='album.id' :albumName='album.name'> </AddTracks>
    <EditTrack :show1="showModal1" :id="trackId" :trackdata ="trackdata" @close="getAlbum()"  ></EditTrack>


</template>


<script>
import AddTracks from "./AddTracksPopup.vue";
import EditTrack from "./EditTracksPopup.vue";

import { Buffer } from 'buffer';
import AlbumsDataService from "../services/AlbumsDataService";
import TrackDataService from "../services/TrackDataService";

export default {
    name: "view-albums",
    props: ['id'],
    components: {
        AddTracks,
        EditTrack
    },

    data() {
        return {
            showModal: false,
            showModal1:false,
            album: {},
            tracks: [],
             trackId:"",
             trackdata:{}
        }
    },
    methods: {
        getAlbum() {
            this.showModal = false;
            this.showModal1 = false;
          this.trackId="";
            AlbumsDataService.get(this.id)
                .then(response => {

                    var a = new Array(response.data);
                    let result = a[0];
                    if (result.data != null) {
                        var blob = result.data;
                        var buffbase64 = new Buffer(blob.data, 'binary').toString('base64');
                        var imgBase64 = "data:image/jpeg;base64," + buffbase64;
                        a[0]["URL"] = imgBase64;
                    }
                    this.album = a[0];

                    TrackDataService.getAllTracks(this.id)
                        .then(response => {
                            this.tracks = response.data;
                        })
                        .catch(e => {
                            this.message = e.response.data.message;
                        });
                })
                .catch(e => {
                    this.message = e.response.data.message;
                });
        },
        editAlbum(album) {
            this.$router.push({ name: 'editalbum', params: { id: album.id } });
        },
         editTrack(track) {
             
             this.trackdata=track;
             console.log(this.trackdata);
            this.showModal1 = true;
            this.$emit("show1","id","albumName");
        },

       
        deleteTrack(tid) {
          TrackDataService.deleteTrack(this.id, tid)
            .then( () => {

              this.getAlbum();
            })
            .catch(e => {
              this.message = e.response.data.message;
            });
        }
        
    },
     mounted() {
    this.getAlbum();
  }
}
</script>