// ---------------------------------------------------------------------------
// Single source of truth for site copy, contact details, trips, and imagery.
// Edit this file to update content — no component changes required.
//
// IMAGES: the URLs below are curated Unsplash placeholders. To use real photos,
// drop files into src/assets/images/ and import them, or replace the URLs.
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

  // Background image for the full-viewport hero.
  heroImage:
    'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=2000&q=80',

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
        'https://images.unsplash.com/photo-1551041777-575d3855ca71?auto=format&fit=crop&w=1200&q=80',
    },
    {
      slug: 'forest-therapy',
      title: 'Forest Therapy',
      icon: 'mdi-pine-tree',
      season: 'May – Oct',
      blurb:
        'Guided shinrin-yoku immersions among aspen and ponderosa — slow, sensory, restorative nights under some of the darkest skies in the Southwest.',
      image:
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80',
    },
    {
      slug: 'fishing',
      title: 'Fly Fishing',
      icon: 'mdi-fish',
      season: 'Apr – Oct',
      blurb:
        'Multi-day trips to alpine lakes and the Rio Grande gorge chasing wild cutthroat and brown trout, with streamside camps and full gear.',
      image:
        'https://images.unsplash.com/photo-1445307806294-bff7f67ff225?auto=format&fit=crop&w=1200&q=80',
    },
    {
      slug: 'backpacking',
      title: 'Backpacking',
      icon: 'mdi-hiking',
      season: 'Jun – Sep',
      blurb:
        'Point-to-point and basecamp routes through the Pecos Wilderness and Wheeler Peak — navigation, meals, and route planning all dialed in.',
      image:
        'https://images.unsplash.com/photo-1501554728187-ce583db33af7?auto=format&fit=crop&w=1200&q=80',
    },
    {
      slug: 'skiing',
      title: 'Backcountry Skiing',
      icon: 'mdi-ski',
      season: 'Dec – Mar',
      blurb:
        'Hut-to-hut and overnight ski tours with avalanche-certified guides, earning turns on the powder-laden slopes above tree line.',
      image:
        'https://images.unsplash.com/photo-1551524559-8af4e6624178?auto=format&fit=crop&w=1200&q=80',
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
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=80',
  },

  // Gallery grid. `span` lets a few tiles go wide for a dynamic masonry feel.
  gallery: [
    { src: 'https://images.unsplash.com/photo-1475924156734-496f6ceb6e7d?auto=format&fit=crop&w=1200&q=80', alt: 'Alpenglow on snow-capped peaks at dusk', span: 'wide' },
    { src: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=900&q=80', alt: 'Tent under a star-filled night sky' },
    { src: 'https://images.unsplash.com/photo-1533873984035-25970ab07461?auto=format&fit=crop&w=900&q=80', alt: 'Backcountry skier descending a powder slope' },
    { src: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=900&q=80', alt: 'Fly fisher casting on an alpine river' },
    { src: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80', alt: 'Mountain lake reflecting forested slopes', span: 'wide' },
    { src: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=900&q=80', alt: 'Campfire glowing at a backcountry camp' },
  ],
}

export default site
