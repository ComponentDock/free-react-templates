import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { OfferBand } from './OfferBand'
import { OFFER_BUTTON, OFFER_TITLE } from '../data'

describe('OfferBand', () => {
  it('renders the sale headline, copy and book-now button', () => {
    const { container } = render(<OfferBand />)

    const section = container.querySelector('section')!
    expect(section.className).toContain('bg-mist')

    expect(screen.getByRole('heading', { level: 2, name: OFFER_TITLE })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: OFFER_BUTTON })).toHaveAttribute('href', '#shop')

    const image = container.querySelector('img')!
    expect(image).toHaveAttribute('src', 'https://picsum.photos/seed/settle-offer/640/480')
    expect(image).toHaveAttribute('alt', 'Furniture on sale')
  })
})
