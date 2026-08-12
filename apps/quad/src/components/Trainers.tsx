import { SOCIAL_LINKS, SOCIAL_PATHS, TRAINERS } from '../data'

/* Trainers (source: section.trainer_area — "Our Expert Trainers" title,
   four cards with portrait, name, designation, blurb and four social icon
   links). */
export function Trainers() {
  return (
    <section id="trainers" className="bg-white pb-[100px] pt-[100px]">
      <div className="mx-auto max-w-[1140px] px-[15px]">
        <div className="mx-auto mb-16 max-w-[540px] text-center">
          <h2 className="font-heading text-[36px] font-bold text-primary">Our Expert Trainers</h2>
          <p className="mt-4 text-[16px] leading-[25px] text-muted">
            If you are looking at blank cassettes on the web, you may be very confused.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {TRAINERS.map((trainer) => (
            <article key={trainer.name} className="text-center">
              <div className="flex justify-center">
                <img
                  src={trainer.image}
                  alt=""
                  loading="lazy"
                  className="h-[320px] w-[270px] object-cover"
                />
              </div>
              <div className="mt-6">
                <h3 className="font-heading text-[20px] font-medium text-primary">
                  {trainer.name}
                </h3>
                <p className="mt-1 text-[14px] text-muted">Sr. web designer</p>
                <p className="mx-auto mt-4 max-w-[260px] text-[14px] leading-[22px] text-muted">
                  If you are looking at blank cassettes on the web, you may be very confused at the
                  difference in price.
                </p>
                <div className="mt-5 flex justify-center gap-3">
                  {SOCIAL_LINKS.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={`${trainer.name} on ${social.label}`}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/20 text-primary transition-colors hover:bg-primary hover:text-accent"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path d={SOCIAL_PATHS[social.label]} />
                      </svg>
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
