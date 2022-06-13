<template>

<div class="searchform w-3/5 m-12 block flex-grow lg:flex lg:items-center lg:w-auto">
      <input type="search" v-model="searchtext" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search by album name.." aria-label="Search" aria-describedby="button-addon2">
      <button @click="search()" class="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
        </svg>
      </button>
    </div>
<h1 v-if="albums.length" class="text-3xl m-4">Albums</h1> 
    
    <h1 v-if="!albums.length">No Records found</h1>
   

    <div v-else-if="albums.length" class="container flex justify-center mx-auto">
    
        <div class="flex w-3/5 flex-col">
            <div class="w-full">
                <div class="border-b border-gray-200 shadow">
                    <table class="w-full divide-y divide-gray-300 ">
                        <thead class="bg-gray-800 ">
                            <tr>
                            <th class="px-6 py-2 text-xs text-white">
                            S.No
                            </th>

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
                            <td>
                            </td>

                                <td class="px-6 py-4 cursor-pointer">
                                    <div class="underline  text-sm text-gray-900" @click="viewAlbum(album)">
                                        {{ album.name }}
                                    </div>
                                </td>
                                <td class="px-6 py-4">
                                   
                                    <div class="text-sm text-gray-500">{{ album.artist }}</div>
                                </td>
                                <td class="px-6 py-4">
                                   
                                    <div class="text-sm text-gray-500">{{ album.publishedYear }}</div>
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
            searchtext : "",
            message: "Search, Edit or Delete Albums"
        };
    },
    components: {
        // TutorialDisplay
    },
    methods: {
        editAlbum(album) {
            console.log("editttt")
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

        search() {
          AlbumsDataService.findByTitle(this.searchtext)
            .then(response => {
              this.albums = response.data;
            //   this.setActiveTutorial(null);

            })
            .catch(e => {
              this.message = e.response.data.message;
            });
        }
    },
    mounted() {
        this.retrieveAlbums();
    }
};

</script>


<style>

.searchform{
    margin-left: 30%;
    margin-right: 30%;
}


table {   
counter-reset: rowNumber-1;
}
table tr {
 counter-increment: rowNumber;
}
table tr td:first-child::before {   
content: counter(rowNumber);   

}
</style>