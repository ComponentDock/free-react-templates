import { Expand } from 'lucide-react'

const images = [
  { seed: 'launchpad-p1', span: 'md:col-span-2', aspect: 'aspect-[16/10]' },
  { seed: 'launchpad-p2', span: '', aspect: 'aspect-square' },
  { seed: 'launchpad-p3', span: '', aspect: 'aspect-square' },
  { seed: 'launchpad-p4', span: 'md:col-span-2', aspect: 'aspect-[16/10]' },
  { seed: 'launchpad-p5', span: '', aspect: 'aspect-square' },
  { seed: 'launchpad-p6', span: '', aspect: 'aspect-square' },
]

export function Portfolio() {
  return (
    <section id="project" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Latest Projects</h2>
          <p className="mt-2 text-gray-500">Who are in extremely love with eco friendly system.</p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {images.map((img) => (
            <div key={img.seed} className={`group relative overflow-hidden rounded-lg ${img.span}`}>
              <img
                src={`https://picsum.photos/seed/${img.seed}/800/500`}
                alt="Project showcase"
                className={`h-full w-full object-cover transition duration-300 group-hover:scale-105 ${img.aspect}`}
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition group-hover:bg-black/40 group-hover:opacity-100">
                <span className="rounded-full bg-white/90 p-3 text-brand-600">
                  <Expand className="h-5 w-5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
