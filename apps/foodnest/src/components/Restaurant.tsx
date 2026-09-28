export function Restaurant() {
  return (
    <section id="about" className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-heading">The Restaurant</h2>
          <p className="mx-auto max-w-2xl text-mist">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
            the Semantics, a large language ocean.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <img
            src="https://picsum.photos/seed/foodnest-dish1/600/400"
            alt="Delicious dish"
            className="w-full object-cover"
            loading="lazy"
          />
          <div className="flex flex-col gap-4">
            <img
              src="https://picsum.photos/seed/foodnest-about1/600/300"
              alt="Restaurant interior"
              className="w-full object-cover"
              loading="lazy"
            />
            <img
              src="https://picsum.photos/seed/foodnest-about2/600/300"
              alt="Chef preparing food"
              className="w-full object-cover"
              loading="lazy"
            />
          </div>
          <img
            src="https://picsum.photos/seed/foodnest-dish2/600/400"
            alt="Gourmet plating"
            className="w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
