import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ReservationBar } from './ReservationBar'

describe('ReservationBar', () => {
  it('renders all form fields', () => {
    render(<ReservationBar />)
    expect(screen.getByLabelText('Check-in Date')).toBeInTheDocument()
    expect(screen.getByLabelText('Check-out Date')).toBeInTheDocument()
    expect(screen.getByLabelText('Adults')).toBeInTheDocument()
    expect(screen.getByLabelText('Children')).toBeInTheDocument()
  })

  it('renders the search button', () => {
    render(<ReservationBar />)
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('has select options for adults', () => {
    render(<ReservationBar />)
    const adults = screen.getByLabelText('Adults')
    expect(adults).toBeInTheDocument()
  })

  it('has select options for children', () => {
    render(<ReservationBar />)
    const children = screen.getByLabelText('Children')
    expect(children).toBeInTheDocument()
  })
})
