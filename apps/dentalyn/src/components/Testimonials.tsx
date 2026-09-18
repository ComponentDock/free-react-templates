const testimonials = [
  {
    quote:
      "I'd been avoiding the dentist for years due to bad experiences. A reminder SMS is sent the working day beforehand. I also had a call confirming appointment. I have been a patient ever since. My dentist is very reassuring and very helpful. Excellent treatment and advice.",
    name: 'Arron Ramsey',
    role: 'Dental Patient',
  },
  {
    quote:
      'Absolutely wonderful experience from start to finish. The staff was incredibly professional and made me feel comfortable throughout the entire procedure. Highly recommend Dentalyn to anyone looking for quality dental care.',
    name: 'Emily Watson',
    role: 'Dental Patient',
  },
  {
    quote:
      'The team at Dentalyn took the time to explain every step of my treatment plan. I finally found a dental clinic I can trust. The modern equipment and friendly atmosphere make every visit a breeze.',
    name: 'David Park',
    role: 'Dental Patient',
  },
] as const

export function Testimonials() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-16"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://picsum.photos/seed/dentalyn-testimonials/1600/900)',
      }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-2xl font-bold text-white">Testimonials</h2>
          <div className="mx-auto h-1 w-12 bg-primary-400" />
        </div>
        <div className="space-y-8">
          {testimonials.map((t) => (
            <div key={t.name} className="flex flex-col items-center gap-6 sm:flex-row">
              <img
                src={`https://picsum.photos/seed/${t.name.replace(/\s/g, '')}/180/180`}
                alt={t.name}
                className="h-28 w-28 shrink-0 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <p className="mb-3 text-base italic leading-relaxed text-white/90">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <h6 className="text-sm font-semibold text-white">{t.name}</h6>
                <p className="text-sm text-white/70">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
