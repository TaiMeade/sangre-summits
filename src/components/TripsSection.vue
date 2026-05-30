<script setup>
import { site } from '@/config/site'
import TripCard from './TripCard.vue'
</script>

<template>
  <section id="trips" class="topo-bg bg-background py-24 sm:py-28">
    <div class="section-shell">
      <!-- Header -->
      <div class="reveal max-w-2xl">
        <p class="eyebrow">
          <span class="h-px w-8 bg-turquoise/60" />
          What we guide
        </p>
        <h2 class="section-heading mt-4">Five ways into the backcountry.</h2>
        <p class="mt-4 text-base leading-relaxed text-mountain/70">
          Every trip is an overnight expedition — fully outfitted, locally
          guided, and tuned to the season. Pick your discipline and we'll handle
          the rest.
        </p>
      </div>

      <!-- Grid -->
      <div class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <TripCard v-for="trip in site.trips" :key="trip.slug" :trip="trip" />
      </div>
    </div>
  </section>
</template>
