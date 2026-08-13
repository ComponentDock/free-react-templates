import { team, teamSocials } from '../data'
import { BrandIcon } from './BrandIcon'

/** Dark navy team section (reference `.team_member_section`): three bordered
 *  cards with grayscale photos, names, roles, and dotted social links. */
export function Team() {
  return (
    <section id="team" aria-label="Team" className="bg-navy py-24">
      <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
        <h2 className="font-heading text-[42px] font-bold text-white">Creative work for client</h2>
      </div>

      <div className="mx-auto mt-16 grid max-w-7xl gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {team.map(({ name, role, image }) => (
          <article
            key={name}
            className="rounded-lg border border-team-border bg-transparent p-5 text-center"
          >
            <img
              src={image}
              alt=""
              width={270}
              height={320}
              className="w-full object-cover grayscale"
              loading="lazy"
            />
            <h3 className="mt-6 font-heading text-[20px] font-medium text-white">{name}</h3>
            <p className="mt-2 text-sm text-dark-muted">{role}</p>
            <ul className="mt-5 flex items-center justify-center gap-2">
              {teamSocials.map((social, index) => (
                <li key={social} className="flex items-center gap-2">
                  {index > 0 ? (
                    <span
                      aria-hidden="true"
                      className="h-[10px] w-[10px] rounded-full bg-team-border"
                    />
                  ) : null}
                  <a
                    href="#team"
                    aria-label={social}
                    className="text-dark-muted transition-colors hover:text-primary-600"
                  >
                    <BrandIcon name={social} className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
