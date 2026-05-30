<script setup>
import { useContactModal } from '@/composables/useContactModal'

const props = defineProps({
  trip: { type: Object, required: true },
})

const { open } = useContactModal()
</script>

<template>
  <v-card
    class="reveal group h-full overflow-hidden rounded-2xl"
    elevation="2"
    :hover="true"
  >
    <!-- Image -->
    <div class="relative h-52 overflow-hidden">
      <img
        :src="trip.image"
        :alt="trip.title"
        class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-mountain/70 to-transparent" />
      <span
        class="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-mountain backdrop-blur"
      >
        <v-icon size="14" color="primary">mdi-calendar-range</v-icon>
        {{ trip.season }}
      </span>
      <div class="absolute bottom-4 left-4 flex items-center gap-2 text-white">
        <v-icon size="26">{{ trip.icon }}</v-icon>
        <h3 class="font-display text-xl font-bold">{{ trip.title }}</h3>
      </div>
    </div>

    <!-- Body -->
    <div class="flex flex-1 flex-col p-6">
      <p class="text-sm leading-relaxed text-mountain/70">{{ trip.blurb }}</p>
      <v-btn
        class="mt-5 self-start px-0"
        variant="text"
        color="primary"
        @click="open(trip.slug)"
      >
        Inquire about this trip
        <v-icon end size="18">mdi-arrow-right</v-icon>
      </v-btn>
    </div>
  </v-card>
</template>
