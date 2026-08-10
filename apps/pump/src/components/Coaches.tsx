import { BrandIcon } from './BrandIcon'

interface Coach {
  name: string
  role: string
  copy: string
  image: string
}

const coaches: Coach[] = [
  {
    name: 'Mark Brook',
    role: 'Owner / Head Coach',
    copy: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    image: 'https://picsum.photos/seed/pump-coach-1/400/340',
  },
  {
    name: 'Sarah Henderson',
    role: 'Fitness Coach',
    copy: 'It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    image: 'https://picsum.photos/seed/pump-coach-2/400/340',
  },
  {
    name: 'George Hump',
    role: 'Bodybuilding Coach',
    copy: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
    image: 'https://picsum.photos/seed/pump-coach-3/400/340',
  },
  {
    name: 'Victor Hump',
    role: 'Cardio Coach',
    copy: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    image: 'https://picsum.photos/seed/pump-coach-4/400/340',
  },
] as const

const socials = ['facebook', 'twitter', 'instagram'] as const

export function Coaches() {
  return (
    <section id="coaches" className="bg-cloud py-20 transition-colors dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-brand">
            Shape Your Body
          </p>
          <h2 className="font-display text-4xl font-black uppercase text-ink dark:text-white">
            Our Coaches
          </h2>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {coaches.map((coach) => (
            <article
              key={coach.name}
              className="overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-lg dark:bg-gray-800"
            >
              <img src={coach.image} alt={coach.name} className="h-64 w-full object-cover" />
              <div className="p-6">
                <h3 className="font-display text-lg font-bold uppercase text-ink dark:text-white">
                  {coach.name}
                </h3>
                <p className="mt-1 text-sm font-semibold text-brand">{coach.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-mist dark:text-gray-400">
                  {coach.copy}
                </p>
                <div className="mt-4 flex gap-3">
                  {socials.map((social) => (
                    <a
                      key={social}
                      href="#coaches"
                      aria-label={`${coach.name} on ${social}`}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-cloud text-mist transition-colors hover:bg-brand hover:text-white dark:bg-gray-700 dark:text-gray-300"
                    >
                      <BrandIcon name={social} className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
