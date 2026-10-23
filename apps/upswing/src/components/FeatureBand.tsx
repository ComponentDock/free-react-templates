import { FolderPlus, TrendingUp } from 'lucide-react'

const rows = [
  {
    icon: FolderPlus,
    title: 'Add New Project',
    blurb:
      'There earth face earth behold. She stars made void two given and also our own grass days.',
  },
  {
    icon: TrendingUp,
    title: 'Generating Leads',
    blurb:
      'Greater male shall there faced earth behold she star. Sea forth fill have divide be dominion from life.',
  },
] as const

export function FeatureBand() {
  return (
    <section aria-label="Feature band" className="bg-ink py-16 sm:py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="lg:ml-auto lg:max-w-3xl">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Easy to Use <span className="text-primary-400">Mobile Application</span>
          </h2>
          <p className="mt-4 leading-relaxed text-gray-300">
            There earth face earth behold. She'd stars made void two given do and also. Our own
            grass days. Greater male Shall There faced earth behold She star.
          </p>
          <div className="mt-8 space-y-6">
            {rows.map((row) => (
              <div key={row.title} className="flex items-start gap-4">
                <row.icon className="h-8 w-8 shrink-0 text-sun" aria-hidden="true" />
                <div>
                  <h3 className="text-lg font-semibold text-white">{row.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-400">{row.blurb}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
