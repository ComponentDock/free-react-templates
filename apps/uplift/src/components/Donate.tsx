import { useState } from 'react'
import { Award, HeartHandshake, ShieldCheck } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const amounts = ['$25', '$50', '$100', '$250', 'Custom'] as const

const badges = [
  { icon: ShieldCheck, label: '100% Tax Deductible' },
  { icon: Award, label: 'Charity Navigator 4-Star' },
]

export function Donate() {
  const [selected, setSelected] = useState<string>('$50')

  return (
    <section id="donate" className="bg-gray-900 py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          Every Dollar Makes a Difference
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
          Choose an amount below. Your gift helps fund education, healthcare and opportunity for
          communities that need it most.
        </p>

        <div
          role="group"
          aria-label="Donation amount"
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          {amounts.map((amount) => (
            <button
              key={amount}
              type="button"
              onClick={() => setSelected(amount)}
              aria-pressed={selected === amount}
              className={cn(
                'rounded-full border-2 px-6 py-3 text-base font-bold transition-colors',
                selected === amount
                  ? 'border-primary-500 bg-primary-600 text-white'
                  : 'border-gray-600 bg-gray-800 text-gray-200 hover:border-primary-500 hover:text-white',
              )}
            >
              {amount}
            </button>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:donate@uplift.org?subject=Donation"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-600 px-10 py-4 text-lg font-bold text-white shadow-lg shadow-primary-600/25 transition-colors hover:bg-primary-700"
          >
            <HeartHandshake className="h-5 w-5" aria-hidden="true" />
            Donate {selected}
          </a>
        </div>

        <ul className="mt-10 flex flex-wrap items-center justify-center gap-6">
          {badges.map((badge) => (
            <li
              key={badge.label}
              className="flex items-center gap-2 text-sm font-medium text-gray-300"
            >
              <badge.icon className="h-5 w-5 text-primary-400" aria-hidden="true" />
              {badge.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
