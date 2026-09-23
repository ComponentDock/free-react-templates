import { useState } from 'react'
import { cn } from '@free-react-templates/ui'

const tabs = ['Accident Law', 'Health Law', 'Insurance Law'] as const

const casesByTab: Record<
  (typeof tabs)[number],
  Array<{ image: string; category: string; description: string }>
> = {
  'Accident Law': [
    {
      image: 'https://picsum.photos/seed/casepoint-case1/600/400',
      category: 'Car Accident Law',
      description: 'Within the construction industry as their overdraft',
    },
    {
      image: 'https://picsum.photos/seed/casepoint-case2/600/400',
      category: 'Car Accident Law',
      description: 'Construction industry as their over draft for critical law',
    },
    {
      image: 'https://picsum.photos/seed/casepoint-case3/600/400',
      category: 'Car Accident Law',
      description: 'Retail banks wake up to digital lending this year',
    },
    {
      image: 'https://picsum.photos/seed/casepoint-case4/600/400',
      category: 'Car Accident Law',
      description: 'Within the construction industry as their overdraft',
    },
  ],
  'Health Law': [
    {
      image: 'https://picsum.photos/seed/casepoint-h1/600/400',
      category: 'Health Law',
      description: 'Within the construction industry as their overdraft',
    },
    {
      image: 'https://picsum.photos/seed/casepoint-h2/600/400',
      category: 'Health Law',
      description: 'Construction industry as their over draft for critical law',
    },
    {
      image: 'https://picsum.photos/seed/casepoint-h3/600/400',
      category: 'Health Law',
      description: 'Retail banks wake up to digital lending this year',
    },
    {
      image: 'https://picsum.photos/seed/casepoint-h4/600/400',
      category: 'Health Law',
      description: 'Within the construction industry as their overdraft',
    },
  ],
  'Insurance Law': [
    {
      image: 'https://picsum.photos/seed/casepoint-i1/600/400',
      category: 'Insurance Law',
      description: 'Within the construction industry as their overdraft',
    },
    {
      image: 'https://picsum.photos/seed/casepoint-i2/600/400',
      category: 'Insurance Law',
      description: 'Construction industry as their over draft for critical law',
    },
    {
      image: 'https://picsum.photos/seed/casepoint-i3/600/400',
      category: 'Insurance Law',
      description: 'Retail banks wake up to digital lending this year',
    },
    {
      image: 'https://picsum.photos/seed/casepoint-i4/600/400',
      category: 'Insurance Law',
      description: 'Within the construction industry as their overdraft',
    },
  ],
}

interface CaseStudiesProps {
  className?: string
}

export function CaseStudies({ className }: CaseStudiesProps) {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>(tabs[0])

  return (
    <section id="case-studies" className={cn('bg-white py-20', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="w-14 h-0.5 bg-brand" />
              <span className="text-brand text-sm font-heading font-semibold uppercase tracking-wider">
                our recent work
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-heading leading-tight">
              Reliable, Effective &amp; Winning Law For Customers
            </h2>
          </div>

          <div className="flex gap-4" role="tablist" aria-label="Case study categories">
            {tabs.map((tab) => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeTab === tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  'px-6 py-3 text-sm font-semibold transition-colors',
                  activeTab === tab
                    ? 'bg-brand text-white'
                    : 'bg-gray-100 text-text-muted hover:bg-gray-200',
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div role="tabpanel" aria-label={activeTab}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {casesByTab[activeTab].map((c, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="overflow-hidden mb-4">
                  <img
                    src={c.image}
                    alt={c.category}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <span className="text-brand text-xs font-semibold uppercase tracking-wider">
                  {c.category}
                </span>
                <p className="text-text-heading font-medium mt-1">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
