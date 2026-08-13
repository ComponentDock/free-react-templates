import { aboutCards, aboutText } from '../data'

export function AboutUs() {
  return (
    <section id="about" aria-label="About us" className="site-section py-10 md:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-ink md:text-3xl">About Us</h2>
            <p className="mt-4 font-light text-gray-500">{aboutText}</p>
          </div>
          <div className="flex gap-6">
            <a
              href="#about"
              className="text-sm font-medium text-primary transition-colors hover:text-primary-700"
            >
              Join Volunteer
            </a>
            <a
              href="#blog"
              className="text-sm font-medium text-primary transition-colors hover:text-primary-700"
            >
              Blog
            </a>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {aboutCards.map((card) => (
            <article key={card.title} className="block-21 flex items-start gap-4">
              <img
                src={card.thumb}
                alt={card.alt}
                className="h-20 w-28 flex-none rounded object-cover"
              />
              <div>
                <h3 className="text-base font-bold text-ink">{card.title}</h3>
                <p className="mt-2 text-sm font-light text-gray-500">{card.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
