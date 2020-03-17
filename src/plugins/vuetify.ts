import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

const hours = new Date().getHours()

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.grey.lighten4,
        secondary: colors.grey.darken1,
        accent: colors.shades.black,
        error: colors.red.accent3,
        anchor: colors.grey.darken1
      },
      dark: {
        primary: colors.grey.darken4
      },
    },
    dark: (hours > 18 || hours < 9)
  },
  icons: {
    iconfont: 'mdi'
  }
})
