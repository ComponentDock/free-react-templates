import { ArrowRight } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://picsum.photos/seed/seoflow-about/500/400"
              alt="Team working together"
              className="w-full rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy mb-6 leading-tight">
              We are an SEO company that specializes in developing.
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Esteem spirit temper too say adieus who direct esteem. It esteems luckily or picture
              placing drawing. Apartments frequently or motionless on reasonable. Esteem spirit
              temper too say adieus who direct esteem.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-brand-pink text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-pink-600 transition-colors"
            >
              About Us
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
