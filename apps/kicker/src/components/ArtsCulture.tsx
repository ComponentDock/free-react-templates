import { Play } from 'lucide-react'
import { SectionTitle } from './SectionTitle'

const CULTURE_CARDS = [
  {
    kicker: 'Health',
    headline: "Substituting 'follow your passion' with 'find your purpose'",
    byline: 'by Sarah Chen',
    image: 'https://picsum.photos/seed/kicker-art1/400/250',
    hasVideo: false,
  },
  {
    kicker: 'Culture',
    headline: 'Ibuprofen should not be used for managing symptoms',
    byline: 'by Dr. Patel',
    image: 'https://picsum.photos/seed/kicker-art2/400/250',
    hasVideo: true,
  },
  {
    kicker: 'Health',
    headline: 'Fearing corona recession, France announces new measures',
    byline: 'by Jean-Luc',
    image: 'https://picsum.photos/seed/kicker-art3/400/250',
    hasVideo: false,
  },
]

export function ArtsCulture() {
  return (
    <section className="px-4 pb-8 lg:px-[88px]">
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
        <div className="xl:col-span-10">
          <SectionTitle title="Arts & Culture" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {CULTURE_CARDS.map((card) => (
              <article key={card.headline} className="group">
                <div className="relative overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.headline}
                    className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  {card.hasVideo && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-[90px] w-[90px] items-center justify-center rounded-full bg-white/90 shadow-lg transition-colors hover:bg-brand-red hover:text-white group-hover:bg-brand-red">
                        <Play className="ml-1 h-8 w-8 text-brand-red group-hover:text-white" />
                      </div>
                    </div>
                  )}
                </div>
                <div className="pt-5">
                  <span className="font-chivo text-[14px] font-bold capitalize text-brand-red">
                    {card.kicker}
                  </span>
                  <h3 className="mt-2 font-chivo text-[24px] font-bold leading-[1.4] text-ink transition-colors group-hover:text-brand-red lg:text-[30px]">
                    <a href="#">{card.headline}</a>
                  </h3>
                  <p className="mt-3 font-chivo text-[16px] font-bold text-ink">{card.byline}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        {/* Sidebar ad placeholder */}
        <div className="hidden xl:col-span-2 xl:block">
          <div className="flex h-[300px] items-center justify-center border border-gray-200 bg-gray-50">
            <span className="font-chivo text-[12px] text-gray-400">Ad Space</span>
          </div>
        </div>
      </div>
    </section>
  )
}
