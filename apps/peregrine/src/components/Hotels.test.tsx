import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { hotels, hotelsSectionTitle } from '../data'
import { Hotels } from './Hotels'

describe('Hotels', () => {
  it('renders the section heading and one card per hotel', () => {
    render(<Hotels />)
    expect(screen.getByRole('heading', { level: 2, name: hotelsSectionTitle })).toBeInTheDocument()

    for (const hotel of hotels) {
      const card = screen
        .getByRole('heading', { level: 3, name: hotel.title })
        .closest('article') as HTMLElement
      expect(card).toBeInTheDocument()
      expect(card).toHaveTextContent(hotel.price)
      expect(card).toHaveTextContent(hotel.perPerson)
      expect(card).toHaveTextContent(hotel.reviews)
      expect(card.querySelector('img')).toHaveAttribute('src', hotel.image)
      expect(card.querySelectorAll('svg')).toHaveLength(5)
    }
  })
})
