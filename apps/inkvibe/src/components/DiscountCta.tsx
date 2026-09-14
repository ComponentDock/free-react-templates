export function DiscountCta() {
  return (
    <section className="relative py-20">
      {/* Parallax background */}
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/inkvibe-parallax/1200/400"
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-void/75" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-bold text-primary-400 sm:text-4xl">
          Get 30% Off Your Body Massage
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-300">
          Combine your tattoo session with a relaxing body massage and save. Limited time offer for
          our valued clients.
        </p>
        <a
          href="#pricing"
          className="mt-8 inline-flex items-center justify-center rounded bg-primary-400 px-8 py-3 text-sm font-bold text-void transition-colors hover:bg-primary-500"
        >
          Claim Offer
        </a>
      </div>
    </section>
  )
}
