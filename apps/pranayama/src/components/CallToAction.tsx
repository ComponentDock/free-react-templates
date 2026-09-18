import { Button } from '@free-react-templates/ui'

export function CallToAction() {
  return (
    <section
      className="relative flex items-center justify-center bg-cover bg-center bg-no-repeat py-20"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/pranayama-cta/1920/600)',
      }}
    >
      <div className="absolute inset-0 bg-brand/80" />
      <div className="relative z-10 text-center">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
          Take a Free Class Now
        </h2>
        <Button
          variant="primary"
          size="lg"
          className="mt-8 bg-gold text-[#111111] hover:bg-gold/80"
        >
          Join Now
        </Button>
      </div>
    </section>
  )
}
