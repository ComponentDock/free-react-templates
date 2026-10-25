import { cn } from '@free-react-templates/ui'
import { Reveal } from './Reveal'
import { work } from '../content'

/** Three before/after cases on the warm stone ground; only the second flips. */
export function Work() {
  return (
    <section id="work" className="scroll-mt-20 bg-accent-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="inline-flex rounded-full bg-primary-700 px-3 py-1 text-xs font-semibold tracking-wider text-white uppercase">
            {work.chip}
          </p>
          <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            {work.title}
          </h2>
          <p className="mt-3 text-gray-600">{work.lede}</p>
        </Reveal>

        <div className="mt-14 space-y-10">
          {work.items.map((project) => (
            <Reveal key={project.place}>
              <article className="grid items-center gap-8 lg:grid-cols-2">
                <figure
                  className={cn('grid grid-cols-2 gap-3', project.flipped && 'lg:order-2')}
                >
                  {[
                    { label: 'Before', src: project.before, chip: 'bg-accent-900/85' },
                    { label: 'After', src: project.after, chip: 'bg-primary-700' },
                  ].map((frame) => (
                    <div key={frame.label} className="relative">
                      <img
                        src={frame.src}
                        alt={`${project.title} — ${frame.label.toLowerCase()}`}
                        width={600}
                        height={800}
                        loading="lazy"
                        className="aspect-[3/4] w-full rounded-2xl object-cover"
                      />
                      <figcaption
                        className={cn(
                          'absolute bottom-2 left-2 rounded px-2 py-0.5 text-[10px] font-semibold tracking-wide text-white uppercase',
                          frame.chip,
                        )}
                      >
                        {frame.label}
                      </figcaption>
                    </div>
                  ))}
                </figure>

                <div>
                  <p className="text-sm font-semibold tracking-wider text-primary-700 uppercase">
                    {project.place}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl font-semibold text-gray-900">
                    {project.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-gray-600">
                    <span className="font-semibold text-gray-900">The brief. </span>
                    {project.brief}
                  </p>
                  <p className="mt-3 leading-relaxed text-gray-600">
                    <span className="font-semibold text-gray-900">What we did. </span>
                    {project.work}
                  </p>
                  <dl className="mt-6 grid grid-cols-3 gap-4 border-t border-accent-200 pt-5 text-sm">
                    <div>
                      <dt className="text-gray-500">Plot</dt>
                      <dd className="mt-1 font-semibold text-gray-900">{project.plot}</dd>
                    </div>
                    <div>
                      <dt className="text-gray-500">On site</dt>
                      <dd className="mt-1 font-semibold text-gray-900">{project.onSite}</dd>
                    </div>
                    <div>
                      <dt className="text-gray-500">Budget</dt>
                      <dd className="mt-1 font-semibold text-primary-700">{project.budget}</dd>
                    </div>
                  </dl>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
