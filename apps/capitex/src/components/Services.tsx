import { ArrowRight } from 'lucide-react'

const services = [
  {
    title: 'Student Loan',
    description:
      'Flexible loan options designed to help students cover tuition, books, and living expenses during their academic journey.',
    image: 'https://picsum.photos/seed/capitex-svc1/400/250',
  },
  {
    title: 'Business Loan',
    description:
      'Grow your business with our tailored financing solutions. Quick approval, competitive rates, and flexible repayment terms.',
    image: 'https://picsum.photos/seed/capitex-svc2/400/250',
  },
  {
    title: 'Startup Loan',
    description:
      'Launch your startup with confidence. Our specialized funding helps new businesses get off the ground with minimal hassle.',
    image: 'https://picsum.photos/seed/capitex-svc3/400/250',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-gray-bg py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
          Loan for your business &amp; startup
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-body">
          We offer a range of loan products tailored to meet your unique financial needs and help
          you achieve your goals.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="overflow-hidden rounded bg-white shadow-md transition hover:shadow-lg"
            >
              <img src={svc.image} alt={svc.title} className="h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-navy">{svc.title}</h3>
                <p className="mb-4 text-sm text-body">{svc.description}</p>
                <a
                  href="#home"
                  className="inline-flex items-center gap-2 rounded bg-brand px-5 py-2 text-sm font-semibold text-navy uppercase transition hover:bg-brand-hover"
                >
                  Apply For Loan
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
