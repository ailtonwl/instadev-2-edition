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
      <q-input filled v-model="email" label="Email" class="full-width q-mb-md" />
      <q-input filled v-model="userName" label="UserName" class="full-width q-mb-md" />
      <q-input
        filled
        v-model="password"
        label="Password"
        type="password"
        class="full-width q-mb-md"
      />
      <q-input
        filled
        v-model="confirmPassword"
        label="Confirm Password"
        type="password"
        class="full-width"
      />

      <q-btn
        color="primary"
        :disable="true"
        label="Sign Up"
        class="full-width sign-in-button q-mt-lg"
      />

      <div class="full-width row items-center justify-center q-my-xl">
        <q-separator class="separator" inset />
          OR
        <q-separator class="separator" inset />
      </div>
      <div class="full-width row items-center justify-center">
        <span>
          alread have an account?
        </span>
        <a href="" class="link q-ml-xs">Sign In.</a>
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
  name: 'SignUp',
  data() {
    return {
      email: '',
      userName: '',
      password: '',
      confirmPassword: '',
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
