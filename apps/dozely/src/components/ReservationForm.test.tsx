import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ReservationForm } from './ReservationForm'

describe('ReservationForm', () => {
  it('renders the dark photo card with the 0.7 overlay', () => {
    const { container } = render(<ReservationForm />)

    const card = container.querySelector('[class*="max-w-[642px]"]') as HTMLElement
    expect(card).not.toBeNull()
    expect(card.style.backgroundImage).toContain('picsum.photos/seed/dozely-1/900/675')
    expect(card.className).toMatch(/rounded-\[5px\]/)
    expect(card.className).toMatch(/overflow-hidden/)
    expect(card.className).toMatch(/p-10/)

    const overlay = container.querySelector('[class*="bg-black/70"]') as HTMLElement
    expect(overlay).not.toBeNull()
    expect(overlay.className).toMatch(/absolute/)
    expect(overlay.className).toMatch(/inset-0/)
  })

  it('renders the centered white headline inside the card', () => {
    const { container } = render(<ReservationForm />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('Make your reservation')
    expect(heading.className).toMatch(/text-\[42px\]/)
    expect(heading.className).toMatch(/font-bold/)
    expect(heading.className).toMatch(/capitalize/)
    expect(heading.className).toMatch(/text-white/)

    const header = heading.parentElement as HTMLElement
    expect(header.className).toMatch(/text-center/)
    expect(header.className).toMatch(/mb-\[30px\]/)

    // The headline lives INSIDE the card, above the form.
    const card = container.querySelector('[class*="max-w-[642px]"]') as HTMLElement
    expect(card.contains(heading)).toBe(true)
  })

  it('renders Destination full width with the source placeholder', () => {
    const { container } = render(<ReservationForm />)

    const destination = screen.getByLabelText('Destination') as HTMLInputElement
    expect(destination).toHaveAttribute('type', 'text')
    expect(destination).toHaveAttribute('placeholder', 'Country, ZIP, city...')

    const grid = container.querySelector('form') as HTMLElement
    const destinationField = screen.getByText('Destination').parentElement as HTMLElement
    expect(destinationField.className).toMatch(/md:col-span-12/)
    expect(grid.contains(destination)).toBe(true)
  })

  it('renders Check In and Check out required date inputs in 6/6 spans', () => {
    const { container } = render(<ReservationForm />)

    const checkIn = screen.getByLabelText('Check In') as HTMLInputElement
    const checkOut = screen.getByLabelText('Check out') as HTMLInputElement

    expect(checkIn).toHaveAttribute('type', 'date')
    expect(checkOut).toHaveAttribute('type', 'date')
    expect(checkIn).toBeRequired()
    expect(checkOut).toBeRequired()

    const grid = container.querySelector('form') as HTMLElement
    const checkInField = screen.getByText('Check In').parentElement as HTMLElement
    const checkOutField = screen.getByText('Check out').parentElement as HTMLElement
    expect(checkInField.className).toMatch(/md:col-span-6/)
    expect(checkOutField.className).toMatch(/md:col-span-6/)
    expect(grid.contains(checkIn)).toBe(true)
    expect(grid.contains(checkOut)).toBe(true)
  })

  it('renders Rooms/Adults/Children selects with hidden placeholder options in 4/4/4 spans', () => {
    const { container } = render(<ReservationForm />)

    const rooms = screen.getByLabelText('Rooms') as HTMLSelectElement
    const adults = screen.getByLabelText('Adults') as HTMLSelectElement
    const children = screen.getByLabelText('Children') as HTMLSelectElement

    expect(Array.from(rooms.options).map((option) => option.textContent)).toEqual([
      'no of rooms',
      '1',
      '2',
      '3',
    ])
    expect(Array.from(adults.options).map((option) => option.textContent)).toEqual([
      'no of adults',
      '1',
      '2',
      '3',
    ])
    expect(Array.from(children.options).map((option) => option.textContent)).toEqual([
      'no of children',
      '0',
      '1',
      '2',
    ])

    // Placeholder options are hidden and initially selected (source fidelity).
    expect(rooms.options[0]?.hidden).toBe(true)
    expect(adults.options[0]?.hidden).toBe(true)
    expect(children.options[0]?.hidden).toBe(true)
    expect(rooms).toHaveValue('')
    expect(adults).toHaveValue('')
    expect(children).toHaveValue('')

    const grid = container.querySelector('form') as HTMLElement
    for (const name of ['Rooms', 'Adults', 'Children']) {
      const field = screen.getByText(name).parentElement as HTMLElement
      expect(field.className).toMatch(/md:col-span-4/)
    }
    expect(grid.contains(rooms)).toBe(true)
    expect(grid.contains(adults)).toBe(true)
    expect(grid.contains(children)).toBe(true)
  })

  it('renders Email and Phone inputs with the source placeholders in 6/6 spans', () => {
    const { container } = render(<ReservationForm />)

    const email = screen.getByLabelText('Email') as HTMLInputElement
    const phone = screen.getByLabelText('Phone') as HTMLInputElement

    expect(email).toHaveAttribute('type', 'email')
    expect(phone).toHaveAttribute('type', 'tel')
    expect(email).toHaveAttribute('placeholder', 'Enter your Email')
    expect(phone).toHaveAttribute('placeholder', 'Enter you Phone')
    expect(email).not.toBeRequired()
    expect(phone).not.toBeRequired()

    const grid = container.querySelector('form') as HTMLElement
    const emailField = screen.getByText('Email').parentElement as HTMLElement
    const phoneField = screen.getByText('Phone').parentElement as HTMLElement
    expect(emailField.className).toMatch(/md:col-span-6/)
    expect(phoneField.className).toMatch(/md:col-span-6/)
    expect(grid.contains(email)).toBe(true)
    expect(grid.contains(phone)).toBe(true)
  })

  it('styles controls as 60px translucent-white pills with a 2px brand focus ring', () => {
    render(<ReservationForm />)

    const destination = screen.getByLabelText('Destination') as HTMLInputElement
    expect(destination.className).toMatch(/h-\[60px\]/)
    expect(destination.className).toMatch(/rounded-\[40px\]/)
    expect(destination.className).toMatch(/border-none/)
    expect(destination.className).toMatch(/bg-fill/)
    expect(destination.className).toMatch(/px-\[25px\]/)
    expect(destination.className).toMatch(/text-white/)
    expect(destination.className).toMatch(/placeholder:text-faded/)
    expect(destination.className).toMatch(/focus:ring-2/)
    expect(destination.className).toMatch(/focus:ring-brand/)
    // No shadow UTILITY (the only "shadow" token is the focus ring's
    // transition-[box-shadow]).
    expect(destination.className).not.toMatch(/(^|\s)shadow(\s|$)/)
  })

  it('floats orange labels: hidden when empty, shown once the control has a value', () => {
    render(<ReservationForm />)

    const destinationLabel = screen.getByText('Destination').closest('label') as HTMLLabelElement
    expect(destinationLabel).not.toBeNull()
    expect(destinationLabel.className).toMatch(/absolute/)
    expect(destinationLabel.className).toMatch(/opacity-0/)
    expect(destinationLabel.className).toMatch(/-top-\[10px\]/)
    expect(destinationLabel.className).toMatch(/text-brand/)
    expect(destinationLabel.className).toMatch(/text-\[11px\]/)
    expect(destinationLabel.className).toMatch(/font-bold/)
    expect(destinationLabel.className).toMatch(/uppercase/)
    expect(destinationLabel.className).toMatch(/tracking-\[1\.3px\]/)
    expect(destinationLabel.htmlFor).toBe('destination')
    expect(document.getElementById('destination')).not.toBeNull()

    fireEvent.change(screen.getByLabelText('Destination'), { target: { value: 'Maldives' } })
    expect(destinationLabel.className).toMatch(/opacity-100/)
    expect(destinationLabel.className).toMatch(/top-2\.5/)
  })

  it('always shows date labels regardless of value', () => {
    render(<ReservationForm />)

    for (const name of ['Check In', 'Check out']) {
      const label = screen.getByText(name).closest('label') as HTMLLabelElement
      expect(label.className).toMatch(/opacity-100/)
      expect(label.className).toMatch(/top-2\.5/)
    }
  })

  it('renders floating arrow glyphs at the right edge of the three selects', () => {
    render(<ReservationForm />)

    for (const name of ['Rooms', 'Adults', 'Children']) {
      const select = screen.getByLabelText(name) as HTMLSelectElement
      expect(select.className).toMatch(/appearance-none/)
    }

    const arrows = screen.getAllByText('➜')
    expect(arrows).toHaveLength(3)
    for (const arrow of arrows) {
      const glyph = arrow.parentElement as HTMLElement
      expect(glyph.className).toMatch(/pointer-events-none/)
      expect(glyph.className).toMatch(/right-\[15px\]/)
      expect(glyph.className).toMatch(/top-1\/2/)
      expect(glyph.className).toMatch(/-translate-y-1\/2/)
      expect(glyph.className).toMatch(/h-8/)
      expect(glyph.className).toMatch(/w-8/)
      expect(glyph.className).toMatch(/text-faded/)
      expect(glyph.className).toMatch(/text-\[14px\]/)
    }
  })

  it('renders a full-width deep-orange pill Book Now button with opacity-0.9 hover', () => {
    render(<ReservationForm />)

    const button = screen.getByRole('button', { name: 'Book Now' })
    expect(button).toHaveAttribute('type', 'submit')
    expect(button.className).toMatch(/w-full/)
    expect(button.className).toMatch(/h-\[60px\]/)
    expect(button.className).toMatch(/rounded-\[40px\]/)
    expect(button.className).toMatch(/bg-deep/)
    expect(button.className).toMatch(/text-white/)
    expect(button.className).toMatch(/uppercase/)
    expect(button.className).toMatch(/text-\[16px\]/)
    expect(button.className).toMatch(/font-bold/)
    expect(button.className).toMatch(/tracking-\[1\.3px\]/)
    expect(button.className).toMatch(/hover:opacity-90/)
    expect(button.className).toMatch(/focus-visible:opacity-90/)

    const buttonSlot = button.parentElement as HTMLElement
    expect(buttonSlot.className).toMatch(/md:col-span-12/)
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

  it('submits a valid reservation and shows the full orange-styled summary line', async () => {
    const user = userEvent.setup()
    render(<ReservationForm />)

    await user.type(screen.getByLabelText('Destination'), 'Maldives')
    fireEvent.change(screen.getByLabelText('Check In'), { target: { value: '2026-08-10' } })
    fireEvent.change(screen.getByLabelText('Check out'), { target: { value: '2026-08-14' } })
    await user.selectOptions(screen.getByLabelText('Rooms'), '2')
    await user.selectOptions(screen.getByLabelText('Adults'), '2')
    await user.selectOptions(screen.getByLabelText('Children'), '1')
    await user.type(screen.getByLabelText('Email'), 'mail@example.com')
    await user.type(screen.getByLabelText('Phone'), '+1 555 0100')

    await user.click(screen.getByRole('button', { name: 'Book Now' }))

    const status = screen.getByRole('status')
    expect(status).toHaveTextContent(
      'Maldives · 2 rooms, 2 adults, 1 child · Aug 10 – Aug 14, 2026 · mail@example.com · +1 555 0100',
    )
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
