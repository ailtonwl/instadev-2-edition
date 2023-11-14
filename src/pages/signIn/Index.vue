<template>
  <q-page class="flex flex-center column justify-center q-px-md">
    <q-icon
      name="fas fa-chevron-left"
      size="22px"
      color="grey"
      class="absolute-left q-ma-lg"
    >
    </q-icon>
    <div class="full-width column items-center justify-center">
      <q-img
        class="logo q-mb-lg"
        src="../../assets/instadev-logo.svg"
      />
      <q-input filled v-model="email" label="E-mail" class="full-width q-mb-md" />
      <q-input filled v-model="password" label="Password" type="password" class="full-width" />
      <div class="column items-end full-width">
        <a class="q-mt-md link" href="">Forgot password?</a>
      </div>

      <q-btn
        color="primary"
        :disable="true"
        label="Log In"
        class="full-width sign-in-button q-mt-lg"
        />
      <div class="flex row full-width items-center justify-center q-mt-xl">
        <q-img class="facebook-icon" src="../../assets/facebook-logo.svg" />
        <a class="link q-ml-xs" href="">Log in with Facebook</a>
      </div>
      <div class="full-width row items-center justify-center q-my-xl">
        <q-separator class="separator" inset />
          OR
        <q-separator class="separator" inset />
      </div>
      <div class="full-width row items-center justify-center">
        Don’t have an account?
        <a href="" class="link q-ml-xs">Sign up</a>
      </div>
    </div>
    <div class="full-width column items-center absolute-bottom">
      <q-separator class="full-width" />
      <div class="q-my-lg">
        <span>Instagram or Facebook</span>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'SignIn',
  data() {
    return {
      email: '',
      password: '',
    };
  },
};
</script>

<style lang="scss" scoped>
.logo {
  height: 50px;
  width: 194px;
}
.sign-in-button {
  height: 44px;
  border-radius: 5px;
  background-color: $instablue;
}
.facebook-icon {
  height: 17px;
  width: 17px;
}
.separator {
  width: 38%;
}
</style>
