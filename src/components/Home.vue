<template>
    <h1>Albums</h1>
    <div class="container flex justify-center mx-auto">
        <div class="flex w-3/5 flex-col">
            <div class="w-full">
                <div class="border-b border-gray-200 shadow">
                    <table class="w-full divide-y divide-gray-300 ">
                        <thead class="bg-gray-800 ">
                            <tr>

                                <th class="px-6 py-2 text-xs text-white">
                                    Name
                                </th>
                                <th class="px-6 py-2 text-xs text-white">
                                    Artist
                                </th>
                                 <th class="px-6 py-2 text-xs text-white">
                                    Year
                                </th>
                                <th class="px-6 py-2 text-xs text-white">
                                    Created_at
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
                            <tr class="whitespace-nowrap" v-for="album in albums" :key="album.id" :album="album">

                                <td class="px-6 py-4">
                                    <div class="text-sm text-gray-900" @click="viewAlbum(album)">
                                        {{ album.title }}
                                    </div>
                                </td>
                                <td class="px-6 py-4">
                                   
                                    <div class="text-sm text-gray-500">{{ album.artist }}</div>
                                </td>
                                <td class="px-6 py-4">
                                   
                                    <div class="text-sm text-gray-500">Year</div>
                                </td>
                                <td class="px-6 py-4 text-sm text-gray-500">
                                   {{new Date(Date.now()).toLocaleDateString()}}
                                </td>
                                <td class="px-6 py-4" @click="editAlbum(album)">
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-blue-400"
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                    </a>
                                </td>
                                <td class="px-6 py-4" @click="deleteAlbum(album)">
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-red-400" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </a>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AlbumsDataService from "../services/AlbumsDataService";

export default {
    name: "albums-list",
    data() {
        return {
            albums: [],
            currentAlbum: null,
            currentIndex: -1,
            title: "",
            message: "Search, Edit or Delete Albums"
        };
    },
    components: {
        // TutorialDisplay
    },
    methods: {
        editAlbum(album) {
          this.$router.push({ name: 'editalbum', params: { id: album.id } });
        },
        viewAlbum(album) {
           
          this.$router.push({ name: 'viewalbum', params: { id: album.id } });
        },
        deleteAlbum(album) {
          AlbumsDataService.delete(album.id)
            .then( () => {

              this.retrieveAlbums()
            })
            .catch(e => {
              this.message = e.response.data.message;
            });
        },
        retrieveAlbums() {
            AlbumsDataService.getAll()
                .then(response => {
                    this.albums = response.data;

                })
                .catch(e => {
                    this.message = e.response.data.message;
                });
        },
        // refreshList() {
        //   this.retrieveAlbums();
        //   this.currentTutorial = null;
        //   this.currentIndex = -1;
        // },
        // setActiveTutorial(tutorial, index) {
        //   this.currentTutorial = tutorial;
        //   this.currentIndex = tutorial ? index : -1;
        // },
        // removeAllTutorials() {
        //   TutorialDataService.deleteAll()
        //     .then(response => {
        //       console.log(response.data);
        //       this.refreshList();
        //     })
        //     .catch(e => {
        //       this.message = e.response.data.message;
        //     });
        // },

        // searchTitle() {
        //   TutorialDataService.findByTitle(this.title)
        //     .then(response => {
        //       this.tutorials = response.data;
        //       this.setActiveTutorial(null);

        //     })
        //     .catch(e => {
        //       this.message = e.response.data.message;
        //     });
        // }
    },
    mounted() {
        this.retrieveAlbums();
    }
};

</script>


<style>
</style>