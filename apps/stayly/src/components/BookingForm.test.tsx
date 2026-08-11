import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BookingForm } from './BookingForm'

describe('BookingForm', () => {
  it('renders a centered 642px white split card with a left image panel', () => {
    const { container } = render(<BookingForm />)

    const card = container.querySelector('div.relative') as HTMLElement
    expect(card).not.toBeNull()
    expect(card.className).toMatch(/max-w-\[642px\]/)
    expect(card.className).toMatch(/bg-white/)

    const panel = card.querySelector('[aria-hidden="true"]') as HTMLElement
    expect(panel).not.toBeNull()
    expect(panel.className).toMatch(/w-\[250px\]/)
    expect(panel.className).toMatch(/hidden/)
    expect(panel.className).toMatch(/min-\[481px\]:block/)
    expect(panel.style.backgroundImage).toContain('picsum.photos/seed/stayly-1')
  })

  it('renders the "Make your reservation" header in navy 700', () => {
    render(<BookingForm />)

    const heading = screen.getByRole('heading', { level: 2, name: 'Make your reservation' })
    expect(heading.className).toMatch(/text-navy/)
    expect(heading.className).toMatch(/font-bold/)
    expect(heading.className).toMatch(/text-\[35px\]/)
  })

  it('renders Check In and Check Out date inputs side by side, both required', () => {
    render(<BookingForm />)

    const checkIn = screen.getByLabelText('Check In') as HTMLInputElement
    const checkOut = screen.getByLabelText('Check Out') as HTMLInputElement

    expect(checkIn).toHaveAttribute('type', 'date')
    expect(checkIn).toBeRequired()
    expect(checkIn.className).toMatch(/text-fog/)

    expect(checkOut).toHaveAttribute('type', 'date')
    expect(checkOut).toBeRequired()
    expect(checkOut.className).toMatch(/text-fog/)

    expect(checkIn.className).toMatch(/h-10/)
    expect(checkIn.className).toMatch(/bg-mist/)
    expect(checkIn.className).toMatch(/rounded-none/)
  })

  it('renders Adults and Children selects with the source options, defaults, and custom arrows', () => {
    render(<BookingForm />)

    const adults = screen.getByLabelText('Adults') as HTMLSelectElement
    expect(Array.from(adults.options).map((option) => option.value)).toEqual(['1', '2', '3'])
    expect(adults).toHaveValue('1')
    expect(adults.className).toMatch(/appearance-none/)

    const children = screen.getByLabelText('Children') as HTMLSelectElement
    expect(Array.from(children.options).map((option) => option.value)).toEqual(['0', '1', '2'])
    expect(children).toHaveValue('0')
    expect(children.className).toMatch(/appearance-none/)

    expect(screen.getAllByText('➜')).toHaveLength(2)
  })

  it('renders Email and Phone contact fields with the source placeholders', () => {
    render(<BookingForm />)

    const email = screen.getByLabelText('Email') as HTMLInputElement
    expect(email).toHaveAttribute('type', 'email')
    expect(email).toHaveAttribute('placeholder', 'Enter your email')
    expect(email).toBeRequired()

    const phone = screen.getByLabelText('Phone') as HTMLInputElement
    expect(phone).toHaveAttribute('type', 'tel')
    expect(phone).toHaveAttribute('placeholder', 'Enter your phone number')
    expect(phone).toBeRequired()
  })

  it('renders a full-width brand-blue Book Now submit button', () => {
    render(<BookingForm />)

    const button = screen.getByRole('button', { name: 'Book Now' })
    expect(button).toHaveAttribute('type', 'submit')
    expect(button.className).toMatch(/bg-primary-600/)
    expect(button.className).toMatch(/w-full/)
  })

  it('shows validation messages for missing fields and no summary', () => {
    const { container } = render(<BookingForm />)

    const form = container.querySelector('form') as HTMLFormElement
    fireEvent.submit(form)

    expect(screen.getByText('Please choose a check-in date.')).toBeInTheDocument()
    expect(screen.getByText('Please choose a check-out date.')).toBeInTheDocument()
    expect(screen.getByText('Please enter your email.')).toBeInTheDocument()
    expect(screen.getByText('Please enter your phone number.')).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('flags a check-out date earlier than check-in and blocks submission', () => {
    render(<BookingForm />)

    fireEvent.change(screen.getByLabelText('Check In'), { target: { value: '2026-08-14' } })
    fireEvent.change(screen.getByLabelText('Check Out'), { target: { value: '2026-08-10' } })
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'guest@example.com' } })
    fireEvent.change(screen.getByLabelText('Phone'), { target: { value: '555-010-9988' } })

    fireEvent.submit(document.querySelector('form')!)

    expect(screen.getByText('Check-out must be on or after check-in.')).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('rejects an invalid email format', () => {
    render(<BookingForm />)

    fireEvent.change(screen.getByLabelText('Check In'), { target: { value: '2026-08-10' } })
    fireEvent.change(screen.getByLabelText('Check Out'), { target: { value: '2026-08-14' } })
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'not-an-email' } })
    fireEvent.change(screen.getByLabelText('Phone'), { target: { value: '555-010-9988' } })

    fireEvent.submit(document.querySelector('form')!)

    expect(screen.getByText('Please enter a valid email address.')).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('submits a valid booking and shows the summary line', async () => {
    const user = userEvent.setup()
    render(<BookingForm />)

    fireEvent.change(screen.getByLabelText('Check In'), { target: { value: '2026-08-10' } })
    fireEvent.change(screen.getByLabelText('Check Out'), { target: { value: '2026-08-14' } })
    await user.selectOptions(screen.getByLabelText('Adults'), '2')
    await user.selectOptions(screen.getByLabelText('Children'), '1')
    await user.type(screen.getByLabelText('Email'), 'guest@example.com')
    await user.type(screen.getByLabelText('Phone'), '555-010-9988')

    await user.click(screen.getByRole('button', { name: 'Book Now' }))

    const status = screen.getByRole('status')
    expect(status).toHaveTextContent(
      '2 adults · 1 child · 2026-08-10 → 2026-08-14 · guest@example.com',
    )
    expect(status.className).toMatch(/bg-primary-50/)
  })

  it('clears a field error once the user edits the field', async () => {
    const user = userEvent.setup()
    render(<BookingForm />)

    fireEvent.submit(document.querySelector('form')!)
    expect(screen.getByText('Please choose a check-in date.')).toBeInTheDocument()

    await user.type(screen.getByLabelText('Check In'), '2026-08-10')
    expect(screen.queryByText('Please choose a check-in date.')).not.toBeInTheDocument()
  })
})
