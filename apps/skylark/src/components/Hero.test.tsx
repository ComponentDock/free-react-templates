import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'
import { HERO } from '../data'

describe('Hero', () => {
  it('renders the headline, subtext, and CTA linking to the offers', () => {
    render(<Hero />)

    expect(screen.getByRole('heading', { level: 2, name: HERO.headline })).toBeInTheDocument()
    expect(screen.getByText(HERO.subtext)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: HERO.cta })).toHaveAttribute('href', '#special-offers')
  })

  it('uses the seeded hero image as the background', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('section')!
    expect(section.style.backgroundImage).toContain(HERO.image)
  })
})
