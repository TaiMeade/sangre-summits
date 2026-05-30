<script setup>
import { computed, ref, watch } from 'vue'
import emailjs from '@emailjs/browser'
import { site } from '@/config/site'
import { useContactModal } from '@/composables/useContactModal'

const { isOpen, presetTrip, close } = useContactModal()

// --- EmailJS config (from .env) -------------------------------------------
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const isConfigured = computed(
  () =>
    !!SERVICE_ID &&
    !!TEMPLATE_ID &&
    !!PUBLIC_KEY &&
    !SERVICE_ID.includes('your_') &&
    !TEMPLATE_ID.includes('your_') &&
    !PUBLIC_KEY.includes('your_')
)

// --- Form state ------------------------------------------------------------
const formRef = ref(null)
const valid = ref(false)
const submitting = ref(false)

const blankForm = () => ({
  name: '',
  email: '',
  phone: '',
  trip: '',
  dates: '',
  party: '',
  message: '',
})
const form = ref(blankForm())

const tripOptions = site.trips.map((t) => t.title)

// Snackbar feedback
const snackbar = ref({ show: false, text: '', color: 'success' })
function notify(text, color = 'success') {
  snackbar.value = { show: true, text, color }
}

// Validation rules
const required = (v) => (!!v && String(v).trim().length > 0) || 'Required'
const emailRule = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'Enter a valid email'

// When opened from a specific trip card, preselect that trip.
watch(isOpen, (open) => {
  if (open && presetTrip.value) {
    const match = site.trips.find((t) => t.slug === presetTrip.value)
    if (match) form.value.trip = match.title
  }
})

function reset() {
  form.value = blankForm()
  formRef.value?.resetValidation()
}

function onClose() {
  close()
  // small delay so the closing animation doesn't show a cleared form flash
  setTimeout(reset, 250)
}

async function onSubmit() {
  const { valid: ok } = await formRef.value.validate()
  if (!ok) return

  if (!isConfigured.value) {
    notify(
      'The contact form isn\'t connected yet. Please email or call us directly.',
      'warning'
    )
    return
  }

  submitting.value = true
  try {
    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: form.value.name,
        reply_to: form.value.email,
        phone: form.value.phone || 'Not provided',
        trip_type: form.value.trip,
        preferred_dates: form.value.dates || 'Flexible',
        party_size: form.value.party || 'Not specified',
        message: form.value.message,
      },
      { publicKey: PUBLIC_KEY }
    )
    notify('Thanks! Your inquiry is on its way — we\'ll be in touch soon.', 'success')
    onClose()
  } catch (err) {
    console.error('EmailJS error:', err)
    notify('Something went wrong sending your message. Please try again or email us.', 'error')
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <v-dialog
    :model-value="isOpen"
    max-width="640"
    scrollable
    @update:model-value="(v) => !v && onClose()"
  >
    <v-card class="rounded-2xl" theme="sangreTheme">
      <!-- Header -->
      <div class="flex items-start justify-between gap-4 bg-mountain px-6 py-5 text-white">
        <div>
          <h3 class="font-display text-xl font-bold">Plan Your Trip</h3>
          <p class="mt-1 text-sm text-sand/80">
            Tell us a little about your trip — no detail too small.
          </p>
        </div>
        <v-btn icon variant="text" color="white" aria-label="Close" @click="onClose">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>

      <v-card-text class="px-6 py-6">
        <!-- Not-configured notice -->
        <v-alert
          v-if="!isConfigured"
          type="info"
          variant="tonal"
          class="mb-5 text-sm"
          density="comfortable"
        >
          The form isn't connected to email yet. You can still reach us at
          <a :href="`mailto:${site.contact.email}`" class="font-semibold">{{ site.contact.email }}</a>
          or <a :href="site.contact.phoneHref" class="font-semibold">{{ site.contact.phone }}</a>.
        </v-alert>

        <v-form ref="formRef" v-model="valid" @submit.prevent="onSubmit">
          <v-row dense>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="form.name"
                label="Name"
                :rules="[required]"
                prepend-inner-icon="mdi-account-outline"
              />
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="form.email"
                label="Email"
                type="email"
                :rules="[required, emailRule]"
                prepend-inner-icon="mdi-email-outline"
              />
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="form.phone"
                label="Phone (optional)"
                type="tel"
                prepend-inner-icon="mdi-phone-outline"
              />
            </v-col>
            <v-col cols="12" sm="6">
              <v-select
                v-model="form.trip"
                :items="tripOptions"
                label="Trip type"
                :rules="[required]"
                prepend-inner-icon="mdi-compass-outline"
              />
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="form.dates"
                label="Preferred dates"
                placeholder="e.g. mid-September"
                prepend-inner-icon="mdi-calendar-outline"
              />
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="form.party"
                label="Party size"
                type="number"
                min="1"
                prepend-inner-icon="mdi-account-group-outline"
              />
            </v-col>
            <v-col cols="12">
              <v-textarea
                v-model="form.message"
                label="Tell us about your trip"
                :rules="[required]"
                rows="3"
                auto-grow
                prepend-inner-icon="mdi-text"
              />
            </v-col>
          </v-row>

          <div class="mt-2 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <v-btn variant="text" @click="onClose">Cancel</v-btn>
            <v-btn
              type="submit"
              color="primary"
              variant="flat"
              size="large"
              :loading="submitting"
            >
              Send Inquiry
              <v-icon end>mdi-send</v-icon>
            </v-btn>
          </div>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>

  <!-- Feedback snackbar (teleported to body so it survives modal close) -->
  <v-snackbar v-model="snackbar.show" :color="snackbar.color" timeout="6000" location="top">
    {{ snackbar.text }}
    <template #actions>
      <v-btn variant="text" @click="snackbar.show = false">Close</v-btn>
    </template>
  </v-snackbar>
</template>
