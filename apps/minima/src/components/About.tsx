import { Palette, Code, Layers, Smartphone, Search } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const services = [
  { icon: Palette, title: 'UI/UX Design' },
  { icon: Code, title: 'Web Development' },
  { icon: Layers, title: 'Product Design' },
  { icon: Smartphone, title: 'Mobile Apps' },
  { icon: Search, title: 'SEO' },
]

export function About() {
  return (
    <>
      {/* Services */}
      <section id="services" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-extrabold text-ink">About us</h2>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {services.map((s) => (
              <div
                key={s.title}
                className="flex flex-col items-center rounded-lg bg-surface-alt py-8 text-center transition-shadow hover:shadow-md"
              >
                <s.icon className="mb-4 h-10 w-10 text-brand" aria-hidden="true" />
                <h3 className="text-sm font-bold text-ink">{s.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About text */}
      <section id="about" className="bg-surface-alt py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <h2 className="mb-6 text-3xl font-extrabold text-ink">
                Welcome to Minima — A Personal Portfolio Web Agency
              </h2>
              <p className="text-muted">
                Separated they live in Bookmarksgrove right at the coast of the Semantics, a large
                language ocean. A small river named Duden flows by their place and supplies it with
                the necessary regelialia. It is a paradisematic country, in which roasted parts of
                sentences fly into your mouth.
              </p>
            </div>
            <div className={cn('order-1 lg:order-2')}>
              <img
                src="https://picsum.photos/seed/minima-about/600/400"
                alt="Our team collaborating in the office"
                className="w-full rounded-lg object-cover shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
