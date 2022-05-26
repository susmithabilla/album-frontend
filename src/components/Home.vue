<template>
<h1> Main Screen </h1>

<div class = "albums">
    <table>
        <tr>
            <td><b>Name:</b> </td>
            <td>The Script</td>
            <br>
            <td><b>Artist:</b> </td>
            <td>Hall of Fame</td>
            <br>
            <td><b>Release year: </b> </td>
            <td>2012</td>
            <br>

        </tr>
            <td><b>Name:</b> </td>
            <td>Heroes Tonight</td>
            <br>
            <td><b>Artist:</b> </td>
            <td>Janji</td>
            <br>
            <td><b>Release year: </b> </td>
            <td>2014</td>
            <br>
        <tr>
            <td><b>Name:</b> </td>
            <td>Mortals</td>
            <br>
            <td><b>Artist:</b> </td>
            <td>Warrio</td>
            <br>
            <td><b>Release year: </b> </td>
            <td>2013</td>
            <br>

        </tr>

        <tr>
            <td><b>Name:</b> </td>
            <td>Ready for war</td>
            <br>
            <td><b>Artist:</b> </td>
            <td>2Pac</td>
            <br>
            <td><b>Release year: </b> </td>
            <td>2002</td>
            <br>

        </tr>

        <tr>
            <td><b>Name:</b> </td>
            <td>Steonger</td>
            <br>
            <td><b>Artist:</b></td>
            <td>Prismo</td>
            <br>
            <td><b>Release year: </b></td>
            <td>2018</td>
            <br>

        </tr>


    </table>
</div>
</template>

<script>
export default{ 
    name:'Home-comp'
}
</script>
<style>
.albums tr{ 
    border: 1px solid skyblue;
}

.albums td {
    height: 30px;
    width: 140px;
    padding-left: 20px;
    border: 10px;
    display: inline-grid;
}
.albums table{ 
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;

}
</style>
