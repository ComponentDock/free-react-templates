import { cn } from '@free-react-templates/ui'
import { chooseCards } from '../data'

/** Category cards ("Choose" section): a tall Men's card on the left, a
 *  wide Women's card above two half cards (Extra 50% Off on a light
 *  background, Best Sellers on a photo) — each with a letter-spaced
 *  subheading, bold heading, blurb and black "Shop now" button (hover
 *  turns gold). Dark-image cards use white text. */
export function Choose() {
  const men = chooseCards[0]!
  const women = chooseCards[1]!
  const extra = chooseCards[2]!
  const best = chooseCards[3]!

  return (
    <section data-testid="choose" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-4 md:px-8">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <ChooseCard card={men} className="h-[420px] lg:h-[700px]" />
          </div>
          <div className="flex flex-col gap-6 lg:col-span-8">
            <ChooseCard card={women} className="h-[240px] lg:h-[340px]" />
            <div className="grid flex-1 gap-6 md:grid-cols-2">
              <ChooseCard card={extra} className="h-[240px] md:h-full" />
              <ChooseCard card={best} className="h-[240px] md:h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface ChooseCardProps {
  card: (typeof chooseCards)[number]
  className?: string
}

function ChooseCard({ card, className }: ChooseCardProps) {
  return (
    <div
      className={cn(
        'relative flex flex-col justify-end overflow-hidden p-5',
        card.dark ? 'text-white' : 'bg-light text-ink',
        className,
      )}
    >
      {card.image && (
        <>
          <img src={card.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
        </>
      )}
      <div className={cn('relative', card.dark && 'text-center lg:text-left')}>
        <span className="text-xs uppercase tracking-[4px] text-brand">{card.subheading}</span>
        <h2 className="mt-1 text-[28px] font-bold text-inherit">{card.title}</h2>
        <p className="mt-2 mb-4 text-sm opacity-80">{card.paragraph}</p>
        <a
          href="#products"
          className="inline-block bg-ink px-3 py-2 text-sm text-white transition-colors hover:bg-brand"
        >
          Shop now
        </a>
      </div>
    </div>
  )
}
