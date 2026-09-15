export function Offer() {
  return (
    <section id="services" className="relative overflow-hidden bg-brio-dark py-20 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-8 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-bold leading-tight">
              Main <br />
              Application <br />
              Features
            </h2>
          </div>
          <div className="lg:col-span-4">
            <img
              src="https://picsum.photos/seed/brio-screen/400/500"
              alt="App screen preview"
              className="mx-auto w-full max-w-xs rounded-lg object-cover"
              loading="lazy"
            />
          </div>
          <div className="lg:col-span-5 lg:pl-8">
            <h3 className="mb-4 text-xl font-semibold">Download Free Song For iPod</h3>
            <p className="leading-relaxed text-white/70">
              LCD screens are uniquely modern in style, and the liquid crystals that make them work
              have allowed humanity to create slimmer, more portable technology than we&rsquo;ve
              ever had access to before.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
