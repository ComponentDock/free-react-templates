import { TEAM } from '../data'
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from './icons'
import { SectionHeading } from './SectionHeading'

/* Our Staff — six rounded, centered team cards: photo, Oswald name, role
   line (uppercase 12px, letter-spacing .1em, #b8b8b8), bio, social icons. */
export function Team() {
  return (
    <section id="staff" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          title="Our Staff"
          blurb="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((member) => (
            <article key={member.name} className="rounded bg-white text-center">
              <img
                src={member.image}
                alt={member.name}
                loading="lazy"
                className="mx-auto w-full max-w-[260px] rounded"
              />
              <h3 className="mt-5 font-display text-xl font-medium uppercase text-ink">
                {member.name}
              </h3>
              <p className="mt-1 text-xs font-bold uppercase tracking-[.1em] text-faint">
                {member.role}
              </p>
              <p className="mx-auto mt-3 max-w-xs text-smoke">{member.bio}</p>
              <div className="mt-4 flex items-center justify-center gap-3">
                {[
                  { label: 'Twitter', Icon: TwitterIcon },
                  { label: 'Facebook', Icon: FacebookIcon },
                  { label: 'Instagram', Icon: InstagramIcon },
                  { label: 'LinkedIn', Icon: LinkedinIcon },
                ].map(({ label, Icon }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={`${member.name} on ${label}`}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-light text-smoke transition-colors hover:bg-brand hover:text-white"
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
