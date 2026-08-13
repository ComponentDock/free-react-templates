import { teamMembers } from '../data'
import { BrandIcon } from './BrandIcon'

const teamSocials = ['twitter', 'facebook', 'linkedin'] as const

/** Leadership section (reference `.site-section`): three centered team cards
 *  with a round photo, readable name ink (upstream used white-on-white text —
 *  recreated with dark ink), an uppercase role, a bio, and social buttons. */
export function Leadership() {
  return (
    <section
      id="press"
      aria-label="Our Leadership"
      className="mx-auto max-w-7xl px-4 py-24 lg:px-8"
    >
      <div className="text-center">
        <p className="text-xs font-bold tracking-[0.2em] text-[#b8b8b8] uppercase">The Team</p>
        <h2 className="mt-2 font-heading text-4xl font-bold text-[#25262a]">Our Leadership</h2>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-3">
        {teamMembers.map(({ name, role, bio, image }) => (
          <div key={name} className="border border-[#e9ecef] p-8 text-center">
            <img
              src={image}
              alt={name}
              className="mx-auto h-[130px] w-[130px] rounded-full object-cover"
              loading="lazy"
            />
            <h3 className="mt-6 font-heading text-xl font-bold text-[#25262a]">{name}</h3>
            <p className="mt-1 text-xs font-bold tracking-[0.15em] text-[#b8b8b8] uppercase">
              {role}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[#939393]">{bio}</p>
            <div className="mt-6 flex justify-center gap-3">
              {teamSocials.map((name) => (
                <a
                  key={name}
                  href="#press"
                  aria-label={name}
                  className="flex h-10 w-10 items-center justify-center rounded-sm border-2 border-gray-200 text-[#25262a] transition-colors hover:border-primary-600 hover:text-primary-600"
                >
                  <BrandIcon name={name} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
