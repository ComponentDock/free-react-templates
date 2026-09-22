import { Phone } from 'lucide-react'

export function CtaBanner() {
  return (
    <section className="bg-coral-400 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-bold text-white">Make your appointment today!</h2>
            <p className="mt-1 text-sm text-coral-100">
              Our friendly team is ready to help you achieve your aesthetic goals.
            </p>
          </div>
          <a
            href="tel:+345867788892"
            className="flex items-center gap-2 text-lg font-bold text-white"
          >
            <Phone className="h-5 w-5" />
            +34 586 778 8892
          </a>
        </div>
      </div>
    </section>
  )
}
