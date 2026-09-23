import { Eye } from 'lucide-react'

const items = [
  { title: 'Smart Watch', tag: 'PSD Mockup', seed: 'vertex-p1' },
  { title: 'Smart Watch', tag: 'PSD Mockup', seed: 'vertex-p2' },
  { title: 'Smart Watch', tag: 'PSD Mockup', seed: 'vertex-p3' },
  { title: 'Smart Watch', tag: 'PSD Mockup', seed: 'vertex-p4' },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-[#f8f9fa] py-20">
      <div className="mx-auto max-w-[1170px] px-6">
        <div className="mb-12 flex items-end gap-4">
          <span className="font-display text-6xl font-bold text-[#32DB8A] opacity-40">02</span>
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-ink">
            Portfolio
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <div key={i} className="group relative overflow-hidden rounded bg-white shadow-sm">
              <img
                src={`https://picsum.photos/seed/${item.seed}/400/300`}
                alt={item.title}
                className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-[#221C5A]/0 opacity-0 transition-all duration-300 group-hover:bg-[#221C5A]/80 group-hover:opacity-100">
                <Eye size={28} className="text-white" />
              </div>
              <div className="p-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#32DB8A]">
                  {item.tag}
                </span>
                <h3 className="mt-1 font-display text-base font-bold text-ink">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button className="rounded bg-[#32DB8A] px-8 py-3 font-medium uppercase tracking-wide text-[#221C5A] transition-colors hover:bg-[#28b872]">
            Load More
          </button>
        </div>
      </div>
    </section>
  )
}
