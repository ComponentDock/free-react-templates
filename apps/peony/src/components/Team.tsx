import { cn } from '@free-react-templates/ui'

const members = [
  { name: 'Danica Lewis', role: 'Hair Stylist' },
  { name: 'Nicole Simon', role: 'Nail Master' },
  { name: 'Cloe Meyer', role: 'Director' },
  { name: 'Rachel Clinton', role: 'Hair Stylist' },
  { name: 'Dave Buff', role: 'Barber' },
] as const

const avatarStyles = [
  'bg-brand/20 text-brand',
  'bg-blush/40 text-plum',
  'bg-plum/10 text-plum',
  'bg-brand/10 text-brand-dark',
  'bg-blush/30 text-plum',
] as const

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

export function Team() {
  return (
    <section id="team" className="bg-white py-20 transition-colors dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">
            Makeup Artist
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">
            Stylist
          </h2>
          <p className="mt-4 text-mist dark:text-white/60">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {members.map((member, index) => (
            <li
              key={member.name}
              className="flex flex-col items-center rounded-2xl border border-plum/10 p-6 text-center transition-colors hover:border-brand/40 dark:border-white/10"
            >
              <span
                aria-hidden="true"
                className={cn(
                  'flex h-20 w-20 items-center justify-center rounded-full font-display text-xl font-semibold',
                  avatarStyles[index]!,
                )}
              >
                {initials(member.name)}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold">{member.name}</h3>
              <p className="mt-1 text-sm text-mist dark:text-white/60">{member.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
