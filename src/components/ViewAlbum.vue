<template>
    <div class="mt-6 grid grid-cols-2 ">
        <div>
            <img :src="album.URL" class="mb-16 max-w-sm h-auto"
                alt="">
            <div>
                <p class="mb-4 text-left ...">Name : {{album.name}}</p>
                <p class="mb-4 text-left ...">Artist : {{album.artist}}</p>
                <p class="mb-4 text-left ...">Published Year : {{ album.publishedYear }}</p>
                <p class="mb-4 text-left ...">Description : {{album.description}}</p>
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
            <div class="rounded-r-xl mr-16">
                <p class="text-2xl mt-16">Playlist</p>
                 <table class="w-full divide-y divide-gray-300 mr-5 ">
                        <thead class="bg-gray-800 ">
                            <tr>

                                <th class="px-6 py-2 text-xs text-white">
                                    Song
                                </th>
                                <th class="px-6 py-2 text-xs text-white">
                                    Duration
                                </th>
                                 <th class="px-6 py-2 text-xs text-white">
                                    URL
                                </th>
                                
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-300">
                              
                            <tr class="whitespace-nowrap" v-for="track in tracks" :key="track.id" :track="track">

                                <td class="px-6 py-4">
                                    <div class="text-sm text-gray-900">
                                        {{ track.title }}
                                    </div>
                                </td>
                                <td class="px-6 py-4">
                                   
                                    <div class="text-sm text-gray-500">{{track.duration}}</div>
                                </td>
                                <td class="px-6 py-4">
                                   
                                    <div class="text-sm text-gray-500">{{ track.description }}</div>
                                </td>
                            </tr>

                        </tbody>
                    </table>
            </div>

        </div>

    </div>


    <AddTracks :show="showModal" @close="getAlbum()" :id='album.id'> </AddTracks>


</template>


<script>
import AddTracks from "./AddTracks.vue"
import { Buffer } from 'buffer';
import AlbumsDataService from "../services/AlbumsDataService";
import TrackDataService from "../services/TrackDataService";

export default {
    name: "view-albums",
    props: ['id'],
    components: {
        AddTracks
    },

    data() {
        return {
            showModal: false,
            album: {},
            tracks: [],
        }
    },
    methods: {
        getAlbum() {
            this.showModal = false;

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
        }
        
    },
     mounted() {
    this.getAlbum();
  }
}
</script>