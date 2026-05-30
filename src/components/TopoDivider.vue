<script setup>
// Decorative topographic-contour divider placed between sections.
// `flip` mirrors it vertically; `color` sets the stroke.
defineProps({
  flip: { type: Boolean, default: false },
  color: { type: String, default: '#C1683C' },
})
</script>

<template>
  <div
    class="pointer-events-none select-none overflow-hidden leading-[0]"
    :class="flip ? 'rotate-180' : ''"
    aria-hidden="true"
  >
    <svg
      class="h-12 w-full sm:h-16"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      fill="none"
    >
      <g :stroke="color" stroke-opacity="0.45" stroke-width="2" fill="none">
        <path d="M0 90 Q 150 40 300 70 T 600 60 T 900 75 T 1200 55" />
        <path d="M0 105 Q 150 60 300 88 T 600 80 T 900 95 T 1200 72" />
        <path d="M0 75 Q 150 25 300 55 T 600 42 T 900 58 T 1200 38" />
      </g>
    </svg>
  </div>
</template>
