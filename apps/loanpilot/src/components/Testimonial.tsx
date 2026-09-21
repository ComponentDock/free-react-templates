const testimonials = [
  {
    name: 'Emily Wilson',
    role: 'Business Owner',
    quote:
      'Loanpilot made the entire process seamless. I was able to get the funding I needed for my business within days. Highly recommended!',
    image: 'loan-testimonial-1',
  },
  {
    name: 'James Rodriguez',
    role: 'Freelancer',
    quote:
      'As a freelancer, getting a loan seemed impossible. Loanpilot changed that. Their flexible terms and low rates are unbeatable.',
    image: 'loan-testimonial-2',
  },
  {
    name: 'Sarah Thompson',
    role: 'Student',
    quote:
      'The education loan I received helped me complete my degree without financial stress. The team was incredibly supportive throughout.',
    image: 'loan-testimonial-3',
  },
] as const

export function Testimonial() {
  return (
    <section
      id="testimonial"
      className="relative bg-cover bg-center py-20"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/loan-testimonial-bg/1920/900)',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-navy/90" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">What Customers Are Saying</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="rounded bg-white p-8 shadow-lg">
              <div className="mb-4 flex items-center gap-4">
                <img
                  src={`https://picsum.photos/seed/${testimonial.image}/80/80`}
                  alt={testimonial.name}
                  className="h-16 w-16 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <h3 className="font-bold text-navy">{testimonial.name}</h3>
                  <p className="text-sm text-primary">{testimonial.role}</p>
                </div>
              </div>
              <p className="leading-relaxed text-body-text-secondary">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
