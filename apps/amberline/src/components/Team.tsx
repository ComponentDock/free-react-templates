import { socials, team } from '../data'
import { SocialIcon } from './SocialIcon'
import { SectionHeading } from './SectionHeading'

export function Team() {
  return (
    <section className="bg-page py-24 lg:py-32">
      <div className="mx-auto max-w-[1320px] px-4">
        <SectionHeading eyebrow="Team &amp; Staff" title="Qualified Engineers" />
        <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <li key={member.name} className="group">
              <div className="overflow-hidden rounded-[4px] bg-white shadow-[0_24px_48px_-13px_rgba(0,0,0,0.05)]">
                <div className="relative">
                  <img
                    src={`https://picsum.photos/seed/${member.seed}/620/840`}
                    alt={`${member.name}, ${member.role}`}
                    loading="lazy"
                    className="h-[420px] w-full object-cover object-top"
                  />
                  <ul className="absolute bottom-0 left-0 flex gap-[7px] p-2 opacity-0 transition-opacity group-focus-within:opacity-100 group-hover:opacity-100">
                    {socials.map((social) => (
                      <li key={social.label}>
                        <a
                          href={social.href}
                          aria-label={`${member.name} on ${social.label}`}
                          className="flex size-10 items-center justify-center rounded-full bg-ink text-white transition-colors hover:bg-brand hover:text-ink"
                        >
                          <SocialIcon network={social.label} className="size-4" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-[20px] text-center transition-colors group-hover:bg-brand group-focus-within:bg-brand">
                  <h3 className="text-[20px] font-medium text-ink group-hover:text-white group-focus-within:text-white">
                    {member.name}
                  </h3>
                  <p className="text-[14px] font-medium uppercase tracking-[0.06em] text-body">
                    {member.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
