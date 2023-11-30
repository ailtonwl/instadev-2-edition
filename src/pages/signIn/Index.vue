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
      <q-form class="full-width" @submit="onSubmit">
        <q-input filled v-model="credential" label="E-mail ou usuário" class="full-width q-mb-md" />
        <q-input filled v-model="password" label="Password" type="password" class="full-width" />
        <div class="column items-end full-width">
          <a class="q-mt-md link" href="">Forgot password?</a>
        </div>

        <q-btn
          type="submit"
          color="primary"
          :disable="!credential || !password"
          label="Log In"
          class="full-width sign-in-button q-mt-lg"
        />
      </q-form>

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
        <span>
          Don’t have an account?
        </span>
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
      credential: '',
      password: '',
    };
  },
  methods: {
    async onSubmit() {
      const result = await this.$store.dispatch('auth/makeLogin', {
        credential: this.credential,
        password: this.password,
      });
      await this.loadProfileData(result.token);

      if (result) {
        this.$router.push({ path: 'main' });
      }
    },
    async loadProfileData(token) {
      await this.$store.dispatch('user/getUserProfile', { token });
    },
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
