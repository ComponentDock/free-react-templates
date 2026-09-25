const partners = ['partner-1', 'partner-2', 'partner-3', 'partner-4', 'partner-5']

export function Partners() {
  return (
    <section className="bg-white py-8">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 px-4 md:px-8">
        {partners.map((seed) => (
          <img
            key={seed}
            src={`https://picsum.photos/seed/${seed}/120/40`}
            alt="Partner logo"
            className="h-10 w-auto object-contain opacity-50 grayscale"
          />
        ))}
      </div>
    </section>
  )
}
