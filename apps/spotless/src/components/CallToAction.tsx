import { Phone } from 'lucide-react'

export function CallToAction() {
  return (
    <section
      id="call-to-action"
      className="bg-cover bg-center bg-no-repeat py-16 lg:py-20"
      style={{ backgroundImage: "url('https://picsum.photos/seed/spotless-callto/1920/700')" }}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center lg:flex-row lg:px-8 lg:text-left">
        <div>
          <h2 className="text-4xl font-medium text-white">Free Call Back</h2>
          <p className="mt-4 max-w-xl leading-relaxed text-white/85">
            Have a question or want a free quote? Leave us your number and our team will call you
            back within the hour.
          </p>
        </div>
        <a
          href="tel:+19706683568"
          className="inline-flex items-center gap-3 rounded-full bg-accent px-10 pb-2.5 pt-3 text-sm font-medium uppercase tracking-widest text-heading transition-colors hover:bg-accent-dark"
        >
          <Phone className="h-5 w-5" aria-hidden="true" />
          +1 970-668-3568
        </a>
      </div>
    </section>
  )
}
