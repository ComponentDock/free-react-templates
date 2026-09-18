import { Apple, Smartphone } from 'lucide-react'

export function DownloadApp() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto flex flex-col items-center gap-12 px-4 md:flex-row">
        <div className="flex-1">
          <img
            src="https://picsum.photos/seed/hireflow-phone/400/600"
            alt="HireFlow mobile app preview"
            className="mx-auto rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>
        <div className="flex-1">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            Download the <br />
            HireFlow App Today!
          </h2>
          <p className="mb-8 text-gray-600">
            Never miss a job opportunity. Browse, apply, and track your applications on the go with
            our mobile app.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="flex items-center gap-3 rounded-lg bg-gray-900 px-5 py-3 text-white transition-colors hover:bg-gray-800"
              aria-label="Download on App Store"
            >
              <Apple size={24} />
              <div className="text-left">
                <p className="text-[10px] leading-tight text-gray-300">Available</p>
                <p className="text-sm font-semibold leading-tight">App Store</p>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 rounded-lg bg-gray-900 px-5 py-3 text-white transition-colors hover:bg-gray-800"
              aria-label="Download on Play Store"
            >
              <Smartphone size={24} />
              <div className="text-left">
                <p className="text-[10px] leading-tight text-gray-300">Available</p>
                <p className="text-sm font-semibold leading-tight">Play Store</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
