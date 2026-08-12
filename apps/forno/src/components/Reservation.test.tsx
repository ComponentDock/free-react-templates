import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Reservation } from './Reservation'

const fillField = async (
  user: ReturnType<typeof userEvent.setup>,
  label: string,
  value: string,
) => {
  const field = screen.getByLabelText(label) as HTMLInputElement | HTMLSelectElement
  if (field instanceof HTMLSelectElement) {
    await user.selectOptions(field, value)
  } else {
    await user.clear(field)
    await user.type(field, value)
  }
}

describe('Reservation', () => {
  it('renders the form fields and the open hours panel', () => {
    render(<Reservation />)

    expect(screen.getByRole('heading', { name: 'Make Reservation' })).toBeInTheDocument()
    expect(screen.getByText('Book a table')).toBeInTheDocument()

    for (const label of ['Your Name', 'Your Email', 'Phone', 'Date', 'Time', 'Persons']) {
      expect(screen.getByLabelText(label)).toBeInTheDocument()
    }

    expect(screen.getByRole('button', { name: 'Book a Table' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Open Hours' })).toBeInTheDocument()
    for (const day of [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ]) {
      expect(screen.getByText(day)).toBeInTheDocument()
    }
  })

  it('shows validation errors for an empty submit and clears them on change', async () => {
    const user = userEvent.setup()
    render(<Reservation />)

    await user.click(screen.getByRole('button', { name: 'Book a Table' }))

    expect(screen.getByText('Please enter your name')).toBeInTheDocument()
    expect(screen.getByText('Please enter a valid email')).toBeInTheDocument()
    expect(screen.getByText('Please enter a valid phone number')).toBeInTheDocument()
    expect(screen.getByText('Please choose a date')).toBeInTheDocument()
    expect(screen.getByText('Please choose a time')).toBeInTheDocument()
    expect(screen.getByText('Please choose the number of persons')).toBeInTheDocument()

    await fillField(user, 'Your Name', 'Ada')
    expect(screen.queryByText('Please enter your name')).not.toBeInTheDocument()
  })

  it('submits a valid reservation and shows a confirmation', async () => {
    const user = userEvent.setup()
    render(<Reservation />)

    await fillField(user, 'Your Name', 'Ada Lovelace')
    await fillField(user, 'Your Email', 'ada@example.com')
    await fillField(user, 'Phone', '555-1234')
    await fillField(user, 'Date', '2026-09-01')
    await fillField(user, 'Time', '8:00 PM')
    await fillField(user, 'Persons', '4')

    await user.click(screen.getByRole('button', { name: 'Book a Table' }))

    expect(screen.getByRole('status')).toHaveTextContent(
      'Thank you, Ada Lovelace. Your table request has been received',
    )
    expect(screen.queryByRole('button', { name: 'Book a Table' })).not.toBeInTheDocument()
  })
})
