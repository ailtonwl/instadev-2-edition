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
      class="q-mt-sm cursor-pointer"
      src="https://picsum.photos/500/300"
      :ratio="1"
      @click="countClicks++"
    >
    <q-icon
      v-if="animationClass !== ''"
      :class="animationClass"
      class="absolute-center"
      name="fas fa-heart"
      color="white"
    />
    </q-img>
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
    <div class="row items-center q-mb-xs">
      <q-avatar size="17px" class="q-ml-sm q-mr-xs">
        <img src="https://cdn.quasar.dev/img/avatar.png">
      </q-avatar>
      Liked by &nbsp; <strong>craig_love &nbsp;</strong> and &nbsp;<strong>44,686 others</strong>
    </div>
    <div class="q-mx-sm q-mb-lg">
      <strong>Joshua_I</strong> The game in Japan was amazing and I want to share some photos
    </div>
  </div>
</template>

<script>
export default {
  name: 'Post',
  data() {
    return {
      animationClass: '',
      countClicks: 0,
    };
  },
  watch: {
    countClicks() {
      setTimeout(() => {
        if (this.countClicks !== 2) {
          this.countClicks = 0;
        }
      }, 1000);
      if (this.countClicks === 2) {
        this.addLikeInPost();
        this.countClicks = 0;
      }
    },
  },
  methods: {
    addLikeInPost() {
      this.animationClass = 'animate-like';
      setTimeout(() => {
        this.animationClass = '';
      }, 600);
    },
  },
};
</script>

<style lang="scss" scoped>
.animate-like {
  animation-duration: 500ms;
  animation-name: liked;
}

@keyframes liked {
  from {
    font-size: 45px;
  }
  10% {
    font-size: 48px;
  }
  75% {
    font-size: 75px;
  }
  90% {
    font-size: 73px;
  }
  to {
    font-size: 0px;
  }
}
</style>
