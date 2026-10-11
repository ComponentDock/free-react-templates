import { HOW_IT_WORKS_STEPS } from '../data/content'
import { SectionHeading } from './SectionHeading'

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden py-24">
      <img
        src="https://picsum.photos/seed/cargolane-howitworks-1/1600/900"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative mx-auto max-w-6xl px-4">
        <SectionHeading title="How It Works" align="center" tone="white" blurb={null} />
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {HOW_IT_WORKS_STEPS.map(({ title, blurb, Icon }) => (
            <div key={title} className="text-center">
              <Icon aria-hidden="true" className="mx-auto h-12 w-12 text-white" />
              <h3 className="mt-4 text-xl text-white">{title}</h3>
              <p className="mt-2 text-white/80">{blurb}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
