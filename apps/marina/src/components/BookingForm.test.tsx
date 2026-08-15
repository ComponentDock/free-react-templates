import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BookingForm } from './BookingForm'
import { yachtTypes } from '../data'

describe('BookingForm', () => {
  it('renders the heading, all eight labeled fields, the yacht select options and the Book Now button', () => {
    render(<BookingForm />)
    expect(screen.getByRole('heading', { level: 2, name: 'Book A Yacht' })).toBeInTheDocument()
    const form = screen.getByRole('form', { name: 'Booking form' })
    expect(form).toBeInTheDocument()
    for (const label of [
      'Full Name',
      'Number of People',
      'Date From',
      'Date To',
      'Email Address',
      'Phone Number',
      'Notes',
    ]) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
    const select = screen.getByRole('combobox', { name: /Yacht You're Interested in/ })
    for (const type of yachtTypes) {
      expect(screen.getByRole('option', { name: type })).toBeInTheDocument()
    }
    expect(select).toHaveValue(yachtTypes[0])
    expect(screen.getByRole('button', { name: 'Book Now' })).toBeInTheDocument()
  })

  it('updates field values on input and replaces the form with a success message on submit', async () => {
    const user = userEvent.setup()
    render(<BookingForm />)
    await user.type(screen.getByLabelText(/Full Name/), 'Jane Doe')
    await user.type(screen.getByLabelText(/Number of People/), '4')
    await user.type(screen.getByLabelText(/Date From/), '2026-09-05')
    await user.type(screen.getByLabelText(/Date To/), '2026-09-15')
    await user.selectOptions(
      screen.getByRole('combobox', { name: /Yacht You're Interested in/ }),
      'Premium Yacht',
    )
    await user.type(screen.getByLabelText(/Email Address/), 'jane@example.com')
    await user.type(screen.getByLabelText(/Phone Number/), '000 209 392 312')
    await user.type(screen.getByLabelText(/Notes/), 'Two cabins please')
    await user.click(screen.getByRole('button', { name: 'Book Now' }))

    expect(screen.queryByRole('form', { name: 'Booking form' })).not.toBeInTheDocument()
    expect(screen.getByText(/Thank you, Jane Doe!/)).toBeInTheDocument()
  })

  it('uses a fallback greeting when the name is empty', () => {
    render(<BookingForm />)
    fireEvent.submit(screen.getByRole('form', { name: 'Booking form' }))
    expect(screen.getByText(/Thank you, guest!/)).toBeInTheDocument()
  })
})
