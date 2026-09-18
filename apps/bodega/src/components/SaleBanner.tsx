export function SaleBanner() {
  return (
    <section className="py-12 bg-white" aria-label="Sale banner">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="inline-block border-4 border-danger px-12 py-6">
          <span className="text-6xl md:text-8xl font-bold text-danger">45</span>
          <span className="text-3xl md:text-5xl font-bold text-danger ml-2">Sale</span>
        </div>
        <p className="mt-4 text-lg text-muted">Just hurry up limited offer!</p>
      </div>
    </section>
  )
}
