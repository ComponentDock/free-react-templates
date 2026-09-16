import { useState } from 'react'
import { Play } from 'lucide-react'

const tabs = [
  {
    id: 'mission',
    label: 'Our Mission',
    title: 'Delivering Excellence Since 25 Years',
    description:
      'We are committed to providing top-tier business solutions that empower organizations to thrive in competitive markets. Our mission is to drive sustainable growth through innovation and expertise.',
  },
  {
    id: 'vision',
    label: 'Our Vision',
    title: 'Shaping the Future of Business',
    description:
      'Our vision is to become the leading partner for businesses worldwide, helping them navigate complex challenges and seize opportunities with confidence and clarity.',
  },
  {
    id: 'support',
    label: 'Our Support',
    title: 'Dedicated Support Around the Clock',
    description:
      'We provide comprehensive support to ensure your business runs smoothly. Our team is available 24/7 to assist with any challenges you may face.',
  },
]

export function WhyChooseUs() {
  const [activeTab, setActiveTab] = useState('mission')
  const active = tabs.find((t) => t.id === activeTab)!

  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-12 md:flex-row">
          {/* Video placeholder */}
          <div className="relative flex-1">
            <img
              src="https://picsum.photos/seed/linnet-video/600/400"
              alt="Video thumbnail"
              className="w-full rounded-lg object-cover"
              loading="lazy"
            />
            <button
              aria-label="Play video"
              className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary-400 text-white shadow-lg transition-transform hover:scale-110"
            >
              <Play className="h-6 w-6 fill-current" />
            </button>
          </div>

          {/* Tabs */}
          <div className="flex-1">
            <h2 className="mb-6 font-heading text-3xl font-bold text-navy-500">Why Choose Us</h2>
            <div className="mb-6 flex gap-4 border-b border-gray-200">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`border-b-2 pb-3 text-sm font-semibold transition-colors ${
                    activeTab === tab.id
                      ? 'border-primary-400 text-primary-400'
                      : 'border-transparent text-gray-500 hover:text-navy-500'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold uppercase text-navy-500">
                {active.title}
              </h3>
              <p className="mt-4 text-gray-500">{active.description}</p>
              <a
                href="#services"
                className="mt-6 inline-block rounded bg-primary-400 px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-500"
              >
                View More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
