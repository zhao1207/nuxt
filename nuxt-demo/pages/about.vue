<template>
  <section class="container">
    <img src="../assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <h1 class="title">
      This page is loaded from the {{ name }}
    </h1>
    <h2 class="info" v-if="name === 'client'">
      Please refresh the page
    </h2>
    <input class="button" type="button" @click.prevent="alert" value="alert" />
    <br>
    <nuxt-link class="button" to="/">
      Home page
    </nuxt-link>
  </section>
</template>
<script>
export default {
  asyncData({ req }) {
    return {
      name: req ? 'server' : 'client'
    }
  },
  head() {
    return {
      title: `About Page (${this.name}-side)`
    }
  },
  async mounted(){
    // let data = await this.$store.dispatch('save', {
    //   userInfo: this.$route.query.userInfo
    // });
    // if (data.success) {
    //   console.log(data.msg);
    // }
  },
  methods: {
    async alert(){
      let data = await this.$store.dispatch('logininInfo', { 
        userName: '123456'
      });
      alert(`用户名：${data.user.userName}
             密码：${data.user.password}
             真实姓名：${data.user.realName}`);
    }
  }
}
</script>

<style scoped>
.title
{
  margin-top: 50px;
}
.info
{
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
  margin-top: 10px;
}
.button
{
  margin-top: 50px;
}
</style>
