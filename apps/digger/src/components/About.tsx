import { Play } from 'lucide-react'

const stats = [
  { value: '30+', label: 'Years Experience' },
  { value: '300+', label: 'Engineers' },
  { value: '2000+', label: 'Employees' },
  { value: '1500+', label: 'Projects Done' },
]

export function About() {
  return (
    <section id="about" className="py-20 bg-dark-bg text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 relative">
            <img
              src="https://picsum.photos/seed/digger-about/600/400"
              alt="About Digger"
              className="rounded-lg w-full h-72 object-cover"
            />
            <button
              aria-label="Play video"
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-16 h-16 rounded-full bg-brand flex items-center justify-center hover:bg-brand-dark transition-colors">
                <Play size={24} className="text-white ml-1" />
              </div>
            </button>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">About Digger</h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              With over three decades of experience in construction and mining, Digger has built a
              reputation for excellence, reliability, and innovation. Our team of professionals is
              dedicated to delivering outstanding results.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-3xl font-bold font-heading text-brand">{s.value}</div>
                  <div className="text-sm text-gray-400 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
