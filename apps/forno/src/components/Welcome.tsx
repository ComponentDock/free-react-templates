/**
 * Welcome — two-column about block (source `.ftco-wrap-about`): restaurant
 * photo left, script "About" subheading + "Forno Restaurant" heading + two
 * welcome paragraphs right, plus an opening-hours badge with weekday hours
 * and a phone number.
 */
export function Welcome() {
  return (
    <section id="about" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <img
              src="https://picsum.photos/id/425/800/1000"
              alt="Inside the Forno dining room"
              loading="lazy"
              className="h-96 w-full rounded-md object-cover shadow-lg lg:h-[30rem]"
            />
            <div className="absolute -bottom-6 -right-4 hidden rounded-md bg-primary-500 px-6 py-4 text-white shadow-lg md:block">
              <p className="text-sm font-semibold">Mon - Fri 8 AM - 11 PM</p>
              <p className="mt-1 text-xs uppercase tracking-wider">+ 1-978-123-4567</p>
            </div>
          </div>

          <div>
            <span className="font-script text-4xl text-primary-500">About</span>
            <h2 className="mt-2 text-3xl font-semibold text-gray-900 sm:text-4xl lg:text-5xl">
              Forno Restaurant
            </h2>
            <p className="mt-6 text-base leading-relaxed text-gray-600">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
              at the coast of the Semantics, a large language ocean.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              A small river named Duden flows by their place and supplies it with the necessary
              regelialia. It is a paradisematic country, in which roasted parts of sentences fly
              into your mouth.
            </p>
            <p className="mt-6 font-script text-4xl text-gray-800">Forno</p>
          </div>
        </div>
      </div>
    </section>
  )
}
