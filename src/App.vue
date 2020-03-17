<template>
  <v-app :dark="dark">
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-spacer />

      <v-switch
        v-model="dark"
        color="grey"
        @change="toggleTheme"
        hide-details
        light
        flat
        inset
        :ripple="false"
      >
        <template v-slot:label>
          <!-- <span :class="dark ? 'dark' : 'red'">dark mode</span> -->
        </template>
      </v-switch>
      <!-- <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn> -->
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import {defineComponent, ref, onMounted} from '@vue/composition-api'

export default defineComponent({
  name: 'App',
  setup(_, {root}) {
    const dark = ref(root.$vuetify.theme.dark)

    function toggleTheme() {
      root.$vuetify.theme.dark = !root.$vuetify.theme.dark
    }

    return {
      dark,
      toggleTheme
    }
  }
});
</script>