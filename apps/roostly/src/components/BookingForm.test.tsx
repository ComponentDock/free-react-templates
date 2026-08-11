import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BookingForm, formatSummary } from './BookingForm'

describe('BookingForm', () => {
  it('renders a Destination label above a required text input with the source placeholder', () => {
    render(<BookingForm />)

    const destination = screen.getByLabelText('Destination') as HTMLInputElement
    expect(destination).toHaveAttribute('type', 'text')
    expect(destination).toHaveAttribute('placeholder', 'Country, ZIP, city...')
    expect(destination).toBeRequired()
  })

  it('renders Check In and Check out date inputs, both required, grey when empty', () => {
    render(<BookingForm />)

    const checkIn = screen.getByLabelText('Check In') as HTMLInputElement
    const checkOut = screen.getByLabelText('Check out') as HTMLInputElement

    expect(checkIn).toHaveAttribute('type', 'date')
    expect(checkIn).toBeRequired()
    expect(checkIn.classList.contains('text-line')).toBe(true)

    expect(checkOut).toHaveAttribute('type', 'date')
    expect(checkOut).toBeRequired()
    expect(checkOut.classList.contains('text-line')).toBe(true)
  })

  it('turns the date text dark once a value is picked', () => {
    render(<BookingForm />)

    const checkIn = screen.getByLabelText('Check In')
    fireEvent.change(checkIn, { target: { value: '2026-09-01' } })

    expect(checkIn.classList.contains('text-line')).toBe(false)
  })

  it('renders a Guests select with options 1-3 (default 1) and a custom arrow', () => {
    render(<BookingForm />)

    const guests = screen.getByLabelText('Guests') as HTMLSelectElement
    expect(Array.from(guests.options).map((option) => option.value)).toEqual(['1', '2', '3'])
    expect(guests).toHaveValue('1')
    expect(guests.className).toMatch(/appearance-none/)
    expect(screen.getAllByText('➜')).toHaveLength(1)
  })

  it('renders a full-width brand-colored "Check availability" submit button', () => {
    render(<BookingForm />)

    const button = screen.getByRole('button', { name: 'Check availability' })
    expect(button).toHaveAttribute('type', 'submit')
    expect(button.className).toMatch(/bg-primary-600/)
    expect(button.className).toMatch(/w-full/)
    expect(button.className).toMatch(/capitalize/)
  })

  it('shows no summary and keeps the form invalid when required fields are missing', () => {
    const { container } = render(<BookingForm />)

    const form = container.querySelector('form') as HTMLFormElement
    fireEvent.submit(form)

    expect(form.checkValidity()).toBe(false)
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('blocks native submission while required fields are empty', async () => {
    const user = userEvent.setup()
    render(<BookingForm />)

    await user.click(screen.getByRole('button', { name: 'Check availability' }))

    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('flags a check-out date earlier than check-in and blocks submission', () => {
    const { container } = render(<BookingForm />)

    fireEvent.change(screen.getByLabelText('Destination'), { target: { value: 'San Francisco' } })
    fireEvent.change(screen.getByLabelText('Check In'), { target: { value: '2026-09-05' } })

    const checkOut = screen.getByLabelText('Check out') as HTMLInputElement
    expect(checkOut).toHaveAttribute('min', '2026-09-05')

    fireEvent.change(checkOut, { target: { value: '2026-09-01' } })

    const form = container.querySelector('form') as HTMLFormElement
    expect(checkOut.checkValidity()).toBe(false)
    expect(form.checkValidity()).toBe(false)

    fireEvent.submit(form)
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('submits a valid booking and reveals the summary line', async () => {
    const user = userEvent.setup()
    const { container } = render(<BookingForm />)

    fireEvent.change(screen.getByLabelText('Destination'), { target: { value: 'San Francisco' } })
    fireEvent.change(screen.getByLabelText('Check In'), { target: { value: '2026-09-01' } })
    fireEvent.change(screen.getByLabelText('Check out'), { target: { value: '2026-09-05' } })
    await user.selectOptions(screen.getByLabelText('Guests'), '2')

    const form = container.querySelector('form') as HTMLFormElement
    expect(form.checkValidity()).toBe(true)

    await user.click(screen.getByRole('button', { name: 'Check availability' }))

    const status = screen.getByRole('status')
    expect(
      within(status).getByText('San Francisco · 2026-09-01 → 2026-09-05 · 2 guests'),
    ).toBeInTheDocument()
  })

  it('shows the summary immediately when the form is submitted valid via the submit event', () => {
    const { container } = render(<BookingForm />)

    fireEvent.change(screen.getByLabelText('Destination'), { target: { value: 'Lisbon' } })
    fireEvent.change(screen.getByLabelText('Check In'), { target: { value: '2026-10-01' } })
    fireEvent.change(screen.getByLabelText('Check out'), { target: { value: '2026-10-03' } })

    const form = container.querySelector('form') as HTMLFormElement
    fireEvent.submit(form)

    expect(screen.getByRole('status')).toHaveTextContent(
      'Lisbon · 2026-10-01 → 2026-10-03 · 1 guest',
    )
  })
})

describe('formatSummary', () => {
  it('formats a single guest without a plural', () => {
    expect(formatSummary('Lisbon', '2026-10-01', '2026-10-03', '1')).toBe(
      'Lisbon · 2026-10-01 → 2026-10-03 · 1 guest',
    )
  })

  it('pluralizes multiple guests', () => {
    expect(formatSummary('San Francisco', '2026-09-01', '2026-09-05', '2')).toBe(
      'San Francisco · 2026-09-01 → 2026-09-05 · 2 guests',
    )
  })
})
