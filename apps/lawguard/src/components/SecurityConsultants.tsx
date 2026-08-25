import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

const tabs = [
  {
    id: 'investigative',
    label: 'Investigative Services',
    heading: 'Investigative Services',
    text: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    id: 'security',
    label: 'Security Consultations',
    heading: 'Security Consultations',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
  },
  {
    id: 'criminal',
    label: 'Criminal Defense Investigations',
    heading: 'Criminal Defense Investigations',
    text: 'It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
  },
]

export function SecurityConsultants({ initialTab }: { initialTab?: string } = {}) {
  const [activeTab, setActiveTab] = useState(initialTab ?? tabs[0]!.id)

  const active = tabs.find((t) => t.id === activeTab) ?? tabs[0]!

  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Left: editorial block */}
          <div>
            <h3 className="mb-4 text-3xl font-bold text-charcoal">Security Consultants</h3>
            <img
              src="https://picsum.photos/seed/lawguard-security/600/400"
              alt="Security consultants at work"
              className="mb-6 w-full rounded-lg object-cover"
            />
            <h3 className="mb-4 text-3xl font-bold text-charcoal">Justice serves</h3>
            <p className="mb-4 leading-relaxed text-gray-600">
              A small river named Duden flows by their place and supplies it with the necessary
              regelialia. It is a paradisematic country, in which roasted parts of sentences fly
              into your mouth. Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-dark"
            >
              Read more <ArrowRight size={16} />
            </a>
          </div>

          {/* Right: tabs */}
          <div>
            <div
              className="mb-8 flex flex-wrap gap-2"
              role="tablist"
              aria-label="Service categories"
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-brand text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div role="tabpanel" aria-label={active.label}>
              <h3 className="mb-4 text-2xl font-bold text-charcoal">{active.heading}</h3>
              <p className="mb-4 leading-relaxed text-gray-600">{active.text}</p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-dark"
              >
                Read more <ArrowRight size={16} />
              </a>
            </div>

            <img
              src="https://picsum.photos/seed/lawguard-tabs/600/400"
              alt="Service detail"
              className="mt-8 w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
