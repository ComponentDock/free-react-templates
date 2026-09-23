import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HeroSection } from './HeroSection'

describe('HeroSection', () => {
  it('renders with background image', () => {
    render(<HeroSection />)
    const hero = screen.getByRole('img', { name: /decorative hero image/i })
    expect(hero).toBeInTheDocument()
  })

  it('has aria-label for accessibility', () => {
    render(<HeroSection />)
    const hero = screen.getByRole('img', { name: /decorative hero image/i })
    expect(hero).toHaveAttribute('aria-label', 'Decorative hero image')
  })

  it('is hidden on mobile (has hidden class)', () => {
    render(<HeroSection />)
    const hero = screen.getByRole('img', { name: /decorative hero image/i })
    expect(hero.className).toContain('hidden')
  })
})
