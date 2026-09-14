import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BookingForm } from './BookingForm'

describe('BookingForm', () => {
  it('renders date inputs', () => {
    render(<BookingForm />)
    expect(screen.getByLabelText('Check In')).toBeInTheDocument()
    expect(screen.getByLabelText('Check Out')).toBeInTheDocument()
  })

  it('renders dropdowns', () => {
    render(<BookingForm />)
    expect(screen.getByLabelText('Room')).toBeInTheDocument()
    expect(screen.getByLabelText('Adults')).toBeInTheDocument()
    expect(screen.getByLabelText('Children')).toBeInTheDocument()
  })

  it('renders submit button', () => {
    render(<BookingForm />)
    expect(screen.getByText('Check Availability')).toBeInTheDocument()
  })
})
