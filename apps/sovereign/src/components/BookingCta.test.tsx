import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { BookingCta } from './BookingCta'

describe('BookingCta', () => {
  it('renders heading and text', () => {
    render(<BookingCta />)
    expect(screen.getByText('Book Your Stay Today')).toBeInTheDocument()
    expect(screen.getByText(/Experience the luxury/)).toBeInTheDocument()
  })

  it('renders booking button', () => {
    render(<BookingCta />)
    expect(screen.getByText('Book Now')).toBeInTheDocument()
  })

  it('has a background image', () => {
    render(<BookingCta />)
    const section = document.querySelector('section')
    expect(section?.getAttribute('style')).toContain('picsum.photos')
  })
})
