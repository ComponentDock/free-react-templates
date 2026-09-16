import { Button } from '@free-react-templates/ui'

export function CtaBanner() {
  return (
    <section className="relative h-[350px] w-full overflow-hidden">
      <img
        src="https://picsum.photos/seed/nectar-cta/1600/400"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
          Are You Ready To Start Your Next Project?
        </h2>
        <p className="mt-3 max-w-xl text-white/80">
          Get in touch with our team today and let us bring your construction vision to life with
          quality and professionalism.
        </p>
        <Button
          className="mt-6 bg-brand px-8 py-3 font-semibold text-white transition-colors hover:bg-brand-dark"
          aria-label="Request a quote"
        >
          Request A Quote
        </Button>
      </div>
    </section>
  )
}
