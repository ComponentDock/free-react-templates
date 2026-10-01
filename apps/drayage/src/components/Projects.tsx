import { PROJECTS } from '../data/content'
import { SkewedButton, SkewedChip } from './SkewedButton'

export function Projects() {
  return (
    <section id="projects" className="bg-white px-4 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="font-display text-sm font-bold uppercase tracking-[4px] text-brand">
              Our Projects
            </span>
            <h2 className="mt-2.5 font-display text-3xl font-bold uppercase leading-[48px] text-navy md:text-4xl">
              What we have done!
            </h2>
          </div>
          <SkewedButton href="#projects">View All Projects</SkewedButton>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PROJECTS.map(({ title, blurb, seed }) => (
            <article key={title} className="flex flex-col">
              <img
                src={`https://picsum.photos/seed/${seed}/500/320`}
                alt={`${title} project`}
                className="h-52 w-full object-cover"
                loading="lazy"
              />
              <div className="relative -mt-5 ml-4 bg-navy p-6 pt-8">
                <SkewedChip className="absolute -top-4 left-4">{title}</SkewedChip>
                <p className="mt-4 font-body text-sm leading-6 text-white/75">{blurb}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
