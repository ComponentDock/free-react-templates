import { Button } from '@free-react-templates/ui'

export function CTA() {
  return (
    <section aria-label="Call to action" className="relative py-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/lawscape-cta/1920/600)' }}
      />
      <div className="absolute inset-0 bg-[rgba(1,0,9,0.6)]" />
      <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
          Free Case Evaluation
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-gray-300">
          Female divided bearing rule one called said Beginning set you living above saw seasons
          void created fruitful third years god.
        </p>
        <div className="mt-8">
          <Button className="bg-primary-500 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-700">
            Contact us Now
          </Button>
        </div>
      </div>
    </section>
  )
}
