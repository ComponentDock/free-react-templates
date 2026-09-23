import { useState } from 'react'

const tabs = ['Vehicle Accident', 'Health Law', 'Insurance Law', 'Bankruptcy'] as const

type Tab = (typeof tabs)[number]

const cases: Record<
  Tab,
  Array<{ tag: string; title: string; description: string; image: string }>
> = {
  'Vehicle Accident': [
    {
      tag: 'Accidental',
      title: 'Car Accident Insurance Critical Case',
      description: 'Successfully recovered full compensation for a multi-vehicle collision victim.',
      image: 'https://picsum.photos/seed/justlaw-case1/400/250',
    },
    {
      tag: 'Personal Injury',
      title: 'Rear-End Collision Settlement',
      description: 'Secured a favorable settlement for injuries sustained in a rear-end collision.',
      image: 'https://picsum.photos/seed/justlaw-case2/400/250',
    },
    {
      tag: 'Medical',
      title: 'Post-Accident Medical Negligence',
      description: 'Won a complex case involving medical negligence after a vehicle accident.',
      image: 'https://picsum.photos/seed/justlaw-case3/400/250',
    },
  ],
  'Health Law': [
    {
      tag: 'Malpractice',
      title: 'Medical Malpractice Defense',
      description:
        'Defended a healthcare provider against malpractice allegations with favorable outcome.',
      image: 'https://picsum.photos/seed/justlaw-case4/400/250',
    },
    {
      tag: 'Insurance',
      title: 'Health Insurance Dispute Resolution',
      description: 'Resolved a complex health insurance coverage dispute on behalf of the client.',
      image: 'https://picsum.photos/seed/justlaw-case5/400/250',
    },
    {
      tag: 'Compliance',
      title: 'Healthcare Compliance Advisory',
      description: 'Provided comprehensive compliance guidance for a growing medical practice.',
      image: 'https://picsum.photos/seed/justlaw-case6/400/250',
    },
  ],
  'Insurance Law': [
    {
      tag: 'Claims',
      title: 'Denied Claim Appeal Success',
      description: 'Successfully appealed a denied insurance claim resulting in full payout.',
      image: 'https://picsum.photos/seed/justlaw-case7/400/250',
    },
    {
      tag: 'Bad Faith',
      title: 'Insurance Bad Faith Lawsuit',
      description: 'Pursued a bad faith claim against an insurer who unreasonably delayed payment.',
      image: 'https://picsum.photos/seed/justlaw-case8/400/250',
    },
    {
      tag: 'Commercial',
      title: 'Commercial Property Insurance',
      description: 'Negotiated a comprehensive commercial property insurance policy renewal.',
      image: 'https://picsum.photos/seed/justlaw-case9/400/250',
    },
  ],
  Bankruptcy: [
    {
      tag: 'Chapter 7',
      title: 'Personal Bankruptcy Filing',
      description: 'Guided a client through Chapter 7 bankruptcy with debt discharge.',
      image: 'https://picsum.photos/seed/justlaw-case10/400/250',
    },
    {
      tag: 'Chapter 11',
      title: 'Business Reorganization',
      description: 'Helped a small business restructure through Chapter 11 proceedings.',
      image: 'https://picsum.photos/seed/justlaw-case11/400/250',
    },
    {
      tag: 'Restructuring',
      title: 'Debt Restructuring Negotiation',
      description: 'Negotiated favorable debt restructuring terms to avoid bankruptcy.',
      image: 'https://picsum.photos/seed/justlaw-case12/400/250',
    },
  ],
}

export function CaseStudies() {
  const [activeTab, setActiveTab] = useState<Tab>('Vehicle Accident')

  return (
    <section id="case-studies" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mb-16 text-center font-display text-4xl font-bold text-navy md:text-5xl">
          Recent Case Studies
        </h2>

        {/* Tab navigation */}
        <div className="mb-12 flex justify-center">
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded px-6 py-3 text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 text-navy hover:bg-gray-200'
                }`}
                role="tab"
                aria-selected={activeTab === tab}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Tab content */}
        <div className="grid gap-8 md:grid-cols-3" role="tabpanel">
          {cases[activeTab].map((item) => (
            <div key={item.title} className="group overflow-hidden rounded-lg bg-gray-50">
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute bottom-0 right-0 bg-primary-500 px-3 py-1 text-xs font-medium text-white">
                  {item.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="mb-3 font-display text-lg font-bold text-navy-dark">{item.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-smoke">{item.description}</p>
                <a
                  href="#"
                  className="text-sm font-medium text-primary-500 transition-colors hover:text-primary-600"
                >
                  Read more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
