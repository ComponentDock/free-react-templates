const services = [
  {
    title: 'Research Suburbs',
    desc: 'We help you find the perfect neighborhood with detailed market insights and local data.',
    icon: 'fa-search',
  },
  {
    title: 'Sold Houses',
    desc: 'Access comprehensive records of recently sold properties to make informed decisions.',
    icon: 'fa-home',
  },
  {
    title: 'Security Priority',
    desc: 'Every property listing is verified for safety and security standards.',
    icon: 'fa-shield',
  },
]
export function Services() {
  return (
    <section className="py-16 bg-light" id="services">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-heading">Our Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div key={s.title} className="text-center">
              <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className={`fa ${s.icon} text-brand text-xl`} aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-heading mb-2">{s.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
