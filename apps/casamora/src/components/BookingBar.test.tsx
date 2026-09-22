import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BookingBar } from './BookingBar'

describe('BookingBar', () => {
  it('renders the heading', () => {
    render(<BookingBar />)
    expect(screen.getByRole('heading', { name: 'Check Availability' })).toBeInTheDocument()
  })

  it('renders Check In field', () => {
    render(<BookingBar />)
    expect(screen.getByLabelText('Check In')).toBeInTheDocument()
  })

  it('renders Check Out field', () => {
    render(<BookingBar />)
    expect(screen.getByLabelText('Check Out')).toBeInTheDocument()
  })

  it('renders Adults dropdown with default value 1', () => {
    render(<BookingBar />)
    const select = screen.getByLabelText('Adults')
    expect(select).toBeInTheDocument()
    expect(select).toHaveValue('1')
  })

  it('renders Children dropdown with default value 1', () => {
    render(<BookingBar />)
    const select = screen.getByLabelText('Children')
    expect(select).toBeInTheDocument()
    expect(select).toHaveValue('1')
  })

  it('renders Check Availability button', () => {
    render(<BookingBar />)
    expect(screen.getByRole('button', { name: 'Check Availability' })).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<BookingBar className="custom-class" />)
    expect(
      screen.getByRole('heading', { name: 'Check Availability' }).closest('section'),
    ).toHaveClass('custom-class')
  })
})
