import { ChevronRight } from 'lucide-react'

export function JoinCta() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Join Our Platform Today</h2>
        <p className="text-muted max-w-2xl mx-auto mb-8 leading-relaxed">
          Suspendisse tincidunt magna eget massa hendrerit efficitur. Ut euismod pellentesque
          imperdiet. Cras laoreet gravida lectus, at viverra lorem venenatis in. Aenean id varius
          quam.
        </p>
        <button className="bg-brand hover:bg-brand-hover text-white font-semibold uppercase text-xs tracking-wider px-8 h-12 flex items-center gap-2 mx-auto transition-colors">
          Register Now <ChevronRight size={16} />
        </button>
      </div>
    </section>
  )
}
