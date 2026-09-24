import { cn } from '@free-react-templates/ui'

interface AboutSectionProps {
  className?: string
}

export function AboutSection({ className }: AboutSectionProps) {
  return (
    <section className={cn('py-16', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div
              className="w-full h-80 rounded-lg bg-cover bg-center"
              style={{
                backgroundImage: `url('https://picsum.photos/seed/healix-about/800/600')`,
              }}
            />
            <div className="absolute -bottom-6 -right-6 bg-brand-blue text-white px-6 py-3 rounded-lg shadow-lg hidden md:block">
              <span className="text-2xl font-bold">18+</span>
              <span className="block text-sm">Years Experience</span>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold text-body-dark mb-4">
              Your Health is Our <span className="text-brand-blue">Priority</span>
            </h2>
            <p className="text-body mb-4 leading-relaxed">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
              at the coast of the Semantics, a large language ocean.
            </p>
            <p className="text-body mb-6 leading-relaxed">
              A small river named Duden flows by their place and supplies it with the necessary
              regelialia. It is a paradisematic country.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-brand-blue" />
                <span className="text-sm text-body-dark">Qualified Doctors</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-brand-blue" />
                <span className="text-sm text-body-dark">Emergency Services</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-brand-blue" />
                <span className="text-sm text-body-dark">24/7 Open</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-brand-blue" />
                <span className="text-sm text-body-dark">Best Equipment</span>
              </div>
            </div>
            <a
              href="#services"
              className="inline-block bg-brand-blue text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-brand-blue-light transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
