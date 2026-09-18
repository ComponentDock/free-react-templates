import { ChevronRight } from 'lucide-react'

const CARDS = [
  {
    title: 'Our Church',
    text: 'A welcoming community of believers united in faith and dedicated to serving others with love and compassion.',
    image: 'https://picsum.photos/seed/crescent-about1/400/300',
  },
  {
    title: 'Our History',
    text: 'For over two decades, our congregation has grown from a small gathering to a thriving community of faith.',
    image: 'https://picsum.photos/seed/crescent-about2/400/300',
  },
  {
    title: 'Our Sermons',
    text: 'Explore our library of sermons designed to inspire, educate, and deepen your understanding of the Word.',
    image: 'https://picsum.photos/seed/crescent-about3/400/300',
  },
]

export function About() {
  return (
    <section className="bg-light-bg py-20 md:py-24" id="about" data-testid="about">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-2xl font-bold uppercase text-brand-dark md:text-3xl">
            Welcome To Church
          </h2>
          <p className="mx-auto max-w-2xl text-base text-body-text">
            A church isn&apos;t a building — it&apos;s the people. We meet in locations around the
            United States and globally at Crescent Online. No matter where you join us.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {CARDS.map((card) => (
            <div key={card.title} className="bg-white pb-10">
              <img
                src={card.image}
                alt={card.title}
                className="h-56 w-full object-cover"
                loading="lazy"
              />
              <div className="px-6 pt-6">
                <h4 className="mb-3 text-lg font-bold text-brand-dark">{card.title}</h4>
                <p className="mb-4 text-sm leading-relaxed text-body-text">{card.text}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-sm font-bold text-brand-dark transition-colors hover:text-brand"
                >
                  Read More <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
