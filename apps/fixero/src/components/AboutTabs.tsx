import { useState } from 'react'

const tabs = [
  {
    id: 'technology',
    label: 'Technology',
    title: 'Technology',
    image: 'https://picsum.photos/seed/fixero-tech/800/500',
    description:
      'We use the latest construction technology and tools to deliver precision results. Our team stays updated with modern techniques to ensure every project meets the highest standards.',
  },
  {
    id: 'quality',
    label: 'Quality',
    title: 'Quality',
    image: 'https://picsum.photos/seed/fixero-quality/800/500',
    description:
      'Quality is at the heart of everything we do. From material selection to final finishing, we never compromise on the standards that define our work.',
  },
  {
    id: 'staff',
    label: 'Staff',
    title: 'Staff',
    image: 'https://picsum.photos/seed/fixero-staff/800/500',
    description:
      'Our experienced team of professionals brings years of expertise to every project. Licensed, insured, and committed to excellence in every detail.',
  },
]

export function AboutTabs() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="about" className="bg-white py-16 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="md:w-5/12">
            <h2 className="text-3xl font-bold text-ink dark:text-white">
              We Are Leader In The Construction World
            </h2>
            <div className="mt-3 h-1 w-16 bg-brand" />
          </div>
          <div className="flex gap-1">
            {tabs.map((tab, i) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(i)}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  activeTab === i
                    ? 'bg-brand text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
                role="tab"
                aria-selected={activeTab === i}
                aria-controls={`panel-${tab.id}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div role="tabpanel" id={`panel-${tabs[activeTab]!.id}`}>
          <div className="flex flex-col gap-8 md:flex-row">
            <div className="md:w-7/12">
              <img
                src={tabs[activeTab]!.image}
                alt={tabs[activeTab]!.title}
                className="w-full rounded-lg object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex items-center md:w-5/12">
              <div>
                <h3 className="mb-3 text-2xl font-bold text-ink dark:text-white">
                  {tabs[activeTab]!.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{tabs[activeTab]!.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
