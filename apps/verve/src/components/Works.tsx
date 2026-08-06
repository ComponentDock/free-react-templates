import { Card } from '@free-react-templates/ui'

const projects = [
  { title: 'Illustration', seed: 'verve-1' },
  { title: 'Application', seed: 'verve-2' },
  { title: 'Web Design', seed: 'verve-3' },
] as const

export function Works() {
  return (
    <section
      id="works"
      aria-label="Recent works"
      className="bg-gray-50 py-16 sm:py-24 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">Portfolio</p>
          <h2 className="mt-3 font-display text-2xl font-medium leading-snug text-gray-900 sm:text-3xl dark:text-gray-100">
            Recent Works
          </h2>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden p-0">
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={`https://picsum.photos/seed/${project.seed}/640/480`}
                  alt={`${project.title} project preview`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                  Even the all-powerful Pointing has no control about the blind texts — one day a
                  small line of blind text left for the far World of Grammar.
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
