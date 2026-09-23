import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HeroImage } from './HeroImage'

describe('HeroImage', () => {
  it('renders with background image', () => {
    render(<HeroImage />)
    const hero = screen.getByRole('img', { name: /decorative hero image/i })
    expect(hero).toBeInTheDocument()
  })

  it('has aria-label for accessibility', () => {
    render(<HeroImage />)
    const hero = screen.getByRole('img', { name: /decorative hero image/i })
    expect(hero).toHaveAttribute('aria-label', 'Decorative hero image')
  })

  it('has correct height class', () => {
    const { container } = render(<HeroImage />)
    const div = container.firstElementChild
    expect(div).not.toBeNull()
    expect(div!.className).toContain('h-[220px]')
  })

  it('has bg-cover for background image', () => {
    const { container } = render(<HeroImage />)
    const div = container.firstElementChild
    expect(div!.className).toContain('bg-cover')
  })
})
