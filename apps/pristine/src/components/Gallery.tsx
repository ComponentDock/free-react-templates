import { ArrowRight } from 'lucide-react'

const tiles = [
  {
    title: 'Office Deep Clean',
    text: 'A complete top-to-bottom office refresh after renovation works.',
    img: 'https://picsum.photos/seed/pristine-gallery-1/900/580',
  },
  {
    title: 'Home Move-Out',
    text: 'Leaving a home sparkling for the next family — guaranteed.',
    img: 'https://picsum.photos/seed/pristine-gallery-2/900/580',
  },
] as const

/** Two half-width, tall (580px) background photo tiles. Hover slides a
 *  caption in — white title + blurb + yellow circular arrow link. */
export function Gallery() {
  return (
    <section id="gallery" className="bg-white">
      <div className="grid md:grid-cols-2">
        {tiles.map((tile) => (
          <figure
            key={tile.title}
            className="group relative h-[400px] overflow-hidden lg:h-[580px]"
          >
            <img
              src={tile.img}
              alt={tile.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-navy/0 transition-colors duration-300 group-hover:bg-navy/40" />
            <figcaption className="absolute inset-x-0 bottom-0 translate-y-full p-10 text-white transition-transform duration-500 group-hover:translate-y-0">
              <h3 className="text-3xl font-semibold">{tile.title}</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/90">{tile.text}</p>
              <a
                href="#contact"
                aria-label={`View the ${tile.title} project`}
                className="mt-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-navy transition-colors hover:bg-accent-dark"
              >
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
