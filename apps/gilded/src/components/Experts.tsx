import { Award } from 'lucide-react'

const experts = [
  {
    name: 'Mila Hartley',
    role: 'Hairdresser',
    img: 'https://picsum.photos/seed/gilded-exp1/400/400',
  },
  { name: 'Teigan Duran', role: 'Stylist', img: 'https://picsum.photos/seed/gilded-exp2/400/400' },
  {
    name: 'Tanya Ramsay',
    role: 'Hairstylist',
    img: 'https://picsum.photos/seed/gilded-exp3/400/400',
  },
  { name: 'Donna Carr', role: 'Barber', img: 'https://picsum.photos/seed/gilded-exp4/400/400' },
] as const

export function Experts() {
  return (
    <section id="experts" className="bg-paper py-20 transition-colors dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-[0.3em] text-brand">
            Meet the team
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Our Experts</h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {experts.map((expert) => (
            <article
              key={expert.name}
              className="overflow-hidden rounded-lg bg-white text-center shadow-sm transition-colors dark:bg-gray-900"
            >
              <img src={expert.img} alt={expert.name} className="h-56 w-full object-cover" />
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold">{expert.name}</h3>
                <p className="mt-1 text-sm text-brand">{expert.role}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 rounded-lg bg-ink px-8 py-8 text-white sm:flex-row">
          <Award className="h-10 w-10 shrink-0 text-brand" aria-hidden="true" />
          <p className="text-center text-sm leading-relaxed text-white/80 sm:text-left">
            Certified by the National Hairdressing Association — our team trains year-round on the
            latest coloring, cutting, and styling techniques.
          </p>
        </div>
      </div>
    </section>
  )
}
