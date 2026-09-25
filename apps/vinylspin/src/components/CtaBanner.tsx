import { ArrowRight } from 'lucide-react'

export function CtaBanner() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-24"
      style={{ backgroundImage: "url('https://picsum.photos/seed/vinylspin-cta/1920/600')" }}
    >
      <div className="absolute inset-0 bg-void/70" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="mb-4 text-4xl font-bold text-ink">Get your tickets now!</h2>
          <p className="mb-8 text-subtle">
            In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum
            eros hendrerit, id lobortis leo volutpat.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded bg-primary-400 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-ink transition-colors hover:bg-primary-500"
          >
            Buy Now
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
