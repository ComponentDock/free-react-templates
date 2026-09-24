import { Phone } from 'lucide-react'

export function Hotline() {
  return (
    <section
      className="relative bg-cover bg-center py-16 text-center"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,20,60,0.8), rgba(0,20,60,0.8)), url(https://picsum.photos/seed/medwell-hotline/1920/400)',
      }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
          Emergency Hotline
        </h2>
        <div className="mt-4 flex items-center justify-center gap-3">
          <Phone className="h-5 w-5 text-white" />
          <span className="font-heading text-2xl font-bold text-white">(+01) – 256 567 550</span>
        </div>
        <p className="mx-auto mt-4 max-w-lg text-sm text-white/80">
          We provide 24/7 customer support. Please feel free to contact us for emergency cases.
        </p>
      </div>
    </section>
  )
}
