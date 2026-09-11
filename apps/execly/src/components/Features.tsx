import { features } from '../data'

export function Features() {
  return (
    <section className="bg-white">
      {features.map((feat, i) => (
        <div key={i} className="flex flex-col md:flex-row">
          {i % 2 === 0 ? (
            <>
              <div className="w-full md:w-1/2">
                <img
                  src={`https://picsum.photos/seed/execly-feat-${feat.imageSeed}/960/500`}
                  alt={feat.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex w-full items-center bg-heading px-12 py-16 text-white md:w-1/2">
                <div>
                  <h6 className="mb-3 text-xs font-medium uppercase tracking-wider">
                    {feat.subtitle}
                  </h6>
                  <h1 className="mb-4 text-3xl font-semibold">{feat.title}</h1>
                  <p className="text-sm leading-relaxed text-white/80">{feat.description}</p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex w-full items-center bg-heading px-12 py-16 text-white md:w-1/2">
                <div>
                  <h6 className="mb-3 text-xs font-medium uppercase tracking-wider">
                    {feat.subtitle}
                  </h6>
                  <h1 className="mb-4 text-3xl font-semibold">{feat.title}</h1>
                  <p className="text-sm leading-relaxed text-white/80">{feat.description}</p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <img
                  src={`https://picsum.photos/seed/execly-feat-${feat.imageSeed}/960/500`}
                  alt={feat.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </>
          )}
        </div>
      ))}
    </section>
  )
}
