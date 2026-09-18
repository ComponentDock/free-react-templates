import { useState } from 'react'

const tabs = [
  {
    id: 'mission',
    label: 'Our Mission',
    content:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  },
  {
    id: 'vision',
    label: 'Our Vision',
    content:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
  },
  {
    id: 'value',
    label: 'Our Value',
    content:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
  },
]

export function AppointmentSection() {
  const [activeTab, setActiveTab] = useState('mission')

  return (
    <section id="about" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left — About text with tabs */}
          <div>
            <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">
              We Help More Than 45 Years Installing Your Roof
            </h2>
            <p className="mb-6 text-gray-600">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
              at the coast of the Semantics, a large language ocean. A small river named Duden flows
              by their place and supplies it with the necessary regelialia.
            </p>
            <div className="flex gap-3">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded border px-4 py-2 text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'border-gold-400 bg-gold-400 text-white'
                      : 'border-gray-300 bg-white text-gray-700 hover:border-gold-400'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="mt-4 rounded border border-gray-200 bg-white p-4 text-gray-600">
              {tabs.find((t) => t.id === activeTab)?.content}
            </div>
          </div>

          {/* Right — Get a Quote form */}
          <div id="appointment">
            <div className="rounded-t bg-gold-400 px-6 py-4">
              <h3 className="text-lg font-bold text-white">Get a Quote</h3>
            </div>
            <form
              className="rounded-b border border-t-0 border-gray-200 bg-white p-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="mb-4">
                <select
                  className="w-full rounded border border-gray-300 px-4 py-2 text-sm text-gray-700 focus:border-gold-400 focus:outline-none"
                  aria-label="Select services"
                >
                  <option value="">Select Services</option>
                  <option value="skylights">Skylights</option>
                  <option value="waterproofing">Waterproofing</option>
                  <option value="industrial">Industrial Roofing</option>
                  <option value="residential">Residential Roofing</option>
                  <option value="gutter">Gutter Cleaning</option>
                  <option value="commercial">Commercial Roofing</option>
                </select>
              </div>
              <div className="mb-4 grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="rounded border border-gray-300 px-4 py-2 text-sm focus:border-gold-400 focus:outline-none"
                  aria-label="Your name"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="rounded border border-gray-300 px-4 py-2 text-sm focus:border-gold-400 focus:outline-none"
                  aria-label="Email address"
                />
              </div>
              <div className="mb-4 grid grid-cols-2 gap-4">
                <input
                  type="date"
                  className="rounded border border-gray-300 px-4 py-2 text-sm focus:border-gold-400 focus:outline-none"
                  aria-label="Date"
                />
                <input
                  type="time"
                  className="rounded border border-gray-300 px-4 py-2 text-sm focus:border-gold-400 focus:outline-none"
                  aria-label="Time"
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full rounded border border-gray-300 px-4 py-2 text-sm focus:border-gold-400 focus:outline-none"
                  aria-label="Message"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded bg-gold-400 px-6 py-3 text-sm font-bold uppercase text-white transition-colors hover:bg-gold-500"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
