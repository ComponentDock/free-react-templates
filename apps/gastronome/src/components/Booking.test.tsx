import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Booking } from './Booking'
import { describe, it, expect } from 'vitest'

describe('Booking', () => {
  it('renders booking form with all fields', () => {
    render(<Booking />)
    expect(screen.getByText('Make a Reservation')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Book a Table' })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /your name/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /phone number/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /email address/i })).toBeInTheDocument()
    expect(screen.getByRole('combobox', { name: /time/i })).toBeInTheDocument()
    expect(screen.getByRole('combobox', { name: /number of people/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Book Table' })).toBeInTheDocument()
  })

  it('renders the restaurant image', () => {
    render(<Booking />)
    expect(screen.getByRole('img', { name: 'Restaurant booking' })).toBeInTheDocument()
  })

  it('prevents form submission', async () => {
    const user = userEvent.setup()
    render(<Booking />)
    await user.click(screen.getByRole('button', { name: 'Book Table' }))
    expect(screen.getByRole('heading', { name: 'Book a Table' })).toBeInTheDocument()
  })

  it('allows filling form fields', async () => {
    const user = userEvent.setup()
    render(<Booking />)
    await user.type(screen.getByRole('textbox', { name: /your name/i }), 'John')
    expect(screen.getByRole('textbox', { name: /your name/i })).toHaveValue('John')
    await user.type(screen.getByRole('textbox', { name: /phone number/i }), '555-1234')
    expect(screen.getByRole('textbox', { name: /phone number/i })).toHaveValue('555-1234')
    await user.type(screen.getByRole('textbox', { name: /email address/i }), 'john@test.com')
    expect(screen.getByRole('textbox', { name: /email address/i })).toHaveValue('john@test.com')
  })

  it('allows selecting time and people', async () => {
    const user = userEvent.setup()
    render(<Booking />)
    await user.selectOptions(screen.getByRole('combobox', { name: /time/i }), '18:00')
    expect(screen.getByRole('combobox', { name: /time/i })).toHaveValue('18:00')
    await user.selectOptions(screen.getByRole('combobox', { name: /number of people/i }), '4')
    expect(screen.getByRole('combobox', { name: /number of people/i })).toHaveValue('4')
  })

  it('allows setting a date', async () => {
    const user = userEvent.setup()
    render(<Booking />)
    const dateInput = screen.getByLabelText(/date/i)
    await user.type(dateInput, '2026-12-25')
    expect(dateInput).toHaveValue('2026-12-25')
  })
})
