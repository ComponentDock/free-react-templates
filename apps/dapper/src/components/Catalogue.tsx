import { useState } from 'react'
import { ButtonLink } from '@free-react-templates/ui'

const tabs = [
  {
    name: 'Shaving',
    styles: ['Classic Wet Shave', 'Hot Towel Shave', 'Royal Shave', 'Beard Line Up'],
  },
  {
    name: 'Hair Cutting',
    styles: ['Classic Cut', 'Modern Fade', 'Textured Crop', 'Pompadour'],
  },
  {
    name: 'Styling',
    styles: ['Event Styling', 'Blow Dry Finish', 'Hair Straightening', 'Product Styling'],
  },
  {
    name: 'Coloring',
    styles: ['Full Color', 'Highlights', 'Beard Tint', 'Grey Blending'],
  },
] as const

export function Catalogue() {
  const [active, setActive] = useState<string>(tabs[0]!.name)

  return (
    <section
      id="gallery"
      className="bg-white py-20 transition-colors dark:bg-gray-950 lg:py-[120px]"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="relative">
          <img
            src="https://picsum.photos/seed/dapper-catalogue/720/640"
            alt="Close-up of a barber at work"
            className="aspect-[9/8] w-full rounded-md object-cover blur-[1px]"
          />
        </div>
        <div className="rounded-xl border border-gray-100 bg-paper p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:p-10">
          <h2 className="font-display text-3xl font-bold uppercase text-ink dark:text-white">
            Select Your Style
          </h2>
          <div className="mt-6 flex flex-wrap gap-2" role="tablist" aria-label="Style categories">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                type="button"
                role="tab"
                aria-selected={active === tab.name}
                onClick={() => setActive(tab.name)}
                className={`rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-colors ${
                  active === tab.name
                    ? 'bg-brand text-white'
                    : 'bg-white text-mist hover:text-brand dark:bg-gray-950 dark:text-gray-300'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
          <ul className="mt-6 space-y-3">
            {tabs
              .filter((tab) => tab.name === active)
              .flatMap((tab) => tab.styles)
              .map((style) => (
                <li
                  key={style}
                  className="flex items-center gap-3 border-b border-dashed border-gray-200 pb-3 text-sm text-mist dark:border-gray-700 dark:text-gray-300"
                >
                  <span className="h-2 w-2 rounded-full bg-brand" aria-hidden="true" />
                  {style}
                </li>
              ))}
          </ul>
          <div className="mt-8">
            <ButtonLink
              href="#barbers"
              className="rounded-full bg-gradient-to-r from-brand to-brand-light px-8 uppercase tracking-wide hover:from-brand-dark hover:to-brand"
            >
              View Gallery...
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
