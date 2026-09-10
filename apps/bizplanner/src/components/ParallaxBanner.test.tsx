import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ParallaxBanner } from './ParallaxBanner'

describe('ParallaxBanner', () => {
  it('renders the heading with correct text', () => {
    render(<ParallaxBanner />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toBeInTheDocument()
    expect(heading.textContent).toContain('We Create Creative')
    expect(heading.textContent).toContain('Best Unique Design')
  })

  it('renders the CTA button with correct text and link', () => {
    render(<ParallaxBanner />)
    const cta = screen.getByRole('link', { name: "Let's Work Together" })
    expect(cta).toBeInTheDocument()
    expect(cta).toHaveAttribute('href', '#contact-section')
  })

  it('CTA has correct border and hover classes', () => {
    render(<ParallaxBanner />)
    const cta = screen.getByRole('link', { name: "Let's Work Together" })
    expect(cta).toHaveClass('border')
    expect(cta).toHaveClass('border-white')
    expect(cta).toHaveClass('text-white')
    expect(cta).toHaveClass('hover:bg-white')
    expect(cta).toHaveClass('hover:text-heading')
    expect(cta).toHaveClass('uppercase')
  })

  it('has background image styling', () => {
    render(<ParallaxBanner />)
    const section = document.querySelector('section')
    expect(section).toHaveStyle({
      backgroundImage: expect.stringContaining('picsum.photos'),
    })
  })

  it('has a dark overlay div', () => {
    render(<ParallaxBanner />)
    const section = document.querySelector('section')
    const overlay = section?.querySelector('.bg-black\\/80')
    expect(overlay).toBeInTheDocument()
  })

  it('accepts custom className', () => {
    render(<ParallaxBanner className="custom-parallax" />)
    const section = document.querySelector('section')
    expect(section).toHaveClass('custom-parallax')
  })
})
