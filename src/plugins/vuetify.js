import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

// Northern New Mexico palette — sunset alpenglow, adobe clay, high-desert
// sage, turquoise, and deep mountain indigo. Mirrored in tailwind.config.js.
const sangreTheme = {
  dark: false,
  colors: {
    background: '#FBF7F0',
    surface: '#FFFFFF',
    primary: '#B23A2E', // alpenglow red
    secondary: '#1D2D44', // mountain indigo
    accent: '#2A9D8F', // turquoise
    adobe: '#C1683C',
    sage: '#7C8B6F',
    sand: '#E9D8C4',
    mountain: '#1D2D44',
    error: '#B3261E',
    info: '#2A9D8F',
    success: '#5C8A5A',
    warning: '#C1683C',
  },
}

export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  },
  theme: {
    defaultTheme: 'sangreTheme',
    themes: { sangreTheme },
  },
  defaults: {
    VBtn: {
      rounded: 'lg',
      style: 'text-transform: none; letter-spacing: 0.02em; font-weight: 600;',
    },
    VTextField: {
      variant: 'outlined',
      density: 'comfortable',
      color: 'primary',
    },
    VTextarea: {
      variant: 'outlined',
      density: 'comfortable',
      color: 'primary',
    },
    VSelect: {
      variant: 'outlined',
      density: 'comfortable',
      color: 'primary',
    },
  },
})
