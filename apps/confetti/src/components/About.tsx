import { MapPin, Calendar } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="bg-paper py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
              The Biggest Digital Conference.
            </h2>
            <p className="mt-6 leading-relaxed text-mist">
              Join thousands of designers, developers, and creative professionals at the largest
              digital conference of the year. Experience cutting-edge talks, hands-on workshops, and
              unparalleled networking opportunities.
            </p>
            <p className="mt-4 leading-relaxed text-mist">
              From keynote speakers to interactive sessions, every moment is crafted to inspire and
              elevate your creative journey.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold uppercase text-ink dark:text-white">
                    Where
                  </h3>
                  <p className="mt-1 text-sm text-mist">New York, United States</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold uppercase text-ink dark:text-white">
                    When
                  </h3>
                  <p className="mt-1 text-sm text-mist">Jan. 21, 2025</p>
                </div>
              </div>
            </div>

            <a
              href="#"
              className="mt-8 inline-block rounded bg-brand px-8 py-4 font-display text-sm font-semibold uppercase tracking-wide text-white hover:bg-brand-dark"
            >
              Get Your Ticket
            </a>
          </div>

          <div className="relative">
            <img
              src="https://picsum.photos/seed/confetti-about/800/600"
              alt="Conference stage"
              className="h-full w-full rounded object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
