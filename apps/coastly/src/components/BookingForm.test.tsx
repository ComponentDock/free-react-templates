import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BookingForm } from './BookingForm'

describe('BookingForm', () => {
  it('renders the dark #1a1e24 form block with flush fields', () => {
    const { container } = render(<BookingForm />)

    const form = container.querySelector('form') as HTMLElement
    expect(form).not.toBeNull()
    expect(form.className).toMatch(/bg-slab/)

    const row = container.querySelector('form .grid') as HTMLElement
    expect(row).not.toBeNull()
    expect(row.className).toMatch(/grid-cols-1/)
    expect(row.className).toMatch(/md:grid-cols-3/)
  })

  it('renders the "Your Destination" input with placeholder and an accessible top-left label', () => {
    render(<BookingForm />)

    const destination = screen.getByLabelText('Your Destination') as HTMLInputElement
    expect(destination).toHaveAttribute('type', 'text')
    expect(destination).toHaveAttribute('placeholder', 'Enter a destination or hotel name')

    const label = screen.getByText('Your Destination') as HTMLElement
    expect(label.tagName).toBe('LABEL')
    expect(label.className).toMatch(/absolute/)
    expect(label.className).toMatch(/left-\[10px\]/)
    expect(label.className).toMatch(/top-\[10px\]/)
    expect(label.className).toMatch(/text-white/)
    expect(label.className).toMatch(/capitalize/)
    expect(label).toHaveAttribute('for', 'destination')
  })

  it('renders Check In and Check out date inputs side by side, both required', () => {
    render(<BookingForm />)

    const checkIn = screen.getByLabelText('Check In') as HTMLInputElement
    const checkOut = screen.getByLabelText('Check out') as HTMLInputElement

    expect(checkIn).toHaveAttribute('type', 'date')
    expect(checkOut).toHaveAttribute('type', 'date')
    expect(checkIn).toBeRequired()
    expect(checkOut).toBeRequired()
  })

  it('shows the ⇌ swap glyph between the date fields, hidden below the md breakpoint', () => {
    render(<BookingForm />)

    const checkIn = screen.getByLabelText('Check In')
    const checkOut = screen.getByLabelText('Check out')
    const glyph = screen.getByText('⇌')

    expect(glyph).not.toBeNull()
    expect(glyph.getAttribute('aria-hidden')).toBe('true')
    expect(glyph.className).toMatch(/hidden/)
    expect(glyph.className).toMatch(/md:flex/)
    expect(glyph.className).toMatch(/text-\[28px\]/)
    expect(glyph.className).toMatch(/text-glyph/)
    expect(glyph.className).toMatch(/h-10/)
    expect(glyph.className).toMatch(/w-10/)

    const checkOutColumn = checkOut.closest('div.border-l') as HTMLElement
    expect(checkOutColumn).not.toBeNull()
    expect(checkOutColumn.contains(glyph)).toBe(true)
    expect(checkIn.closest('div.border-l')).toBeNull()
  })

  it('shows dim empty-date text that turns white once a date is picked', () => {
    render(<BookingForm />)

    const checkIn = screen.getByLabelText('Check In') as HTMLInputElement
    expect(checkIn).toHaveClass('text-dim')

    fireEvent.change(checkIn, { target: { value: '2026-08-10' } })
    expect(checkIn).toHaveValue('2026-08-10')
    expect(checkIn).toHaveClass('text-white')
    expect(checkIn).not.toHaveClass('text-dim')
  })

  it('renders the Guests select with options 1/2/3, native appearance hidden and an arrow strip', () => {
    const { container } = render(<BookingForm />)

    const guests = screen.getByLabelText('Guests') as HTMLSelectElement
    expect(Array.from(guests.options).map((option) => option.textContent)).toEqual(['1', '2', '3'])
    expect(guests).toHaveValue('1')
    expect(guests.className).toMatch(/appearance-none/)

    const arrow = container.querySelector(
      'form .grid select ~ span[aria-hidden="true"]',
    ) as HTMLElement
    expect(arrow).not.toBeNull()
    expect(arrow).toHaveTextContent('➜')
    expect(arrow.className).toMatch(/pointer-events-none/)
    expect(arrow.className).toMatch(/bg-separator/)
    expect(arrow.className).toMatch(/text-glyph/)
    expect(arrow.className).toMatch(/right-0/)
    expect(arrow.className).toMatch(/bottom-0/)
    expect(arrow.className).toMatch(/h-\[100px\]/)
    expect(arrow.className).toMatch(/w-6/)
  })

  it('applies 1px translucent vertical separators before Check out and Guests columns', () => {
    const { container } = render(<BookingForm />)

    const columns = container.querySelectorAll('form .grid > div')
    expect(columns).toHaveLength(3)
    expect((columns[0] as HTMLElement).className).not.toMatch(/border-l/)
    expect((columns[1] as HTMLElement).className).toMatch(/border-l/)
    expect((columns[1] as HTMLElement).className).toMatch(/border-separator/)
    expect((columns[2] as HTMLElement).className).toMatch(/border-l/)
    expect((columns[2] as HTMLElement).className).toMatch(/border-separator/)
  })

  it('styles every field with the source dark slab look: 100px, sharp, bottom border only', () => {
    render(<BookingForm />)

    const destination = screen.getByLabelText('Your Destination') as HTMLInputElement
    expect(destination.className).toMatch(/h-\[100px\]/)
    expect(destination.className).toMatch(/bg-slab/)
    expect(destination.className).toMatch(/border-b-2/)
    expect(destination.className).toMatch(/border-separator/)
    expect(destination.className).toMatch(/text-\[18px\]/)
    expect(destination.className).not.toMatch(/rounded/)

    const checkIn = screen.getByLabelText('Check In') as HTMLInputElement
    expect(checkIn.className).toMatch(/h-\[100px\]/)
    expect(checkIn.className).toMatch(/border-b-2/)
    expect(checkIn.className).not.toMatch(/rounded/)
  })

  it('renders a full-width lime-green Check availability submit button with the source hover treatment', () => {
    render(<BookingForm />)

    const button = screen.getByRole('button', { name: 'Check availability' })
    expect(button).toHaveAttribute('type', 'submit')
    expect(button.className).toMatch(/w-full/)
    expect(button.className).toMatch(/h-\[100px\]/)
    expect(button.className).toMatch(/bg-brand/)
    expect(button.className).toMatch(/text-white/)
    expect(button.className).toMatch(/font-bold/)
    expect(button.className).toMatch(/capitalize/)
    expect(button.className).toMatch(/hover:opacity-90/)
    expect(button.className).toMatch(/rounded-none/)
  })

  it('shows validation messages for missing required fields and no summary', () => {
    const { container } = render(<BookingForm />)

    fireEvent.submit(container.querySelector('form') as HTMLFormElement)

    expect(screen.getByText('Please enter a destination.')).toBeInTheDocument()
    expect(screen.getByText('Please choose a check-in date.')).toBeInTheDocument()
    expect(screen.getByText('Please choose a check-out date.')).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('blocks submission when check-out is earlier than check-in', () => {
    const { container } = render(<BookingForm />)

    fireEvent.change(screen.getByLabelText('Your Destination'), {
      target: { value: 'Paradise Resort' },
    })
    fireEvent.change(screen.getByLabelText('Check In'), { target: { value: '2026-08-13' } })
    fireEvent.change(screen.getByLabelText('Check out'), { target: { value: '2026-08-10' } })

    fireEvent.submit(container.querySelector('form') as HTMLFormElement)

    expect(
      screen.getByText('Please choose a check-out date on or after your check-in date.'),
    ).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('submits a valid booking and shows the lime-green summary line', async () => {
    const user = userEvent.setup()
    render(<BookingForm />)

    fireEvent.change(screen.getByLabelText('Your Destination'), {
      target: { value: 'Paradise Resort' },
    })
    fireEvent.change(screen.getByLabelText('Check In'), { target: { value: '2026-08-10' } })
    fireEvent.change(screen.getByLabelText('Check out'), { target: { value: '2026-08-13' } })
    await user.selectOptions(screen.getByLabelText('Guests'), '2')

    await user.click(screen.getByRole('button', { name: 'Check availability' }))

    const status = screen.getByRole('status')
    expect(status).toHaveTextContent('Paradise Resort · Aug 10 → Aug 13, 2026 · 2 guests')
    expect(status.className).toMatch(/text-brand/)
    expect(status.className).toMatch(/bg-brand\/10/)
  })

  it('clears a field error once the user edits the field', () => {
    const { container } = render(<BookingForm />)

    fireEvent.submit(container.querySelector('form') as HTMLFormElement)
    expect(screen.getByText('Please enter a destination.')).toBeInTheDocument()
    expect(screen.getByText('Please choose a check-in date.')).toBeInTheDocument()

    fireEvent.change(screen.getByLabelText('Your Destination'), {
      target: { value: 'Paradise Resort' },
    })
    expect(screen.queryByText('Please enter a destination.')).not.toBeInTheDocument()
    expect(screen.getByText('Please choose a check-in date.')).toBeInTheDocument()

    fireEvent.change(screen.getByLabelText('Check In'), { target: { value: '2026-08-10' } })
    expect(screen.queryByText('Please choose a check-in date.')).not.toBeInTheDocument()
  })
})
