<template>
  <div class="full-width row justify-around">
    <q-img @click="goTo('main')" width="26px" src="../../assets/home.svg"></q-img>
    <q-img src="../../assets/search.svg" width="28px"></q-img>
    <q-img src="../../assets/add.png" width="28px"></q-img>
    <q-img src="../../assets/heart.svg" width="28px"></q-img>
    <q-avatar size="28px" class="cursor-pointer" @click="goTo('my-area')">
      <img :src="user.avatar || 'http://workline.com.br/assets/img/sem-avatar.png'">
    </q-avatar>
  </div>
</template>

<script>
export default {
  name: 'BottomBar',
  data() {
    return {
      user: {},
    };
  },
  mounted() {
    this.loadProfileData();
  },
  methods: {
    goTo(route) {
      this.$router.push({ path: route });
    },
    loadProfileData() {
      this.user = this.$store.getters['user/getUserData'];
    },
  },
};
</script>

<style lang="scss" scoped>
.q-img {
  cursor: pointer;
}
</style>
