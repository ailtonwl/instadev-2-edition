<template>
  <div class="column full-width">
    <div class="row justify-between items-center full-width">
      <div class="row items-center">
        <q-avatar size="28px" class="q-mx-md">
          <img src="https://cdn.quasar.dev/img/avatar.png">
        </q-avatar>
        <div class="column">
          <strong>Joshua_I</strong>
          <span>Tokyo, Japan</span>
        </div>
      </div>
      <q-icon class="q-mr-md" name="fa fa-ellipsis-h" size="15px" color="dark-items"></q-icon>
    </div>
    <q-img
      class="q-mt-sm"
      src="https://picsum.photos/500/300"
      :ratio="1"
    />
    <div class="row justify-between q-mx-sm q-my-md">
      <div>
        <q-img class="q-mr-md" src="../../assets/heart.svg" width="24px"></q-img>
        <q-icon
          class="q-mr-md"
          name="fa-regular fa-comment"
          size="24px"
          color="dark-items"
        ></q-icon>
        <q-img class="q-mr-md" src="../../assets/gpswl.png" width="24px"></q-img>
      </div>
      <q-icon class="q-mr-xl" name="fa fa-ellipsis-h" size="20px" color="dark-items"></q-icon>
      <q-icon name="fa-regular fa-bookmark" size="24px" color="dark-items"></q-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Post',
};
</script>
