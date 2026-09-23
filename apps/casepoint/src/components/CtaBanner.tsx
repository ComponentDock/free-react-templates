import { cn } from '@free-react-templates/ui'

interface CtaBannerProps {
  className?: string
}

export function CtaBanner({ className }: CtaBannerProps) {
  return (
    <section
      className={cn('py-16 bg-cover bg-center', className)}
      style={{ backgroundImage: 'url(https://picsum.photos/seed/casepoint-cta/1920/600)' }}
    >
      <div className="absolute inset-0 bg-brand-darker/80" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white max-w-2xl">
            Are you Searching For a First-Class Consultant?
          </h2>
          <a
            href="#contact"
            className="inline-block px-11 py-7 bg-brand-darker text-white text-sm font-semibold uppercase tracking-wider hover:bg-brand-dark transition-colors shrink-0"
          >
            Contact Now
          </a>
        </div>
      </div>
    </section>
  )
}
