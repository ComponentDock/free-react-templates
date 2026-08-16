export function About() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <img
            src="https://picsum.photos/seed/vesper-2/800/600"
            alt="Church interior with wooden pews"
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div>
            <h3 className="font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
              Welcome to <span className="text-gold">Vesper</span> Church
            </h3>
            <p className="mt-6 leading-relaxed text-gray-600">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
              at the coast of the Semantics, a large language ocean.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              We believe the church should be a place where everyone feels welcome, where questions
              are encouraged, and where faith grows in community. Join us as we follow Jesus
              together.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
