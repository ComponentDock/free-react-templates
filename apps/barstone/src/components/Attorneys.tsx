import { attorneys } from '../data'
import { SocialIcon } from './SocialIcon'

const socials = ['Twitter', 'Instagram', 'Facebook'] as const

/** Cream attorneys band: portrait cards whose hover/focus overlay carries that partner's e-mail. */
export function Attorneys() {
  return (
    <section id="attorneys" className="bg-cream px-4 py-[70px] md:py-[80px] xl:py-[130px]">
      <div className="mx-auto max-w-[1140px]">
        <div className="mx-auto mb-[81px] max-w-[640px] text-center">
          <h2 className="mb-[27px] text-[26px] leading-[1.25] font-bold text-ink xl:text-[36px]">
            {attorneys.heading}
          </h2>
          <p className="text-[15px] text-muted">{attorneys.intro}</p>
        </div>

        <div className="grid gap-[30px] sm:grid-cols-2 xl:grid-cols-3">
          {attorneys.people.map((person) => (
            <article key={person.name}>
              <div className="group relative overflow-hidden">
                <img
                  src={person.portrait}
                  alt={person.alt}
                  width={560}
                  height={640}
                  loading="lazy"
                  className="h-[420px] w-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-ink/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-within:opacity-100">
                  <a
                    href={`mailto:${person.email}`}
                    className="font-sans text-[15px] text-white underline underline-offset-4"
                  >
                    {person.email}
                  </a>
                  <ul className="flex items-center gap-[7px]">
                    {socials.map((network) => (
                      <li key={network}>
                        <a
                          href="#contact"
                          aria-label={`${person.name} on ${network}`}
                          className="block text-white transition-colors hover:text-gold-soft"
                        >
                          <SocialIcon network={network} className="size-[15px]" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <h3 className="mt-[26px] text-center text-[22px] font-medium text-ink">
                {person.name}
              </h3>
              <p className="mt-1 text-center text-[14px] text-muted">{person.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
