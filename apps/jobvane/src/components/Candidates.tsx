import { useState } from 'react'
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react'

const candidates = [
  { name: 'Danica Lewis', role: 'Web Developer', location: 'San Francisco' },
  { name: 'Nicole Simon', role: 'UI/UX Designer', location: 'New York' },
  { name: 'Cloe Meyer', role: 'Full Stack Dev', location: 'Remote' },
  { name: 'Rachel Clinton', role: 'Data Scientist', location: 'Austin' },
  { name: 'Dave Buff', role: 'DevOps Engineer', location: 'Seattle' },
]

export function Candidates() {
  const [index, setIndex] = useState(0)
  const visible = 3
  const max = candidates.length - visible

  const prev = () => setIndex((i) => Math.max(0, i - 1))
  const next = () => setIndex((i) => Math.min(max, i + 1))

  return (
    <section className="bg-primary-400 py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mb-10 text-center text-3xl font-extrabold text-white">Latest Candidates</h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300"
              style={{ transform: `translateX(-${index * (100 / visible)}%)` }}
            >
              {candidates.map((c) => (
                <div key={c.name} className="w-1/3 flex-shrink-0 px-3">
                  <div className="rounded-lg bg-white p-5 text-center shadow-sm">
                    <img
                      src={`https://picsum.photos/seed/${c.name.toLowerCase().replace(/\s+/g, '-')}/100/100`}
                      alt={c.name}
                      className="mx-auto mb-3 h-20 w-20 rounded-full object-cover"
                    />
                    <h4 className="font-bold text-ink">{c.name}</h4>
                    <p className="text-sm text-smoke">{c.role}</p>
                    <p className="mt-1 flex items-center justify-center gap-1 text-xs text-smoke">
                      <MapPin className="h-3 w-3" />
                      {c.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-md transition-colors hover:bg-gray-100"
            aria-label="Previous candidate"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-md transition-colors hover:bg-gray-100"
            aria-label="Next candidate"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
