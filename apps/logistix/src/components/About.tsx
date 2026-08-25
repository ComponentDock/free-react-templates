import { useState } from 'react'

const ACCORDION_ITEMS = [
  {
    title: 'Road Transport',
    content:
      'With over 80 trucks in our fleet, road transport is our speciality and best freight option. We handle full and partial loads across all major routes.',
  },
  {
    title: 'Sea Cargo',
    content:
      'Our ocean freight services cover all major ports worldwide. We offer FCL and LCL options with competitive rates and reliable transit times.',
  },
] as const

export function About() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="about" className="overflow-hidden bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-0 lg:grid-cols-2">
        {/* Left: Image */}
        <div
          className="h-[500px] bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://picsum.photos/seed/logistix-about/800/500)',
          }}
        />

        {/* Right: Content */}
        <div className="px-6 py-16 sm:px-12 lg:py-20">
          <p className="mb-4 text-sm font-medium uppercase text-brand">About Us</p>
          <h2 className="mb-6 font-display text-3xl font-bold text-gray-900 sm:text-4xl">
            A professional
            <br />
            transportation business
          </h2>
          <p className="mb-4 text-base leading-relaxed text-gray-500">
            Sometimes goods can arrive early when they are being brought into the country. Quisque
            sed molestie nisl. Integer consequat risus.
          </p>
          <p className="mb-8 text-base leading-relaxed text-gray-500">
            Quisque sed molestie nisl. Integer consequat risus. With over 80 trucks in our fleet,
            road transport is our speciality and best freight option.
          </p>

          {/* Accordion */}
          <div className="space-y-2">
            {ACCORDION_ITEMS.map((item, i) => (
              <div key={item.title} className="border border-gray-100">
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50"
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  aria-expanded={openIndex === i}
                >
                  {item.title}
                  <span className="text-lg text-gray-400">{openIndex === i ? '−' : '+'}</span>
                </button>
                {openIndex === i && (
                  <div className="border-t border-gray-100 px-5 py-4">
                    <p className="text-sm leading-relaxed text-gray-500">{item.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
