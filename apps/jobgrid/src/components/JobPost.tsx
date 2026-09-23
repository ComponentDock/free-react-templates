import { ArrowRight } from 'lucide-react'

export function JobPost() {
  return (
    <section id="post" className="bg-bg-dark py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Post a job */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
            <img
              src="https://picsum.photos/seed/jobgrid-post/600/280"
              alt="Post a job"
              className="h-48 w-full object-cover"
              loading="lazy"
            />
            <div className="p-8">
              <h3 className="text-2xl font-bold text-brand-dark">Post a job</h3>
              <p className="mt-3 text-text-muted leading-relaxed">
                Reach thousands of qualified candidates by posting your job listing on JobGrid. Our
                platform connects you with top talent across every industry.
              </p>
              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-blue"
              >
                Post a Job
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Browse for job */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
            <img
              src="https://picsum.photos/seed/jobgrid-browse/600/280"
              alt="Browse for job"
              className="h-48 w-full object-cover"
              loading="lazy"
            />
            <div className="p-8">
              <h3 className="text-2xl font-bold text-brand-dark">Browse for job</h3>
              <p className="mt-3 text-text-muted leading-relaxed">
                Search through thousands of open positions to find the perfect role that matches
                your skills, experience, and career goals.
              </p>
              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 rounded-lg border-2 border-brand px-6 py-3 text-sm font-semibold text-brand transition-colors hover:bg-brand hover:text-white"
              >
                Browse Job
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
