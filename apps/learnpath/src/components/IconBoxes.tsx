import { Users, FolderOpen, BookOpen, Globe, ArrowRight } from 'lucide-react'

const features = [
  {
    icon: Users,
    title: 'Learn From Experts',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
  },
  {
    icon: FolderOpen,
    title: 'Book Library & Store',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
  },
  {
    icon: BookOpen,
    title: 'Best Course Online',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
  },
  {
    icon: Globe,
    title: 'Best Industry Leaders',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
  },
]

export function IconBoxes() {
  return (
    <section className="bg-bg-light py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand">
                <f.icon className="h-7 w-7 text-white" aria-hidden="true" />
              </div>
              <h2 className="mb-2 text-lg font-bold text-text">{f.title}</h2>
              <p className="mb-3 text-sm leading-relaxed text-text-muted">{f.description}</p>
              <a
                href="#"
                className="inline-flex items-center gap-1 text-sm font-medium text-text transition hover:text-brand"
              >
                read more <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
