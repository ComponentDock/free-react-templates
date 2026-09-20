import { BookOpen, ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[500px] items-center justify-center bg-cover bg-center bg-no-repeat py-24 sm:py-32"
      style={{
        backgroundImage:
          'linear-gradient(135deg, rgba(106,0,255,0.7), rgba(255,217,0,0.5)), url(https://picsum.photos/seed/brightmind-hero/1600/800)',
      }}
    >
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h1 className="mb-6 text-3xl font-bold leading-tight text-white sm:text-5xl">
          No Nation Can Prosper In Life Without Education
        </h1>
        <p className="mb-8 text-lg text-white/90">
          Empowering minds, shaping futures. Discover courses that transform your potential into
          excellence.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#apply"
            className="inline-flex items-center gap-2 rounded bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
          >
            <BookOpen className="h-4 w-4" />
            Apply Now
          </a>
          <a
            href="#courses"
            className="inline-flex items-center gap-2 rounded border-2 border-white px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-dark"
          >
            View Courses
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
