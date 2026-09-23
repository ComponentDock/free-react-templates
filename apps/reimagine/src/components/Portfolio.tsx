import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const works = [
  { id: 1, title: 'Brand Identity', desc: 'Visual system redesign' },
  { id: 2, title: 'Web Platform', desc: 'Full-stack web application' },
  { id: 3, title: 'Mobile Experience', desc: 'Cross-platform app design' },
  { id: 4, title: 'Marketing Campaign', desc: 'Multi-channel digital strategy' },
  { id: 5, title: 'Product Launch', desc: 'End-to-end product rollout' },
]

export function Portfolio() {
  const [start, setStart] = useState(0)
  const visible = 3

  const prev = () => setStart((s) => (s === 0 ? works.length - visible : s - 1))
  const next = () => setStart((s) => (s >= works.length - visible ? 0 : s + 1))

  const items = [...works.slice(start), ...works.slice(0, start)].slice(0, visible)

  return (
    <section id="elements" className="py-20 bg-[--color-bg-alt]">
      <div className="mx-auto max-w-[69%] px-4">
        <div className="text-center mb-12">
          <p className="uppercase text-xs tracking-[0.2em] mb-2 font-light text-[--color-body]">
            Re-imagining the way
          </p>
          <h2 className="text-3xl font-semibold text-[--color-ink]">Our Amazing Works</h2>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {items.map((w) => (
              <div key={w.id} className="bg-white overflow-hidden shadow-sm">
                <div className="aspect-video bg-gradient-to-br from-[--color-brand-light] to-[--color-accent-light] flex items-center justify-center">
                  <img
                    src={`https://picsum.photos/seed/reimagine${w.id}/600/340`}
                    alt={w.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 text-center">
                  <h6 className="text-[--color-ink] font-medium text-sm">{w.title}</h6>
                  <p className="text-[--color-body] text-xs mt-1">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={prev}
            aria-label="Previous works"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-[--color-ink] hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next works"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-[--color-ink] hover:bg-gray-100 transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}
