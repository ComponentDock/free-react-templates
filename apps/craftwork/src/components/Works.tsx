import { ExternalLink } from 'lucide-react'

const works = [
  { title: 'Brand Identity System', category: 'Branding', seed: 'craftwork-w1' },
  { title: 'E-Commerce Redesign', category: 'UI/UX', seed: 'craftwork-w2' },
  { title: 'Mobile Banking App', category: 'Mobile', seed: 'craftwork-w3' },
  { title: 'SaaS Dashboard', category: 'Frontend', seed: 'craftwork-w4' },
  { title: 'Travel Platform', category: 'UI/UX', seed: 'craftwork-w5' },
  { title: 'Social Media Campaign', category: 'Photography', seed: 'craftwork-w6' },
]

export function Works() {
  return (
    <section id="works" className="bg-paper py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand">Works</span>
          <h2 className="mt-2 text-4xl font-bold text-ink">Featured projects</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((w) => (
            <div key={w.title} className="group relative overflow-hidden rounded-2xl">
              <img
                src={`https://picsum.photos/seed/${w.seed}/600/400`}
                alt={w.title}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                width={600}
                height={400}
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-brand/0 p-6 transition-all duration-300 group-hover:bg-brand/90">
                <span className="mb-1 text-xs font-semibold uppercase tracking-widest text-white/0 transition-colors group-hover:text-white/80">
                  {w.category}
                </span>
                <h3 className="flex items-center gap-2 text-lg font-semibold text-white/0 transition-colors group-hover:text-white">
                  {w.title} <ExternalLink size={14} />
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
