export function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Toothcare is a Dental Clinic and Innovative Approach to Treatment
            </h2>
            <p className="text-gray-600 mb-4">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
              at the coast of the Semantics, a large language ocean.
            </p>
            <p className="text-gray-600">
              A small river named Duden flows by their place and supplies it with the necessary
              regelialia. It is a paradisematic country, in which roasted parts of sentences fly
              into your mouth.
            </p>
          </div>
          <div className="bg-teal-50 rounded-xl p-8 flex items-center justify-center min-h-[300px]">
            <img
              src="https://picsum.photos/seed/odonto-about/600/400"
              alt="Modern dental clinic"
              className="rounded-lg shadow-lg w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
