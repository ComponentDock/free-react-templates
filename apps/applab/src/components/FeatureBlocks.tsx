import { Globe, Users, Zap, type LucideIcon } from 'lucide-react'

interface Block {
  icon: LucideIcon
  title: string
  copy: string
  image: string
}

const blocks: Block[] = [
  {
    icon: Users,
    title: 'Manage team in One Place',
    copy: 'Keep your whole team, projects, and conversations in a single organized workspace.',
    image: 'https://picsum.photos/seed/applab-1/800/600',
  },
  {
    icon: Zap,
    title: 'All-powerful Pointing has no control',
    copy: 'Take full control of your app experience with powerful pointing and precision tools.',
    image: 'https://picsum.photos/seed/applab-2/800/600',
  },
  {
    icon: Globe,
    title: 'Establish a solid online presence',
    copy: 'Launch a polished, credible landing page that makes your product easy to discover.',
    image: 'https://picsum.photos/seed/applab-3/800/600',
  },
] as const

export function FeatureBlocks() {
  return (
    <section id="features" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl space-y-20 px-4 sm:px-6">
        {blocks.map((block, index) => {
          const Icon = block.icon
          const flipped = index % 2 === 1
          return (
            <div key={block.title} className="grid items-center gap-10 lg:grid-cols-2">
              <div className={flipped ? 'lg:order-2' : ''}>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-100 text-primary-600 dark:bg-primary-900/40 dark:text-primary-400">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold text-navy dark:text-white sm:text-3xl">
                  {block.title}
                </h3>
                <p className="mt-4 leading-relaxed text-muted dark:text-gray-400">{block.copy}</p>
              </div>
              <img
                src={block.image}
                alt={block.title}
                className={`h-full w-full rounded-3xl object-cover shadow-lg ${flipped ? 'lg:order-1' : ''}`}
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}
