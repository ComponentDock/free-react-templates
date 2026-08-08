import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const images = [
  { seed: 'lintel-about-1', alt: 'Architectural interior view one' },
  { seed: 'lintel-about-2', alt: 'Architectural interior view two' },
  { seed: 'lintel-about-3', alt: 'Architectural interior view three' },
] as const

export function About() {
  const [index, setIndex] = useState(0)

  function goTo(next: number) {
    setIndex((next + images.length) % images.length)
  }

  return (
    <section id="about" className="bg-paper py-20 dark:bg-gray-950 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-3">
        <div className="h-full bg-white p-8 shadow-lg sm:p-10 dark:bg-gray-900">
          <h2 className="text-2xl font-bold uppercase text-ink dark:text-white">
            Welcome To <br /> Our Company
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-mist dark:text-white/60">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo mollitia id ea ab in! Nam
            eligendi distinctio, vitae.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-mist dark:text-white/60">
            Alias odit ipsam quas unde obcaecati molestiae consequatur numquam cupiditate
            perferendis facere, nulla nemo id, accusantium corrupti tempora.
          </p>
          <p className="mt-8">
            <span className="block font-bold text-ink dark:text-white">Bruce Smith</span>
            <span className="block text-sm font-bold text-mist dark:text-white/60">
              Founder, CEO
            </span>
          </p>
        </div>

        <div className="relative lg:col-span-2">
          <div className="relative aspect-[16/10] overflow-hidden bg-slate">
            {images.map((image, i) => (
              <img
                key={image.seed}
                src={`https://picsum.photos/seed/${image.seed}/960/600`}
                alt={image.alt}
                className={cn(
                  'absolute inset-0 h-full w-full object-cover transition-opacity duration-500',
                  i === index ? 'opacity-100' : 'opacity-0',
                )}
                aria-hidden={i !== index}
                loading="lazy"
              />
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between">
            <button
              type="button"
              aria-label="Previous about photo"
              onClick={() => goTo(index - 1)}
              className="flex h-10 w-10 items-center justify-center rounded-none border border-slate/20 text-slate transition-colors hover:bg-brand hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <div className="flex items-center gap-2">
              {images.map((image, i) => (
                <button
                  key={image.seed}
                  type="button"
                  aria-label={`Go to about photo ${i + 1}`}
                  aria-current={i === index}
                  onClick={() => goTo(i)}
                  className={cn(
                    'h-2.5 w-2.5 rounded-full transition-colors',
                    i === index ? 'bg-brand' : 'bg-slate/30 hover:bg-slate/60',
                  )}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Next about photo"
              onClick={() => goTo(index + 1)}
              className="flex h-10 w-10 items-center justify-center rounded-none border border-slate/20 text-slate transition-colors hover:bg-brand hover:text-white"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
