<template>
  <q-page class="flex flex-center column">
    <q-img src="../../assets/instadev-logo.svg" />
    <q-input filled v-model="text" label="filled" />
    <q-input filled v-model="text" label="filled2" />
    <a href="">Forgot password?</a>
    <q-btn color="primary" label="Primary" />
    <div class="flex row">
      <q-img src="../../assets/facebook-logo.svg" width="17px" />
      <a href="">Log in with Facebook</a>
    </div>
    <div class="full-width">
      <q-separator />
        or
      <q-separator />
    </div>
    <div>
      Don’t have an account?
      <a href="">Sign up</a>
    </div>
    <div class="full-width">
      <q-separator />
    </div>
    Instagram or Facebook
  </q-page>

</template>

<script>
export default {
  name: 'SignIn',
  data() {
    return {
      text: '',
    };
  },
};
</script>
