import { Play } from 'lucide-react'

export function AboutVideo() {
  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left column */}
          <div>
            <h2 className="font-heading text-3xl font-bold leading-snug text-brand-heading sm:text-4xl">
              Education is the foundation upon which we build our future.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-brand-body">
              At Laurel, we believe that education has the power to transform lives. Our mission is
              to make quality education accessible to everyone, everywhere. With expert instructors
              and carefully crafted courses, we provide the tools you need to succeed in today's
              competitive world.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-body">
              Whether you're looking to advance your career, learn a new skill, or explore a
              passion, Laurel has the right course for you. Join our community of learners and start
              your journey today.
            </p>
          </div>

          {/* Right column — image with play button */}
          <div className="relative">
            <img
              src="https://picsum.photos/seed/laurel-about/600/400"
              alt="About Laurel"
              className="w-full rounded-[10px] object-cover shadow-lg"
            />
            <button
              type="button"
              aria-label="Play video"
              className="absolute inset-0 m-auto flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg transition-transform hover:scale-110"
            >
              <Play className="h-8 w-8 fill-primary text-primary" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
