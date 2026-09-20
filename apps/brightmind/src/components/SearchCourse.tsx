import { Search } from 'lucide-react'

export function SearchCourse() {
  return (
    <section id="about" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-8 md:flex-row">
          <div className="flex-1">
            <span className="mb-2 block text-sm font-semibold uppercase tracking-wider text-brand-500">
              Know what you&apos;re after?
            </span>
            <h2 className="mb-4 text-2xl font-bold text-dark">I want to study</h2>
            <form className="mb-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Type your search..."
                className="flex-1 rounded border border-gray-300 px-4 py-3 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
              />
              <button
                type="submit"
                aria-label="Search courses"
                className="rounded bg-brand-500 px-4 py-3 text-white transition-colors hover:bg-brand-600"
              >
                <Search className="h-5 w-5" />
              </button>
            </form>
            <p className="text-sm text-muted">
              Just Browsing?{' '}
              <a href="#courses" className="text-brand-500 hover:underline">
                See all courses
              </a>
            </p>
          </div>
          <div className="flex-1">
            <div className="overflow-hidden rounded-lg bg-gray-50">
              <img
                src="https://picsum.photos/seed/brightmind-article/600/400"
                alt="Featured article"
                className="h-48 w-full object-cover"
              />
              <div className="p-5">
                <span className="mb-1 block text-xs text-muted">Aug 20, 2024</span>
                <h3 className="mb-2 text-lg font-semibold text-dark">We Conduct Workshop 2024</h3>
                <p className="text-sm text-muted">
                  A small river named Duden flows by their place and supplies it with the necessary
                  regelialia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
