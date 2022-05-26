<template>
<h1> Sign Up</h1>
<br>
<div class = "register">
    <input type="text" placeholder="Enter your Username">
    <input type="text" placeholder="Enter your Full name">
    <input type="password" placeholder="Enter your Password">
    <input type="text" placeholder="Enter your Email">
    <input type="text" placeholder="Enter your Address">

    <button>Sign Up</button>
</div>


</template>

<script>
    export default {
        name: 'Sign-up'
    }
</script>

<style>
.register input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid skyblue;
}
.register button {
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    background: skyblue;
    color: white;
    cursor: pointer;
}
</style>