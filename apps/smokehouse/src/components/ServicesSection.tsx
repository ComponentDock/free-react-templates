const services = [
  {
    icon: (
      <svg
        className="h-10 w-10"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path d="M3 17h1m16 0h1M5.5 17a2 2 0 012-2h9a2 2 0 012 2M12 5v2m0 0a4 4 0 00-4 4h8a4 4 0 00-4-4z" />
      </svg>
    ),
    title: 'Noodles & Spaghetti',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia.',
  },
  {
    icon: (
      <svg
        className="h-10 w-10"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12h8M12 8v8" />
      </svg>
    ),
    title: 'Big Hamburger',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia.',
  },
  {
    icon: (
      <svg
        className="h-10 w-10"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      </svg>
    ),
    title: 'Chicken Leg',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia.',
  },
  {
    icon: (
      <svg
        className="h-10 w-10"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
        <path d="M8 12l3 3 5-5" />
      </svg>
    ),
    title: 'Vegetarian Food',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia.',
  },
  {
    icon: (
      <svg
        className="h-10 w-10"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75" />
      </svg>
    ),
    title: 'Fried Chicken',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia.',
  },
  {
    icon: (
      <svg
        className="h-10 w-10"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path d="M3 17h1m16 0h1M5.5 17a2 2 0 012-2h9a2 2 0 012 2M12 5v2" />
        <path d="M8 9a4 4 0 004-4" />
      </svg>
    ),
    title: 'Beef Steak & Rib',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia.',
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="bg-bg-light py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-heading md:text-4xl">
          Restaurant Services
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="rounded-sm bg-white p-8 text-center shadow-sm">
              <div className="mb-4 flex justify-center text-brand">{service.icon}</div>
              <h3 className="mb-3 text-lg font-semibold text-heading">{service.title}</h3>
              <p className="text-sm leading-relaxed text-text-muted">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
