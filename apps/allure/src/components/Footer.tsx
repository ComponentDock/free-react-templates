const offices = [
  {
    city: 'Milan',
    lines: ['1095 Lodgeville Road', 'Milan', '+34 5667 77833'],
  },
  {
    city: 'Paris',
    lines: ['2591 Seltice Way', 'Paris', '+34 5667 77833'],
  },
  {
    city: 'New York',
    lines: ['3405 Fieldstone Drive', 'New York', '+34 5667 77833'],
  },
  {
    city: 'London',
    lines: ['1738 Pinnickinnic Street', 'London', '+34 5667 77833'],
  },
] as const

export function Footer() {
  return (
    <footer className="bg-white pt-28 transition-colors dark:bg-gray-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-24 sm:px-6 lg:flex-row">
        <div className="lg:w-1/4">
          <p className="font-display text-4xl font-bold text-ink dark:text-white">
            Allure<span className="text-brand">.</span>
          </p>
          <p className="mt-3 text-base text-tagline">Model Agency</p>
          <p className="mt-8 text-xs text-copyright">
            © {new Date().getFullYear()} Allure — Free React Template
          </p>
        </div>

        <div className="grid flex-1 grid-cols-2 gap-10 md:grid-cols-4">
          {offices.map((office) => (
            <div key={office.city}>
              <h3 className="text-xl font-bold text-ink dark:text-white">{office.city}</h3>
              <ul className="mt-6 space-y-1 text-sm text-mist">
                {office.lines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
