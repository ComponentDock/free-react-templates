import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Amenities } from './Amenities'

describe('Amenities', () => {
  it('renders the heading, copy and three amenity cards over the lavender band', () => {
    render(<Amenities />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Benefits OurCustomers Enjoy',
    )
    expect(screen.getByText(/quis nostrud exercitation/)).toBeInTheDocument()
    expect(document.querySelector('.amenities-band')).toBeInTheDocument()

    const titles = [
      'Luxurious Car Rental Service Available',
      'Cruise Private Party Booking Available',
      'Tremendous Options for Food Lovers',
    ]
    for (const title of titles) {
      expect(screen.getByRole('heading', { level: 5, name: title })).toBeInTheDocument()
    }
    expect(screen.getAllByText('Within a Short Time')).toHaveLength(3)
    expect(document.querySelectorAll('.info-card')).toHaveLength(3)
    expect(document.querySelectorAll('.info-card .sheen')).toHaveLength(3)
    expect(screen.getByRole('img', { name: 'Rental car on a coastal road' })).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/skybound-8/600/440',
    )
  })
})
