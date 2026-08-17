import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ListingCard } from './ListingCard'
import { popularListings } from '../data'

const listing = popularListings[0]!

describe('ListingCard', () => {
  it('renders the card anatomy: image, chip, title, address, phone, review', () => {
    render(<ListingCard listing={listing} />)

    expect(screen.getByRole('link', { name: `View photo of ${listing.title}` })).toBeInTheDocument()
    expect(screen.getByText(listing.category)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: listing.title })).toBeInTheDocument()
    expect(screen.getByText(listing.address)).toBeInTheDocument()
    expect(screen.getByText(listing.phone)).toBeInTheDocument()
    expect(screen.getByText('5.0/5')).toBeInTheDocument()
    expect(screen.getByText('(100)')).toBeInTheDocument()
    expect(screen.getByText(/^Review/)).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: `Save ${listing.title} to favorites` }),
    ).toBeInTheDocument()
  })

  it('computes the tel: href from the spaced display number at runtime', () => {
    render(<ListingCard listing={listing} />)
    const phone = screen.getByText(listing.phone)
    expect(phone.tagName).toBe('A')
    expect(phone).toHaveAttribute('href', 'tel:+001234567890')
  })
})
