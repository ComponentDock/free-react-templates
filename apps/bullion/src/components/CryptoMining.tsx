import { ButtonLink } from '@free-react-templates/ui'
import { miningCards, miningNewsTitle, viewMoreLabel, imgUrl } from '../data'
import { SectionTitle } from './SectionTitle'
import { StoryMeta } from './StoryMeta'

/** CRYPTO MINING NEWS: five image cards plus a bordered accent "view more"
    button (reference: .btn-brdr-primary — 45px, 1px accent border, 2px
    radius; hover fills accent with black text). */
export function CryptoMining() {
  return (
    <section>
      <SectionTitle>{miningNewsTitle}</SectionTitle>
      <div className="grid gap-x-6 gap-y-10 md:grid-cols-2">
        {miningCards.map((card) => (
          <article key={card.seed}>
            <img
              src={imgUrl(card.seed, 600, 450)}
              alt={card.headline}
              className="w-full object-cover"
            />
            <h4 className="pt-5 text-base font-bold">
              <a href="#story" className="text-ink transition-colors hover:text-accent">
                {card.headline}
              </a>
            </h4>
            <StoryMeta
              author={card.author}
              date={card.date}
              views={card.views}
              comments={card.comments}
              accentAuthor={false}
              className="mt-3"
            />
          </article>
        ))}
      </div>
      <ButtonLink
        href="#more"
        variant="outline"
        className="mt-8 h-[45px] rounded-[2px] border-accent text-accent uppercase hover:bg-accent hover:text-black"
      >
        {viewMoreLabel}
      </ButtonLink>
    </section>
  )
}
