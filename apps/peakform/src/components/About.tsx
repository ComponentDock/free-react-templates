import { Check } from 'lucide-react'

const checklist = [
  'Professional Trainers',
  'Opening Hours',
  'Flexible Schedule',
  'Affordable Price',
]

export function About() {
  return (
    <section className="py-16 md:py-24 bg-white" aria-label="About Us">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink uppercase mb-6">
              About Us
            </h2>
            <p className="text-ink/70 leading-relaxed mb-8">
              Peakform is your ultimate destination for fitness and wellness. Our state-of-the-art
              facilities and experienced trainers are dedicated to helping you achieve your fitness
              goals. Whether you're a beginner or a seasoned athlete, we have something for
              everyone.
            </p>
            <ul className="space-y-3 mb-8">
              {checklist.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand text-white">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm font-semibold text-ink">{item}</span>
                </li>
              ))}
            </ul>
            <button className="rounded-full bg-brand px-8 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-primary-600 transition-colors">
              Read More
            </button>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://picsum.photos/seed/peakform-about/600/500"
              alt="About Peakform"
              className="rounded-2xl w-full object-cover shadow-lg"
            />
            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-2xl bg-brand/10" />
          </div>
        </div>
      </div>
    </section>
  )
}
