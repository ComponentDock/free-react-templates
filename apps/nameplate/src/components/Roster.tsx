import { ROSTER, STUDIO } from '../content'
import { ProfileCard } from './ProfileCard'

/**
 * The whole design: one sand band, a centred eyebrow + headline, and a
 * four-card roster. The grid is `repeat(auto-fit, minmax(240px, 1fr))` with a
 * 24px gap — that single rule produces the 1/2/3/4 column ladder, so there is
 * no width media query to maintain.
 */
export function Roster() {
  return (
    <main className="flex-1 bg-sand font-sans text-ink">
      <div className="mx-auto max-w-[1232px] px-4 py-[clamp(32px,6vw,72px)]">
        <header className="mb-8 text-center">
          <p className="m-0 text-[13px] font-bold uppercase leading-[1.2] tracking-[0.12em] text-ember">
            {STUDIO.eyebrow}
          </p>
          <h1 className="mt-2 text-[clamp(26px,3.4vw,36px)] font-bold leading-[1.2] tracking-[-0.02em] text-ink">
            {STUDIO.title}
          </h1>
        </header>

        <ul className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6 p-0">
          {ROSTER.map((profile) => (
            <li key={profile.name} className="flex">
              <ProfileCard profile={profile} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
