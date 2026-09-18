import { Phone } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

export function InfoCTA() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-navy/90" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="text-2xl font-light text-white md:text-3xl">For Any Information Call Us</h2>
        <p className="mt-4 text-white/70">
          Our consultants are ready to discuss your project and provide expert guidance
        </p>
        <ButtonLink
          href="tel:+16737636786"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-[#0181f5] to-brand px-8 py-3 text-sm font-medium text-white shadow-lg transition-transform hover:scale-105"
        >
          <Phone className="h-4 w-4" />
          +10 673 763 6786
        </ButtonLink>
      </div>
    </section>
  )
}
