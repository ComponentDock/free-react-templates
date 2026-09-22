import { useState } from 'react'
import { Bed, Coffee, Dumbbell, Headphones, Eye, Waves, Wifi, Wine } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const tabs = [
  {
    id: 'bedrooms',
    label: 'Master Bedrooms',
    icon: Bed,
    heading: 'Master Bedrooms',
    description:
      'Our master bedrooms feature king-size beds with premium linens, blackout curtains, and ambient lighting. Each room is designed for ultimate relaxation with en-suite bathrooms and city or sea views.',
  },
  {
    id: 'breakfast',
    label: 'Breakfast Buffet',
    icon: Coffee,
    heading: 'Breakfast Buffet',
    description:
      'Start your day with our complimentary breakfast buffet featuring fresh pastries, tropical fruits, local delicacies, and barista coffee served daily from 7am to 10am.',
  },
  {
    id: 'fitness',
    label: 'Fitness Center',
    icon: Dumbbell,
    heading: 'Fitness Center',
    description:
      'Stay active in our state-of-the-art fitness center equipped with modern cardio machines, free weights, and yoga mats. Open 24 hours for your convenience.',
  },
  {
    id: 'reception',
    label: '24 Hour Reception',
    icon: Headphones,
    heading: '24 Hour Reception',
    description:
      'Our friendly reception team is available around the clock to assist with check-in, local recommendations, transportation arrangements, and any special requests.',
  },
  {
    id: 'seaview',
    label: 'Sea View Balcony',
    icon: Eye,
    heading: 'Sea View Balcony',
    description:
      'Enjoy breathtaking panoramic ocean views from your private balcony. Each sea-facing room includes furnished outdoor space perfect for morning coffee or evening sunsets.',
  },
  {
    id: 'pool',
    label: 'Pool & Spa',
    icon: Waves,
    heading: 'Pool & Spa',
    description:
      'Unwind at our infinity pool overlooking the coastline or indulge in a range of spa treatments including massage therapy, facials, and aromatherapy sessions.',
  },
  {
    id: 'wifi',
    label: 'Free WiFi',
    icon: Wifi,
    heading: 'Free WiFi',
    description:
      'Complimentary high-speed WiFi is available throughout the property including rooms, lobby, pool area, and restaurant. Stream, work, or browse without limits.',
  },
  {
    id: 'restaurant',
    label: 'Restaurant & Bar',
    icon: Wine,
    heading: 'Restaurant & Bar',
    description:
      'Savor locally sourced cuisine at our on-site restaurant featuring indoor and outdoor seating. Our bar serves craft cocktails, fine wines, and international spirits until midnight.',
  },
]

export function Services() {
  const [active, setActive] = useState(0)

  return (
    <section id="services" className="bg-lounge-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand">
            Our Amenities
          </p>
          <h2 className="font-heading text-3xl font-bold text-lounge-900 md:text-4xl">
            Discover what we offer
          </h2>
        </div>

        <div className="flex flex-col gap-8 md:flex-row">
          {/* Tab list */}
          <div className="flex flex-row flex-wrap gap-2 md:w-1/3 md:flex-col">
            {tabs.map((tab, i) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActive(i)}
                  className={cn(
                    'flex items-center gap-3 rounded-full px-5 py-3 text-sm font-medium transition-all',
                    i === active
                      ? 'bg-brand text-white shadow-md'
                      : 'bg-white text-lounge-600 hover:bg-lounge-100',
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </button>
              )
            })}
          </div>

          {/* Tab content */}
          <div className="flex flex-col items-start gap-4 md:w-2/3">
            {(() => {
              const tab = tabs[active]!
              const Icon = tab.icon
              return <Icon className="h-10 w-10 text-brand" />
            })()}
            <h3 className="font-heading text-2xl font-bold text-lounge-900">
              {tabs[active]!.heading}
            </h3>
            <p className="leading-relaxed text-lounge-500">{tabs[active]!.description}</p>
            <button className="mt-2 rounded bg-brand px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-hover">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
