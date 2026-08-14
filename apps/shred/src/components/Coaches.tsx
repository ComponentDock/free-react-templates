import { COACHES, SOCIALS } from '../data'
import { SOCIAL_ICONS } from './SocialIcons'
import { cn } from '@free-react-templates/ui'

/* Our Coaches — row of four trainer cards: 200px circular photo, name,
   uppercase coral position and a row of social icon circles. */
export function Coaches() {
  return (
    <section id="coaches-section" aria-label="Coaches" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-xl text-center">
          <span className="text-[13px] font-bold uppercase tracking-[3px] text-brand">
            Trainers
          </span>
          <h2 className="mt-2 text-4xl font-semibold text-black">Our Coaches</h2>
          <p className="mt-4 text-mist">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>

        <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {COACHES.map((coach) => (
            <li key={coach.name} className="text-center">
              <img
                src={coach.photo}
                alt={`${coach.name} portrait`}
                className="mx-auto h-48 w-48 rounded-full object-cover object-top"
              />
              <h3 className="mt-6 text-2xl font-normal text-black">{coach.name}</h3>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-brand">
                {coach.position}
              </p>
              <div className="mt-4 flex justify-center gap-3">
                {SOCIALS.map((social) => {
                  const Icon = SOCIAL_ICONS[social.key]
                  return (
                    <a
                      key={social.key}
                      href={social.href}
                      aria-label={social.label}
                      className={cn(
                        'inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-black/60 transition-colors',
                        'hover:border-brand hover:text-brand',
                      )}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  )
                })}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
