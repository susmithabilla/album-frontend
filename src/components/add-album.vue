<template>
<h1> Add Album</h1>
<br>
<div class = "addalbum">
    <input type="text" placeholder="Enter the album name">
    <input type="text" placeholder="Enter the Artist name">
    <input type="datetime" placeholder="Select the release date of the album">

    <button>Add Album</button>
</div>


</template>

<script>
    export default {
        name: 'add-album'
    }
</script>

<style>
.addalbum input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid seagreen;
}
.addalbum button {
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    background: seagreen;
    color: white;
    cursor: pointer;
}
</style>