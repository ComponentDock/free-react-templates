import { Hand, Leaf, Bath, Sparkles, Smile, Gem } from 'lucide-react'

const featured = [
  { title: 'Massage', blurb: 'Far far away, behind the word mountains.', icon: Hand },
  { title: 'Tea Therapy', blurb: 'Separated they live in Bookmarksgrove.', icon: Leaf },
  { title: 'Hand & Foot Spa', blurb: 'A small river named Duden flows by.', icon: Bath },
  { title: 'Body Treatments', blurb: 'It is a paradisematic country.', icon: Sparkles },
  { title: 'Facials', blurb: 'The Big Oxmox advised her not to do so.', icon: Smile },
  { title: 'Waxing', blurb: 'She packed her seven versalia.', icon: Gem },
] as const

export function Featured() {
  return (
    <section id="featured" className="relative overflow-hidden bg-ink py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-brand">
          Featured
        </p>
        <h2 className="mt-3 text-center font-display text-3xl text-white sm:text-4xl">
          Discover the Best Beauty Salon Center
        </h2>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur"
              >
                <Icon
                  className="mx-auto h-10 w-10 text-brand"
                  aria-hidden="true"
                  strokeWidth={1.5}
                />
                <h3 className="mt-5 font-display text-xl text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-300">{item.blurb}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
