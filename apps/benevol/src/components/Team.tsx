import { FacebookIcon, InstagramIcon, TwitterIcon } from './social-icons'
import { TEAM_HEADING, TEAM_INTRO, TEAM_MEMBERS } from '../data'

const SOCIAL_ICONS = [FacebookIcon, TwitterIcon, InstagramIcon]
const SOCIAL_LABELS = ['Facebook', 'Twitter', 'Instagram']

/**
 * Team — "Our Leadership" section with three member cards: circular
 * avatar, dark legible name (the source renders white-on-white names,
 * a bug we fix), uppercase grey role, blurb, and three orange circular
 * social buttons.
 */
export function Team() {
  return (
    <section id="team-section" aria-label="Our leadership" className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl uppercase tracking-[0.1rem] text-black md:text-6xl">
            {TEAM_HEADING}
          </h2>
          <p className="mt-5 text-gray-500">{TEAM_INTRO}</p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.name} className="rounded border border-line p-8 text-center">
              <img
                src={member.image}
                alt={`Portrait of ${member.name}`}
                className="mx-auto h-[130px] w-[130px] rounded-full object-cover"
              />
              <h3 className="mt-5 font-display text-xl uppercase tracking-[0.1rem] text-ink">
                {member.name}
              </h3>
              <span className="mt-2 block text-xs uppercase tracking-[0.1rem] text-role">
                {member.role}
              </span>
              <p className="mt-4 text-gray-500">{member.blurb}</p>
              <div className="mt-5 flex justify-center gap-2">
                {SOCIAL_ICONS.map((Icon, iconIndex) => (
                  <a
                    key={SOCIAL_LABELS[iconIndex]}
                    href="#team-section"
                    aria-label={`${member.name} on ${SOCIAL_LABELS[iconIndex]}`}
                    className="flex h-[30px] w-[30px] items-center justify-center rounded border-2 border-transparent bg-primary-600 text-white transition-colors hover:border-primary-600 hover:bg-transparent hover:text-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/40"
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
