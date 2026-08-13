const partnerCount = 6

/** Strip of six grayscale partner logos (seeded placeholders). */
export function Partners() {
  return (
    <section aria-label="Our partners" className="bg-white py-14">
      <div className="mx-auto grid max-w-5xl grid-cols-3 items-center gap-8 px-4 sm:grid-cols-6 lg:px-8">
        {Array.from({ length: partnerCount }, (_, i) => i + 1).map((n) => (
          <img
            key={n}
            src={`https://picsum.photos/seed/skyward-partner-${n}/200/100`}
            alt={`Partner logo ${n}`}
            className="mx-auto h-12 w-auto opacity-70 grayscale transition-opacity hover:opacity-100"
          />
        ))}
      </div>
    </section>
  )
}
