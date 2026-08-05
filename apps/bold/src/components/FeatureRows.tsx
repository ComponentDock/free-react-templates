import { ButtonLink } from '@free-react-templates/ui'

const rows = [1, 2, 3] as const

export function FeatureRows() {
  return (
    <section className="bg-white py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl space-y-24 px-4 sm:px-6">
        {rows.map((row, index) => (
          <div
            key={row}
            className={`grid items-center gap-12 lg:grid-cols-2 ${
              index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
            }`}
          >
            <div>
              <h2 className="font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
                Far far away Behind the Word Mountains
              </h2>
              <p className="mt-6 leading-relaxed text-muted dark:text-gray-400">
                Far far away, behind the word mountains, far from the countries Vokalia and
                Consonantia — a feature built to make your everyday work feel effortless.
              </p>
              <ButtonLink href="#contact" className="mt-10 rounded-full px-10">
                Learn more
              </ButtonLink>
            </div>

            <div className="flex justify-center">
              <img
                src={`https://picsum.photos/seed/bold-feature-${row}/600/450`}
                alt={`Bold feature illustration ${row}`}
                className="w-full max-w-md rounded-2xl border border-gray-100 object-cover shadow-xl dark:border-gray-800"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
