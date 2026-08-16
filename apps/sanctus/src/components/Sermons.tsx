import { ButtonLink } from '@free-react-templates/ui'
import { sermons } from '../data'

export function Sermons() {
  return (
    <section id="sermons" className="bg-white pb-28">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <span className="mb-4 block text-xs font-bold uppercase tracking-[0.1em] text-brand">
          {sermons.subheading}
        </span>
        <h2 className="text-3xl font-bold text-black sm:text-4xl">{sermons.heading}</h2>
      </div>
      <div className="mx-auto mt-14 grid max-w-7xl gap-8 px-6 md:grid-cols-3">
        {sermons.cards.map((card) => (
          <article key={card.seed}>
            <img
              src={`https://picsum.photos/seed/${card.seed}/800/600`}
              alt={card.alt}
              loading="lazy"
              className="mb-4 w-full rounded-lg object-cover"
            />
            <div className="px-2">
              <p className="mb-2 text-sm text-gray-400">{sermons.date}</p>
              <h3 className="mb-2 text-xl font-bold text-black">{sermons.title}</h3>
              <p className="mb-6 text-gray-600">{sermons.paragraph}</p>
              <ButtonLink
                href="#sermons"
                className="rounded-[0.2rem] border-2 border-transparent bg-brand px-2 py-1 text-sm font-bold uppercase tracking-[0.1em] text-white hover:border-transparent hover:bg-white hover:text-brand"
              >
                {sermons.ctaLabel}
              </ButtonLink>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
