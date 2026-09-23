import { ArrowRight } from 'lucide-react'

export function CtaBanner() {
  return (
    <section className="bg-brand py-20">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Start finding your dream job
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
          Join thousands of job seekers who have found their perfect role through JobGrid. Your next
          career move starts here.
        </p>
        <a
          href="#categories"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 text-sm font-semibold text-brand transition-colors hover:bg-gray-100"
        >
          Browse Job
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}
