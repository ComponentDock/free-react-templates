import { cn } from '@free-react-templates/ui'

interface AboutProps {
  className?: string
}

export function About({ className }: AboutProps) {
  return (
    <section id="about" className={cn('py-20', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://picsum.photos/seed/tribunal-about/600/400"
              alt="Law agency office"
              className="w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center cursor-pointer hover:bg-brand-dark transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                  <polygon points="5,3 19,12 5,21" />
                </svg>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-heading leading-tight mb-6">
              Founded in 1856, Our Agency has over 175 lawyers
            </h2>
            <p className="text-text-muted leading-relaxed mb-6">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
              at the coast of the Semantics, a large language ocean.
            </p>
            <p className="text-text-muted leading-relaxed">
              A small river named Duden flows by their place and supplies it with the necessary
              regelialia. It is a paradisematic country, in which roasted parts of sentences fly
              into your mouth.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
