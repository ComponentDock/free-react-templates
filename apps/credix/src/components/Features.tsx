import { ButtonLink } from '@free-react-templates/ui'

const imageCards = [
  { src: 'https://picsum.photos/seed/credix-feat1/400/300', title: 'We take care of you' },
  { src: 'https://picsum.photos/seed/credix-feat2/400/300', title: 'No documents needed' },
  { src: 'https://picsum.photos/seed/credix-feat3/400/300', title: 'Fast & easy loans' },
]

export function Features() {
  return (
    <section id="features" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Heading card */}
          <div>
            <div className="mb-4 h-1.5 w-6 rounded bg-gold-400" />
            <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-gray-400">
              Take a look at our
            </p>
            <h2 className="font-heading text-2xl font-bold text-gray-900">Our Loans</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-500">
              In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum
              eros hendrerit.
            </p>
            <ButtonLink
              href="#cta"
              className="mt-6 inline-block rounded bg-gold-400 px-6 py-2 text-sm font-bold text-navy-700 transition hover:bg-gold-500"
            >
              Discover
            </ButtonLink>
          </div>

          {/* Image cards */}
          {imageCards.map((card) => (
            <div key={card.title} className="overflow-hidden rounded-lg">
              <img
                src={card.src}
                alt={card.title}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <h5 className="mt-3 font-heading text-sm font-bold text-gray-900">{card.title}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
