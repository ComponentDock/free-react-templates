export function Certificates() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div>
            <h2 className="font-heading text-3xl font-bold text-navy-800">
              Property
              <br />
              <span className="text-red-500">Certificates</span>
            </h2>
            <div className="mt-3 flex gap-1">
              <span className="h-1 w-12 bg-red-500" />
              <span className="h-1 w-4 bg-red-500" />
            </div>
          </div>

          <div className="flex items-center gap-8">
            {[1, 2, 3].map((n) => (
              <img
                key={n}
                src={`https://picsum.photos/seed/residium-cert-${n}/120/60`}
                alt={`Certificate ${n}`}
                className="h-12 w-auto opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
