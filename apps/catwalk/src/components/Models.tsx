import { matchesFilters, MODELS, type ModelFilters } from '../data/models'

export interface ModelsProps {
  filters: ModelFilters
}

export function Models({ filters }: ModelsProps) {
  const visible = MODELS.filter((model) => matchesFilters(model, filters))

  return (
    <section id="models" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-sm font-medium uppercase tracking-[0.35em] text-brand">
          Model
        </p>
        <h2 className="mt-2 text-center text-3xl font-semibold text-ink dark:text-white lg:text-4xl">
          Popular Model
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-sm font-light leading-relaxed text-mist dark:text-gray-400">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts.
        </p>

        {visible.length === 0 ? (
          <p role="status" className="mt-16 text-center text-sm text-mist dark:text-gray-400">
            No models match your search.
          </p>
        ) : (
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((model) => (
              <article key={model.name}>
                <div className="group relative h-[480px] overflow-hidden bg-gray-900">
                  <img
                    src={model.image}
                    alt={model.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-brand/90 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden="true"
                  >
                    <ul className="space-y-1.5 text-sm text-white">
                      <li>
                        Age: <span className="font-medium">{model.age}</span>
                      </li>
                      <li>
                        Height: <span className="font-medium">{model.height}</span>
                      </li>
                      <li>
                        Bust: <span className="font-medium">{model.bust}</span>
                      </li>
                      <li>
                        Waist: <span className="font-medium">{model.waist}</span>
                      </li>
                      <li>
                        Hips: <span className="font-medium">{model.hips}</span>
                      </li>
                      <li>
                        Shoes: <span className="font-medium">{model.shoes}</span>
                      </li>
                      <li>
                        Eyes: <span className="font-medium">{model.eyes}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <h3 className="mt-4 text-center text-lg font-semibold text-ink dark:text-white">
                  {model.name}
                </h3>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
