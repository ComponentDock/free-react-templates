import { ArrowRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

export function Story() {
  return (
    <section className="bg-gradient-to-b from-[#4cd4e3] to-[#3e69fe] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="hidden md:col-span-1 md:block" />
          <div className="md:col-span-7">
            <div className="rounded-[3px] bg-white px-12 py-16 shadow-lg">
              <h6 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#3e69fe]">
                From the Part of Beginning
              </h6>
              <p className="mb-6 text-base leading-relaxed text-[#777777]">
                We started with a simple idea — to create a space where creativity meets technology.
                Over the years, we've helped hundreds of businesses transform their digital presence
                with thoughtful design and clean development.
              </p>
              <p className="mb-8 text-base leading-relaxed text-[#777777]">
                Our team of designers and developers work hand-in-hand to deliver experiences that
                not only look beautiful but drive real results. Every pixel, every line of code
                serves a purpose.
              </p>
              <a
                href="#contact"
                className={cn(
                  'inline-flex items-center gap-2 rounded-full border border-[#3e69fe] px-8 py-3',
                  'text-sm font-medium text-[#3e69fe] transition-all duration-300',
                  'hover:bg-[#3e69fe] hover:text-white',
                )}
              >
                Get Started
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
