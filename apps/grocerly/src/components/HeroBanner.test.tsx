import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { heroBanner } from '../data'
import { HeroBanner } from './HeroBanner'

describe('HeroBanner', () => {
  it('renders the eyebrow, headline, support line and SHOP NOW CTA', () => {
    render(<HeroBanner />)

    expect(screen.getByText(heroBanner.eyebrow)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Vegetable/ })).toHaveTextContent('100% Organic')
    expect(screen.getByText(heroBanner.support)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: heroBanner.cta })).toHaveAttribute('href', '#shop')
  })

  it('uses the seeded vegetable photo as the banner background', () => {
    const { container } = render(<HeroBanner />)

    const banner = container.querySelector('div[style*="background-image"]')
    expect(banner).toHaveStyle({ backgroundImage: `url(${heroBanner.image})` })
  })

  it('handles a click on the SHOP NOW CTA without navigating', () => {
    render(<HeroBanner />)

    fireEvent.click(screen.getByRole('link', { name: heroBanner.cta }))
  })
})
