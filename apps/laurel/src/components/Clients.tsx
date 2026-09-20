export function Clients() {
  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-brand-heading sm:text-4xl">
            Our Trusted Clients
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {Array.from({ length: 6 }, (_, i) => (
            <div
              key={i}
              className="flex h-20 items-center justify-center rounded-[10px] bg-gray-100"
            >
              <span className="text-sm font-medium text-gray-400">Client {i + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
