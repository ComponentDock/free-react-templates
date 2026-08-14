import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { helpSlides } from '../data'

/** "They Need Your Help" section on a light pink background: heading on the
 *  left, rotating cause cards (photo, title, Target/Raised, Donate Now)
 *  with prev/next controls and dots on the right. */
export function HelpSlider() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % helpSlides.length)
    }, 5000)
    return () => window.clearInterval(timer)
  }, [])

  const go = (delta: number) =>
    setIndex((current) => (current + delta + helpSlides.length) % helpSlides.length)

  return (
    <section
      aria-label="Help them"
      className="relative bg-mist py-20 before:absolute before:left-0 before:top-[-50px] before:z-0 before:h-[98px] before:w-full before:bg-white before:content-[''] before:[transform:skewY(-3deg)] lg:py-[120px]"
    >
      <div className="relative z-10 mx-auto grid max-w-[1200px] items-start gap-10 px-6 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="mb-2 text-sm tracking-[2px] text-brand">Help Them</p>
          <h2 className="font-serif text-3xl font-normal leading-[1.2] text-maroon lg:text-[46px] lg:leading-[56px]">
            They Need Your Help
          </h2>
          <p className="mt-5 mb-8 text-base leading-7 text-ink">
            Inspires employees and organizations to support causes they care about. We do this to
            bring more resources to the nonprofits that are changing our world.
          </p>
          <a
            href="#causes"
            onClick={(event) => event.preventDefault()}
            className="inline-block text-base text-brand"
          >
            See All Causes
          </a>
        </div>

        <div aria-live="polite" aria-label="Help slider" className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {helpSlides.map((item) => (
                <article key={item.title} className="w-full shrink-0 bg-white p-[30px]">
                  <img src={item.image} alt="" className="h-[240px] w-full object-cover" />
                  <h3 className="mt-6 font-serif text-xl font-normal leading-[1.4] text-maroon lg:text-2xl">
                    {item.title}
                  </h3>
                  <div className="mb-[18px] mt-[17px] flex flex-wrap gap-6">
                    <div>
                      <span className="mb-[9px] block text-sm text-label">Target :</span>
                      <span className="font-sans text-xl text-brand">{item.target}</span>
                    </div>
                    <div>
                      <span className="mb-[9px] block text-sm text-label">Raised :</span>
                      <span className="font-sans text-xl text-brand">{item.raised}</span>
                    </div>
                  </div>
                  <a
                    href="#donate"
                    onClick={(event) => event.preventDefault()}
                    className="inline-block w-full bg-brand px-[26px] py-[9px] text-center text-xl text-white transition-colors hover:bg-rose hover:text-brand"
                  >
                    Donate Now
                  </a>
                </article>
              ))}
            </div>
          </div>

          <button
            type="button"
            aria-label="Previous help slide"
            onClick={() => go(-1)}
            className="absolute -left-4 top-1/2 flex h-[54px] w-[54px] -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/40"
          >
            <ChevronLeft aria-hidden="true" className="h-6 w-6" />
          </button>
          <button
            type="button"
            aria-label="Next help slide"
            onClick={() => go(1)}
            className="absolute -right-4 top-1/2 flex h-[54px] w-[54px] -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/40"
          >
            <ChevronRight aria-hidden="true" className="h-6 w-6" />
          </button>

          <div className="mt-5 flex justify-center gap-2">
            {helpSlides.map((item, dotIndex) => (
              <button
                key={item.title}
                type="button"
                aria-label={`Show help slide ${dotIndex + 1}`}
                aria-current={dotIndex === index}
                onClick={() => setIndex(dotIndex)}
                className={cn(
                  'h-2.5 w-2.5 rounded-full transition-colors',
                  dotIndex === index ? 'bg-brand' : 'bg-label/40 hover:bg-label/70',
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
