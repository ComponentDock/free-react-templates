import { imgUrl, stripImages } from '../data'

export function InstagramStrip() {
  return (
    <section
      aria-label="Instagram strip"
      className="border-t border-line bg-white dark:border-gray-800 dark:bg-gray-900"
    >
      <h2 className="py-5 text-center font-display text-lg font-semibold uppercase tracking-[0.2em] text-ink dark:text-gray-100">
        Instagram
      </h2>
      <ul className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7">
        {stripImages.map((image) => (
          <li key={image.seed}>
            <a href="#top" aria-label={image.alt} className="block overflow-hidden">
              <img
                src={imgUrl(image.seed, 300, 300)}
                alt={image.alt}
                className="aspect-square w-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
