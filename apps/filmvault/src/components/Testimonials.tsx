const testimonials = [
  {
    quote:
      '"The automated process starts as soon as your clothes go into the machine. This site outcome is gleaming clothes. Placeholder text commonly used in publishing and graphic design."',
    name: 'Robart Brown',
    role: 'Creative Designer',
    image: 'https://picsum.photos/seed/filmvault-test1/80/80',
  },
  {
    quote:
      '"The automated process starts as soon as your clothes go into the machine. This site outcome is gleaming clothes. Placeholder text commonly used in publishing and graphic design."',
    name: 'Sarah Mitchell',
    role: 'Photographer',
    image: 'https://picsum.photos/seed/filmvault-test2/80/80',
  },
]

export function Testimonials() {
  return (
    <section className="relative bg-navy-900 py-20">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/filmvault-testbg/1600/600"
          alt=""
          className="h-full w-full object-cover opacity-10"
          loading="lazy"
        />
      </div>
      <div className="relative mx-auto max-w-4xl px-4 lg:px-8">
        <div className="space-y-12">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="text-center">
              <svg
                className="mx-auto mb-6 text-white/30"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
              </svg>
              <p className="font-[var(--font-sans)] text-lg leading-relaxed text-white/80">
                {t.quote}
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div className="text-left">
                  <span className="font-[var(--font-heading)] text-sm font-medium text-white">
                    {t.name}
                  </span>
                  <p className="text-xs text-white/50">{t.role}</p>
                </div>
              </div>
            </blockquote>
          ))}
        </div>
        <div className="mt-8 flex justify-center gap-2">
          <span className="h-2 w-2 rounded-full bg-white" />
          <span className="h-2 w-2 rounded-full bg-white/30" />
        </div>
      </div>
    </section>
  )
}
