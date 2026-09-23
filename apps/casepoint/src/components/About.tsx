import { cn } from '@free-react-templates/ui'

interface AboutProps {
  className?: string
}

export function About({ className }: AboutProps) {
  return (
    <section id="about" className={cn('bg-white py-20', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://picsum.photos/seed/casepoint-about/600/400"
              alt="Law agency team"
              className="w-full shadow-lg object-cover"
              loading="lazy"
            />
          </div>

          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="w-14 h-0.5 bg-brand" />
              <span className="text-brand text-sm font-heading font-semibold uppercase tracking-wider">
                About Our Law agency
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-heading leading-tight mb-6">
              We are committed for better service
            </h2>
            <p className="text-text-muted leading-relaxed mb-6">
              Our firm brings decades of combined experience to every case. We take the time to
              understand your situation and develop a strategy that works for you. With years of
              experience in the legal industry, our team of dedicated professionals is committed to
              providing the highest quality legal services.
            </p>
            <p className="text-text-muted leading-relaxed mb-8">
              We understand that every case is unique, and we tailor our approach to meet the
              specific needs of each client. Our commitment to excellence and client satisfaction
              sets us apart in the legal industry.
            </p>
            <a
              href="#contact"
              className="inline-block px-11 py-7 bg-brand-dark text-white text-sm font-semibold hover:bg-brand-dark/90 transition-colors"
            >
              Learn About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
