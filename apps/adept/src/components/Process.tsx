import { Database, Settings, Rocket } from 'lucide-react'

const steps = [
  {
    icon: Database,
    title: 'Data Gathering',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex.',
  },
  {
    icon: Settings,
    title: 'Implementation',
    description:
      'Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus.',
  },
  {
    icon: Rocket,
    title: 'Launch',
    description:
      'Aperiam neque id, illum laudantium consequuntur sunt nisi. Dolores molestias blanditiis.',
  },
] as const

export function Process() {
  return (
    <section id="process" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-display text-3xl font-bold uppercase md:text-4xl">
            Our Approach
          </h2>
          <p className="mx-auto max-w-2xl text-mist">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex.
            Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam
            temporibus.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.title} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand text-white">
                <s.icon size={28} />
              </div>
              <span className="mb-2 block font-display text-sm font-semibold uppercase tracking-wider text-brand">
                Step {i + 1}
              </span>
              <h3 className="mb-2 font-display text-xl font-bold uppercase">{s.title}</h3>
              <p className="text-mist">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
