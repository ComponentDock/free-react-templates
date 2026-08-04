export function About() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <img
            src="https://picsum.photos/seed/breed-about/600/520"
            alt="A happy dog"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="lg:col-span-2">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white lg:text-5xl">
              It&apos;s a Dog Life
            </h2>
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              Curious story of Dogs
            </p>
            <p className="mt-6 text-sm font-light leading-relaxed text-gray-600 dark:text-gray-300">
              Far from the everyday rush, there is a world where every tail wags and every walk
              becomes an adventure. We believe a dog is not just a pet but a member of the family,
              and every story begins with a wet nose and a happy greeting.
            </p>
            <p className="mt-4 text-sm font-light leading-relaxed text-gray-600 dark:text-gray-300">
              From the first puppy steps to the golden years, our guides, breeders, and vets share
              simple advice that keeps your companion healthy, curious, and full of joy — because a
              well-cared-for dog makes a happier home.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
