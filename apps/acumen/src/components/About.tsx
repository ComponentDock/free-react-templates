import { useState } from 'react'
import { cn } from '@free-react-templates/ui'

const tabs = ['Our Mission', 'Our Vision', 'Our Support'] as const
type Tab = (typeof tabs)[number]

const tabContent: Record<Tab, { title: string; text: string }> = {
  'Our Mission': {
    title: 'Our Mission',
    text: 'We strive to deliver innovative business solutions that drive growth and create lasting value for our clients across industries.',
  },
  'Our Vision': {
    title: 'Our Vision',
    text: 'To be the leading creative partner for businesses seeking modern, powerful, and scalable digital solutions.',
  },
  'Our Support': {
    title: 'Our Support',
    text: 'Our dedicated team provides round-the-clock support, ensuring your business never misses a beat in the digital landscape.',
  },
}

export function About() {
  const [active, setActive] = useState<Tab>('Our Mission')

  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left: tabs + content */}
          <div>
            <h2 className="font-display text-3xl font-bold text-ink dark:text-white">About Us</h2>
            <div className="mt-8 flex gap-4 border-b border-divider" role="tablist">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  role="tab"
                  aria-selected={active === tab}
                  onClick={() => setActive(tab)}
                  className={cn(
                    'pb-3 text-sm font-medium transition-colors',
                    active === tab
                      ? 'border-b-2 border-brand text-brand'
                      : 'text-mist hover:text-ink',
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="mt-8" role="tabpanel">
              <h3 className="font-display text-xl font-bold text-ink dark:text-white">
                {tabContent[active].title}
              </h3>
              <p className="mt-4 leading-relaxed text-mist">{tabContent[active].text}</p>
              <a
                href="#about"
                className="mt-6 inline-block rounded-full bg-gradient-to-r from-brand to-brand-light px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-brand hover:ring-2 hover:ring-brand"
              >
                View More
              </a>
            </div>
          </div>

          {/* Right: image */}
          <div className="flex items-center justify-center">
            <img
              src="https://picsum.photos/seed/acumen-about/600/400"
              alt="Team working on business strategy"
              className="rounded-2xl object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
