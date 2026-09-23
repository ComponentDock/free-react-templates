import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HeroImage } from './HeroImage'

describe('HeroImage', () => {
  it('renders with background image', () => {
    render(<HeroImage />)
    const hero = screen.getByRole('img', { name: /decorative city street image/i })
    expect(hero).toBeInTheDocument()
  })

  it('has aria-label for accessibility', () => {
    render(<HeroImage />)
    const hero = screen.getByRole('img', { name: /decorative city street image/i })
    expect(hero).toHaveAttribute('aria-label', 'Decorative city street image')
  })

  it('is hidden on mobile via wrapper', () => {
    const { container } = render(<HeroImage />)
    const wrapper = container.firstElementChild
    expect(wrapper).not.toBeNull()
    expect(wrapper!.className).toContain('hidden')
  })
})
