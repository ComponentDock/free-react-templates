import { Play } from 'lucide-react'

const stats = [
  { number: '30+', label: 'Years of Experience' },
  { number: '300+', label: 'Expert Engineers' },
  { number: '2000+', label: 'Number of Employees' },
  { number: '1500+', label: 'Number of Golds' },
]

export function AboutVideo() {
  return (
    <section id="about" className="bg-black py-16 md:py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <div className="relative aspect-video max-w-4xl mx-auto rounded overflow-hidden group cursor-pointer">
            <img
              src="https://picsum.photos/seed/stratum-about/800/450"
              alt="Video thumbnail"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
              <div className="w-16 h-16 rounded-full bg-[#ff8b00] flex items-center justify-center">
                <Play className="w-8 h-8 text-white ml-1" fill="white" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-heading text-[#ff8b00] mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-white/70 uppercase tracking-wider">{stat.label}</div>
              <div className="w-8 h-0.5 bg-[#ff8b00] mx-auto mt-3" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
