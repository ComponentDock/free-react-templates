import { useState } from 'react'
import { Share2 } from 'lucide-react'

const tabs = ['All', 'Model', 'Actor', 'Singer'] as const

type Category = (typeof tabs)[number]

interface ModelItem {
  name: string
  category: Exclude<Category, 'All'>
  seed: string
}

const models: ModelItem[] = [
  { name: 'Willie Figueroa', category: 'Model', seed: 'gallery-1' },
  { name: 'Della Martinez', category: 'Actor', seed: 'gallery-2' },
  { name: 'Peter Alvarez', category: 'Actor', seed: 'gallery-3' },
  { name: 'Olive Ross', category: 'Actor', seed: 'gallery-4' },
  { name: 'Louise Ray', category: 'Singer', seed: 'gallery-5' },
  { name: 'Mia Chen', category: 'Model', seed: 'gallery-6' },
]

export function Gallery() {
  const [activeTab, setActiveTab] = useState<Category>('All')

  const filtered = activeTab === 'All' ? models : models.filter((m) => m.category === activeTab)

  return (
    <section className="bg-bg-gray py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Tabs */}
        <div className="mb-10 flex justify-center" role="tablist" aria-label="Portfolio filter">
          {tabs.map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={activeTab === tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 text-sm font-semibold transition-colors ${
                activeTab === tab
                  ? 'bg-brand text-white'
                  : 'bg-white text-text-dark hover:bg-brand/10'
              } ${tab === 'All' ? 'rounded-l-full' : ''} ${tab === 'Singer' ? 'rounded-r-full' : ''}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((model) => (
            <div key={model.name} className="group relative overflow-hidden rounded bg-white">
              <img
                src={`https://picsum.photos/seed/${model.seed}/400/500`}
                alt={model.name}
                className="aspect-[4/5] w-full object-cover transition-transform group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-brand/0 transition-colors group-hover:bg-brand/60">
                <Share2
                  size={24}
                  className="text-white opacity-0 transition-opacity group-hover:opacity-100"
                />
              </div>
              <div className="p-3">
                <h3 className="text-sm font-semibold text-text-dark">{model.name}</h3>
                <p className="text-xs text-text-muted">{model.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
