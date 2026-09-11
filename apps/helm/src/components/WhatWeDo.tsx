import { ButtonLink } from '@free-react-templates/ui'

const cards = [
  {
    image: 'https://picsum.photos/seed/helm-feat1/600/400',
    title: 'Title Name Here',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, officiis quo dicta molestias debitis.',
  },
  {
    image: 'https://picsum.photos/seed/helm-feat2/600/400',
    title: 'Title Name Here',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, officiis quo dicta molestias debitis.',
  },
  {
    image: 'https://picsum.photos/seed/helm-feat3/600/400',
    title: 'Title Name Here',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, officiis quo dicta molestias debitis.',
  },
] as const

export function WhatWeDo() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-400">
            What We do
          </span>
          <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
            The technology for the future generation
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis provident eius
            ratione velit, voluptas laborum nemo quas ad necessitatibus placeat?
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {cards.map((card) => (
            <div key={card.title} className="overflow-hidden rounded-lg">
              <img
                src={card.image}
                alt={card.title}
                className="h-56 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-ink">{card.title}</h3>
                <p className="mt-3 text-sm text-gray-500">{card.description}</p>
                <ButtonLink
                  href="#"
                  className="mt-4 inline-block text-sm font-semibold text-primary-400 transition-colors hover:text-primary-500"
                >
                  Learn More
                </ButtonLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
