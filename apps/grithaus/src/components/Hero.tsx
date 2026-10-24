import { useState } from 'react'
import { ButtonLink, cn } from '@free-react-templates/ui'
import { btn } from './action'
import { slides } from '../data'

const pagination = ['01', '02', '03'] as const

export function Hero() {
  const [active, setActive] = useState(0)

  return (
    <section aria-label="Featured classes" className="relative h-[550px] w-full overflow-hidden sm:h-[600px] md:h-[650px] lg:h-[880px]">
      {slides.map((slide, index) => (
        <div
          key={slide.headline}
          data-active={index === active}
          aria-hidden={index !== active}
          className={cn(
            'absolute inset-0 transition-opacity duration-700',
            index === active ? 'opacity-100' : 'pointer-events-none opacity-0',
          )}
        >
          <img src={slide.image} alt={slide.alt} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-black/20" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-full max-w-[1170px] px-4">
              <div className="max-w-[75%]">
                <h2 className="text-[30px] font-normal leading-[1.2] text-white sm:text-[36px] md:text-[48px] lg:text-[100px]">
                  {slide.headline}
                </h2>
                <p className="mb-10 mt-5 max-w-[560px] text-[14px] font-semibold leading-[2] text-white">
                  {slide.copy}
                </p>
                <ButtonLink href={slide.href} className={cn(btn.base, btn.outline)}>
                  {slide.cta}
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-[40px] left-1/2 z-10 flex w-full max-w-[1170px] -translate-x-1/2 items-center gap-3 px-4">
        {pagination.map((label, index) => (
          <button
            key={label}
            type="button"
            aria-label={`Slide ${label}`}
            aria-current={index === active ? 'true' : undefined}
            onClick={() => setActive(index)}
            className={cn(
              'text-[13px] font-bold tracking-[0.12em] transition-colors',
              index === active ? 'text-brand' : 'text-white/80 hover:text-white',
            )}
          >
            {label}
          </button>
        ))}
      </div>
    </section>
  )
}
