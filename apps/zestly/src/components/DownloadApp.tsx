import { Apple, Smartphone } from 'lucide-react'

export function DownloadApp() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Left: Images */}
          <div className="relative">
            <img
              src="https://picsum.photos/seed/zestly-app-main/500/400"
              alt="App mockup"
              className="rounded-lg shadow-lg"
            />
            <img
              src="https://picsum.photos/seed/zestly-app-sm1/200/150"
              alt="App feature screenshot"
              className="absolute -bottom-4 -left-4 rounded shadow-md"
            />
            <img
              src="https://picsum.photos/seed/zestly-app-sm2/200/150"
              alt="App feature screenshot 2"
              className="absolute -right-4 -top-4 rounded shadow-md"
            />
          </div>

          {/* Right: Text + Buttons */}
          <div>
            <h2 className="font-body text-3xl font-bold leading-tight text-body">
              Download app to get recipes from Everywhere
            </h2>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#"
                className="flex items-center gap-3 rounded-lg bg-body px-6 py-3 text-white transition-opacity hover:opacity-90"
              >
                <Apple className="h-6 w-6" />
                <div>
                  <span className="block text-xs text-white/70">Available</span>
                  <span className="block font-body text-sm font-medium">on App Store</span>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 rounded-lg bg-body px-6 py-3 text-white transition-opacity hover:opacity-90"
              >
                <Smartphone className="h-6 w-6" />
                <div>
                  <span className="block text-xs text-white/70">Download</span>
                  <span className="block font-body text-sm font-medium">from Play Store</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
