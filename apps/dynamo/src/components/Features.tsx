import { features, featuresBackground } from '../data'

export function Features() {
  return (
    <section
      data-section="features"
      data-features-section
      className="py-[103px]"
      style={{
        backgroundImage: `url(${featuresBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-black/50">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} data-feature-card className="bg-white/95 shadow-lg">
              <img src={feature.image} alt="" className="h-52 w-full object-cover" loading="lazy" />
              <div className="p-6">
                <h5 className="text-lg font-semibold text-navy-900">{feature.title}</h5>
                <p className="mt-3 text-sm leading-relaxed text-muted-400">{feature.blurb}</p>
                <a
                  href="#about"
                  className="mt-5 inline-block min-w-[128px] border-2 border-primary-600 px-4 py-3.5 text-xs font-semibold uppercase tracking-wide text-primary-600 transition-colors hover:bg-primary-600 hover:text-white"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
