import { useState } from 'react'
import { Calendar, Clock, Send } from 'lucide-react'

const tabs = [
  {
    id: 'mission',
    label: 'Our Mission',
    content:
      'We are committed to delivering reliable, high-quality roofing solutions that protect your home and family. Every project we undertake reflects our dedication to excellence and customer satisfaction.',
  },
  {
    id: 'vision',
    label: 'Our Vision',
    content:
      'To be the most trusted roofing company in the region, known for our craftsmanship, integrity, and commitment to every customer we serve.',
  },
  {
    id: 'value',
    label: 'Our Value',
    content:
      'Honesty, quality workmanship, and transparent communication guide everything we do. We treat every roof as if it were our own home.',
  },
] as const

const services = [
  'Skylights',
  'Waterproofing',
  'Industrial Roofing',
  'Residential Roofing',
  'Gutter Cleaning',
  'Commercial Roofing',
] as const

export function About() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="about" className="bg-paper py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-semibold leading-snug text-ink sm:text-3xl">
              We have been installing roofs for over 45 years
            </h2>
            <p className="mt-5 leading-relaxed text-mist">
              With decades of experience in the roofing industry, our team delivers professional,
              dependable service for residential and commercial properties. From minor repairs to
              full installations, we handle every project with care and precision.
            </p>

            <div className="mt-8">
              <div className="flex gap-2 overflow-x-auto">
                {tabs.map((tab, i) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(i)}
                    className={`whitespace-nowrap rounded-lg px-5 py-3 text-sm font-medium transition-colors ${
                      activeTab === i
                        ? 'bg-brand text-white'
                        : 'bg-white text-mist hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <div className="mt-4 rounded-xl bg-white p-6 shadow-sm dark:bg-gray-800">
                <p className="leading-relaxed">{tabs[activeTab]!.content}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <div className="bg-brand py-4 text-center">
                <h3 className="text-lg font-semibold text-white">Get a Quote</h3>
              </div>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-4 bg-white p-6 dark:bg-gray-800"
              >
                <div>
                  <label htmlFor="service" className="sr-only">
                    Select Service
                  </label>
                  <select
                    id="service"
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-ink focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                  >
                    <option value="">Select Services</option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <Calendar
                      className="absolute left-3 top-3 h-4 w-4 text-mist"
                      aria-hidden="true"
                    />
                    <input
                      type="date"
                      className="w-full rounded-lg border border-gray-200 py-3 pl-10 pr-4 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                    />
                  </div>
                  <div className="relative">
                    <Clock className="absolute left-3 top-3 h-4 w-4 text-mist" aria-hidden="true" />
                    <input
                      type="time"
                      className="w-full rounded-lg border border-gray-200 py-3 pl-10 pr-4 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                    />
                  </div>
                </div>
                <textarea
                  rows={4}
                  placeholder="Message"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
