<script setup>
import { site } from '@/config/site'

const year = new Date().getFullYear()

function go(href) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

const links = [
  { label: 'Trips', href: '#trips' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]
</script>

<template>
  <footer class="bg-mountain text-sand/80">
    <div class="section-shell py-12">
      <div class="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <!-- Brand -->
        <div class="max-w-sm">
          <div class="flex items-center gap-2 text-white">
            <v-icon color="adobe" size="26">mdi-image-filter-hdr</v-icon>
            <span class="font-display text-lg font-bold">{{ site.name }}</span>
          </div>
          <p class="mt-3 text-sm leading-relaxed">{{ site.tagline }}</p>
          <p class="mt-2 text-sm">{{ site.contact.serviceArea }}</p>
        </div>

        <!-- Nav -->
        <nav class="flex flex-col gap-2 text-sm">
          <span class="mb-1 text-xs uppercase tracking-widest text-sand/50">Explore</span>
          <button
            v-for="link in links"
            :key="link.href"
            class="text-left hover:text-white"
            @click="go(link.href)"
          >
            {{ link.label }}
          </button>
        </nav>

        <!-- Social -->
        <div>
          <span class="mb-3 block text-xs uppercase tracking-widest text-sand/50">Follow</span>
          <div class="flex gap-2">
            <v-btn
              v-for="s in site.social"
              :key="s.label"
              :href="s.url"
              target="_blank"
              rel="noopener"
              icon
              variant="outlined"
              size="small"
              color="sand"
              :aria-label="s.label"
            >
              <v-icon>{{ s.icon }}</v-icon>
            </v-btn>
          </div>
        </div>
      </div>

      <v-divider class="my-8 border-sand/15" />

      <div class="flex flex-col gap-2 text-xs text-sand/50 sm:flex-row sm:items-center sm:justify-between">
        <p>© {{ year }} {{ site.name }}. All rights reserved.</p>
        <p>Guided overnight adventures · Northern New Mexico</p>
      </div>
    </div>
  </footer>
</template>
