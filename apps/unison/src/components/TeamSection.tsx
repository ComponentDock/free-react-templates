import { teamMembers } from '../data'
import { SectionTitle } from './SectionTitle'
import { BrandIcon, type SocialName } from './BrandIcon'

const socials: { label: string; name: SocialName }[] = [
  { label: 'Facebook', name: 'facebook' },
  { label: 'Twitter', name: 'twitter' },
  { label: 'Linkedin', name: 'linkedin' },
  { label: 'Instagram', name: 'instagram' },
]

/** Team grid (`.site-section.border-bottom`): 8 photo cards whose social
 *  icon bar slides up on hover/focus (`.team-member` token). */
export function TeamSection() {
  return (
    <section id="team-section" className="border-b border-black/10 py-[2.5em] md:py-[5em]">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle>Our Team</SectionTitle>
        <p className="mx-auto max-w-2xl text-center font-light text-gray-500">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <figure key={member.name} className="group text-center">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={member.photo}
                  alt={`${member.name} portrait`}
                  className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <ul
                  aria-label={`${member.name} social links`}
                  className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-center gap-4 bg-gradient-to-t from-black/70 to-transparent py-4 opacity-0 transition-all duration-300 group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  {socials.map((social) => (
                    <li key={social.label}>
                      <a
                        href="#home-section"
                        aria-label={social.label}
                        target="_blank"
                        rel="noreferrer"
                        className="text-white/90 transition-colors hover:text-brand"
                      >
                        <BrandIcon name={social.name} className="h-4 w-4" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <figcaption className="p-3">
                <h3 className="text-lg font-bold text-heading">{member.name}</h3>
                <span className="mt-1 block text-sm text-gray-500">{member.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
