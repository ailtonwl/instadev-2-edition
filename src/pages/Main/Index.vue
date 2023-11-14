<template>
  <q-page class="flex flex-center">
    <div class="full-width">
      <TopBar class="q-mb-md" />
      <q-separator class="full-width" />
    </div>
  </q-page>
</template>

<script>
import TopBar from 'src/components/TopBar';

export default {
  name: 'MainPage',
  components: {
    TopBar,
  },
};
</script>
