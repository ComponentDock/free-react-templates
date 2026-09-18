export function BookTable() {
  return (
    <section id="booking" className="py-16 bg-[#222222] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h3 className="font-[family-name:var(--font-cursive)] text-3xl text-[#b10400]">Book a</h3>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl uppercase mt-1">Table</h2>
        </div>
        <form
          className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="date"
            aria-label="Date"
            className="bg-transparent border border-gray-600 rounded px-4 py-3 text-white text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#b10400]"
          />
          <input
            type="time"
            aria-label="Dining Time"
            className="bg-transparent border border-gray-600 rounded px-4 py-3 text-white text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#b10400]"
          />
          <select
            aria-label="Party Size"
            className="bg-transparent border border-gray-600 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-[#b10400]"
          >
            <option value="" className="text-[#333]">
              Party Size
            </option>
            <option value="2" className="text-[#333]">
              2 People
            </option>
            <option value="3" className="text-[#333]">
              3 People
            </option>
            <option value="4" className="text-[#333]">
              4 People
            </option>
            <option value="5" className="text-[#333]">
              5+ People
            </option>
          </select>
          <button
            type="submit"
            className="bg-[#b10400] text-white font-semibold text-sm uppercase rounded px-4 py-3 hover:bg-[#8b0300] transition-colors"
          >
            Book My Table
          </button>
        </form>
      </div>
    </section>
  )
}
