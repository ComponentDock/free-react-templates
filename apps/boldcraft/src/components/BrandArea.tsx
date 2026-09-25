const brands = ['Google', 'Spotify', 'Stripe', 'Notion', 'Figma', 'Linear']

export function BrandArea() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="flex flex-wrap items-center justify-center gap-12">
          {brands.map((name) => (
            <span
              key={name}
              className="font-heading text-2xl font-bold text-text-muted/40 transition-colors hover:text-text-muted"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
