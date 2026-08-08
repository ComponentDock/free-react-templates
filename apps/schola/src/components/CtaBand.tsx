import { ArrowRight, ShieldCheck } from 'lucide-react'

export function CtaBand() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 to-primary-800 px-8 py-16 text-center sm:px-16 lg:py-20">
          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-primary-100">
              Join over 100,000 learners who are advancing their careers with Schola. Start for free
              today.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="#signup"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-primary-700 shadow-lg transition-opacity hover:opacity-90"
              >
                Get Started Free
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#courses"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 px-8 py-4 font-semibold text-white transition-colors hover:bg-white/10"
              >
                Browse Courses
              </a>
            </div>
            <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-primary-100">
              <li className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                No credit card required
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                Cancel anytime
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                30-day money-back guarantee
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
