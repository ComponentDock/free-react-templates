export function Features() {
  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-8 lg:grid-cols-3">
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-brio-dark">
              Reasons To Choose Notebook
            </h2>
            <p className="text-brio-muted">
              Here, I focus on a range of items and features that we use in life without giving them
              a second thought, such as Coca Cola.
            </p>
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-brio-dark">
              Facts Why Inkjet Printing
            </h2>
            <p className="text-brio-muted">
              Here, I focus on a range of items and features that we use in life without giving them
              a second thought, such as Coca Cola.
            </p>
          </div>
          <div>
            <img
              src="https://picsum.photos/seed/brio-feature/500/400"
              alt="Feature illustration"
              className="w-full rounded-lg object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
