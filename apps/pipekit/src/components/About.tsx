import { Award } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

export function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="relative">
            <img
              src="https://picsum.photos/seed/pipekit-about/600/500"
              alt="Our creative team at work"
              className="w-full rounded-lg object-cover shadow-lg"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -right-6 flex h-24 w-24 items-center justify-center rounded-lg bg-gold-400 shadow-lg">
              <div className="text-center">
                <span className="block text-2xl font-bold text-navy-800">15</span>
                <span className="text-xs font-semibold uppercase text-navy-700">Years</span>
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold-500">
              About Us
            </p>
            <h2 className="text-3xl font-bold text-navy-600 sm:text-4xl">
              Crafting Digital Experiences Since 2009
            </h2>
            <p className="mt-6 leading-relaxed text-gray-600">
              We are a passionate team of designers, developers, and strategists dedicated to
              building brands that stand out. Our approach combines creative vision with technical
              excellence to deliver results that exceed expectations.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              From brand identity to web development, we offer end-to-end solutions tailored to your
              unique needs. Every project is an opportunity to push boundaries and create something
              extraordinary.
            </p>
            <div className="mt-8 flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <Award className="h-8 w-8 text-gold-400" aria-hidden="true" />
                <div>
                  <span className="block text-lg font-bold text-navy-600">50+</span>
                  <span className="text-sm text-gray-500">Awards Won</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Award className="h-8 w-8 text-gold-400" aria-hidden="true" />
                <div>
                  <span className="block text-lg font-bold text-navy-600">200+</span>
                  <span className="text-sm text-gray-500">Projects Done</span>
                </div>
              </div>
            </div>
            <Button
              variant="outline"
              className="mt-8 border-navy-600 text-navy-600 hover:bg-navy-600 hover:text-white"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
