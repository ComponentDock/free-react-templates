import { Phone } from 'lucide-react'

export function CTA() {
  return (
    <section
      className="relative py-24 bg-cover bg-center"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/retreat-cta/1920/600)' }}
    >
      <div className="absolute inset-0 bg-navy/80" />
      <div className="relative container mx-auto px-4 flex flex-col md:flex-row items-center justify-between z-10">
        <div className="text-white mb-6 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Contact us now!</h2>
          <p className="flex items-center gap-2 text-gray-300">
            <Phone className="w-4 h-4 text-brand" />
            Contact (+12) 345-678-9999 to book directly or for advice
          </p>
        </div>
        <a
          href="#contact"
          className="bg-brand text-white px-8 py-3 rounded-sm font-medium hover:bg-white hover:text-brand border-2 border-brand transition-colors"
        >
          Contact Now
        </a>
      </div>
    </section>
  )
}
