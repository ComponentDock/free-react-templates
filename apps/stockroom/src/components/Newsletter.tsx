export function Newsletter() {
  return (
    <section className="bg-newsletter-bg px-8 py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 md:flex-row md:items-center">
        {/* Text */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-white">
            Subscribe for a <span className="text-brand">25% Discount</span>
          </h2>
          <p className="mt-4 max-w-md text-newsletter-text">
            Nulla ac convallis lorem, eget euismod nisl. Donec in libero sit amet mi vulputate
            consectetur. Donec auctor interdum purus, ac finibus massa bibendum nec.
          </p>
        </div>
        {/* Form */}
        <div className="w-full flex-1">
          <form className="relative" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your E-mail"
              className="h-[50px] w-full bg-white px-5 text-sm text-dark outline-none"
            />
            <button
              type="submit"
              className="absolute top-0 right-0 h-[50px] bg-brand px-8 text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
