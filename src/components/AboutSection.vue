<script setup>
import { site } from '@/config/site'
import TopoDivider from './TopoDivider.vue'

const about = site.about
</script>

<template>
  <section id="about" class="relative bg-mountain text-white">
    <TopoDivider color="#C1683C" />

    <div class="section-shell py-20 sm:py-24">
      <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <!-- Image -->
        <div class="reveal relative">
          <div class="overflow-hidden rounded-3xl shadow-2xl">
            <img
              :src="about.image"
              alt="A guide looking out over the northern New Mexico high country"
              class="h-[420px] w-full object-cover"
              loading="lazy"
            />
          </div>
          <div
            class="absolute -bottom-6 -right-4 hidden rounded-2xl bg-alpenglow px-6 py-4 shadow-xl sm:block"
          >
            <p class="font-display text-2xl font-bold leading-none">Taos, NM</p>
            <p class="mt-1 text-xs uppercase tracking-widest text-sand">Our basecamp</p>
          </div>
        </div>

        <!-- Copy -->
        <div class="reveal">
          <p class="eyebrow !text-turquoise">
            <span class="h-px w-8 bg-turquoise/60" />
            About us
          </p>
          <h2 class="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">
            {{ about.heading }}
          </h2>

          <div class="mt-5 space-y-4 text-sand/85">
            <p v-for="(para, i) in about.body" :key="i" class="leading-relaxed">
              {{ para }}
            </p>
          </div>

          <!-- Stats -->
          <div class="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            <div v-for="stat in about.stats" :key="stat.label">
              <p class="font-display text-3xl font-extrabold text-adobe">{{ stat.value }}</p>
              <p class="mt-1 text-xs uppercase tracking-wide text-sand/70">{{ stat.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <TopoDivider color="#C1683C" flip />
  </section>
</template>
