export function Welcome() {
  return (
    <section id="about" className="py-14 md:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 md:grid-cols-2">
        <div>
          <h2 className="font-serif text-3xl font-extrabold text-black dark:text-white">
            Welcome To Our Website
          </h2>
          <p className="mt-5 text-base font-light leading-relaxed text-gray-600 dark:text-gray-300">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
            the Semantics, a large language ocean.
          </p>
          <a
            href="#services"
            className="mt-6 inline-block rounded-full bg-brand px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-black"
          >
            Read More
          </a>
        </div>
        <div>
          <img
            src="https://picsum.photos/seed/doglife-welcome/640/480"
            alt=""
            loading="lazy"
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}
