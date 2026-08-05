import { StoreButtons } from './StoreButtons'

export function AboutTwo() {
  return (
    <section id="about-2" className="bg-mist py-24 dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-bold leading-snug text-ink dark:text-white sm:text-4xl">
            We Believe that Interior beautifies the Total Architecture
          </h2>
          <p className="mt-6 leading-relaxed text-muted dark:text-gray-400">
            Download Appru today and let the architecture of your app work for you — thoughtful
            details, honest design, and a standard of conduct your whole team can stand behind.
          </p>
          <div className="mt-10">
            <StoreButtons />
          </div>
        </div>
        <img
          src="https://picsum.photos/seed/appru-about-2/600/800"
          alt="Appru app on a phone screen"
          className="mx-auto w-full max-w-sm rounded-3xl shadow-xl"
        />
      </div>
    </section>
  )
}
