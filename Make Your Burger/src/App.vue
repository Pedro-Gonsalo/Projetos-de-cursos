<template>
  <Navbar :logo="logo_src" :app="app_name"/>
  <router-view/>
  <Footer />
</template>

<script>
  import Navbar from "./components/Navbar.vue";
  import Footer from "./components/Footer.vue";

  export default {
    components: {
      Navbar,
      Footer,
    },
    data(){
      return { 
        logo_src: "/img/logo.png",
        app_name: "Make Your Burguer"
      }
    }
  }
</script>

<style>
  *{
    font-family: Helvetica;
    padding: 0;
    margin: 0;
    box-sizing: border-box; /* Não deixa os inputs passarem da largura máxima da div pai */
  }

  .main-container {
    margin: 50px;
    min-height: 250px; /* altura mínima */
  }

  h1{
    text-align: center;
    font-size: 42px;
    margin-bottom: 30px;
    color: #222;
  }
</style>