import { Shield, Smartphone, UserCheck, Zap } from 'lucide-react'

const points = [
  { label: 'Smart.', icon: Zap },
  { label: 'User-Friendly.', icon: UserCheck },
  { label: 'Powerful.', icon: Shield },
  { label: 'Secure.', icon: Smartphone },
] as const

export function About() {
  return (
    <section id="about" aria-label="About" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-bold leading-tight text-ink dark:text-gray-100">
            The Most Popular And Number 1 Mail App.
          </h2>
          <p className="mt-5 leading-relaxed text-smoke dark:text-gray-400">
            Etiam nec odio vestibulum est mattis efficitur ut magna. Pellentesque ultricies tellus a
            felis tincidunt, ac interdum arcu rutrum. Proin tempus lacus porta, imperdiet odio in,
            gravida risus.
          </p>
        </div>
        <ul className="grid grid-cols-2 gap-6">
          {points.map((point) => (
            <li
              key={point.label}
              className="rounded-2xl border border-primary-100 bg-gray-50 p-6 text-center dark:border-gray-800 dark:bg-gray-900"
            >
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-100/60 text-primary-400">
                <point.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <span className="mt-4 block font-display text-lg font-semibold text-ink dark:text-gray-100">
                {point.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
