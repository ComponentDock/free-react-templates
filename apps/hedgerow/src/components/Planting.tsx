import { Reveal } from './Reveal'
import { planting } from '../content'

/** Six plant cards with a fixed three-row definition list, then the green callout. */
export function Planting() {
  return (
    <section id="planting" className="scroll-mt-20 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="inline-flex rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold tracking-wider text-primary-800 uppercase">
            {planting.chip}
          </p>
          <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            {planting.title}
          </h2>
          <p className="mt-3 text-gray-600">{planting.lede}</p>
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {planting.items.map((plant) => (
            <li
              key={plant.name}
              className="rounded-2xl border border-accent-200 bg-white p-5"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-serif text-lg font-semibold text-gray-900">{plant.name}</h3>
                <span className="shrink-0 rounded bg-primary-50 px-2 py-0.5 text-[11px] font-semibold text-primary-800">
                  {plant.tag}
                </span>
              </div>
              <p className="mt-0.5 text-sm text-gray-500 italic">{plant.latin}</p>
              <dl className="mt-4 space-y-1.5 border-t border-accent-100 pt-4">
                <div className="flex justify-between">
                  <dt className="text-gray-500">Aspect</dt>
                  <dd className="text-right font-medium text-gray-900">{plant.aspect}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">Height</dt>
                  <dd className="text-right font-medium text-gray-900 tabular-nums">
                    {plant.height}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">Interest</dt>
                  <dd className="text-right font-medium text-gray-900">{plant.interest}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>

        <p className="mt-8 rounded-2xl border-l-4 border-primary-600 bg-primary-50 px-5 py-4 text-sm text-gray-700">
          {planting.callout}
        </p>
      </div>
    </section>
  )
}
