import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Booking } from './Booking'

describe('Booking', () => {
  it('shows the Appointment Form heading with form fields and a submit button', () => {
    render(<Booking />)

    expect(screen.getByRole('heading', { name: 'Appointment Form' })).toBeInTheDocument()
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Service')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Book Appointment' })).toBeInTheDocument()
  })

  it('submits a valid appointment and clears the form', async () => {
    const user = userEvent.setup()
    render(<Booking />)

    await user.type(screen.getByLabelText('Name'), 'Jane Rider')
    await user.type(screen.getByLabelText('Phone'), '555-0100')
    await user.type(screen.getByLabelText('Email'), 'jane@example.com')
    await user.selectOptions(screen.getByLabelText('Service'), 'Training')

    await user.click(screen.getByRole('button', { name: 'Book Appointment' }))

    expect(screen.getByText(/Thank you, Jane Rider/)).toBeInTheDocument()
    expect(screen.getByLabelText('Name')).toHaveValue('')
  })

  it('shows the two testimonials with customer names', () => {
    render(<Booking />)

    expect(screen.getByRole('heading', { name: 'Fannie Rowe' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Hulda Sutton' })).toBeInTheDocument()
  })
})
