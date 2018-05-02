<template>
  <section class="container">
    <img src="../assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <h1 class="title">
      Universal Vue.js Application Framework
    </h1>
    <a href="javascript:;" class="button" @click.prevent="gotoAbout">
      About page
    </a>
  </section>
</template>
<script>
export default {
  data(){
    return {
      userInfo: {
        userName: '123456',
        password: '18256918997',
        realName: '赵胜'
      }
    }
  },
  methods: {
    async gotoAbout(){
      let data = await this.$store.dispatch('save', {
        userInfo: this.userInfo
      });
      if (data.success) {
        console.log(data.msg);
        this.$router.push({ path:'/about'});
      }
      
    }
  }
}

</script>
<style scoped>
.title
{
  margin: 50px 0;
}
</style>
