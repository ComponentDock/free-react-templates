import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'
import { HERO } from '../data'

describe('Hero', () => {
  it('shows the price, headline, address, stats and CTA over a photo', () => {
    render(<Hero />)

    const section = screen.getByText(HERO.price).closest('section')!
    expect(section.style.backgroundImage).toContain('picsum.photos/seed/roost-hero')

    expect(screen.getByText(HERO.price)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(HERO.headline)
    expect(screen.getByText(HERO.address)).toBeInTheDocument()

    for (const stat of HERO.stats) {
      expect(screen.getByText(`${stat.value} ${stat.label}`)).toBeInTheDocument()
    }

    const cta = screen.getByRole('link', { name: HERO.learnMoreLabel })
    expect(cta).toHaveAttribute('href', '#property')
    expect(cta.className).toMatch(/bg-brand/)
  })
})
