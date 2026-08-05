import { ButtonLink } from '@free-react-templates/ui'
import { Download, Settings, Sparkles } from 'lucide-react'

const rows = [
  {
    icon: Sparkles,
    title: 'Features that give you real feel',
    copy: 'A carefully crafted interface with smooth animations and thoughtful details that make the app a joy to use.',
    image: 'https://picsum.photos/seed/applab-4/800/600',
    flipped: false,
  },
  {
    icon: Settings,
    title: 'Easy setup and management',
    copy: 'Get up and running in minutes — no technical skills required, with simple controls for every setting.',
    image: 'https://picsum.photos/seed/applab-5/800/600',
    flipped: true,
  },
] as const

export function Features() {
  return (
    <section id="blog" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl space-y-20 px-4 sm:px-6">
        {rows.map((row) => {
          const Icon = row.icon
          return (
            <div key={row.title} className="grid items-center gap-10 lg:grid-cols-2">
              <div className={row.flipped ? 'lg:order-2' : ''}>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-100 text-primary-600 dark:bg-primary-900/40 dark:text-primary-400">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold text-navy dark:text-white sm:text-3xl">
                  {row.title}
                </h3>
                <p className="mt-4 leading-relaxed text-muted dark:text-gray-400">{row.copy}</p>
                <div className="mt-8">
                  <ButtonLink href="#download" className="rounded-full px-8 py-4">
                    <Download className="h-4 w-4" aria-hidden="true" />
                    Download Now
                  </ButtonLink>
                </div>
              </div>
              <img
                src={row.image}
                alt={row.title}
                className={`h-full w-full rounded-3xl object-cover shadow-lg ${row.flipped ? 'lg:order-1' : ''}`}
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}
