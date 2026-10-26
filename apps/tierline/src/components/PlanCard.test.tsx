import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PlanCard } from './PlanCard'
import { PLANS } from '../content'

const [starter, team, scale] = PLANS

describe('PlanCard', () => {
  it('is an article labelled by its own plan heading', () => {
    render(<PlanCard plan={starter!} />)

    const card = screen.getByRole('article')
    const heading = screen.getByRole('heading', { level: 2 })
    expect(card).toHaveAttribute('aria-labelledby', 'plan-starter')
    expect(heading).toHaveAttribute('id', 'plan-starter')
    expect(heading.textContent).toBe('Starter')
  })

  it('renders the six-part order: name, pitch, price, CTA, list label, list', () => {
    const { container } = render(<PlanCard plan={starter!} />)

    const card = container.querySelector('article')!
    const order = Array.from(card.children).map((child) => child.className)
    expect(order).toEqual([
      'plan-name',
      'plan-pitch',
      'plan-price',
      'plan-cta',
      'plan-list-title',
      'plan-list',
    ])
  })

  it('keeps the plain plate dark, with no ribbon', () => {
    const { container } = render(<PlanCard plan={starter!} />)

    const card = container.querySelector('article')!
    expect(card.className).toBe('plan')
    expect(card.querySelector('.plan-ribbon')).toBeNull()
    expect(card.className).not.toMatch(/featured/)
  })

  it('inverts rather than scales the featured plan, adding the ribbon first', () => {
    const { container } = render(<PlanCard plan={team!} />)

    const card = container.querySelector('article')!
    expect(card.className).toBe('plan plan-featured')
    const first = card.firstElementChild!
    expect(first.className).toBe('plan-ribbon')
    expect(first.textContent).toBe('Most popular')
    expect(card.getAttribute('style')).toBeNull()
  })

  it('reserves two lines of pitch on every card', () => {
    render(<PlanCard plan={scale!} />)

    expect(screen.getByText('For growing teams with service levels to meet.')).toHaveClass(
      'plan-pitch',
    )
  })

  it('wires the CTA to an in-page fragment instead of a dead #', () => {
    render(<PlanCard plan={scale!} />)

    const cta = screen.getByRole('link', { name: 'Talk to sales' })
    expect(cta.getAttribute('href')).toBe('#plans')
    expect(cta.getAttribute('href')).not.toBe('#')
  })

  it('renders every feature row of the plan it is given', () => {
    render(<PlanCard plan={team!} />)

    expect(screen.getAllByRole('listitem')).toHaveLength(5)
    expect(screen.getByText('Customer satisfaction surveys')).toBeInTheDocument()
  })
})
