import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { BookSeat } from './BookSeat'

describe('BookSeat', () => {
  it('renders the heading', () => {
    render(<BookSeat />)
    expect(screen.getByText('Book Your Seat')).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<BookSeat />)
    expect(screen.getByText(/Don't miss out/)).toBeInTheDocument()
  })

  it('renders the Buy Ticket button', () => {
    render(<BookSeat />)
    expect(screen.getByText('Buy Ticket')).toBeInTheDocument()
  })

  it('has a landmark section', () => {
    render(<BookSeat />)
    expect(document.querySelector('section')).toBeInTheDocument()
  })
})
