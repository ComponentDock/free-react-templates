import { useState } from 'react'
import { cn } from '@free-react-templates/ui'

const tabs = ['All Categories', 'Branding', 'Creative Work', 'Web Design'] as const
type Tab = (typeof tabs)[number]

const projects: { title: string; category: Tab[]; seed: string }[] = [
  { title: '3D Helmet Design', category: ['Branding', 'Web Design'], seed: 'velox-proj-1' },
  { title: '3D Helmet Design', category: ['Branding', 'Creative Work'], seed: 'velox-proj-2' },
  { title: '3D Helmet Design', category: ['Creative Work'], seed: 'velox-proj-3' },
  { title: '3D Helmet Design', category: ['Branding', 'Web Design'], seed: 'velox-proj-4' },
  { title: '3D Helmet Design', category: ['Branding', 'Creative Work'], seed: 'velox-proj-5' },
  {
    title: '3D Helmet Design',
    category: ['Branding', 'Creative Work', 'Web Design'],
    seed: 'velox-proj-6',
  },
]

export function Projects() {
  const [activeTab, setActiveTab] = useState<Tab>('All Categories')

  const filtered =
    activeTab === 'All Categories'
      ? projects
      : projects.filter((p) => p.category.includes(activeTab))

  return (
    <section id="portfolio" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold uppercase text-gray-900 font-[family-name:var(--font-heading)]">
            Our Recent Completed Projects
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
          </p>
        </div>

        {/* Tabs */}
        <ul className="mb-10 flex flex-wrap justify-center gap-3" role="tablist">
          {tabs.map((tab) => (
            <li key={tab} role="presentation">
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  'rounded px-5 py-2 text-xs font-medium uppercase tracking-wider transition-colors',
                  activeTab === tab
                    ? 'bg-periwinkle-400 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200',
                )}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <div key={`${project.seed}-${i}`} className="group relative overflow-hidden rounded-lg">
              <img
                src={`https://picsum.photos/seed/${project.seed}/600/400`}
                alt={project.title}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-lg font-bold text-white font-[family-name:var(--font-heading)]">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs text-gray-300">Client Project</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
