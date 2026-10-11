import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders three blog cards with meta rows over the lavender top band', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Benefits OurCustomers Enjoy',
    )
    expect(document.querySelector('.blog-band')).toBeInTheDocument()
    expect(document.querySelectorAll('.info-card')).toHaveLength(3)
    expect(screen.getAllByText('13th Dec')).toHaveLength(3)
    expect(screen.getAllByText('15')).toHaveLength(3)
    expect(screen.getAllByText('04')).toHaveLength(3)
    for (const title of [
      'Luxurious Car Rental Service Available',
      'Cruise Private Party Booking Available',
      'Tremendous Options for Food Lovers',
    ]) {
      expect(screen.getByRole('heading', { level: 5, name: title })).toBeInTheDocument()
    }
    expect(screen.getAllByRole('img')).toHaveLength(3)
  })
})
