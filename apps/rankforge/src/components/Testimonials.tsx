import { Quote } from 'lucide-react'

export function Testimonials() {
  return (
    <section aria-label="Testimonials" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-semibold text-primary-700 dark:text-gray-100">
          What Client Say About Us
        </h2>
        <div className="mt-12">
          <Quote className="mx-auto h-10 w-10 text-accent-400/30" aria-hidden="true" />
          <p className="mt-6 text-lg leading-relaxed text-smoke dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
            Risus commodo viverra maecenas accumsan lacus vel facilisis.
          </p>
          <div className="mt-8 flex flex-col items-center">
            <img
              src="https://picsum.photos/seed/rankforge-avatar/80/80"
              alt="Olivia James"
              className="h-16 w-16 rounded-full object-cover shadow-md"
              loading="lazy"
            />
            <p className="mt-4 font-display text-lg font-semibold text-primary-700 dark:text-gray-100">
              Olivia James
            </p>
            <p className="text-sm text-muted">UI/UX Designer</p>
          </div>
        </div>
      </div>
    </section>
  )
}
