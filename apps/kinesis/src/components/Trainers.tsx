import { cn } from '@free-react-templates/ui'
import { socials, trainers } from '../data'

/* Four trainer cards. On desktop each photo hides a blue name plate that
   reveals on hover at the vertical center; on mobile the plate is always
   visible in the bottom-left corner. */
export function Trainers() {
  return (
    <section id="trainers" aria-label="Fitness trainers" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center">
          <span className="text-[13px] font-bold uppercase tracking-wide text-primary">
            Trainer
          </span>
          <h2 className="mt-2 font-display text-3xl font-extrabold uppercase text-heading lg:text-[34px]">
            Fitness Trainer
          </h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trainers.map((trainer) => (
            <article key={trainer.name} className="group relative overflow-hidden bg-neutral-900">
              <img
                src={trainer.image}
                alt={trainer.name}
                className="h-[420px] w-full object-cover opacity-90"
              />
              <div
                className={cn(
                  'absolute right-0 top-1/2 w-3/4 -translate-y-1/2 bg-blue p-2 opacity-0 transition-opacity duration-300',
                  'group-hover:opacity-100',
                  'before:absolute before:-left-8 before:top-0 before:h-full before:w-12 before:bg-blue before:[transform:skew(-15deg)]',
                  'max-md:bottom-0 max-md:left-0 max-md:right-auto max-md:top-auto max-md:w-[70%] max-md:translate-y-0 max-md:opacity-100',
                )}
              >
                <div className="border border-dashed border-white/60 p-3">
                  <h3 className="font-display text-xl font-bold uppercase text-white">
                    {trainer.name}
                  </h3>
                  <p className="mt-0.5 text-xs uppercase tracking-wide text-white/80">
                    {trainer.role}
                  </p>
                  <ul className="mt-2 flex gap-3" aria-label={`${trainer.name} social links`}>
                    {socials.map((social) => (
                      <li key={social.name}>
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${social.name} profile of ${trainer.name}`}
                          className="text-white/80 transition-colors hover:text-primary"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            className="h-4 w-4"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d={social.path} />
                          </svg>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
