import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Dining } from './Dining'

describe('Dining', () => {
  it('renders the heading and subheading', () => {
    render(<Dining />)
    expect(screen.getByRole('heading', { name: /Fine Dining/i })).toBeInTheDocument()
    expect(screen.getByText('Culinary Experiences')).toBeInTheDocument()
  })

  it('renders all three venue cards with titles, descriptions, and images', () => {
    render(<Dining />)
    for (const venue of [
      { title: 'The Azure', description: 'signature fine-dining restaurant' },
      { title: 'Coral Bar', description: 'Handcrafted cocktails' },
      { title: 'Sunrise Cafe', description: 'artisan pastries' },
    ]) {
      expect(screen.getByRole('heading', { name: venue.title })).toBeInTheDocument()
      expect(screen.getByText(new RegExp(venue.description, 'i'))).toBeInTheDocument()
      expect(screen.getByRole('img', { name: venue.title })).toHaveAttribute(
        'src',
        expect.stringContaining('picsum.photos'),
      )
    }
  })

  it('renders operating hours for each venue', () => {
    render(<Dining />)
    expect(screen.getByText('6:00 PM – 11:00 PM')).toBeInTheDocument()
    expect(screen.getByText('5:00 PM – 1:00 AM')).toBeInTheDocument()
    expect(screen.getByText('7:00 AM – 11:00 AM')).toBeInTheDocument()
  })
})
