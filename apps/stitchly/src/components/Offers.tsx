import { Scissors, Ruler, Shirt } from 'lucide-react'

const offers = [
  {
    icon: Scissors,
    title: 'Tailor Sewing',
    description:
      'Precision stitching and handcrafted tailoring for garments that fit perfectly and feel exceptional.',
  },
  {
    icon: Ruler,
    title: 'Measurement',
    description:
      'Accurate body measurements taken by experienced professionals to ensure the ideal fit every time.',
  },
  {
    icon: Shirt,
    title: 'Ready-made',
    description:
      'Curated collection of ready-to-wear pieces crafted with the same quality and attention to detail.',
  },
] as const

export function Offers() {
  return (
    <section className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          {offers.map((offer, index) => (
            <div key={offer.title} className="group text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-paper transition-colors group-hover:bg-brand/10 dark:bg-gray-900">
                <offer.icon className="h-10 w-10 text-brand" aria-hidden="true" />
              </div>
              <span className="mb-2 inline-block text-sm font-bold text-brand">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mb-3 font-display text-xl font-bold text-ink dark:text-white">
                <a href="#services" className="hover:text-brand transition-colors">
                  {offer.title}
                </a>
              </h3>
              <p className="text-sm leading-relaxed text-mist">{offer.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
