import { CheckCircle } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const features = [
  'Professional cryptocurrency consulting',
  '24/7 market monitoring and alerts',
  'Secure blockchain development',
  'Custom trading strategy design',
]

export function AboutContent() {
  return (
    <section id="about" className="bg-ink py-16 lg:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-2">
        {/* Text content */}
        <div className="text-white">
          <h2 className="font-display text-3xl font-bold lg:text-4xl">
            About <span className="text-brand">Coincast</span>
          </h2>
          <p className="mt-4 leading-relaxed text-white/70">
            We are a leading cryptocurrency agency providing end-to-end solutions for businesses and
            individuals navigating the digital currency landscape. Our team of experts combines
            years of fintech experience with cutting-edge blockchain technology.
          </p>
          <ul className="mt-6 space-y-3">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-3 text-white/80">
                <CheckCircle size={18} className="shrink-0 text-brand" />
                {f}
              </li>
            ))}
          </ul>
          <Button variant="primary" size="lg" className="mt-8">
            Learn More
          </Button>
        </div>

        {/* Image */}
        <div className="hidden lg:block">
          <img
            src="https://picsum.photos/seed/coincast-about/600/400"
            alt="Coincast team working on cryptocurrency analysis"
            className="w-full rounded-lg object-cover shadow-lg"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
