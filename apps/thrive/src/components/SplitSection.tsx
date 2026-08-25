import { Check } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const CHECK_ITEMS = [
  'Far far away, behind the word mountains',
  'Far from the countries Vokalia',
  'Separated they live in Bookmarksgrove',
] as const

export function SplitSection() {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: illustration */}
          <div className="z-10 rounded-lg bg-brand-orange p-10">
            <img
              src="https://picsum.photos/seed/thrive-split/500/400"
              alt="Business split illustration"
              className="h-auto w-full rounded"
            />
          </div>

          {/* Right: teal panel */}
          <div className="relative z-10 -mt-20 rounded-lg bg-brand-teal p-10 lg:mt-0 lg:rounded-none lg:bg-transparent lg:p-0">
            <h2 className="mb-5 text-4xl font-bold text-white">
              A better way to run your business
            </h2>
            <p className="mb-6 text-text-white-50">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts.
            </p>
            <ul className="mb-8 space-y-3">
              {CHECK_ITEMS.map((item) => (
                <li key={item} className="flex items-center gap-3 text-text-white-50">
                  <Check size={20} className="shrink-0 text-brand-orange" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button
              variant="primary"
              className="border-2 border-transparent bg-brand-orange px-5 py-3 text-white transition-all hover:border-brand-orange hover:bg-white hover:text-brand-orange hover:shadow-lg"
            >
              Get started
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
