import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { PEOPLE } from '../content'
import { SectionHead } from './SectionHead'

/** One member card: gradient initials, handle, chips, and a local Follow toggle. */
function PersonCard({ person }: { person: (typeof PEOPLE)[number] }) {
  const [following, setFollowing] = useState(false)

  return (
    <li className="flex h-full flex-col items-center rounded-3xl border border-gray-200 bg-white p-6 text-center">
      <span
        aria-hidden="true"
        className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary-400 via-primary-500 to-accent-500 text-lg font-extrabold text-white"
      >
        {person.initials}
      </span>
      <h3 className="mt-4 font-bold">{person.name}</h3>
      <p className="text-sm text-gray-500">{person.handle}</p>
      <p className="mt-3 text-sm leading-relaxed text-gray-600">{person.blurb}</p>
      <ul className="mt-4 flex flex-wrap justify-center gap-1.5">
        {person.circles.map((circle) => (
          <li
            key={circle}
            className="rounded-full bg-primary-50 px-2 py-0.5 text-[11px] font-semibold text-primary-700"
          >
            {circle}
          </li>
        ))}
      </ul>
      <p className="mt-4 mb-4 text-xs text-gray-500">
        {`In ${person.circles.length} ${person.circles.length === 1 ? 'circle' : 'circles'} with you`}
      </p>
      <button
        type="button"
        aria-pressed={following}
        onClick={() => setFollowing((value) => !value)}
        className={cn(
          'mt-auto w-full self-stretch pt-2.5',
          following ? 'btn-secondary' : 'btn-primary',
        )}
      >
        {following ? 'Following' : 'Follow'}
      </button>
    </li>
  )
}

/** Four members. No follower count anywhere — the band exists to say so. */
export function People() {
  return (
    <section id="people" aria-label="People" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHead
          pill="People"
          tone="accent"
          title="Real connections, not a follower count"
          lede="You will never see how many people someone knows. There is no number to compete on."
        />

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PEOPLE.map((person) => (
            <PersonCard key={person.name} person={person} />
          ))}
        </ul>
      </div>
    </section>
  )
}
