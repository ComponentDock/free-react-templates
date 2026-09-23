import { Quote } from 'lucide-react'

export function Testimonial() {
  return (
    <section className="bg-gray-50 py-0 dark:bg-gray-900">
      <div className="flex flex-col lg:flex-row">
        {/* Left: background image */}
        <div className="relative min-h-[300px] flex-1 lg:min-h-[400px]">
          <img
            src="https://picsum.photos/seed/radiant-testimonial/800/600"
            alt="Office background"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        {/* Right: testimonial content */}
        <div className="flex flex-1 items-center px-6 py-12 lg:px-12">
          <blockquote className="max-w-lg">
            <Quote className="mb-4 h-8 w-8 text-primary-400" aria-hidden="true" />
            <p className="mb-6 font-display text-lg leading-relaxed text-ink dark:text-white sm:text-xl">
              &ldquo;Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
              at the coast of the Semantics, a large language ocean.&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <img
                src="https://picsum.photos/seed/radiant-person/80/80"
                alt="James Wilson"
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <span className="block text-sm font-bold text-ink dark:text-white">
                  James Wilson
                </span>
                <span className="block text-xs text-smoke dark:text-gray-400">CEO, Co-Founder</span>
              </div>
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
