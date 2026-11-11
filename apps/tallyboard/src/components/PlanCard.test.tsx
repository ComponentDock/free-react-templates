import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { PlanCard } from './PlanCard'
import { COMPONENT_DOCK, FLAG_LABEL, PLANS, type Plan } from '../content'

const GROW = PLANS[1] as Plan
const STUDIO = PLANS[2] as Plan

describe('PlanCard', () => {
  it('prints the name, views, figure and monthly note of a plain card', () => {
    render(<PlanCard plan={GROW} figure={GROW.monthly} annual={false} />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Grow')
    expect(screen.getByText('250k views / month')).toBeInTheDocument()
    expect(screen.getByText('$15')).toBeInTheDocument()
    expect(screen.getByText('/ mo')).toBeInTheDocument()
    expect(screen.getByText('Billed monthly')).toBeInTheDocument()
    expect(screen.queryByText(FLAG_LABEL)).not.toBeInTheDocument()
  })

  it('shows the yearly total once the switch is on', () => {
    render(<PlanCard plan={GROW} figure={GROW.annual} annual />)

    expect(screen.getByText('$12')).toBeInTheDocument()
    expect(screen.getByText('$144 billed yearly')).toBeInTheDocument()
    expect(screen.queryByText('Billed monthly')).not.toBeInTheDocument()
  })

  it('points its CTA at Component Dock in a new tab', () => {
    render(<PlanCard plan={GROW} figure={GROW.monthly} annual={false} />)

    const cta = screen.getByRole('link', { name: 'Start 30-day trial' })
    expect(cta).toHaveAttribute('href', COMPONENT_DOCK)
    expect(cta).toHaveAttribute('target', '_blank')
    expect(cta).toHaveAttribute('rel', 'noreferrer noopener')
  })

  it('lists every bullet with its own tick', () => {
    const { container } = render(<PlanCard plan={GROW} figure={GROW.monthly} annual={false} />)

    const items = container.querySelectorAll('li')
    expect(items).toHaveLength(GROW.bullets.length)
    expect([...items].map((item) => item.textContent)).toEqual([...GROW.bullets])
    expect(container.querySelectorAll('.tb-tick')).toHaveLength(GROW.bullets.length)
    expect(container.querySelectorAll('.tb-tick')[0]).toHaveAttribute('aria-hidden', 'true')
  })

  it('links the heading to the card through aria-labelledby', () => {
    const { container } = render(<PlanCard plan={GROW} figure={GROW.monthly} annual={false} />)

    const article = screen.getByRole('article')
    expect(article).toHaveAttribute('aria-labelledby', GROW.id)
    expect(container.querySelector(`#${GROW.id}`)).toHaveTextContent('Grow')
  })

  it('gives the featured card a flag, the panel class and the same stack', () => {
    const { container } = render(<PlanCard plan={STUDIO} figure={STUDIO.monthly} annual={false} />)

    const article = screen.getByRole('article')
    expect(article).toHaveClass('tb-plan', 'tb-plan--pop')
    expect(screen.getByText(FLAG_LABEL)).toHaveClass('tb-flag')
    expect(screen.getByText('$40')).toBeInTheDocument()
    expect(screen.getByText('1M views / month')).toBeInTheDocument()
    expect(container.querySelectorAll('.tb-amount')).toHaveLength(1)
  })

  it('never prints a bare dollar sign for the free plan', () => {
    const launch = PLANS[0] as Plan
    render(<PlanCard plan={launch} figure={0} annual={false} />)

    expect(screen.getByText('$0')).toBeInTheDocument()
    expect(screen.getByText('Free forever')).toBeInTheDocument()
    expect(screen.getByText('Start for free')).toBeInTheDocument()
  })
})
