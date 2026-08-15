import { Compass, Mountain, Sun } from 'lucide-react'
import { featureCards, featureImage, featureParagraph, featureTitle } from '../data'

const featureIcons = [Mountain, Sun, Compass] as const

export function Feature() {
  return (
    <section id="feature-section" className="bg-paper py-36 lg:py-44">
      <div className="mx-auto grid max-w-[1320px] items-center gap-16 px-6 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-7">
          <img src={featureImage} alt="" className="w-full object-cover" />
        </div>
        <div className="lg:col-span-5">
          <h2 className="font-heading text-4xl font-medium text-ink">{featureTitle}</h2>
          <p className="mt-6 text-[15px] leading-[1.8] text-muted">{featureParagraph}</p>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {featureCards.map((card) => {
              const Icon = featureIcons[featureCards.indexOf(card)]!
              return (
                <div key={card.place} className="text-center">
                  <Icon className="mx-auto h-7 w-7 text-ink" aria-hidden="true" />
                  <h3 className="mt-5 font-heading text-lg font-medium capitalize text-black">
                    {card.place}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{card.count}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
