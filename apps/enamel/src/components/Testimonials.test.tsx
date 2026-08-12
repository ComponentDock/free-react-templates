import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('shows the heading and four distinct patient testimonials', () => {
    render(<Testimonials />)

    expect(screen.getByText('Testimonials')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Our Patients Says About Us' })).toBeInTheDocument()

    for (const name of ['Racky Henderson', 'Henry Dee', 'Mark Huff', 'Rodel Golez']) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
    for (const role of ['Farmer', 'Businessman', 'Students', 'Striper']) {
      expect(screen.getByText(role)).toBeInTheDocument()
    }
    // Four distinct quotes.
    expect(screen.getAllByRole('blockquote')).toHaveLength(4)
  })
})
