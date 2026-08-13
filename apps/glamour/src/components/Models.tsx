import { modelCards, modelStats } from '../data'

const cardStats = modelStats.slice(0, 5)

/**
 * Split block "Our Tops Model's": a light-gray heading column plus nine
 * portrait cards. Each card shows the model name overlaid at the bottom of
 * the photo; hovering slides up a hot-pink panel with the name and stats.
 */
export function Models() {
  return (
    <section id="models" className="bg-white">
      <div className="grid lg:grid-cols-4">
        <div className="bg-light lg:col-span-1">
          <div className="mx-auto max-w-md p-5 lg:px-10 lg:py-24">
            <h2 className="font-heading text-3xl font-bold tracking-wide text-ink uppercase">
              Our Tops Model&apos;s
            </h2>
            <p className="mt-6 leading-relaxed">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:col-span-3 lg:grid-cols-3">
          {modelCards.map((model, index) => (
            <article key={index} className="group relative overflow-hidden">
              <img
                src={model.image}
                alt=""
                loading="lazy"
                className="h-[430px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <h3 className="absolute bottom-6 left-4 z-10 font-heading text-xl font-bold text-white uppercase drop-shadow">
                <a href="#models">{model.name}</a>
              </h3>
              <div className="absolute inset-x-0 bottom-0 translate-y-full bg-brand p-4 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="font-heading text-sm font-bold uppercase">{model.name}</p>
                <dl className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs">
                  {cardStats.map((stat) => (
                    <div key={stat.label}>
                      <dt className="inline opacity-80">{stat.label} </dt>
                      <dd className="inline font-bold">{stat.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
