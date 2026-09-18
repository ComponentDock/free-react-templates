import { cn } from '@free-react-templates/ui'
import { Stethoscope, Phone } from 'lucide-react'

interface AboutProps {
  className?: string
}

export function About({ className }: AboutProps) {
  return (
    <section id="about" className={cn('bg-ink py-16 px-4', className)} data-testid="about">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div>
          <img
            src="https://picsum.photos/seed/dentalink-about/600/400"
            alt="About Dentalink"
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        {/* Content */}
        <div className="text-white">
          <h2 className="text-3xl font-bold mb-4">Who we are to Serve the nation</h2>
          <p className="text-white/80 mb-8 leading-relaxed">
            We are a team of dedicated dental professionals committed to providing exceptional care
            to our community. With years of experience and the latest technology, we ensure every
            patient receives personalized treatment in a comfortable environment.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <Stethoscope className="text-brand mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold mb-1">Expert Services</h3>
                <p className="text-white/70 text-sm">
                  Our team provides the highest quality dental services with modern techniques.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="text-brand mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold mb-1">Great Support</h3>
                <p className="text-white/70 text-sm">
                  Reach out anytime — our friendly staff is always ready to help you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
