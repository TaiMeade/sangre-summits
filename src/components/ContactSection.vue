<script setup>
import { site } from '@/config/site'
import { useContactModal } from '@/composables/useContactModal'

const { open } = useContactModal()
const c = site.contact
</script>

<template>
  <section id="contact" class="relative overflow-hidden bg-alpenglow text-white">
    <div class="topo-bg absolute inset-0 opacity-[0.08]" />

    <div class="section-shell relative py-20 sm:py-24">
      <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <!-- CTA copy -->
        <div class="reveal">
          <p class="eyebrow !text-sand">
            <span class="h-px w-8 bg-sand/70" />
            Plan your trip
          </p>
          <h2 class="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Ready for a night under the Sangre de Cristos?
          </h2>
          <p class="mt-5 max-w-md leading-relaxed text-sand/90">
            Tell us what you're after and when — we'll craft an itinerary, sort
            the logistics, and get you into the high country.
          </p>

          <v-btn class="mt-8" size="x-large" color="white" variant="flat" @click="open()">
            <span class="text-alpenglow">Start Your Inquiry</span>
            <v-icon end color="primary">mdi-arrow-right</v-icon>
          </v-btn>
        </div>

        <!-- Contact details -->
        <div class="reveal">
          <v-card class="rounded-3xl p-2" color="white" theme="sangreTheme">
            <div class="p-6 sm:p-8">
              <ul class="space-y-6">
                <li class="flex items-start gap-4">
                  <v-icon color="primary" size="26">mdi-email-outline</v-icon>
                  <div>
                    <p class="text-xs uppercase tracking-wide text-mountain/50">Email</p>
                    <a :href="`mailto:${c.email}`" class="font-semibold text-mountain hover:text-primary">
                      {{ c.email }}
                    </a>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <v-icon color="primary" size="26">mdi-phone-outline</v-icon>
                  <div>
                    <p class="text-xs uppercase tracking-wide text-mountain/50">Phone</p>
                    <a :href="c.phoneHref" class="font-semibold text-mountain hover:text-primary">
                      {{ c.phone }}
                    </a>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <v-icon color="primary" size="26">mdi-map-marker-outline</v-icon>
                  <div>
                    <p class="text-xs uppercase tracking-wide text-mountain/50">Service area</p>
                    <p class="font-semibold text-mountain">{{ c.serviceArea }}</p>
                  </div>
                </li>
              </ul>
            </div>
          </v-card>
        </div>
      </div>
    </div>
  </section>
</template>
