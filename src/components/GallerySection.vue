<script setup>
import { ref } from 'vue'
import { site } from '@/config/site'

const lightbox = ref(false)
const activeIndex = ref(0)

function openLightbox(i) {
  activeIndex.value = i
  lightbox.value = true
}

function step(dir) {
  const n = site.gallery.length
  activeIndex.value = (activeIndex.value + dir + n) % n
}
</script>

<template>
  <section id="gallery" class="bg-background py-24 sm:py-28">
    <div class="section-shell">
      <div class="reveal max-w-2xl">
        <p class="eyebrow">
          <span class="h-px w-8 bg-turquoise/60" />
          From the field
        </p>
        <h2 class="section-heading mt-4">The country speaks for itself.</h2>
      </div>

      <!-- Masonry-ish grid -->
      <div class="mt-12 grid auto-rows-[220px] grid-cols-2 gap-4 lg:grid-cols-4">
        <button
          v-for="(img, i) in site.gallery"
          :key="i"
          type="button"
          class="reveal group relative overflow-hidden rounded-2xl"
          :class="img.span === 'wide' ? 'col-span-2' : ''"
          :aria-label="`View image: ${img.alt}`"
          @click="openLightbox(i)"
        >
          <img
            :src="img.src"
            :alt="img.alt"
            class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div
            class="absolute inset-0 bg-mountain/0 transition-colors duration-300 group-hover:bg-mountain/30"
          />
          <v-icon
            class="absolute right-3 top-3 opacity-0 transition-opacity group-hover:opacity-100"
            color="white"
          >
            mdi-magnify-plus-outline
          </v-icon>
        </button>
      </div>
    </div>

    <!-- Lightbox -->
    <v-dialog v-model="lightbox" max-width="1000" transition="fade-transition">
      <div class="relative">
        <img
          :src="site.gallery[activeIndex].src"
          :alt="site.gallery[activeIndex].alt"
          class="max-h-[80vh] w-full rounded-lg object-contain bg-black"
        />
        <v-btn
          icon
          variant="flat"
          color="white"
          class="!absolute right-2 top-2"
          aria-label="Close"
          @click="lightbox = false"
        >
          <v-icon color="mountain">mdi-close</v-icon>
        </v-btn>
        <v-btn
          icon
          variant="flat"
          color="white"
          class="!absolute left-2 top-1/2 -translate-y-1/2"
          aria-label="Previous image"
          @click="step(-1)"
        >
          <v-icon color="mountain">mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn
          icon
          variant="flat"
          color="white"
          class="!absolute right-2 top-1/2 -translate-y-1/2"
          aria-label="Next image"
          @click="step(1)"
        >
          <v-icon color="mountain">mdi-chevron-right</v-icon>
        </v-btn>
      </div>
    </v-dialog>
  </section>
</template>
