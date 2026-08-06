import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-primary-600 py-24 sm:py-32">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'linear-gradient(135deg, #a5b4fc 0%, #4f46e5 45%, #4338ca 100%)',
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h1 className="font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl">
          One Page, Infinite Possibilities
        </h1>
        <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-primary-100">
          Build a stunning single page website that tells your whole story — services, products,
          apps, or SaaS. Fast, responsive, and effortless to customize.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <ButtonLink
            href="#features"
            className="rounded-full bg-white px-9 py-3.5 text-primary-600 hover:bg-primary-50"
          >
            Get Started
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
