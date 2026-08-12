import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { OfferCards } from './OfferCards'
import { OFFERS } from '../data'

describe('OfferCards', () => {
  it('renders the heading and all six offer cards', () => {
    render(<OfferCards />)

    expect(screen.getByRole('heading', { level: 2, name: 'What We Offer' })).toBeInTheDocument()

    for (const offer of OFFERS) {
      expect(screen.getByRole('heading', { level: 3, name: offer.title })).toBeInTheDocument()
    }
    /* The source demo repeats the same lorem blurb in every card. */
    expect(screen.getAllByText(OFFERS[0]!.text)).toHaveLength(OFFERS.length)
  })
})
