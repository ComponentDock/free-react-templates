import { cn } from '@free-react-templates/ui'
import type { Split } from '../content'
import { Container } from './ui'

interface SplitBandProps {
  readonly split: Split
  /** Which half of the viewport the photograph bleeds into. */
  readonly imageSide: 'left' | 'right'
}

/**
 * Half-bleed photo/text band: the photograph is absolutely positioned on its
 * half at `lg` and stacks to a 400 px block above the text below that.
 */
export function SplitBand({ split, imageSide }: SplitBandProps) {
  return (
    <section
      id={split.id}
      aria-label={split.heading}
      data-image-side={imageSide}
      className="relative bg-white"
    >
      <div
        role="img"
        aria-label={split.imageAlt}
        className={cn(
          'h-[400px] w-full bg-cover bg-center lg:absolute lg:top-0 lg:h-full lg:w-1/2',
          imageSide === 'left' ? 'lg:left-0' : 'lg:right-0',
        )}
        style={{ backgroundImage: `url(${split.image})` }}
      />
      <Container>
        <div
          className={cn('py-16 lg:w-[445px]', imageSide === 'left' ? 'lg:ml-auto' : 'lg:mr-auto')}
        >
          <h2 className="font-display text-[36px] leading-[1] font-black tracking-[-0.02em] text-ink md:text-[48px]">
            {split.heading}
          </h2>
          <div className="mt-6 space-y-6">
            {split.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-[1.05rem] leading-[1.8] text-body">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
