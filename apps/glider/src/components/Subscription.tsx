import { ArrowRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

export function Subscription() {
  return (
    <section className="bg-[#f9f9ff] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div>
            <h2 className="mb-2 text-2xl font-semibold text-[#222222]">
              Subscribe for our Newsletter
            </h2>
            <p className="text-sm text-[#777777]">
              Get the latest updates, tips, and exclusive offers delivered straight to your inbox.
            </p>
          </div>
          <div className="flex w-full gap-4 md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-full border border-gray-300 px-6 py-3 text-sm focus:border-[#3e69fe] focus:outline-none md:w-72"
              aria-label="Email for newsletter"
            />
            <button
              className={cn(
                'inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-[#3e69fe] px-8 py-3',
                'text-sm font-medium text-white transition-all duration-300',
                'hover:bg-[#2d56d6]',
              )}
            >
              Get Started
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
