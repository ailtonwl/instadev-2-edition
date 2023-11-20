<template>
  <div class="full-width row justify-around">
    <q-img src="../../assets/home.svg" width="26px"></q-img>
    <q-img src="../../assets/search.svg" width="28px"></q-img>
    <q-img src="../../assets/add.png" width="28px"></q-img>
    <q-img src="../../assets/heart.svg" width="28px"></q-img>
    <q-avatar size="28px">
      <img src="https://cdn.quasar.dev/img/avatar.png">
    </q-avatar>
  </div>
</template>

<script>
export default {
  name: 'BottomBar',
};
</script>

<style lang="scss" scoped>
.q-img {
  cursor: pointer;
}
</style>
