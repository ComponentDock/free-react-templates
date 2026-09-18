import { useState } from 'react'
import { Search } from 'lucide-react'

const categories = ['Category', 'Full Time', 'Part Time', 'Freelance', 'Internship', 'Temporary']

export function Hero() {
  const [activeTab, setActiveTab] = useState<'job' | 'candidate'>('job')

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-24"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/joblaunch-hero/1920/800)',
      }}
    >
      <div className="absolute inset-0 bg-white/70" />
      <div className="relative container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-ink mb-8">
          Largest Job <span className="font-bold">Site On The Net</span>
        </h1>

        <div className="bg-white rounded-xl shadow-lg p-6 max-w-5xl">
          <div className="flex gap-2 mb-6">
            <button
              className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                activeTab === 'job'
                  ? 'bg-primary text-white'
                  : 'bg-bg-light text-ink-muted hover:bg-bg-alt'
              }`}
              onClick={() => setActiveTab('job')}
              role="tab"
              aria-selected={activeTab === 'job'}
            >
              Find A Job
            </button>
            <button
              className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                activeTab === 'candidate'
                  ? 'bg-primary text-white'
                  : 'bg-bg-light text-ink-muted hover:bg-bg-alt'
              }`}
              onClick={() => setActiveTab('candidate')}
              role="tab"
              aria-selected={activeTab === 'candidate'}
            >
              Find A Candidate
            </button>
          </div>

          {activeTab === 'job' ? (
            <form className="grid grid-cols-1 md:grid-cols-4 gap-4" role="search">
              <input
                type="text"
                placeholder="eg. Web Developer"
                className="border border-border-light rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <select className="border border-border-light rounded-lg px-4 py-3 text-sm text-ink-muted focus:outline-none focus:ring-2 focus:ring-primary">
                {categories.map((cat) => (
                  <option key={cat} value={cat.toLowerCase().replace(' ', '')}>
                    {cat}
                  </option>
                ))}
              </select>
              <input
                type="text"
                placeholder="Location"
                className="border border-border-light rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="bg-primary text-white rounded-lg px-6 py-3 font-semibold hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
              >
                <Search size={16} />
                Search
              </button>
            </form>
          ) : (
            <form className="grid grid-cols-1 md:grid-cols-4 gap-4" role="search">
              <input
                type="text"
                placeholder="eg. Carl Smith"
                className="border border-border-light rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <select className="border border-border-light rounded-lg px-4 py-3 text-sm text-ink-muted focus:outline-none focus:ring-2 focus:ring-primary">
                {categories.map((cat) => (
                  <option key={cat} value={cat.toLowerCase().replace(' ', '')}>
                    {cat}
                  </option>
                ))}
              </select>
              <input
                type="text"
                placeholder="Location"
                className="border border-border-light rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="bg-primary text-white rounded-lg px-6 py-3 font-semibold hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
              >
                <Search size={16} />
                Search
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
