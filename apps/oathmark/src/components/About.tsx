import { cn } from '@free-react-templates/ui'

interface AboutProps {
  className?: string
}

export function About({ className }: AboutProps) {
  return (
    <section id="about" className={cn('bg-white py-20', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — images */}
          <div className="space-y-6">
            <img
              src="https://picsum.photos/seed/oathmark-atty1/600/400"
              alt="Attorney at law"
              className="w-full rounded-xl shadow-lg object-cover"
              loading="lazy"
            />
            <img
              src="https://picsum.photos/seed/oathmark-atty2/600/400"
              alt="Legal consultation"
              className="w-full rounded-xl shadow-lg object-cover"
              loading="lazy"
            />
          </div>

          {/* Right — text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 leading-tight mb-6">
              We Provide Highly Reliable &amp; Effective Legal Solutions
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              With years of experience in the legal industry, our team of dedicated professionals is
              committed to providing the highest quality legal services. We understand that every
              case is unique, and we tailor our approach to meet the specific needs of each client.
            </p>
            <a
              href="#contact"
              className="inline-block rounded-full px-6 py-3 bg-brand text-white font-semibold hover:bg-brand/90 transition-colors"
            >
              Book an appointment
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
