import { cn } from '@free-react-templates/ui'
import { collageBoxes, largeBox } from '../data'
import type { CollageBox } from '../data'

const captionStyles: Record<CollageBox['id'], { year: string; heading: string; alert: string }> = {
  first: {
    year: 'text-brand',
    heading: 'text-brand',
    alert: 'text-brand',
  },
  second: {
    year: 'text-white',
    heading: 'text-caption',
    alert: 'text-caption',
  },
  large: {
    year: 'text-secondary-3',
    heading: 'text-brand',
    alert: 'text-caption',
  },
}

const captionToneClasses: Record<'year' | 'heading' | 'alert', string> = {
  year: 'text-[22px] tracking-wider',
  heading: 'text-3xl font-bold md:text-4xl',
  alert: 'mt-1 text-[22px] tracking-wider',
}

export function LookbookCollage() {
  return (
    <section aria-label="Lookbook collage" className="py-[100px]">
      <div className="mx-auto grid max-w-[1200px] gap-8 px-4 lg:grid-cols-2">
        <div className="flex flex-col gap-8">
          {collageBoxes.map((box) => (
            <div key={box.id} className="relative overflow-hidden">
              <img src={box.image} alt={box.alt} loading="lazy" className="w-full object-cover" />
              <div className="absolute inset-0 flex flex-col justify-center">
                <div
                  className={cn(
                    'flex flex-col',
                    box.align === 'right'
                      ? 'items-end pr-8 text-right md:pr-[60px]'
                      : 'items-start pl-8 md:pl-14',
                  )}
                >
                  {box.captions.map((caption) => (
                    <span
                      key={caption.text}
                      className={cn(
                        'font-display uppercase',
                        captionToneClasses[caption.tone],
                        captionStyles[box.id][caption.tone],
                      )}
                    >
                      {caption.text}
                    </span>
                  ))}
                  {box.cta && (
                    <a
                      href="#"
                      className="mt-6 inline-block rounded-full border-2 border-lightgrey px-8 py-3 text-sm font-semibold uppercase tracking-wide text-brand transition-colors hover:bg-brand hover:text-white"
                    >
                      {box.cta}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative overflow-hidden">
          <img
            src={largeBox.image}
            alt={largeBox.alt}
            loading="lazy"
            className="h-full min-h-[420px] w-full object-cover lg:min-h-full"
          />
          <div className="absolute inset-0 flex flex-col justify-center">
            <div className="flex flex-col items-start pl-8 md:pl-[125px]">
              {largeBox.captions.map((caption) => (
                <span
                  key={caption.text}
                  className={cn(
                    'font-display uppercase',
                    captionToneClasses[caption.tone],
                    captionStyles.large[caption.tone],
                  )}
                >
                  {caption.text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
