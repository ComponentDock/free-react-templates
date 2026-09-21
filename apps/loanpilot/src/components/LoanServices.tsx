const services = [
  {
    number: '01.',
    title: 'Personal Loan',
    description: 'Flexible personal loans to meet your individual financial needs.',
    image: 'loan-service-personal',
  },
  {
    number: '02.',
    title: 'Business Loan',
    description: 'Grow your business with our tailored business loan solutions.',
    image: 'loan-service-business',
  },
  {
    number: '03.',
    title: 'Education Loan',
    description: 'Invest in your future with affordable education financing.',
    image: 'loan-service-education',
  },
  {
    number: '04.',
    title: 'Commercial Loan',
    description: 'Finance your commercial ventures with competitive rates.',
    image: 'loan-service-commercial',
  },
] as const

export function LoanServices() {
  return (
    <section id="services" className="bg-light-bg py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-navy sm:text-4xl">
            Discover all the loans for you
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.number}
              className="group relative overflow-hidden rounded bg-cover bg-center"
              style={{
                backgroundImage: `url(https://picsum.photos/seed/${service.image}/400/300)`,
              }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-navy/70 transition-colors group-hover:bg-navy/60" />
              <div className="relative z-10 flex min-h-[300px] flex-col justify-end p-6">
                <span className="mb-2 text-4xl font-bold text-primary">{service.number}</span>
                <h3 className="mb-2 text-xl font-bold text-white">{service.title}</h3>
                <p className="mb-4 text-sm text-white/80">{service.description}</p>
                <a
                  href="#"
                  className="text-sm font-semibold text-primary transition-colors hover:text-white"
                >
                  Find Out More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
