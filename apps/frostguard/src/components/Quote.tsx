import { Play } from 'lucide-react'

export function Quote() {
  return (
    <section id="quote" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="font-['Saira_Condensed'] text-3xl font-bold text-[#142336] mb-6">
              Get a quote
            </h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="border border-gray-300 rounded-lg px-4 py-3 font-['Mulish'] text-sm focus:outline-none focus:border-[#4586D5]"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="border border-gray-300 rounded-lg px-4 py-3 font-['Mulish'] text-sm focus:outline-none focus:border-[#4586D5]"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 font-['Mulish'] text-sm focus:outline-none focus:border-[#4586D5]"
              />
              <select className="w-full border border-gray-300 rounded-lg px-4 py-3 font-['Mulish'] text-sm text-gray-500 focus:outline-none focus:border-[#4586D5]">
                <option value="">Select a service</option>
                <option value="clean">Cleaning</option>
                <option value="repair">Repair</option>
                <option value="heating">Heating</option>
              </select>
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 font-['Mulish'] text-sm focus:outline-none focus:border-[#4586D5] resize-none"
              />
              <button
                type="submit"
                className="bg-[#142336] text-white font-['Saira_Condensed'] font-bold px-8 py-3 rounded-[60px] hover:bg-[#1c3050] transition-colors"
              >
                Get a quote
              </button>
            </form>
          </div>
          {/* Video thumbnail */}
          <div className="relative rounded-lg overflow-hidden">
            <img
              src="https://picsum.photos/seed/frostguard-video/800/500"
              alt="Video thumbnail"
              className="w-full h-full object-cover min-h-[400px]"
            />
            <button
              className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors"
              aria-label="Play video"
            >
              <div className="bg-white/80 rounded-full p-4">
                <Play className="text-[#142336] ml-1" size={28} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
