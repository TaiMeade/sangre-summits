<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { useDisplay } from 'vuetify'
import { site } from '@/config/site'
import { useContactModal } from '@/composables/useContactModal'

const { mobile } = useDisplay()
const { open } = useContactModal()

const scrolled = ref(false)
const drawer = ref(false)

const links = [
  { label: 'Trips', href: '#trips' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

function onScroll() {
  scrolled.value = window.scrollY > 40
}

function go(href) {
  drawer.value = false
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <v-app-bar
    :elevation="scrolled ? 4 : 0"
    :color="scrolled ? 'background' : 'transparent'"
    :theme="scrolled ? 'sangreTheme' : 'dark'"
    height="72"
    :class="['transition-colors duration-300', { 'navbar-scrim': !scrolled }]"
    flat
    fixed
  >
    <div class="section-shell flex items-center gap-4">
      <!-- Brand -->
      <a
        href="#top"
        class="flex items-center gap-2 no-underline"
        @click.prevent="go('#top')"
      >
        <v-icon :color="scrolled ? 'primary' : 'white'" size="28">mdi-image-filter-hdr</v-icon>
        <span
          class="font-display text-lg font-bold tracking-tight"
          :class="scrolled ? 'text-mountain' : 'text-white'"
        >
          {{ site.name }}
        </span>
      </a>

      <v-spacer />

      <!-- Desktop links -->
      <nav v-if="!mobile" class="flex items-center gap-1">
        <v-btn
          v-for="link in links"
          :key="link.href"
          variant="text"
          :color="scrolled ? 'secondary' : 'white'"
          @click="go(link.href)"
        >
          {{ link.label }}
        </v-btn>
        <v-btn class="ml-2" color="primary" variant="flat" @click="open()">
          Plan Your Trip
        </v-btn>
      </nav>

      <!-- Mobile hamburger -->
      <v-app-bar-nav-icon
        v-else
        :color="scrolled ? 'secondary' : 'white'"
        aria-label="Open navigation menu"
        @click="drawer = true"
      />
    </div>
  </v-app-bar>

  <!-- Mobile drawer -->
  <v-navigation-drawer v-model="drawer" location="right" temporary width="280">
    <div class="flex items-center justify-between px-4 py-4">
      <span class="font-display font-bold text-mountain">{{ site.shortName }}</span>
      <v-btn icon variant="text" aria-label="Close menu" @click="drawer = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div>
    <v-divider />
    <v-list nav>
      <v-list-item
        v-for="link in links"
        :key="link.href"
        :title="link.label"
        @click="go(link.href)"
      />
    </v-list>
    <template #append>
      <div class="pa-4">
        <v-btn block color="primary" variant="flat" @click="drawer = false; open()">
          Plan Your Trip
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<style scoped>
/* At the top of the page the bar is transparent over the hero photo. A bright
   sky/snow area behind it leaves the white text and logo with almost no
   contrast, so we lay a soft top-down scrim behind the bar (background-color
   stays transparent — this only sets background-image) and give the text and
   icons a subtle shadow. Both fade away once `scrolled` swaps in a solid bar. */
.navbar-scrim {
  background-image: linear-gradient(
    to bottom,
    rgba(13, 20, 34, 0.6) 0%,
    rgba(13, 20, 34, 0.28) 55%,
    rgba(13, 20, 34, 0) 100%
  ) !important;
}

.navbar-scrim .font-display,
.navbar-scrim :deep(.v-btn__content) {
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.45);
}

.navbar-scrim :deep(.v-icon) {
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.45));
}
</style>
