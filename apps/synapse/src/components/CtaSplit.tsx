import { ButtonLink, cn } from '@free-react-templates/ui'

export function CtaSplit({ inverted = false }: { inverted?: boolean }) {
  return (
    <section
      aria-label="Call to action"
      className={cn('py-16 sm:py-24', inverted ? 'bg-white dark:bg-gray-950' : 'bg-primary-500')}
    >
      <div className={cn('mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2')}>
        <div className={cn(inverted && 'lg:order-2')}>
          <img
            src="https://picsum.photos/seed/synapse-cta/640/480"
            alt="Synapse product preview"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg"
          />
        </div>
        <div>
          <h2
            className={cn(
              'font-display text-3xl font-bold sm:text-4xl',
              inverted ? 'text-ink dark:text-white' : 'text-white',
            )}
          >
            We&apos;ve made a life that will change you
          </h2>
          <p
            className={cn(
              'mt-4 max-w-xl leading-relaxed',
              inverted ? 'text-gray-600 dark:text-gray-400' : 'text-primary-100',
            )}
          >
            We are here to listen from you deliver exellence. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </p>
          <div className="mt-8">
            <ButtonLink
              href="#pricing"
              className={cn(
                'rounded-full px-9 py-3.5',
                inverted
                  ? 'bg-primary-500 text-white hover:bg-primary-600'
                  : 'bg-white text-primary-600 hover:bg-primary-50',
              )}
            >
              Get Started Now
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
