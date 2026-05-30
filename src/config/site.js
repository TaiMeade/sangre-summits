// ---------------------------------------------------------------------------
// Single source of truth for site copy, contact details, trips, and imagery.
// Edit this file to update content — no component changes required.
//
// IMAGES: the URLs below are real photos of Taos / the Sangre de Cristo range /
// the Rio Grande Gorge in northern New Mexico, sourced from Unsplash (free for
// commercial use, no attribution required). To use your own photos, drop files
// into src/assets/images/ and import them, or replace the URLs.
// ---------------------------------------------------------------------------

export const site = {
  name: 'Sangre de Cristo Guides',
  shortName: 'SdC Guides',
  tagline: 'Overnight backcountry adventures in northern New Mexico.',
  heroKicker: 'Northern New Mexico • Est. in the high country',
  heroHeadline: 'Where the peaks turn red at dusk.',
  heroSubhead:
    'Expert-led overnight trips deep in the Sangre de Cristo backcountry — hunting, forest therapy, fishing, backpacking, and skiing, guided start to finish.',

  contact: {
    email: 'hello@sangredecristoguides.com',
    phone: '(505) 555-0142',
    phoneHref: 'tel:+15055550142',
    serviceArea: 'Taos · Santa Fe · Pecos Wilderness · Carson National Forest',
    basecamp: 'Taos, New Mexico',
  },

  social: [
    { label: 'Instagram', icon: 'mdi-instagram', url: 'https://instagram.com' },
    { label: 'Facebook', icon: 'mdi-facebook', url: 'https://facebook.com' },
    { label: 'YouTube', icon: 'mdi-youtube', url: 'https://youtube.com' },
  ],

  // Background image for the full-viewport hero — alpenglow on the peaks.
  heroImage:
    'https://images.unsplash.com/photo-1746478941548-b098de2bb647?auto=format&fit=crop&w=2000&q=80',

  // Five overnight trip offerings. `accent` maps to a Vuetify/Tailwind color.
  trips: [
    {
      slug: 'hunting',
      title: 'Backcountry Hunting',
      icon: 'mdi-bow-arrow',
      season: 'Aug – Jan',
      blurb:
        'Spot-and-stalk elk and mule deer hunts in remote high country, with field-dressing, packing, and base camp handled by seasoned guides.',
      image:
        'https://images.unsplash.com/photo-1612827463377-247e9d1db0da?auto=format&fit=crop&w=1200&q=80',
    },
    {
      slug: 'forest-therapy',
      title: 'Forest Therapy',
      icon: 'mdi-pine-tree',
      season: 'May – Oct',
      blurb:
        'Guided shinrin-yoku immersions among aspen and ponderosa — slow, sensory, restorative nights under some of the darkest skies in the Southwest.',
      image:
        'https://images.unsplash.com/photo-1598906515924-4274fc1c0312?auto=format&fit=crop&w=1200&q=80',
    },
    {
      slug: 'fishing',
      title: 'Fly Fishing',
      icon: 'mdi-fish',
      season: 'Apr – Oct',
      blurb:
        'Multi-day trips to alpine lakes and the Rio Grande gorge chasing wild cutthroat and brown trout, with streamside camps and full gear.',
      image:
        'https://images.unsplash.com/photo-1532447205654-faa2fc530316?auto=format&fit=crop&w=1200&q=80',
    },
    {
      slug: 'backpacking',
      title: 'Backpacking',
      icon: 'mdi-hiking',
      season: 'Jun – Sep',
      blurb:
        'Point-to-point and basecamp routes through the Pecos Wilderness and Wheeler Peak — navigation, meals, and route planning all dialed in.',
      image:
        'https://images.unsplash.com/photo-1541962100-adc8c1064145?auto=format&fit=crop&w=1200&q=80',
    },
    {
      slug: 'skiing',
      title: 'Backcountry Skiing',
      icon: 'mdi-ski',
      season: 'Dec – Mar',
      blurb:
        'Hut-to-hut and overnight ski tours with avalanche-certified guides, earning turns on the powder-laden slopes above tree line.',
      image:
        'https://images.unsplash.com/photo-1746578632601-466dfd58bed4?auto=format&fit=crop&w=1200&q=80',
    },
  ],

  about: {
    heading: 'Guided by people who live here.',
    body: [
      'Sangre de Cristo Guides was born from a simple conviction: the southern Rockies deserve to be experienced overnight, when the crowds thin and the peaks glow red at last light.',
      'Our guides are locals — wilderness-first-responder and avalanche certified, with decades of combined time in the Pecos Wilderness, Carson National Forest, and the high valleys around Taos and Santa Fe.',
      'We handle permits, logistics, meals, and gear so you can focus on the country itself. Small groups, leave-no-trace ethics, and a deep respect for these mountains guide everything we do.',
    ],
    stats: [
      { value: '20+', label: 'Years in the range' },
      { value: '5', label: 'Trip disciplines' },
      { value: '13k', label: 'Feet of vertical terrain' },
      { value: '100%', label: 'Certified guides' },
    ],
    image:
      'https://images.unsplash.com/photo-1695596254299-c541eee4eef7?auto=format&fit=crop&w=1400&q=80',
  },

  // Gallery grid. `span` lets a few tiles go wide for a dynamic masonry feel.
  gallery: [
    { src: 'https://images.unsplash.com/photo-1746762598575-2324520a942a?auto=format&fit=crop&w=1200&q=80', alt: 'Sunrise over the Sangre de Cristo mountains near Taos', span: 'wide' },
    { src: 'https://images.unsplash.com/photo-1597783662872-bfb08f527ba7?auto=format&fit=crop&w=900&q=80', alt: 'Snow-covered pines in the northern New Mexico high country' },
    { src: 'https://images.unsplash.com/photo-1532447465046-624113f25efb?auto=format&fit=crop&w=900&q=80', alt: 'Aerial view of the Rio Grande Gorge' },
    { src: 'https://images.unsplash.com/photo-1614374351849-aed9a04fed85?auto=format&fit=crop&w=900&q=80', alt: 'Forested woodland in the New Mexico backcountry' },
    { src: 'https://images.unsplash.com/photo-1620831061446-ae117a743d5b?auto=format&fit=crop&w=1200&q=80', alt: 'High meadow below snow-capped New Mexico peaks', span: 'wide' },
    { src: 'https://images.unsplash.com/photo-1609547080457-d41f4ec933ad?auto=format&fit=crop&w=900&q=80', alt: 'Snow-covered field at sunset near Taos' },
  ],
}

export default site
