import { CheckCircle } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const features = [
  'Qualified & caring teachers',
  'Safe, nurturing environment',
  'Creative curriculum & activities',
  'Nutritious meals included',
]

export function AboutSection() {
  return (
    <section id="about" className="bg-brand-light py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left: welcome text */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-bold uppercase tracking-wide text-brand-blue">
              Welcome to TinyBrights
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              We provide a warm and stimulating environment where children aged 2–6 can thrive. Our
              dedicated staff fosters curiosity, confidence, and a lifelong love of learning through
              play-based education.
            </p>
            <a
              href="#courses"
              className="btn-pill mt-8 inline-flex items-center gap-2 bg-brand-blue px-8 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-blue/90"
            >
              Explore Courses
            </a>
          </div>

          {/* Right: 4-feature grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-7">
            {features.map((feat) => (
              <div key={feat} className="flex items-start gap-4">
                <span
                  className={cn(
                    'flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-blue text-white',
                  )}
                >
                  <CheckCircle className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="pt-2 text-sm font-medium text-gray-700">{feat}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
