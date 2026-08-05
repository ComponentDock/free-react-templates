import { Cloud, Clock, MousePointerClick, Smartphone, FolderPlus, TrendingUp } from 'lucide-react'

const tiles = [
  { icon: Cloud, title: 'Cloud Compatibility' },
  { icon: Clock, title: 'On Time Delivery' },
  { icon: MousePointerClick, title: 'Easy to Use' },
  { icon: Smartphone, title: 'Mobile Application' },
  { icon: FolderPlus, title: 'Add New Project' },
  { icon: TrendingUp, title: 'Generating Leads' },
] as const

export function About() {
  return (
    <section id="features" aria-label="About" className="bg-mist py-16 sm:py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-ink sm:text-4xl dark:text-white">
          Form Female From Cattle Evening.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center leading-relaxed text-body dark:text-gray-400">
          There earth face earth behold. She'd stars made void two given do and also. Our own grass
          days. Greater male Shall There faced earth behold She star.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiles.map((tile) => (
            <div
              key={tile.title}
              className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950"
            >
              <tile.icon className="h-8 w-8 shrink-0 text-primary-600" aria-hidden="true" />
              <div>
                <h3 className="text-lg font-semibold text-ink dark:text-white">{tile.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body dark:text-gray-400">
                  There earth face earth behold. She stars made void two given and also our own
                  grass days.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
