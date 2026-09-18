export default function AppSection() {
  return (
    <section data-testid="app-section" className="py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* App image */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            <img
              src="https://picsum.photos/seed/ampstat-app/600/400"
              alt="App preview"
              className="w-full rounded-xl shadow-xl"
              loading="lazy"
            />
          </div>

          {/* App content */}
          <div className="lg:w-1/2 order-1 lg:order-2">
            <h2 className="text-4xl font-bold text-text-dark mb-6">Get Your Music Right Now!</h2>
            <p className="text-text-muted text-base leading-relaxed mb-8">
              Download the app to access exclusive tracks, live streams, and behind-the-scenes
              content from your favorite artists. Available on iOS and Android.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Download on App Store" className="block">
                <div className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-2">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div>
                    <div className="text-[10px] leading-none">Download on the</div>
                    <div className="text-sm font-bold leading-tight">App Store</div>
                  </div>
                </div>
              </a>
              <a href="#" aria-label="Get it on Google Play" className="block">
                <div className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-2">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm.91-.52l-2.73-2.73 2.73-2.73 3.05 1.73c.56.32.56 1.11 0 1.43l-3.05 1.73v-.7zM6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z" />
                  </svg>
                  <div>
                    <div className="text-[10px] leading-none">GET IT ON</div>
                    <div className="text-sm font-bold leading-tight">Google Play</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
