export function Welcome() {
  return (
    <section id="welcome" aria-label="Welcome" className="bg-white px-4 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-subheading">
          Welcome To
        </p>
        <h2 className="text-3xl font-medium text-heading md:text-[46px] md:leading-tight">
          The Biggest Design Conference of the Year 2019
        </h2>
        <p className="mt-6 text-base leading-7 text-body">
          Join hundreds of designers, developers, and product leaders for two days of talks,
          workshops, and hands-on labs in the heart of New York City. Learn how the industry's best
          teams research, prototype, and ship remarkable digital products.
        </p>
        <a
          href="#speakers"
          className="mt-9 inline-flex items-center justify-center border-2 border-brand-red bg-white px-10 py-4 text-base font-medium capitalize text-brand-red transition-colors hover:bg-brand-red hover:text-white"
        >
          Learn More
        </a>
      </div>
    </section>
  )
}
