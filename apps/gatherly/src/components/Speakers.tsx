import { speakers } from '../data'
import { socialLinks } from './social-icons'

/** Deep-blue (#0d0cb5) speakers band with four staff cards: photo, name
 *  split over two lines, role and four social icons (source #speakers-section
 *  .staff cards). */
export function Speakers() {
  return (
    <section id="speakers-section" data-testid="speakers" className="bg-speakers py-20 md:py-28">
      <div className="mx-auto max-w-[1240px] px-4">
        <p className="section-eyebrow text-white/60">{speakers.eyebrow}</p>
        <h2 className="section-title text-white">{speakers.heading}</h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-white/70">{speakers.intro}</p>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {speakers.list.map((speaker) => (
            <article key={`${speaker.firstName}-${speaker.lastName}`} className="text-center">
              <img
                src={speaker.image}
                alt={`${speaker.firstName} ${speaker.lastName}`}
                className="mx-auto h-40 w-40 rounded-full object-cover ring-4 ring-white/15"
              />
              <h3 className="mt-5 text-lg font-bold leading-snug text-white">
                {speaker.firstName}
                <br />
                {speaker.lastName}
              </h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-[0.15em] text-accent">
                {speaker.role}
              </p>
              <ul className="mt-4 flex justify-center gap-2">
                {socialLinks.map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      aria-label={label}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-accent hover:text-ink"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
