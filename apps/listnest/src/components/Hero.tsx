import { Search } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface HeroProps {
  className?: string
}

export function Hero({ className }: HeroProps) {
  return (
    <section
      className={cn(
        'relative min-h-[800px] max-lg:min-h-[700px] flex items-center justify-center bg-cover bg-no-repeat',
        className,
      )}
      style={{ backgroundImage: 'url(https://picsum.photos/seed/listnest-hero/1920/1080)' }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-white text-[72px] max-xl:text-[52px] max-lg:text-[40px] font-light leading-tight">
          Discover great places in New York
        </h1>
        <h5 className="text-muted text-[28px] max-md:text-[22px] font-normal mt-6">
          Let&apos;s uncover the best places to eat, drink, and shop nearest to you.
        </h5>

        {/* Search form */}
        <div className="mt-8 max-w-[800px] mx-auto">
          <div className="flex flex-col md:flex-row">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="flex-1 md:w-2/5 px-6 py-6 border-none text-base outline-none"
              aria-label="Search query"
            />
            <input
              type="text"
              placeholder="New York"
              className="flex-1 md:w-[33%] px-6 py-6 border border-l-0 md:border-l border-t md:border-t-0 border-white/20 bg-transparent text-base outline-none"
              aria-label="Location"
            />
            <button
              type="button"
              className="bg-primary text-white font-normal text-[18px] px-8 py-6 border-none cursor-pointer hover:bg-primary-hover transition-colors flex items-center justify-center gap-2 md:w-auto"
            >
              <Search size={15} />
              SEARCH
            </button>
          </div>

          <div className="text-muted text-[19px] mt-10">
            <a href="#" className="text-muted underline hover:text-white transition-colors">
              Browse Popular
            </a>
            <span className="px-4">or</span>
            <a href="#" className="text-muted underline hover:text-white transition-colors">
              Recently Added
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
