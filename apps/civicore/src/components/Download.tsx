import { BrandButton } from './BrandButton'

export function Download() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 sm:px-6 lg:flex-row">
        {/* Left — Copy */}
        <div className="w-full lg:w-1/2">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">Download Our App</h2>
          <p className="mt-4 text-lg text-mist">
            Get instant access to job alerts, application tracking, and career resources — all in
            the palm of your hand.
          </p>
          <div className="mt-8 flex gap-4">
            <BrandButton href="#app-store">
              <span className="mr-2 inline-block">&#63743;</span>
              App Store
            </BrandButton>
            <BrandButton href="#play-store" className="!bg-ink hover:!bg-ink/80">
              <span className="mr-2 inline-block">&#9654;</span>
              Play Store
            </BrandButton>
          </div>
        </div>

        {/* Right — Phone mockup */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://picsum.photos/seed/civicore-phone/400/500"
            alt="Phone mockup showing the Civicore app"
            className="mx-auto w-full max-w-sm rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  )
}
