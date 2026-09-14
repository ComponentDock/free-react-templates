export function BookingForm() {
  return (
    <section id="booking" className="relative z-20 -mt-16">
      <div className="container mx-auto px-4">
        <form className="bg-white rounded-lg shadow-xl p-6">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 items-end">
            <div>
              <label htmlFor="checkin" className="block text-sm font-medium text-body mb-1">
                Check In
              </label>
              <input
                type="date"
                id="checkin"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-brand"
              />
            </div>
            <div>
              <label htmlFor="checkout" className="block text-sm font-medium text-body mb-1">
                Check Out
              </label>
              <input
                type="date"
                id="checkout"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-brand"
              />
            </div>
            <div>
              <label htmlFor="room" className="block text-sm font-medium text-body mb-1">
                Room
              </label>
              <select
                id="room"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-brand"
              >
                <option>01</option>
                <option>02</option>
                <option>03</option>
                <option>04</option>
                <option>05</option>
              </select>
            </div>
            <div>
              <label htmlFor="adults" className="block text-sm font-medium text-body mb-1">
                Adults
              </label>
              <select
                id="adults"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-brand"
              >
                <option>01</option>
                <option>02</option>
                <option>03</option>
                <option>04</option>
              </select>
            </div>
            <div>
              <label htmlFor="children" className="block text-sm font-medium text-body mb-1">
                Children
              </label>
              <select
                id="children"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-brand"
              >
                <option>01</option>
                <option>02</option>
                <option>03</option>
              </select>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-brand text-white py-2.5 rounded-sm font-medium hover:bg-brand-dark transition-colors"
              >
                Check Availability
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
