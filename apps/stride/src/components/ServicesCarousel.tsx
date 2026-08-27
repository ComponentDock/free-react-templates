import { useState } from 'react'
import { Dumbbell, Users, HeartPulse, Salad, CupSoda, Bike } from 'lucide-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const features = [
  {
    icon: Dumbbell,
    title: 'Be Fit',
    desc: 'Professional fitness training to help you achieve your goals.',
  },
  { icon: Users, title: 'Join Club', desc: 'Become part of our vibrant fitness community today.' },
  {
    icon: HeartPulse,
    title: 'Gym Fitness',
    desc: 'State-of-the-art equipment for every workout style.',
  },
  { icon: Salad, title: 'Eat Healthy', desc: 'Nutrition guidance to fuel your fitness journey.' },
  { icon: CupSoda, title: 'Fruit Juices', desc: 'Fresh smoothies and juices at our in-house bar.' },
  { icon: Bike, title: 'Body Warmup', desc: 'Dynamic warm-up routines to prevent injuries.' },
]

export function ServicesCarousel() {
  const [page, setPage] = useState(0)
  const perView = 3
  const maxPage = Math.ceil(features.length / perView) - 1

  const visible = features.slice(page * perView, page * perView + perView)

  return (
    <section className="py-20 bg-white" id="services-carousel">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <p className="text-text-sub text-sm uppercase tracking-wider mb-2">Stay Healthy</p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Get A Perfect Body</h2>
          <p className="text-text-gray leading-relaxed">
            We provide the best fitness services to help you reach your peak performance and live a
            healthier life.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visible.map((f) => {
              const Icon = f.icon
              return (
                <div
                  key={f.title}
                  className="bg-white p-8 text-center rounded shadow-sm hover:shadow-xl transition-shadow"
                >
                  <Icon className="w-12 h-12 text-brand mx-auto mb-4" strokeWidth={1.5} />
                  <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                  <p className="text-text-gray text-sm leading-relaxed">{f.desc}</p>
                </div>
              )
            })}
          </div>

          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-white shadow flex items-center justify-center disabled:opacity-30 hover:bg-gray-50 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setPage((p) => Math.min(maxPage, p + 1))}
            disabled={page >= maxPage}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-white shadow flex items-center justify-center disabled:opacity-30 hover:bg-gray-50 transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: maxPage + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === page ? 'bg-brand' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
