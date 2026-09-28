const TESTIMONIALS = [
  {
    heading: 'I really love it',
    text: 'Outstanding design work that exceeded all expectations. The attention to detail and creative vision brought our project to life beautifully.',
    name: 'Daiane Smith',
    role: 'Customer',
  },
  {
    heading: '5* Design & Functionality',
    text: 'Professional, responsive, and incredibly talented. The final product was exactly what we envisioned and more.',
    name: 'Robert Johnson',
    role: 'Client',
  },
  {
    heading: 'The best pack out there',
    text: 'From concept to delivery, the experience was seamless. Highly recommend for anyone looking for quality design work.',
    name: 'Sarah Williams',
    role: 'Customer',
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-light-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="w-1.5 h-8 bg-amber-brand mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-semibold text-dark-heading">
            Client's testimonials
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.heading + t.name} className="bg-white p-8 shadow-sm">
              <h5 className="text-lg font-semibold text-dark-heading mb-4">{t.heading}</h5>
              <p className="text-gray-text text-sm leading-relaxed mb-6">{t.text}</p>
              <div className="flex items-center gap-4">
                <img
                  src={`https://picsum.photos/seed/idcraft-tes-${t.name}/60/60`}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <h6 className="text-sm font-semibold text-dark-heading">
                    {t.name}, <span className="font-normal text-gray-text">{t.role}</span>
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
