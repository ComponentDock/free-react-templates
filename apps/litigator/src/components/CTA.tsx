import { Phone } from 'lucide-react'

export function CTA() {
  return (
    <section className="bg-surface py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="relative overflow-hidden rounded-lg bg-cover bg-center py-16 text-center"
          style={{ backgroundImage: "url('https://picsum.photos/seed/litigator-cta/1200/400')" }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative">
            <h2 className="mb-6 text-2xl font-bold text-white sm:text-3xl">
              Let&apos;s get started. Call us Now for a Free Consultation
            </h2>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded bg-primary-400 px-8 py-3 font-semibold text-white transition-colors hover:bg-primary-500"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
