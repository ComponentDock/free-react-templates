import { ArrowRight } from 'lucide-react'

const projects = [
  {
    seed: 'cleanpage-proj-1',
    title: 'Branding & Illustration Design',
    cat: 'Web Design',
    span: 'col-span-1',
  },
  {
    seed: 'cleanpage-proj-2',
    title: 'Branding & Illustration Design',
    cat: 'Web Design',
    span: 'col-span-1 md:col-span-2',
  },
  {
    seed: 'cleanpage-proj-3',
    title: 'Branding & Illustration Design',
    cat: 'Web Design',
    span: 'col-span-1 md:col-span-2',
  },
  {
    seed: 'cleanpage-proj-4',
    title: 'Branding & Illustration Design',
    cat: 'Web Design',
    span: 'col-span-1',
  },
  {
    seed: 'cleanpage-proj-5',
    title: 'Branding & Illustration Design',
    cat: 'Web Design',
    span: 'col-span-1',
  },
  {
    seed: 'cleanpage-proj-6',
    title: 'Branding & Illustration Design',
    cat: 'Web Design',
    span: 'col-span-1',
  },
]

export function Projects() {
  return (
    <section id="work" className="py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-widest text-brand">
            Projects
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-ink md:text-4xl">
            Recent Projects
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-sans text-mist">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {projects.map((p) => (
            <div
              key={p.seed}
              className={`group relative overflow-hidden rounded-lg bg-cover bg-center ${p.span} h-64`}
              style={{ backgroundImage: `url(https://picsum.photos/seed/${p.seed}/800/400)` }}
            >
              <div className="absolute inset-0 bg-ink-dark/0 transition group-hover:bg-ink-dark/70" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition group-hover:opacity-100">
                <div className="text-center">
                  <h3 className="font-display text-lg font-semibold text-white">{p.title}</h3>
                  <span className="mt-1 inline-block font-sans text-sm text-brand">{p.cat}</span>
                  <div className="mt-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white">
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
