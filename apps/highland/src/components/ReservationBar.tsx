import { Phone } from 'lucide-react'

export function ReservationBar() {
  return (
    <section data-testid="reservation-bar" className="py-16 bg-white" id="reservation">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto border border-footer-text/40 px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-heading text-2xl md:text-3xl font-normal">For Reservation or Query?</p>
          <a
            href="tel:+105763774789"
            className="inline-flex items-center gap-3 bg-brand text-white px-10 py-3 rounded-full text-sm font-semibold hover:bg-brand-hover transition-colors"
          >
            <Phone size={16} />
            +10 576 377 4789
          </a>
        </div>
      </div>
    </section>
  )
}
