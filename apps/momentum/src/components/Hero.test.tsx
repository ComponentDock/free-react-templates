import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'
import { hero } from '../data'

describe('Hero', () => {
  it('renders a full-viewport hero with headline, credit line and CTA', () => {
    const { container } = render(<Hero />)

    const section = container.querySelector('section')!
    expect(section.className).toContain('min-h-screen')
    expect(section.getAttribute('style')).toContain('momentum-hero')
    expect(section.querySelector('div[aria-hidden="true"]')).not.toBeNull()

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(new RegExp(hero.kicker))
    expect(heading.textContent).toMatch(new RegExp(hero.headline))

    expect(screen.getByText(hero.credit)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: hero.ctaLabel })).toBeInTheDocument()
  })
})
