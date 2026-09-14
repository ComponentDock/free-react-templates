const logos = [1, 2, 3, 4, 5]

export function Partners() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-12 px-4 opacity-50 grayscale">
        {logos.map((n) => (
          <img
            key={n}
            src={`https://picsum.photos/seed/cirrus-partner-${n}/150/50`}
            alt={`Partner ${n}`}
            className="h-10 w-auto object-contain"
          />
        ))}
      </div>
    </section>
  )
}
