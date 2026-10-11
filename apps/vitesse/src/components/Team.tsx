import { TEAM } from '../data/content'
import { FacebookIcon, LinkedinIcon, TwitterIcon } from './icons'
import { SectionHeading } from './SectionHeading'

const MEMBER_SOCIALS = [
  { label: 'Twitter', Icon: TwitterIcon },
  { label: 'Facebook', Icon: FacebookIcon },
  { label: 'LinkedIn', Icon: LinkedinIcon },
]

export function Team() {
  return (
    <section className="section-pad bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Our Team Members" title="The People Who Move Your Freight" />
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {TEAM.map((member) => (
            <article key={member.name} className="group relative overflow-hidden text-center">
              <img
                src={member.image}
                alt={member.name}
                loading="lazy"
                className="w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-[-36px] bg-white/60 pb-7 pt-5 transition-all duration-500 group-hover:bottom-0 group-hover:bg-accent">
                <h3 className="font-display text-xl font-bold text-dark transition-colors group-hover:text-white">
                  {member.name}
                </h3>
                <p className="text-body transition-colors group-hover:text-white/90">
                  {member.role}
                </p>
                <div className="mt-3 flex justify-center gap-3">
                  {MEMBER_SOCIALS.map(({ label, Icon }, i) => (
                    <a
                      key={label}
                      href="#top"
                      aria-label={`${member.name} on ${label}`}
                      style={{ transitionDelay: `${i * 0.1}s` }}
                      className="translate-y-3 text-[#8ba4b1] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-hover:text-white"
                    >
                      <Icon className="h-4 w-4" />
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
