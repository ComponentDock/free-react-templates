export function Partners() {
  return (
    <section className="py-12 bg-white" data-testid="partners">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-8 flex-wrap opacity-50">
          {[1, 2, 3, 4, 5].map((i) => (
            <img
              key={i}
              src={`https://picsum.photos/seed/greenplate-partner${i}/120/60`}
              alt={`Partner ${i}`}
              className="h-12 w-auto object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
