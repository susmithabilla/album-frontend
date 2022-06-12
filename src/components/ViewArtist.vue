<template>
    <div class="mt-6 grid grid-cols-2 ">
        <div>
            <img :src="artist.URL" class="mb-16 max-w-sm h-auto"
                alt="">
            <div>
                <p class="mb-4 text-left ...">Name : {{artist.name}}</p>
                <p class="mb-4 text-left ...">Description : {{artist.description}}</p>
            </div>
        </div>

        <div>
            <button @click="editArtist(artist)"
                class="bg-gray-500 mr-6 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
                Edit Artist
            </button>
            <button @click="addArtist()"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Add Artist
            </button>
            <div v-if="albums.length" class="rounded-r-xl mr-16">
                <p class="text-2xl mt-16">Albums</p>
                 <table class="w-full divide-y divide-gray-300 mr-5 ">
                        <thead class="bg-gray-800 ">
                            <tr>
                             <th class="px-6 py-2 text-xs text-white">
                            S.No
                            </th>

                                <th class="px-6 py-2 text-xs text-white">
                                    Title
                                </th>
                                <th class="px-6 py-2 text-xs text-white">
                                    Published Year
                                </th>
                                
                                
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-300">
                              
                            <tr class="whitespace-nowrap" v-for="album in albums" :key="album.id" :album="album">
                             <td>
                            </td>

                                <td class="px-6 py-4 cursor-pointer">
                                    <div class="underline text-sm text-gray-900" @click="viewAlbum(album)">
                                        {{ album.name }}
                                    </div>
                                </td>
                                <td class="px-6 py-4">
                                   
                                    <div class="text-sm text-gray-500">{{album.publishedYear}}</div>
                                </td>
                               </tr>

                        </tbody>
                    </table>
            </div>

        </div>

    </div>




</template>


<script>
import { Buffer } from 'buffer';
import ArtistDataService from "../services/ArtistDataService";

export default {
    name: "view-artists",
    props: ['id'],
  
    data() {
        return {
            showModal: false,
            artist: {},
            albums: [],
        }
    },
    methods: {
        getArtist() {
            this.showModal = false;

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

                    ArtistDataService.getAllAlbumsFromArtist(this.id)
                        .then(response => {
                            this.albums = response.data;
                        })
                        .catch(e => {
                            this.message = e.response.data.message;
                        });
                })
                .catch(e => {
                    this.message = e.response.data.message;
                });
        },
        editArtist(tid) {
            this.$router.push({ name: 'editartist', params: { id: artist.id } });
        },
        addArtist() {
            this.$router.push({ name: 'createartist' });
        },
         viewAlbum(album) {
           
          this.$router.push({ name: 'viewalbum', params: { id: album.id } });
        },
    },
     mounted() {
    this.getArtist();
  }
}
</script>