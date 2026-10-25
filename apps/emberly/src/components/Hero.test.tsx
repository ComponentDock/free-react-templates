import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'
import { HERO, PLANS, RATING } from '../content'

describe('Hero', () => {
  it('renders one h1, the eyebrow, the light lede and the rating line', () => {
    render(<Hero />)

    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(HERO.headline)
    expect(screen.getByText(HERO.eyebrow)).toHaveClass('text-primary-600')
    expect(screen.getByText(HERO.lede)).toHaveClass('font-light', 'text-ink-500')
    expect(screen.getByRole('img', { name: RATING })).toBeInTheDocument()
    expect(screen.getByText(HERO.ratingNote)).toBeInTheDocument()
  })

  it('pairs the solid CTA with a ghost one and no photograph', () => {
    const { container } = render(<Hero />)

    expect(screen.getByRole('link', { name: HERO.primaryCta })).toHaveClass('bg-primary-600')
    expect(screen.getByRole('link', { name: HERO.secondaryCta })).toHaveClass('border-ink-200')
    expect(container.querySelector('img')).toBeNull()
    expect(container.querySelector('picture')).toBeNull()
  })

  it('carries the three plan cards in its right-hand seven columns', () => {
    const { container } = render(<Hero />)
    expect(container.querySelectorAll('[data-plan-card]')).toHaveLength(PLANS.items.length)
    expect(screen.getByRole('heading', { name: PLANS.anchorLabel })).toHaveClass('sr-only')
    expect(screen.getByText(HERO.pricingNote)).toBeInTheDocument()
  })
})
