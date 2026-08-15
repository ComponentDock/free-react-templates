import { socials, teamBackdrop, teamLabel, teamMembers, teamTitle } from '../data'
import { BrandIcon } from './BrandIcon'
import { SectionHeading } from './SectionHeading'

export function Team() {
  return (
    <section aria-label={teamTitle} className="bg-white px-6 py-24">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading backdrop={teamBackdrop} label={teamLabel} title={teamTitle} />
        <div className="grid gap-12 md:grid-cols-3">
          {teamMembers.map((member) => (
            <article key={member.name} className="text-center">
              <img src={member.image} alt="" className="mb-4 w-full" />
              <h3 className="text-lg font-semibold text-ink">{member.name}</h3>
              <p className="mb-4 mt-1 text-sm uppercase tracking-wide text-caption">
                {member.caption}
              </p>
              <p className="mx-auto max-w-xs leading-[1.7] text-body">{member.bio}</p>
              <ul className="mt-6 flex items-center justify-center gap-3">
                {socials.map((social) => (
                  <li key={social.name}>
                    <a
                      href="#contact-section"
                      aria-label={`${member.name} on ${social.label}`}
                      className="inline-flex h-[50px] w-[50px] items-center justify-center rounded-full bg-sand/20 text-ink transition-colors hover:bg-sand hover:text-white"
                    >
                      <BrandIcon name={social.name} label={social.label} className="h-5 w-5" />
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
