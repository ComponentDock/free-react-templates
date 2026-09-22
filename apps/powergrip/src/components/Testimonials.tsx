import { testimonials, testimonialsSubtitle, testimonialsTitle } from '../data'

export function Testimonials() {
  return (
    <section
      id="testimonials-section"
      aria-label="Testimonials"
      className="relative bg-cover bg-center bg-fixed py-20"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/pg-testbg/1920/800)' }}
    >
      <div className="absolute inset-0 bg-overlay" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white">{testimonialsTitle}</h2>
          <h3 className="mt-2 text-xl text-white/80">{testimonialsSubtitle}</h3>
        </div>
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="text-center">
              <blockquote className="rounded-lg bg-white/10 p-6 text-sm text-white/90 backdrop-blur-sm">
                <span className="mb-2 block text-sm font-bold text-brand">{t.name}</span>
                <p>{t.quote}</p>
              </blockquote>
              <img
                src={t.avatar}
                alt={t.name}
                className="mx-auto mt-4 h-16 w-16 rounded-full border-2 border-brand object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
