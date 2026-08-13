import { teamMembers } from '../data'
import { socialLinks } from './social-icons'

/** Team section: "Our Leadership" heading + three bordered rounded cards
 *  with photo, name, role, blurb and a row of social icon links. */
export function Team() {
  return (
    <section id="team-section" data-testid="team" className="bg-white py-28">
      <div className="mx-auto max-w-[1140px] px-4">
        <div className="block-heading mb-5">
          <span className="eyebrow">Our Team</span>
          <h2>Our Leadership</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              data-testid="team-card"
              className="rounded border border-[#e9ecef] p-[30px] text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="mx-auto h-40 w-40 rounded object-cover"
                loading="lazy"
              />
              <h3 className="mt-4 text-xl font-bold text-black">{member.name}</h3>
              <p className="mt-1 text-sm font-bold uppercase tracking-wide text-brand">
                {member.role}
              </p>
              <p className="mt-3 text-body">{member.blurb}</p>
              <div className="mt-5 flex justify-center gap-3">
                {socialLinks.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand transition-colors hover:bg-brand hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
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
