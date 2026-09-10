import { useState } from 'react'
import { cn } from '@free-react-templates/ui'

const tabs = [
  {
    id: 'history',
    label: 'History',
    title: 'History',
    content:
      'Founded with a vision to transform digital experiences, our company has grown from a small studio into a leading creative agency. Every project we take on reflects our commitment to innovation and quality.',
  },
  {
    id: 'mission',
    label: 'Mission & Vision',
    title: 'Mission & Vision',
    content:
      'We believe great design drives business growth. Our mission is to empower brands with stunning digital solutions that connect, engage, and convert. We envision a world where every brand has a powerful online presence.',
  },
]

export function About() {
  const [activeTab, setActiveTab] = useState(tabs[0]!.id)

  return (
    <section id="about" className="bg-paper py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Title */}
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-bold leading-tight text-ink md:text-4xl">
              About
              <br />
              Our Company
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-mist">
              We blend creativity with technology to deliver digital products that stand out in a
              crowded marketplace.
            </p>
          </div>

          {/* Image */}
          <div className="lg:col-span-3">
            <img
              src="https://picsum.photos/seed/crux-about/400/500"
              alt="About our company"
              className="w-full rounded shadow-md"
              loading="lazy"
            />
          </div>

          {/* Tabs */}
          <div className="lg:col-span-5">
            <div className="flex gap-6 border-b border-gray-200">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    'relative pb-3 text-sm font-medium transition',
                    activeTab === tab.id ? 'text-brand' : 'text-mist hover:text-ink',
                  )}
                  aria-selected={activeTab === tab.id}
                  role="tab"
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <span
                      className="absolute bottom-0 left-0 h-0.5 w-full"
                      style={{
                        backgroundImage: 'linear-gradient(0deg, #f58e9a 0%, #fbe44c 100%)',
                      }}
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="mt-6">
              {tabs
                .filter((tab) => tab.id === activeTab)
                .map((tab) => (
                  <div key={tab.id} role="tabpanel">
                    <h3 className="mb-2 text-xl font-semibold text-ink">{tab.title}</h3>
                    <p className="text-sm leading-relaxed text-mist">{tab.content}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
