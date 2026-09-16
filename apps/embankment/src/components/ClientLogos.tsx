const clientSeeds = [
  'embankment-cl1',
  'embankment-cl2',
  'embankment-cl3',
  'embankment-cl4',
  'embankment-cl5',
]

export function ClientLogos() {
  return (
    <section className="py-[120px]">
      <div className="mx-auto max-w-[1170px] px-4">
        <div className="flex flex-wrap items-center justify-center gap-12">
          {clientSeeds.map((seed) => (
            <img
              key={seed}
              src={`https://picsum.photos/seed/${seed}/200/80`}
              alt="Client logo"
              className="h-[80px] w-auto opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
