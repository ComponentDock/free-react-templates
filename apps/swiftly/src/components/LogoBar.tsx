const logos = ['Puma', 'Adobe', 'Google', 'PayPal']

export function LogoBar() {
  return (
    <section className="bg-surface py-8" aria-label="Partner logos">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
        {logos.map((name) => (
          <div
            key={name}
            className="flex items-center justify-center text-xl font-bold text-mist/60"
          >
            {name}
          </div>
        ))}
      </div>
    </section>
  )
}
