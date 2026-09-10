import { type FormEvent } from 'react'
import { Search, MapPin, Briefcase } from 'lucide-react'

export function Hero() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <section
      id="home"
      className="relative min-h-[600px] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/jobboard-hero/1920/800')" }}
    >
      {/* Green overlay */}
      <div className="absolute inset-0 bg-lime-400/90" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 py-32">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          The Easiest Way To Get Your Dream Job
        </h1>
        <p className="text-white/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Discover your next career move from thousands of opportunities
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg p-3 flex flex-col md:flex-row gap-3 max-w-3xl mx-auto shadow-lg"
        >
          <div className="flex-1 flex items-center gap-2 px-4 border-b md:border-b-0 md:border-r border-gray-200">
            <Search size={18} className="text-gray-400 shrink-0" />
            <input
              type="text"
              placeholder="Job title, Company..."
              className="w-full py-3 text-sm outline-none bg-transparent"
              aria-label="Search keywords"
            />
          </div>

          <div className="flex items-center gap-2 px-4 border-b md:border-b-0 md:border-r border-gray-200">
            <MapPin size={18} className="text-gray-400 shrink-0" />
            <select
              className="py-3 text-sm outline-none bg-transparent text-gray-600 cursor-pointer"
              aria-label="Location"
            >
              <option>Anywhere</option>
              <option>New York</option>
              <option>London</option>
              <option>Tokyo</option>
              <option>Sydney</option>
            </select>
          </div>

          <div className="flex items-center gap-2 px-4 border-b md:border-b-0 md:border-r border-gray-200">
            <Briefcase size={18} className="text-gray-400 shrink-0" />
            <select
              className="py-3 text-sm outline-none bg-transparent text-gray-600 cursor-pointer"
              aria-label="Job type"
            >
              <option>Part Time</option>
              <option>Full Time</option>
              <option>Remote</option>
              <option>Contract</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-lime-400 hover:bg-lime-500 text-white px-8 py-3 rounded font-semibold text-sm transition-colors"
          >
            Search Jobs
          </button>
        </form>
      </div>
    </section>
  )
}
