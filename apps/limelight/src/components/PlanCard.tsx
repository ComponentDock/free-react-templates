import { Crown, Gamepad2, Zap, type LucideIcon } from 'lucide-react'
import { COMPONENT_DOCK, FLAG_LABEL, type Plan, type Tone } from '../content'
import { Sparkle } from './Sparkle'

interface PlanCardProps {
  plan: Plan
}

/** One glyph per plan tone, all at the reference's 24px / 1.8 stroke. */
const ICONS: Record<Tone, LucideIcon> = {
  cyan: Gamepad2,
  pink: Zap,
  violet: Crown,
}

/**
 * One plan card: a flex column of icon, name, description, price row with its
 * dashed rule, a feature list that absorbs the grid's stretch slack, and a CTA
 * pinned to the bottom. The featured card differs by paint only — a transparent
 * border backed by a gradient layer, a corner flag and the gradient CTA.
 */
export function PlanCard({ plan }: PlanCardProps) {
  const Icon = ICONS[plan.tone]

  return (
    <article
      className={plan.featured ? 'lm-plan lm-plan--pop' : 'lm-plan'}
      aria-labelledby={plan.id}
    >
      {plan.featured ? <p className="lm-flag">{FLAG_LABEL}</p> : null}

      <div className={`lm-icon lm-icon--${plan.tone}`} aria-hidden="true">
        <Icon size={24} strokeWidth={1.8} />
      </div>

      <h2 className="lm-name" id={plan.id}>
        {plan.name}
      </h2>
      <p className="lm-desc">{plan.description}</p>

      <p className="lm-price">
        <span className="lm-amount">{plan.price}</span>
        {plan.period === null ? null : <span className="lm-per">{plan.period}</span>}
      </p>

      <ul className="lm-list">
        {plan.bullets.map((bullet) => (
          <li key={bullet}>
            <Sparkle />
            {bullet}
          </li>
        ))}
      </ul>

      <a
        className={plan.featured ? 'lm-cta lm-cta--glow' : 'lm-cta'}
        href={COMPONENT_DOCK}
        target="_blank"
        rel="noreferrer noopener"
      >
        {plan.cta}
      </a>
    </article>
  )
}
