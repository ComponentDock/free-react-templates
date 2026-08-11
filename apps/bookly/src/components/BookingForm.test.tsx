import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BookingForm } from './BookingForm'

describe('BookingForm', () => {
  it('renders the white reservation card with the source shadow and padding', () => {
    const { container } = render(<BookingForm />)

    const card = container.querySelector('form')?.parentElement as HTMLElement
    expect(card).not.toBeNull()
    expect(card.className).toMatch(/bg-white/)
    expect(card.className).toMatch(/max-w-\[642px\]/)
    expect(card.className).toMatch(/shadow-\[0_0_10px_-5px/)
    expect(card.className).toMatch(/px-\[30px\]/)
    expect(card.className).toMatch(/py-\[40px\]/)
  })

  it('renders the fields in source order: Name+Email, Phone+Rooms+Guests, Check In+Check Out', () => {
    const { container } = render(<BookingForm />)

    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone')).toBeInTheDocument()
    expect(screen.getByLabelText('Rooms')).toBeInTheDocument()
    expect(screen.getByLabelText('Guests')).toBeInTheDocument()
    expect(screen.getByLabelText('Check In')).toBeInTheDocument()
    expect(screen.getByLabelText('Check Out')).toBeInTheDocument()

    const grids = container.querySelectorAll('form .grid')
    expect(grids).toHaveLength(3)
    expect((grids[0] as HTMLElement).contains(screen.getByLabelText('Name'))).toBe(true)
    expect((grids[1] as HTMLElement).contains(screen.getByLabelText('Phone'))).toBe(true)
    expect((grids[2] as HTMLElement).contains(screen.getByLabelText('Check In'))).toBe(true)
    expect(screen.queryByText('⇔')).not.toBeInTheDocument()
  })

  it('renders fields with the source styling: 55px, sharp, 2px bottom border only', () => {
    render(<BookingForm />)

    const name = screen.getByLabelText('Name') as HTMLInputElement
    expect(name.className).toMatch(/h-\[55px\]/)
    expect(name.className).toMatch(/rounded-none/)
    expect(name.className).toMatch(/border-0/)
    expect(name.className).toMatch(/border-b-2/)
    expect(name.className).toMatch(/border-line/)
    expect(name.className).toMatch(/bg-white/)
    expect(name.className).toMatch(/pt-\[15px\]/)
    expect(name.className).toMatch(/text-\[16px\]/)
    expect(name.className).toMatch(/font-bold/)
    expect(name.className).toMatch(/text-ink/)
  })

  it('keeps an empty unfocused label idle at the field center in light grey', () => {
    render(<BookingForm />)

    const label = screen.getByText('Name').closest('label') as HTMLLabelElement
    expect(label).not.toBeNull()
    expect(label.className).toMatch(/top-\[20px\]/)
    expect(label.className).toMatch(/text-\[16px\]/)
    expect(label.className).toMatch(/text-line/)
    expect(label.className).toMatch(/uppercase/)
    expect(label.className).toMatch(/font-bold/)
    expect(label.className).toMatch(/pointer-events-none/)
    expect(label.htmlFor).toBe('name')
  })

  it('floats the label to the top edge in green on focus and keeps it floated once filled', async () => {
    const user = userEvent.setup()
    render(<BookingForm />)

    const name = screen.getByLabelText('Name') as HTMLInputElement
    const label = screen.getByText('Name').closest('label') as HTMLLabelElement
    expect(label.className).toMatch(/top-\[20px\]/)

    fireEvent.focus(name)
    expect(label.className).toMatch(/top-0/)
    expect(label.className).toMatch(/text-\[14px\]/)
    expect(label.className).toMatch(/text-brand/)

    fireEvent.blur(name)
    expect(label.className).toMatch(/top-\[20px\]/)
    expect(label.className).not.toMatch(/text-brand/)

    await user.type(name, 'Alex')
    fireEvent.blur(name)
    expect(label.className).toMatch(/top-0/)
    expect(label.className).toMatch(/text-\[14px\]/)
    expect(label.className).toMatch(/text-brand/)
  })

  it('renders Rooms and Guests selects with the source options and floating arrows', () => {
    render(<BookingForm />)

    const rooms = screen.getByLabelText('Rooms') as HTMLSelectElement
    const guests = screen.getByLabelText('Guests') as HTMLSelectElement

    expect(Array.from(rooms.options).map((option) => option.textContent)).toEqual(['1', '2', '3'])
    expect(Array.from(guests.options).map((option) => option.textContent)).toEqual([
      '1 Person',
      '2 People',
      '3 People',
    ])
    expect(rooms).toHaveValue('1')
    expect(guests).toHaveValue('1 Person')
    expect(rooms).not.toBeRequired()
    expect(guests).not.toBeRequired()

    for (const select of [rooms, guests]) {
      expect(select.className).toMatch(/appearance-none/)
      const arrow = select.parentElement?.querySelector('span[aria-hidden="true"]') as HTMLElement
      expect(arrow).not.toBeNull()
      expect(arrow.className).toMatch(/text-line/)
      expect(arrow.className).toMatch(/pointer-events-none/)
      expect(arrow.className).toMatch(/bottom-\[7px\]/)
      expect(arrow.className).toMatch(/right-0/)
      expect(arrow.className).not.toMatch(/bg-/)
    }
  })

  it('renders Check In and Check Out date inputs side by side, required, with light-grey empty dates', () => {
    render(<BookingForm />)

    const checkIn = screen.getByLabelText('Check In') as HTMLInputElement
    const checkOut = screen.getByLabelText('Check Out') as HTMLInputElement

    expect(checkIn).toHaveAttribute('type', 'date')
    expect(checkOut).toHaveAttribute('type', 'date')
    expect(checkIn).toBeRequired()
    expect(checkOut).toBeRequired()
    expect(checkIn).toHaveClass('text-line')

    fireEvent.change(checkIn, { target: { value: '2026-08-10' } })
    expect(checkIn).toHaveClass('text-ink')
    expect(checkIn).not.toHaveClass('text-line')
  })

  it('renders a full-width solid green Book Now submit button', () => {
    render(<BookingForm />)

    const button = screen.getByRole('button', { name: 'Book Now' })
    expect(button).toHaveAttribute('type', 'submit')
    expect(button.className).toMatch(/w-full/)
    expect(button.className).toMatch(/h-\[55px\]/)
    expect(button.className).toMatch(/rounded-none/)
    expect(button.className).toMatch(/bg-brand/)
    expect(button.className).toMatch(/text-\[18px\]/)
    expect(button.className).toMatch(/font-bold/)
    expect(button.className).toMatch(/capitalize/)
    expect(button.className).toMatch(/text-white/)
  })

  it('shows validation messages for missing or invalid fields and no summary', () => {
    const { container } = render(<BookingForm />)

    fireEvent.submit(container.querySelector('form') as HTMLFormElement)

    expect(screen.getByText('Please enter your name.')).toBeInTheDocument()
    expect(screen.getByText('Please enter your email address.')).toBeInTheDocument()
    expect(screen.getByText('Please enter your phone number.')).toBeInTheDocument()
    expect(screen.getByText('Please choose a check-in date.')).toBeInTheDocument()
    expect(screen.getByText('Please choose a check-out date.')).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()

    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'not-an-email' } })
    fireEvent.submit(container.querySelector('form') as HTMLFormElement)
    expect(screen.getByText('Please enter a valid email address.')).toBeInTheDocument()
  })

  it('blocks submission when check-out is earlier than check-in', () => {
    const { container } = render(<BookingForm />)

    fireEvent.change(screen.getByLabelText('Check In'), { target: { value: '2026-08-13' } })
    fireEvent.change(screen.getByLabelText('Check Out'), { target: { value: '2026-08-10' } })

    fireEvent.submit(container.querySelector('form') as HTMLFormElement)

    expect(
      screen.getByText('Please choose a check-out date on or after your check-in date.'),
    ).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('submits a valid reservation and shows the green summary line', async () => {
    const user = userEvent.setup()
    render(<BookingForm />)

    await user.type(screen.getByLabelText('Name'), 'Alex')
    await user.type(screen.getByLabelText('Email'), 'alex@example.com')
    await user.type(screen.getByLabelText('Phone'), '555-0100')
    fireEvent.change(screen.getByLabelText('Check In'), { target: { value: '2026-08-10' } })
    fireEvent.change(screen.getByLabelText('Check Out'), { target: { value: '2026-08-13' } })
    await user.selectOptions(screen.getByLabelText('Rooms'), '2')
    await user.selectOptions(screen.getByLabelText('Guests'), '2 People')

    await user.click(screen.getByRole('button', { name: 'Book Now' }))

    const status = screen.getByRole('status')
    expect(status).toHaveTextContent('Alex · Aug 10 → Aug 13, 2026 · 2 rooms · 2 People')
    expect(status.className).toMatch(/text-brand/)
    expect(status.className).toMatch(/bg-brand\/10/)
  })

  it('clears a field error once the user edits the field', async () => {
    const user = userEvent.setup()
    const { container } = render(<BookingForm />)

    fireEvent.submit(container.querySelector('form') as HTMLFormElement)
    expect(screen.getByText('Please enter your name.')).toBeInTheDocument()
    expect(screen.getByText('Please choose a check-in date.')).toBeInTheDocument()

    await user.type(screen.getByLabelText('Name'), 'Alex')
    expect(screen.queryByText('Please enter your name.')).not.toBeInTheDocument()
    expect(screen.getByText('Please choose a check-in date.')).toBeInTheDocument()

    fireEvent.change(screen.getByLabelText('Check In'), { target: { value: '2026-08-10' } })
    expect(screen.queryByText('Please choose a check-in date.')).not.toBeInTheDocument()
  })
})
