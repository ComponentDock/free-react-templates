export function About() {
  return (
    <section className="py-16" id="about">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2 bg-brand/5 rounded-lg p-8 flex items-center">
            <form className="w-full space-y-4" onSubmit={(e) => e.preventDefault()}>
              <h3 className="text-xl font-bold text-heading mb-4">Book A Service</h3>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                />
              </div>
              <select className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm text-muted bg-white focus:outline-none focus:ring-2 focus:ring-brand">
                <option value="">Select Your Services</option>
                <option>Residential Cleaning</option>
                <option>Commercial Cleaning</option>
                <option>Construction Cleaning</option>
                <option>Windows Cleaning</option>
                <option>Carpet Cleaning</option>
                <option>Furniture Cleaning</option>
                <option>Other Services</option>
              </select>
              <input
                type="tel"
                placeholder="Phone"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand"
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="date"
                  placeholder="Date"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                />
                <input
                  type="time"
                  placeholder="Time"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-brand text-white px-6 py-3 rounded-md font-semibold hover:bg-brand-dark transition-colors"
              >
                Submit Details
              </button>
            </form>
          </div>
          <div className="md:col-span-3 py-8 md:pl-8">
            <span className="text-sm font-bold text-brand uppercase tracking-wider">
              About Company
            </span>
            <h2 className="text-3xl font-bold text-heading mt-3 mb-6">
              Most Awarded Cleaning Company Since 2000
            </h2>
            <p className="text-body mb-4 leading-relaxed">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
              at the coast of the Semantics, a large language ocean. A small river named Duden flows
              by their place and supplies it with the necessary regelialia.
            </p>
            <p className="text-body leading-relaxed">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
              at the coast of the Semantics, a large language ocean. A small river named Duden flows
              by their place and supplies it with the necessary regelialia.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
