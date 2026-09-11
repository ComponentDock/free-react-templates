const services = [
  { name: 'Cloud VPS', desc: 'Scalable cloud virtual private servers.' },
  { name: 'Share', desc: 'Affordable shared hosting for beginners.' },
  { name: 'VPS', desc: 'Dedicated resources for growing sites.' },
  { name: 'Dedicated', desc: 'Full dedicated server power for enterprise.' },
]

export function MainServices() {
  return (
    <section id="hosting" className="bg-bg-main py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: illustration + text */}
          <div>
            <img
              src="https://picsum.photos/seed/hostcraft-services/500/350"
              alt="Services illustration"
              className="mb-6 w-full rounded object-cover"
            />
            <h2 className="mb-4 text-3xl font-bold text-text-primary">Our Main Services</h2>
            <p className="max-w-md text-text-muted">
              We offer a range of hosting solutions tailored to your needs, from shared hosting to
              dedicated servers.
            </p>
          </div>

          {/* Right: 2x2 grid */}
          <div className="grid grid-cols-2 gap-4">
            {services.map((s) => (
              <div key={s.name} className="rounded border border-gray-200 p-6 text-center">
                <h3 className="mb-2 text-base font-semibold text-text-primary">{s.name}</h3>
                <p className="text-sm text-text-muted">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
