<script setup>
import { site } from '@/config/site'
import { useContactModal } from '@/composables/useContactModal'

const { open } = useContactModal()

function scrollToTrips() {
  document.querySelector('#trips')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="top" class="relative flex min-h-screen items-center overflow-hidden">
    <!-- Background image -->
    <div class="absolute inset-0">
      <img
        :src="site.heroImage"
        alt="Sangre de Cristo mountains glowing red at dusk"
        class="h-full w-full object-cover"
      />
      <!-- Gradient scrim for legible text -->
      <div
        class="absolute inset-0 bg-gradient-to-br from-mountain/85 via-mountain/55 to-alpenglow/40"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-mountain/80 via-transparent to-transparent" />
    </div>

    <!-- Content -->
    <div class="section-shell relative z-10 py-28 text-white">
      <p class="eyebrow !text-sand">
        <span class="h-px w-8 bg-sand/70" />
        {{ site.heroKicker }}
      </p>

      <h1 class="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.05] sm:text-6xl lg:text-7xl">
        {{ site.heroHeadline }}
      </h1>

      <p class="mt-6 max-w-xl text-base leading-relaxed text-sand/90 sm:text-lg">
        {{ site.heroSubhead }}
      </p>

      <div class="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
        <v-btn size="x-large" color="primary" variant="flat" @click="open()">
          Plan Your Trip
          <v-icon end>mdi-arrow-right</v-icon>
        </v-btn>
        <v-btn
          size="x-large"
          variant="outlined"
          color="white"
          @click="scrollToTrips"
        >
          Explore Trips
        </v-btn>
      </div>

      <!-- Quick credibility row -->
      <div class="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-sand/80">
        <span class="flex items-center gap-2">
          <v-icon size="18" color="accent">mdi-shield-check</v-icon>
          Certified wilderness guides
        </span>
        <span class="flex items-center gap-2">
          <v-icon size="18" color="accent">mdi-tent</v-icon>
          Overnight expeditions
        </span>
        <span class="flex items-center gap-2">
          <v-icon size="18" color="accent">mdi-map-marker</v-icon>
          {{ site.contact.basecamp }}
        </span>
      </div>
    </div>

    <!-- Scroll cue -->
    <button
      class="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 cursor-pointer text-white/70 hover:text-white"
      aria-label="Scroll to trips"
      @click="scrollToTrips"
    >
      <v-icon size="34" class="animate-bounce">mdi-chevron-down</v-icon>
    </button>
  </section>
</template>
