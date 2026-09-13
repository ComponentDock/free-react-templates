import { Quote, ArrowLeft, ArrowRight } from 'lucide-react'

export default function QuoteCta() {
  return (
    <section className="relative py-32" data-testid="quote-cta">
      <img
        src="https://picsum.photos/seed/landcraft-parallax3/1920/500"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <Quote size={32} className="mx-auto mb-4 text-white/60" />
          <p className="text-xl md:text-2xl font-light italic mb-6">
            Keep away from people who try to belittle your ambitions. Small minds always do that.
            But great minds make you feel that you, too, can become great.
          </p>
          <div className="flex items-center justify-center gap-3 text-white/80">
            <ArrowLeft size={16} />
            <span className="font-semibold">Brayden Shar</span>
            <ArrowRight size={16} />
          </div>
        </div>
      </div>
    </section>
  )
}
