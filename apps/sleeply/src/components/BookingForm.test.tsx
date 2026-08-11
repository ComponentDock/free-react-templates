import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BookingForm } from './BookingForm'

describe('BookingForm', () => {
  it('renders the form inside a solid white card with 4px radius and 30px/15px padding, no shadow', () => {
    const { container } = render(<BookingForm />)

    const card = container.querySelector('[class*="bg-white"]') as HTMLElement
    expect(card).not.toBeNull()
    expect(card.className).toMatch(/rounded-\[4px\]/)
    expect(card.className).toMatch(/px-\[15px\]/)
    expect(card.className).toMatch(/pt-\[30px\]/)
    expect(card.className).toMatch(/overflow-auto/)
    expect(card.className).not.toMatch(/shadow/)
    expect(card.className).not.toMatch(/border/)
    expect(card.querySelector('form')).not.toBeNull()
  })

  it('renders Destination text input with the source placeholder in the 8/12 span', () => {
    const { container } = render(<BookingForm />)

    const destination = screen.getByLabelText('Destination') as HTMLInputElement
    expect(destination).toHaveAttribute('type', 'text')
    expect(destination).toHaveAttribute('placeholder', 'Enter Address, zip, city or airport')

    const grid = container.querySelectorAll('form .grid')[0] as HTMLElement
    expect(grid.className).toMatch(/grid-cols-1/)
    expect(grid.className).toMatch(/md:grid-cols-12/)
    const destinationField = screen.getByText('Destination').closest('div') as HTMLElement
    expect(destinationField.className).toMatch(/md:col-span-8/)
    expect(grid.contains(destination)).toBe(true)
  })

  it('renders Guests (1-3) and Children (0-2) selects defaulting to 1 and 0 in 2/12 spans', () => {
    const { container } = render(<BookingForm />)

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
    const guestsField = screen.getByText('Guests').closest('div') as HTMLElement
    const childrenField = screen.getByText('Children').closest('div') as HTMLElement
    expect(guestsField.className).toMatch(/md:col-span-2/)
    expect(childrenField.className).toMatch(/md:col-span-2/)
    expect(grid.contains(guests)).toBe(true)
    expect(grid.contains(children)).toBe(true)
  })

  it('renders Check In and Check out required date inputs in the 4/4 column spans', () => {
    const { container } = render(<BookingForm />)

    const checkIn = screen.getByLabelText('Check In') as HTMLInputElement
    const checkOut = screen.getByLabelText('Check out') as HTMLInputElement

    expect(checkIn).toHaveAttribute('type', 'date')
    expect(checkOut).toHaveAttribute('type', 'date')
    expect(checkIn).toBeRequired()
    expect(checkOut).toBeRequired()

    const grid = container.querySelectorAll('form .grid')[1] as HTMLElement
    expect(grid.className).toMatch(/grid-cols-1/)
    expect(grid.className).toMatch(/md:grid-cols-12/)
    const checkInField = screen.getByText('Check In').closest('div') as HTMLElement
    const checkOutField = screen.getByText('Check out').closest('div') as HTMLElement
    expect(checkInField.className).toMatch(/md:col-span-4/)
    expect(checkOutField.className).toMatch(/md:col-span-4/)
    expect(grid.contains(checkIn)).toBe(true)
    expect(grid.contains(checkOut)).toBe(true)
  })

  it('styles controls as solid light-gray 65px fields with near-black 24px weight-300 text', () => {
    render(<BookingForm />)

    const destination = screen.getByLabelText('Destination') as HTMLInputElement
    expect(destination.className).toMatch(/h-\[65px\]/)
    expect(destination.className).toMatch(/rounded-\[4px\]/)
    expect(destination.className).toMatch(/border-none/)
    expect(destination.className).toMatch(/bg-field/)
    expect(destination.className).toMatch(/text-\[24px\]/)
    expect(destination.className).toMatch(/font-light/)
    expect(destination.className).toMatch(/text-ink/)
    expect(destination.className).toMatch(/placeholder:text-faded/)
    expect(destination.className).not.toMatch(/shadow/)
  })

  it('shows faded empty-date text that turns ink once a date is picked', () => {
    render(<BookingForm />)

    const checkIn = screen.getByLabelText('Check In') as HTMLInputElement
    expect(checkIn).toHaveClass('text-faded')

    fireEvent.change(checkIn, { target: { value: '2026-08-10' } })
    expect(checkIn).toHaveValue('2026-08-10')
    expect(checkIn).toHaveClass('text-ink')
    expect(checkIn).not.toHaveClass('text-faded')
  })

  it('renders navy uppercase labels BELOW each field (block flow, 10px top margin), associated via htmlFor', () => {
    render(<BookingForm />)

    for (const name of ['Destination', 'Guests', 'Children', 'Check In', 'Check out']) {
      const control = screen.getByLabelText(name) as HTMLElement
      const label = screen.getByText(name).closest('label') as HTMLLabelElement
      expect(label).not.toBeNull()
      // Block flow label below the control — never absolute/inset/above.
      expect(label.className).not.toMatch(/absolute/)
      expect(label.className).toMatch(/block/)
      expect(label.className).toMatch(/mt-\[10px\]/)
      expect(label.className).toMatch(/text-brand/)
      expect(label.className).toMatch(/uppercase/)
      expect(label.className).toMatch(/text-\[16px\]/)
      expect(label.className).toMatch(/font-semibold/)
      expect(label.className).toMatch(/h-\[25px\]/)
      expect(label.className).toMatch(/leading-\[25px\]/)
      // The control comes FIRST in the form-group; the label follows below it.
      expect(control.compareDocumentPosition(label)).toBe(Node.DOCUMENT_POSITION_FOLLOWING)
      expect(label.htmlFor).toBeTruthy()
      expect(document.getElementById(label.htmlFor)).not.toBeNull()
    }
  })

  it('bridges each field-to-label gap with a field-gray connector triangle', () => {
    render(<BookingForm />)

    for (const name of ['Destination', 'Guests', 'Children', 'Check In', 'Check out']) {
      const label = screen.getByText(name).closest('label') as HTMLLabelElement
      const triangle = label.querySelector('span[aria-hidden="true"]') as HTMLElement
      expect(triangle).not.toBeNull()
      expect(triangle.className).toMatch(/absolute/)
      expect(triangle.className).toMatch(/left-\[10px\]/)
      expect(triangle.className).toMatch(/top-\[-10px\]/)
      expect(triangle.className).toMatch(/border-t-field/)
      expect(triangle.className).toMatch(/border-x-transparent/)
    }
  })

  it('renders plain right-edge arrow zones on both selects (appearance none, no background strip)', () => {
    render(<BookingForm />)

    const guests = screen.getByLabelText('Guests') as HTMLSelectElement
    const children = screen.getByLabelText('Children') as HTMLSelectElement
    expect(guests.className).toMatch(/appearance-none/)
    expect(children.className).toMatch(/appearance-none/)

    const arrows = screen.getAllByText('➜')
    expect(arrows).toHaveLength(2)
    for (const arrow of arrows) {
      const zone = arrow.parentElement as HTMLElement
      expect(zone.className).toMatch(/pointer-events-none/)
      expect(zone.className).toMatch(/right-0/)
      expect(zone.className).toMatch(/top-0/)
      expect(zone.className).toMatch(/w-6/)
      expect(zone.className).toMatch(/h-\[65px\]/)
      expect(zone.className).toMatch(/text-faded/)
      expect(zone.className).toMatch(/text-\[14px\]/)
      // Plain arrow zone — NO background strip (unlike Restly's translucent bar).
      expect(zone.className).not.toMatch(/bg-/)
    }
  })

  it('renders a full-width navy 90px uppercase Check availability button with NO hover change', () => {
    render(<BookingForm />)

    const button = screen.getByRole('button', { name: 'Check availability' })
    expect(button).toHaveAttribute('type', 'submit')
    expect(button.className).toMatch(/w-full/)
    expect(button.className).toMatch(/h-\[90px\]/)
    expect(button.className).toMatch(/rounded-\[4px\]/)
    expect(button.className).toMatch(/bg-brand/)
    expect(button.className).toMatch(/text-white/)
    expect(button.className).toMatch(/uppercase/)
    expect(button.className).toMatch(/text-\[18px\]/)
    expect(button.className).toMatch(/font-semibold/)
    // The source CSS defines NO hover rule — the base Button's primary hover
    // is neutralized with hover:bg-brand, keeping the fill constant.
    expect(button.className).not.toMatch(/hover:opacity/)
    expect(button.className).not.toMatch(/hover:bg-primary/)
    expect(button.className).toMatch(/hover:bg-brand/)

    const buttonSlot = button.parentElement as HTMLElement
    expect(buttonSlot.className).toMatch(/md:col-span-4/)
    expect(buttonSlot.className).toMatch(/mb-\[30px\]/)
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

    fireEvent.change(screen.getByLabelText('Check In'), { target: { value: '2026-08-14' } })
    fireEvent.change(screen.getByLabelText('Check out'), { target: { value: '2026-08-10' } })

    fireEvent.submit(container.querySelector('form') as HTMLFormElement)

    expect(
      screen.getByText('Please choose a check-out date on or after your check-in date.'),
    ).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('submits a valid reservation and shows the navy-styled summary line', async () => {
    const user = userEvent.setup()
    render(<BookingForm />)

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

  it('pluralizes guests/children labels in the summary (1 guest, 2 children)', async () => {
    const user = userEvent.setup()
    render(<BookingForm />)

    await user.type(screen.getByLabelText('Destination'), 'Santorini')
    fireEvent.change(screen.getByLabelText('Check In'), { target: { value: '2026-09-01' } })
    fireEvent.change(screen.getByLabelText('Check out'), { target: { value: '2026-09-05' } })
    await user.selectOptions(screen.getByLabelText('Children'), '2')

    await user.click(screen.getByRole('button', { name: 'Check availability' }))

    expect(screen.getByRole('status')).toHaveTextContent(
      'Santorini · 1 guest, 2 children · Sep 1 – Sep 5, 2026',
    )
  })

  it('clears a field error once the user edits the field', () => {
    const { container } = render(<BookingForm />)

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
