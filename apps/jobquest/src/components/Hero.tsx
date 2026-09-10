import { Search } from 'lucide-react'

const locations = [
  'Anywhere',
  'San Francisco',
  'Palo Alto',
  'New York',
  'Manhattan',
  'Ontario',
  'Toronto',
  'Kansas',
  'Mountain View',
]

const jobTypes = ['Part Time', 'Full Time', 'Freelancer']

export function Hero() {
  return (
    <section className="relative flex min-h-[520px] items-center justify-center bg-text-primary pt-16">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-brand opacity-60 mix-blend-multiply" />
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://picsum.photos/seed/jobquest-hero/1920/1080')" }}
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 text-center">
        <h1 className="mb-4 text-4xl font-extrabold text-white md:text-5xl">
          A Powerful Career Website Template
        </h1>
        <p className="mb-10 text-lg text-white/90">
          Find your dream jobs in our powerful career website template.
        </p>

        <form onSubmit={(e) => e.preventDefault()} className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <input
              type="text"
              placeholder="Job title, keywords..."
              className="rounded border border-transparent px-4 py-3 text-text-secondary focus:border-brand focus:outline-none"
            />
            <select
              className="rounded border border-transparent px-4 py-3 text-text-secondary focus:border-brand focus:outline-none"
              defaultValue="Anywhere"
            >
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
            <select
              className="rounded border border-transparent px-4 py-3 text-text-secondary focus:border-brand focus:outline-none"
              defaultValue="Part Time"
            >
              {jobTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded bg-brand px-6 py-3 font-bold text-white transition-colors hover:bg-brand-hover"
            >
              <Search size={18} />
              Search Job
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
