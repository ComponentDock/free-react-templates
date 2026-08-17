import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SpecialOffers } from './SpecialOffers'

describe('SpecialOffers', () => {
  it('renders the intro image and the stripe band with the dark CTA', () => {
    render(<SpecialOffers />)

    const band = screen.getByRole('region', { name: 'Special Offers' })
    expect(band.querySelector('img')).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/borough-offer/600/400',
    )

    expect(screen.getByText('Special Offers')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'We Have Special Offers Every Now and Then',
      }),
    ).toBeInTheDocument()

    const cta = screen.getByRole('link', { name: 'Show Special Offers' })
    expect(cta).toHaveAttribute('href', '#listing')
    expect(cta.className).toMatch(/bg-navy/)
  })
})
