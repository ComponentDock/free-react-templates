const experiences = [
  { title: 'Product designer', detail: 'at Apple from 2011 to present' },
  { title: 'UI designer', detail: 'at ThemeForest from 2011 to present' },
  { title: 'Print designer', detail: 'at Envato from 2011 to present' },
  { title: 'Product designer', detail: 'at Adobe from 2015 to present' },
  { title: 'UI designer', detail: 'at Figma from 2018 to present' },
  { title: 'Print designer', detail: 'at Creative Market from 2016 to present' },
]

export function About() {
  return (
    <section className="bg-navy-deep py-24 md:py-32" id="about">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left: about me */}
          <div>
            <h2 className="mb-6 text-2xl font-semibold text-white">about me</h2>
            <p className="mb-8 leading-relaxed text-white/70">
              Passionate designer with over 7 years of experience crafting digital products that
              delight users. I blend creativity with strategy to build interfaces that are both
              beautiful and functional, turning complex problems into elegant solutions.
            </p>
            <div className="flex items-baseline gap-4">
              <span className="text-6xl font-bold text-coral">07</span>
              <span className="text-sm text-white/60">
                Years of <span className="font-semibold text-white">Experiences</span>
              </span>
            </div>
          </div>

          {/* Right: experience list */}
          <div>
            <h2 className="mb-6 text-2xl font-semibold text-white">Experiences</h2>
            <div className="space-y-6">
              {experiences.map((exp, i) => (
                <div key={i} className="border-b border-white/10 pb-4">
                  <h3 className="text-base font-semibold text-white">{exp.title}</h3>
                  <p className="text-sm text-white/50">{exp.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
