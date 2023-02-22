<template>
  <div class="home">
    <h1>Home</h1>
  </div>
</template>

<script>
import http from "../services/index";
export default {
name: 'Home',

mounted (){
  http.get().then(res =>{
    console.log(res.data)
  })
}
}
</script>

<style>

</style>