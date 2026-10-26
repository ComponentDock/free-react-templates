import type { CSSProperties } from 'react'
import { TINT_VARS, type Recipe } from '../data/recipes'
import { DifficultyMeter } from './DifficultyMeter'
import { TagPills } from './TagPills'

interface RecipeCardProps {
  recipe: Recipe
  /** The first two cards in the grid load eagerly; the rest defer. */
  eager: boolean
}

/**
 * One dish. The card is a flex column with no clipping: the 176 px plate sits
 * 76 px above the card's top edge and rests with its photo bottom on the band's
 * bottom edge, so the band reads as two coloured shoulders either side of the
 * dish. `overflow` stays visible — clipping the card deletes half the plate.
 *
 * The title is the card's only control and paints an `inset-0` overlay at z-1,
 * which makes the whole card one hit area; the plate rotates on card hover,
 * not on link hover, so the effect covers the band too.
 */
export function RecipeCard({ recipe, eager }: RecipeCardProps) {
  return (
    <article
      id={recipe.id}
      style={{ '--tint': TINT_VARS[recipe.tint] } as CSSProperties}
      className="group relative flex flex-col overflow-visible rounded-card bg-white px-[26px] pt-[116px] pb-6 text-center text-[15px] leading-[1.5] text-ink shadow-card before:absolute before:inset-x-0 before:top-0 before:h-[92px] before:rounded-t-[28px] before:bg-[var(--tint)] before:content-['']"
    >
      <div className="absolute top-[-76px] left-1/2 h-[176px] w-[176px] -translate-x-1/2 overflow-hidden rounded-full border-8 border-white shadow-plate transition-[rotate] duration-[600ms] ease-[cubic-bezier(.2,.7,.2,1)] group-hover:rotate-12 motion-reduce:transition-none motion-reduce:group-hover:rotate-0">
        <img
          src={recipe.image.src}
          alt={recipe.image.alt}
          width={700}
          height={520}
          fetchPriority={eager ? 'high' : undefined}
          loading={eager ? undefined : 'lazy'}
          decoding={eager ? 'sync' : 'async'}
          className="block h-full w-full object-cover"
        />
      </div>

      <p className="relative m-0 text-[13px] font-bold tracking-[.08em] text-accent uppercase">
        {recipe.course}
      </p>
      <h2 className="mt-1.5 mb-2 font-display text-[25px] leading-[1.15] font-normal">
        <a
          href={recipe.href}
          className="tiffin-card-link text-inherit no-underline after:absolute after:inset-0 after:z-[1] after:rounded-card"
        >
          {recipe.title}
        </a>
      </h2>
      <p className="m-0 mb-[18px] flex-1 text-muted">{recipe.blurb}</p>

      <dl className="m-0 grid grid-cols-3 border-y border-dashed border-rule py-[14px] [&>div+div]:border-l [&>div+div]:border-dashed [&>div+div]:border-rule">
        <div>
          <dt className="text-[12px] font-semibold tracking-[.06em] text-muted uppercase">Time</dt>
          <dd className="mt-1 flex flex-col items-center gap-1 text-[15px] font-bold">
            {recipe.time}
          </dd>
        </div>
        <div>
          <dt className="text-[12px] font-semibold tracking-[.06em] text-muted uppercase">Level</dt>
          <dd className="mt-1 flex flex-row items-center justify-center gap-1.5 text-[15px] font-bold">
            <DifficultyMeter level={recipe.level} label={recipe.levelLabel} />
          </dd>
        </div>
        <div>
          <dt className="text-[12px] font-semibold tracking-[.06em] text-muted uppercase">
            Per serving
          </dt>
          <dd className="mt-1 flex flex-col items-center gap-1 text-[15px] font-bold">
            {recipe.kcal}
          </dd>
        </div>
      </dl>

      <TagPills tags={recipe.tags} tint={recipe.tint} />
    </article>
  )
}
