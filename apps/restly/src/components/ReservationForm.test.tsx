import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ReservationForm } from './ReservationForm'

describe('ReservationForm', () => {
  it('renders the form with NO card wrapper or scrim (fields ARE the card)', () => {
    const { container } = render(<ReservationForm />)

    const form = container.querySelector('form') as HTMLFormElement
    expect(form).not.toBeNull()
    expect(form.className).not.toMatch(/bg-/)
    expect(form.className).not.toMatch(/shadow/)
    expect(form.className).not.toMatch(/border/)
    expect(form.className).not.toMatch(/rounded/)
    expect(form.className).not.toMatch(/p-/)
    expect(container.querySelectorAll('[class*="bg-card"]')).toHaveLength(0)
    expect(container.querySelectorAll('[class*="overlay"]')).toHaveLength(0)
  })

  it('renders Destination text input with the source placeholder in the 8/12 span', () => {
    const { container } = render(<ReservationForm />)

    const destination = screen.getByLabelText('Destination') as HTMLInputElement
    expect(destination).toHaveAttribute('type', 'text')
    expect(destination).toHaveAttribute('placeholder', 'Enter Address, zip, city or airport')

    const grid = container.querySelectorAll('form .grid')[0] as HTMLElement
    expect(grid.className).toMatch(/grid-cols-1/)
    expect(grid.className).toMatch(/md:grid-cols-12/)
    const destinationField = screen.getByText('Destination').parentElement as HTMLElement
    expect(destinationField.className).toMatch(/md:col-span-8/)
    expect(grid.contains(destination)).toBe(true)
  })

  it('renders Guests (1-3) and Children (0-2) selects defaulting to 1 and 0', () => {
    const { container } = render(<ReservationForm />)

    const guests = screen.getByLabelText('Guests') as HTMLSelectElement
    const children = screen.getByLabelText('Children') as HTMLSelectElement

    expect(Array.from(guests.options).map((option) => option.textContent)).toEqual(['1', '2', '3'])
    expect(Array.from(children.options).map((option) => option.textContent)).toEqual([
      '0',
      '1',
      '2',
    ])
    expect(guests).toHaveValue('1')
    expect(children).toHaveValue('0')
    expect(guests).not.toBeRequired()
    expect(children).not.toBeRequired()

    const grid = container.querySelectorAll('form .grid')[0] as HTMLElement
    const guestsField = screen.getByText('Guests').parentElement as HTMLElement
    const childrenField = screen.getByText('Children').parentElement as HTMLElement
    expect(guestsField.className).toMatch(/md:col-span-2/)
    expect(childrenField.className).toMatch(/md:col-span-2/)
    expect(grid.contains(guests)).toBe(true)
    expect(grid.contains(children)).toBe(true)
  })

  it('renders Check In and Check out required date inputs in the 4/4 column spans', () => {
    const { container } = render(<ReservationForm />)

    const checkIn = screen.getByLabelText('Check In') as HTMLInputElement
    const checkOut = screen.getByLabelText('Check out') as HTMLInputElement

    expect(checkIn).toHaveAttribute('type', 'date')
    expect(checkOut).toHaveAttribute('type', 'date')
    expect(checkIn).toBeRequired()
    expect(checkOut).toBeRequired()

    const grid = container.querySelectorAll('form .grid')[1] as HTMLElement
    expect(grid.className).toMatch(/grid-cols-1/)
    expect(grid.className).toMatch(/md:grid-cols-12/)
    const checkInField = screen.getByText('Check In').parentElement as HTMLElement
    const checkOutField = screen.getByText('Check out').parentElement as HTMLElement
    expect(checkInField.className).toMatch(/md:col-span-4/)
    expect(checkOutField.className).toMatch(/md:col-span-4/)
    expect(grid.contains(checkIn)).toBe(true)
    expect(grid.contains(checkOut)).toBe(true)
  })

  it('styles controls as sharp translucent-white 80px fields with serif ink text', () => {
    render(<ReservationForm />)

    const destination = screen.getByLabelText('Destination') as HTMLInputElement
    expect(destination.className).toMatch(/h-20/)
    expect(destination.className).toMatch(/rounded-none/)
    expect(destination.className).toMatch(/border-none/)
    expect(destination.className).toMatch(/bg-field/)
    expect(destination.className).toMatch(/px-3/)
    expect(destination.className).toMatch(/pt-\[30px\]/)
    expect(destination.className).toMatch(/font-serif/)
    expect(destination.className).toMatch(/text-\[28px\]/)
    expect(destination.className).toMatch(/font-semibold/)
    expect(destination.className).toMatch(/text-ink/)
    expect(destination.className).toMatch(/placeholder:text-faded/)
    expect(destination.className).toMatch(/focus:bg-white/)
    expect(destination.className).not.toMatch(/shadow/)
  })

  it('shows faded empty-date text that turns ink once a date is picked', () => {
    render(<ReservationForm />)

    const checkIn = screen.getByLabelText('Check In') as HTMLInputElement
    expect(checkIn).toHaveClass('text-faded')

    fireEvent.change(checkIn, { target: { value: '2026-08-10' } })
    expect(checkIn).toHaveValue('2026-08-10')
    expect(checkIn).toHaveClass('text-ink')
    expect(checkIn).not.toHaveClass('text-faded')
  })

  it('renders inset copper-brown labels fixed at each field top-left, associated via htmlFor', () => {
    render(<ReservationForm />)

    for (const name of ['Destination', 'Guests', 'Children', 'Check In', 'Check out']) {
      const label = screen.getByText(name).closest('label') as HTMLLabelElement
      expect(label).not.toBeNull()
      expect(label.className).toMatch(/absolute/)
      expect(label.className).toMatch(/top-0/)
      expect(label.className).toMatch(/left-\[10px\]/)
      expect(label.className).toMatch(/text-brand/)
      expect(label.className).toMatch(/text-\[14px\]/)
      expect(label.className).toMatch(/font-bold/)
      expect(label.className).toMatch(/tracking-\[0\.6px\]/)
      expect(label.className).toMatch(/h-\[30px\]/)
      expect(label.htmlFor).toBeTruthy()
      expect(document.getElementById(label.htmlFor)).not.toBeNull()
    }
  })

  it('renders full-height arrow strips at the right edge of both selects', () => {
    render(<ReservationForm />)

    const guests = screen.getByLabelText('Guests') as HTMLSelectElement
    const children = screen.getByLabelText('Children') as HTMLSelectElement
    expect(guests.className).toMatch(/appearance-none/)
    expect(children.className).toMatch(/appearance-none/)

    const arrows = screen.getAllByText('➜')
    expect(arrows).toHaveLength(2)
    for (const arrow of arrows) {
      const glyph = arrow.parentElement as HTMLElement
      expect(glyph.className).toMatch(/pointer-events-none/)
      expect(glyph.className).toMatch(/bottom-0/)
      expect(glyph.className).toMatch(/right-0/)
      expect(glyph.className).toMatch(/h-20/)
      expect(glyph.className).toMatch(/w-6/)
      expect(glyph.className).toMatch(/bg-arrowbg/)
      expect(glyph.className).toMatch(/text-ink/)
      expect(glyph.className).toMatch(/text-\[14px\]/)
    }
  })

  it('renders a full-width copper-brown uppercase Check availability button with NO hover change', () => {
    render(<ReservationForm />)

    const button = screen.getByRole('button', { name: 'Check availability' })
    expect(button).toHaveAttribute('type', 'submit')
    expect(button.className).toMatch(/w-full/)
    expect(button.className).toMatch(/h-20/)
    expect(button.className).toMatch(/rounded-none/)
    expect(button.className).toMatch(/bg-brand/)
    expect(button.className).toMatch(/text-white/)
    expect(button.className).toMatch(/uppercase/)
    expect(button.className).toMatch(/text-\[18px\]/)
    expect(button.className).toMatch(/font-bold/)
    expect(button.className).toMatch(/tracking-\[0\.6px\]/)
    // The source CSS defines NO hover rule — the button must not fade or
    // shift color on hover (the base Button's primary hover is neutralized
    // with hover:bg-brand, keeping the fill constant).
    expect(button.className).not.toMatch(/hover:opacity/)
    expect(button.className).not.toMatch(/hover:bg-primary/)
    expect(button.className).toMatch(/hover:bg-brand/)

    const buttonSlot = button.parentElement as HTMLElement
    expect(buttonSlot.className).toMatch(/md:col-span-4/)
  })

  it('shows validation messages for missing required fields and no summary', () => {
    const { container } = render(<ReservationForm />)

    fireEvent.submit(container.querySelector('form') as HTMLFormElement)

    expect(screen.getByText('Please enter a destination.')).toBeInTheDocument()
    expect(screen.getByText('Please choose a check-in date.')).toBeInTheDocument()
    expect(screen.getByText('Please choose a check-out date.')).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('blocks submission when check-out is earlier than check-in', () => {
    const { container } = render(<ReservationForm />)

    fireEvent.change(screen.getByLabelText('Check In'), { target: { value: '2026-08-14' } })
    fireEvent.change(screen.getByLabelText('Check out'), { target: { value: '2026-08-10' } })

    fireEvent.submit(container.querySelector('form') as HTMLFormElement)

    expect(
      screen.getByText('Please choose a check-out date on or after your check-in date.'),
    ).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('submits a valid reservation and shows the copper-styled summary line', async () => {
    const user = userEvent.setup()
    render(<ReservationForm />)

    await user.type(screen.getByLabelText('Destination'), 'Downtown Dubai')
    fireEvent.change(screen.getByLabelText('Check In'), { target: { value: '2026-08-10' } })
    fireEvent.change(screen.getByLabelText('Check out'), { target: { value: '2026-08-14' } })
    await user.selectOptions(screen.getByLabelText('Guests'), '2')
    await user.selectOptions(screen.getByLabelText('Children'), '1')

    await user.click(screen.getByRole('button', { name: 'Check availability' }))

    const status = screen.getByRole('status')
    expect(status).toHaveTextContent('Downtown Dubai · 2 guests, 1 child · Aug 10 – Aug 14, 2026')
    expect(status.className).toMatch(/text-brand/)
    expect(status.className).toMatch(/bg-brand\/10/)
  })

  it('clears a field error once the user edits the field', () => {
    const { container } = render(<ReservationForm />)

    fireEvent.submit(container.querySelector('form') as HTMLFormElement)
    expect(screen.getByText('Please enter a destination.')).toBeInTheDocument()
    expect(screen.getByText('Please choose a check-out date.')).toBeInTheDocument()

    fireEvent.change(screen.getByLabelText('Destination'), { target: { value: 'Dubai' } })
    expect(screen.queryByText('Please enter a destination.')).not.toBeInTheDocument()
    expect(screen.getByText('Please choose a check-out date.')).toBeInTheDocument()

    fireEvent.change(screen.getByLabelText('Check out'), { target: { value: '2026-08-14' } })
    expect(screen.queryByText('Please choose a check-out date.')).not.toBeInTheDocument()
  })
})
