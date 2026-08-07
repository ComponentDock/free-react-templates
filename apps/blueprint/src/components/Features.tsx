import { DatabaseBackup, FileCode2, LayoutTemplate } from 'lucide-react'

const tiles = [
  {
    title: 'Automatic Backup Data',
    blurb:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    icon: DatabaseBackup,
  },
  {
    title: 'Page Builder',
    blurb:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    icon: LayoutTemplate,
  },
  {
    title: 'Create your own template',
    blurb:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    icon: FileCode2,
  },
] as const

export function Features() {
  return (
    <section id="works" aria-label="Features" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-3">
        {tiles.map((tile) => (
          <div
            key={tile.title}
            className="rounded-xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
          >
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-50 text-primary-400 dark:bg-primary-900/40 dark:text-primary-300">
              <tile.icon className="h-8 w-8" aria-hidden="true" />
            </span>
            <h3 className="mt-6 font-display text-xl font-semibold text-ink dark:text-gray-100">
              {tile.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-smoke dark:text-gray-400">
              {tile.blurb}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
