import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { PricingBand } from './PricingBand'
import { PLANS } from '../content'

describe('PricingBand', () => {
  it('is one main landmark holding the head and the plan grid', () => {
    render(<PricingBand />)

    const main = screen.getByRole('main')
    expect(main.querySelectorAll('header')).toHaveLength(1)
    expect(main.querySelectorAll('article')).toHaveLength(3)
  })

  it('carries the head copy verbatim', () => {
    render(<PricingBand />)

    expect(screen.getByText('Pricing')).toHaveClass('band-eyebrow')
    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe(
      'Plans that grow with your inbox',
    )
    expect(
      screen.getByText(
        'Every plan includes unlimited contacts, a shared inbox and a 14-day free trial. Prices in USD, billed monthly.',
      ),
    ).toHaveClass('band-sub')
  })

  it('exposes exactly one h1 and three h2 plan names', () => {
    render(<PricingBand />)

    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
    const planNames = screen.getAllByRole('heading', { level: 2 }).map((h) => h.textContent)
    expect(planNames).toEqual(['Starter', 'Team', 'Scale'])
    expect(screen.queryByRole('heading', { level: 3 })).toBeNull()
  })

  it('puts the plans in a single grid whose id is the CTAs fragment target', () => {
    const { container } = render(<PricingBand />)

    const grid = container.querySelector('.plan-grid')
    expect(grid).toHaveAttribute('id', 'plans')
    expect(grid?.children).toHaveLength(3)
  })

  it('marks exactly one plan as featured, and it is the middle one', () => {
    const { container } = render(<PricingBand />)

    const cards = Array.from(container.querySelectorAll('article'))
    expect(cards.map((card) => card.classList.contains('plan-featured'))).toEqual([
      false,
      true,
      false,
    ])
    expect(cards.map((card) => card.querySelector('h2')?.textContent)).toEqual(
      PLANS.map((plan) => plan.name),
    )
  })

  it('invents no nav, hero, toggle, comparison table, FAQ or testimonial', () => {
    const { container } = render(<PricingBand />)

    const main = container.querySelector('main')!
    expect(main.querySelector('nav')).toBeNull()
    expect(main.querySelector('img')).toBeNull()
    expect(main.querySelector('table')).toBeNull()
    expect(main.querySelector('footer')).toBeNull()
    expect(main.querySelectorAll('section')).toHaveLength(0)
    expect(within(main).queryByRole('button')).toBeNull()
    expect(within(main).queryByRole('checkbox')).toBeNull()
  })

  it('renders exactly 13 check glyphs — 4 + 5 + 4 — all hidden from AT', () => {
    const { container } = render(<PricingBand />)

    const ticks = container.querySelectorAll('svg')
    expect(ticks).toHaveLength(13)
    ticks.forEach((tick) => expect(tick).toHaveAttribute('aria-hidden', 'true'))
  })

  it('resolves every aria-labelledby to a real heading id', () => {
    const { container } = render(<PricingBand />)

    const cards = Array.from(container.querySelectorAll('article'))
    cards.forEach((card) => {
      const id = card.getAttribute('aria-labelledby')!
      expect(container.querySelector(`#${id}`)).not.toBeNull()
    })
  })

  it('ships no bare # anchor and no external link inside the band', () => {
    const { container } = render(<PricingBand />)

    const hrefs = Array.from(container.querySelectorAll('a')).map((a) => a.getAttribute('href'))
    expect(hrefs).toEqual(['#plans', '#plans', '#plans'])
    hrefs.forEach((href) => expect(href).not.toBe('#'))
  })
})
