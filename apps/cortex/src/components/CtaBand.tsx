import { ArrowRight, BookOpen } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

export function CtaBand() {
  return (
    <section className="bg-gray-950 py-20 text-white lg:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Ready to Build Your First Agent?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-gray-400">
          Join 10,000+ developers building the future of AI automation. Start with our free tier —
          no credit card required.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href="#contact" className="w-full rounded-lg px-6 py-3 text-base sm:w-auto">
            Start Building Free <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
          <ButtonLink
            href="#platform"
            variant="outline"
            className="w-full rounded-lg border-gray-700 bg-transparent px-6 py-3 text-base text-white hover:border-gray-500 hover:bg-gray-900 sm:w-auto"
          >
            <BookOpen className="h-4 w-4" aria-hidden="true" />
            Read the Docs
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
