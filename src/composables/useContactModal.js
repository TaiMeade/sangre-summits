import { ref } from 'vue'

// Shared, app-wide state for the contact modal so any button (navbar, hero,
// contact section) can open it without prop-drilling or an event bus.
const isOpen = ref(false)
const presetTrip = ref(null)

export function useContactModal() {
  function open(tripSlug = null) {
    presetTrip.value = tripSlug
    isOpen.value = true
  }

  function close() {
    isOpen.value = false
  }

  return { isOpen, presetTrip, open, close }
}
