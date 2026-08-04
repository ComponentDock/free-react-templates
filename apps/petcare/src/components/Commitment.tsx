export function Commitment() {
  return (
    <section id="about" className="bg-lavender py-14 dark:bg-gray-900 md:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 sm:px-6 md:flex-row">
        <div className="flex-1">
          <img
            src="https://picsum.photos/seed/petcare-commit/640/480"
            alt="Veterinarian examining a happy dog at the Petcare clinic"
            loading="lazy"
            className="w-full max-w-lg rounded-lg"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-extrabold text-navy dark:text-white">
            We are commited for better service
          </h2>
          <p className="mt-6 font-light leading-relaxed text-muted dark:text-gray-400">
            We are more than just a clinic — we are a family of pet lovers. From the moment your pet
            walks through our doors, they are treated with the same warmth and attention we give our
            own companions.
          </p>
          <p className="mt-4 font-light leading-relaxed text-muted dark:text-gray-400">
            Our veterinarians combine years of experience with a gentle touch, so every visit is
            calm, stress-free, and focused on your pet&apos;s wellbeing.
          </p>
          <a
            href="#services"
            className="mt-8 inline-block rounded-full bg-brand px-10 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-red-600"
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  )
}
