import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { PlanCards } from './PlanCards'
import { PLANS } from '../content'

describe('PlanCards', () => {
  it('renders the three plans with prices, blurb, ticks and a Choose link', () => {
    const { container } = render(<PlanCards />)

    expect(container.querySelectorAll('[data-plan-card]')).toHaveLength(3)
    for (const plan of PLANS.items) {
      const card = screen.getByRole('heading', { name: plan.name }).closest('div')!
      expect(within(card).getByText(plan.price)).toHaveClass('text-3xl')
      expect(within(card).getByText(PLANS.suffix)).toHaveClass('text-ink-400')
      expect(within(card).getByText(plan.blurb)).toBeInTheDocument()
      for (const tick of plan.ticks) {
        expect(within(card).getByText(tick)).toBeInTheDocument()
      }
      expect(within(card).getByRole('link', { name: PLANS.cta })).toHaveAttribute(
        'href',
        '#contact',
      )
    }
  })

  it('is the scroll target for the “Cover plans” label', () => {
    const { container } = render(<PlanCards />)
    expect(container.querySelector('#plans')).toHaveClass('sm:grid-cols-3')
  })

  it('badges, rings and fills only the middle card', () => {
    const { container } = render(<PlanCards />)
    const cards = Array.from(container.querySelectorAll('[data-plan-card]'))
    expect(cards.map((card) => card.getAttribute('data-featured'))).toEqual([
      'false',
      'true',
      'false',
    ])

    const middle = cards[1] as HTMLElement
    expect(middle).toHaveClass('border-primary-600', 'shadow-md')
    expect(within(middle).getByText(PLANS.badge)).toHaveClass('bg-primary-50', 'uppercase')
    expect(within(middle).getByRole('link', { name: PLANS.cta })).toHaveClass('bg-primary-600')

    const first = cards[0] as HTMLElement
    expect(first).toHaveClass('border-ink-100')
    expect(within(first).queryByText(PLANS.badge)).toBeNull()
    expect(within(first).getByRole('link', { name: PLANS.cta })).toHaveClass('border-ink-200')
  })

  it('labels the tick lists for assistive technology', () => {
    const { container } = render(<PlanCards />)
    const lists = container.querySelectorAll('ul[aria-label]')
    expect(lists).toHaveLength(3)
    expect(lists[0]).toHaveAttribute('aria-label', PLANS.ticksLabel)
  })
})
