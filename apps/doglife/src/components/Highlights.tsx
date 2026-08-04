import { Check } from 'lucide-react'

const columns = [
  {
    title: 'Happy Pets',
    seed: 'doglife-happy-pets',
  },
  {
    title: 'Modern Equipment',
    seed: 'doglife-modern-equipment',
  },
] as const

const features = [
  'Officia quaerat eaque neque',
  'Possimus aut consequuntur incidunt',
  'Lorem ipsum dolor sit amet',
  'Consectetur adipisicing elit',
  'Dolorum esse odio quas architecto sint',
] as const

export function Highlights() {
  return (
    <section id="doctor" className="bg-paper py-14 dark:bg-gray-900 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2">
          {columns.map((column) => (
            <article key={column.title}>
              <h2 className="font-serif text-2xl font-extrabold text-black dark:text-white">
                {column.title}
              </h2>
              <ul className="mt-6 space-y-4">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm font-light text-gray-600 dark:text-gray-300"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mint text-white">
                      <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <img
                src={`https://picsum.photos/seed/${column.seed}/640/420`}
                alt=""
                loading="lazy"
                className="mt-8 w-full rounded-lg"
              />
            </article>
          ))}
        </div>

        <div className="mt-20 grid items-center gap-12 md:grid-cols-2">
          <div>
            <img
              src="https://picsum.photos/seed/doglife-vet/520/560"
              alt=""
              loading="lazy"
              className="w-full rounded-lg"
            />
          </div>
          <div>
            <h2 className="font-serif text-3xl font-extrabold leading-tight text-black dark:text-white">
              Meet Jean Smith Our Dog Veterenarian
            </h2>
            <p className="mt-5 text-base font-light leading-relaxed text-gray-600 dark:text-gray-300">
              A small river named Duden flows by their place and supplies it with the necessary
              regelialia. It is a paradisematic country, in which roasted parts of sentences fly
              into your mouth.
            </p>
            <p className="mt-4 text-sm font-light leading-relaxed text-gray-500 dark:text-gray-400">
              Even the all-powerful Pointing has no control about the blind texts it is an almost
              unorthographic life.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
