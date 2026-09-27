import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { BookingForm } from './BookingForm'

describe('BookingForm', () => {
  it('renders the form heading and all fields', () => {
    render(<BookingForm />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      /booking place for your dinner/i,
    )
    expect(screen.getByLabelText('Your name')).toBeInTheDocument()
    expect(screen.getByLabelText('Your phone number')).toBeInTheDocument()
    expect(screen.getByLabelText('Time')).toBeInTheDocument()
    expect(screen.getByLabelText('Food')).toBeInTheDocument()
    expect(screen.getByText('Select Your Dining Space')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /book now/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /verify your booking info/i })).toBeInTheDocument()
  })

  it('shows a thank-you message after successful submission', () => {
    render(<BookingForm />)

    fireEvent.change(screen.getByLabelText('Your name'), { target: { value: 'Alice' } })
    fireEvent.change(screen.getByLabelText('Your phone number'), { target: { value: '5551234' } })
    fireEvent.change(screen.getByLabelText('Time'), { target: { value: '6:00 PM' } })
    fireEvent.change(screen.getByLabelText('Food'), { target: { value: 'Seasonal steamed fish' } })
    fireEvent.submit(screen.getByRole('form'))

    expect(screen.getByRole('heading', { name: /thank you/i })).toBeInTheDocument()
    expect(screen.getByText(/your booking has been received/i)).toBeInTheDocument()
  })

  it('does not submit when required fields are missing', () => {
    render(<BookingForm />)

    fireEvent.click(screen.getByRole('button', { name: /book now/i }))
    expect(screen.queryByRole('heading', { name: /thank you/i })).not.toBeInTheDocument()
  })

  it('does not submit when only name is filled', () => {
    render(<BookingForm />)

    fireEvent.change(screen.getByLabelText('Your name'), { target: { value: 'Alice' } })
    fireEvent.submit(screen.getByRole('form'))
    expect(screen.queryByRole('heading', { name: /thank you/i })).not.toBeInTheDocument()
  })
})
