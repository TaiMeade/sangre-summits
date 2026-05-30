<script setup>
import { useScrollReveal } from '@/composables/useScrollReveal'
import AppNavbar from '@/components/AppNavbar.vue'
import HeroSection from '@/components/HeroSection.vue'
import TripsSection from '@/components/TripsSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import GallerySection from '@/components/GallerySection.vue'
import ContactSection from '@/components/ContactSection.vue'
import AppFooter from '@/components/AppFooter.vue'
import ContactModal from '@/components/ContactModal.vue'

useScrollReveal()
</script>

<template>
  <v-app>
    <AppNavbar />

    <v-main>
      <HeroSection />
      <TripsSection />
      <AboutSection />
      <GallerySection />
      <ContactSection />
      <AppFooter />
    </v-main>

    <!-- Global contact modal -->
    <ContactModal />
  </v-app>
</template>
