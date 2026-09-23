import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HeroBackground } from './HeroBackground'

describe('HeroBackground', () => {
  it('renders with background image', () => {
    render(<HeroBackground />)
    const hero = screen.getByRole('img', { name: /decorative hero image/i })
    expect(hero).toBeInTheDocument()
  })

  it('has aria-label for accessibility', () => {
    render(<HeroBackground />)
    const hero = screen.getByRole('img', { name: /decorative hero image/i })
    expect(hero).toHaveAttribute('aria-label', 'Decorative hero image')
  })

  it('is hidden on mobile via wrapper', () => {
    const { container } = render(<HeroBackground />)
    const wrapper = container.firstElementChild
    expect(wrapper).not.toBeNull()
    expect(wrapper!.className).toContain('hidden')
  })
})
