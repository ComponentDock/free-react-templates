import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BookingForm } from './BookingForm'

describe('BookingForm', () => {
  it('renders the solid-charcoal flat card with no radius, shadow or photo', () => {
    const { container } = render(<BookingForm />)

    const card = container.querySelector('[class*="max-w-[642px]"]') as HTMLElement
    expect(card).not.toBeNull()
    expect(card.className).toMatch(/bg-card/)
    expect(card.className).toMatch(/px-10/)
    expect(card.className).toMatch(/pb-10/)
    // Flat rectangle: NO radius, NO shadow, NO background image.
    expect(card.className).not.toMatch(/rounded/)
    expect(card.className).not.toMatch(/(^|\s)shadow(\s|$)/)
    expect(card.style.backgroundImage).toBe('')
  })

  it('renders the full-bleed darker header band with a left-aligned white headline', () => {
    const { container } = render(<BookingForm />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toBe('Book Your Flight')
    expect(heading.className).toMatch(/text-\[38px\]/)
    expect(heading.className).toMatch(/font-bold/)
    expect(heading.className).toMatch(/capitalize/)
    expect(heading.className).toMatch(/text-white/)
    // Left-aligned: no text-center anywhere in the band, and the h1 is a
    // block default (text-left).
    expect(heading.className).not.toMatch(/text-center/)

    const band = heading.parentElement as HTMLElement
    expect(band.className).toMatch(/bg-band/)
    expect(band.className).toMatch(/p-10/)
    expect(band.className).toMatch(/mb-\[30px\]/)
    // Negative side margins span the card's 40px padding (full-bleed band).
    expect(band.className).toMatch(/-mx-10/)

    const card = container.querySelector('[class*="max-w-[642px]"]') as HTMLElement
    expect(card.contains(heading)).toBe(true)
  })

  it('renders Roundtrip / One way / Multi-City radios with custom circles', () => {
    const { container } = render(<BookingForm />)

    const radios = screen.getAllByRole('radio')
    expect(radios).toHaveLength(3)
    expect(radios[0]).toHaveAccessibleName('Roundtrip')
    expect(radios[1]).toHaveAccessibleName('One way')
    expect(radios[2]).toHaveAccessibleName('Multi-City')
    for (const radio of radios) {
      expect(radio).toHaveAttribute('name', 'flight-type')
      expect(radio.className).toMatch(/sr-only/)
    }

    // No radio is checked by default (source has no checked attribute).
    expect(radios[0]).not.toBeChecked()

    const circle = radios[0]?.nextSibling as HTMLElement
    expect(circle.className).toMatch(/h-5 w-5/)
    expect(circle.className).toMatch(/rounded-full/)
    expect(circle.className).toMatch(/border-2/)
    expect(circle.className).toMatch(/bg-ink/)
    expect(circle.className).toMatch(/border-ink/)

    const dot = circle.firstChild as HTMLElement
    expect(dot.className).toMatch(/bg-brand/)
    expect(dot.className).toMatch(/opacity-0/)

    // Labels are uppercase white 700 with 30px left padding for the circle.
    const label = (radios[0] as HTMLInputElement).closest('label') as HTMLLabelElement
    expect(label.className).toMatch(/uppercase/)
    expect(label.className).toMatch(/font-bold/)
    expect(label.className).toMatch(/text-white/)
    expect(label.className).toMatch(/pl-\[30px\]/)
    expect(container.querySelectorAll('[class*="gap-x-[15px]"]')).toHaveLength(1)
  })

  it('shows the mustard ring + dot when a radio is selected', () => {
    render(<BookingForm />)

    const roundtrip = screen.getByRole('radio', { name: 'Roundtrip' })
    fireEvent.click(roundtrip)
    expect(roundtrip).toBeChecked()

    const circle = roundtrip.nextSibling as HTMLElement
    expect(circle.className).toMatch(/border-brand/)

    const dot = circle.firstChild as HTMLElement
    expect(dot.className).toMatch(/h-2\.5 w-2\.5/)
    expect(dot.className).toMatch(/opacity-100/)

    const oneWay = screen.getByRole('radio', { name: 'One way' })
    fireEvent.click(oneWay)
    expect(oneWay).toBeChecked()
    expect(roundtrip).not.toBeChecked()
  })

  it('renders Flying from and Flying to as full-width text inputs with resting labels inside', () => {
    const { container } = render(<BookingForm />)

    const flyingFrom = screen.getByLabelText('Flying from') as HTMLInputElement
    const flyingTo = screen.getByLabelText('Flying to') as HTMLInputElement

    expect(flyingFrom).toHaveAttribute('type', 'text')
    expect(flyingTo).toHaveAttribute('type', 'text')

    const grid = container.querySelector('form') as HTMLElement
    expect(grid.contains(flyingFrom)).toBe(true)
    expect(grid.contains(flyingTo)).toBe(true)

    for (const name of ['Flying from', 'Flying to']) {
      const field = screen.getByText(name).parentElement as HTMLElement
      expect(field.className).toMatch(/md:col-span-12/)
      const label = screen.getByText(name).closest('label') as HTMLLabelElement
      // At rest: label INSIDE the field (top 15px), #2d343b (card), 16px.
      expect(label.className).toMatch(/top-\[15px\]/)
      expect(label.className).toMatch(/text-card/)
      expect(label.className).toMatch(/text-\[16px\]/)
      expect(label.className).toMatch(/uppercase/)
      expect(label.className).toMatch(/font-bold/)
    }

    // Empty + unfocused: control text transparent, label acts as placeholder.
    expect(flyingFrom.className).toMatch(/text-transparent/)
    expect(flyingFrom.className).toMatch(/bg-ink/)
    expect(flyingFrom.className).toMatch(/h-\[50px\]/)
    expect(flyingFrom.className).not.toMatch(/rounded/)
    // Borderless: the only "border" utility is the explicit border-none.
    expect(flyingFrom.className).toMatch(/border-none/)
  })

  it('floats the label above the field when focused or filled', () => {
    render(<BookingForm />)

    const flyingFrom = screen.getByLabelText('Flying from') as HTMLInputElement
    const label = screen.getByText('Flying from').closest('label') as HTMLLabelElement

    // Focus alone floats the label and reveals the (empty) text.
    fireEvent.focus(flyingFrom)
    expect(label.className).toMatch(/-top-\[10px\]/)
    expect(label.className).toMatch(/text-\[14px\]/)
    expect(label.className).toMatch(/text-white/)
    expect(flyingFrom.className).toMatch(/text-white/)

    // Blur with no value returns the label inside the field.
    fireEvent.blur(flyingFrom)
    expect(label.className).toMatch(/top-\[15px\]/)
    expect(label.className).toMatch(/text-card/)
    expect(flyingFrom.className).toMatch(/text-transparent/)

    // A value keeps the label floated after blur.
    fireEvent.change(flyingFrom, { target: { value: 'JFK' } })
    fireEvent.blur(flyingFrom)
    expect(label.className).toMatch(/-top-\[10px\]/)
    expect(flyingFrom.className).toMatch(/text-white/)
  })

  it('renders Check In and Check Out date inputs in 6/6 spans with the same floating rule', () => {
    const { container } = render(<BookingForm />)

    const checkIn = screen.getByLabelText('Check In') as HTMLInputElement
    const checkOut = screen.getByLabelText('Check Out') as HTMLInputElement

    expect(checkIn).toHaveAttribute('type', 'date')
    expect(checkOut).toHaveAttribute('type', 'date')

    const grid = container.querySelector('form') as HTMLElement
    const checkInField = screen.getByText('Check In').parentElement as HTMLElement
    const checkOutField = screen.getByText('Check Out').parentElement as HTMLElement
    expect(checkInField.className).toMatch(/md:col-span-6/)
    expect(checkOutField.className).toMatch(/md:col-span-6/)
    expect(grid.contains(checkIn)).toBe(true)
    expect(grid.contains(checkOut)).toBe(true)

    // Same floating-label rule as the text fields (source gives dates no
    // special always-visible rule).
    const checkInLabel = screen.getByText('Check In').closest('label') as HTMLLabelElement
    const checkOutLabel = screen.getByText('Check Out').closest('label') as HTMLLabelElement
    expect(checkInLabel.className).toMatch(/top-\[15px\]/)
    expect(checkOutLabel.className).toMatch(/top-\[15px\]/)

    // Focus alone floats the date label and reveals the (empty) value.
    fireEvent.focus(checkIn)
    expect(checkInLabel.className).toMatch(/-top-\[10px\]/)
    expect(checkIn.className).toMatch(/text-white/)
    fireEvent.blur(checkIn)
    expect(checkInLabel.className).toMatch(/top-\[15px\]/)
    expect(checkIn.className).toMatch(/text-transparent/)

    // A picked value keeps the label floated after blur.
    fireEvent.change(checkIn, { target: { value: '2026-08-10' } })
    fireEvent.blur(checkIn)
    expect(checkInLabel.className).toMatch(/-top-\[10px\]/)
    expect(checkIn.className).toMatch(/text-white/)

    fireEvent.change(checkOut, { target: { value: '2026-08-14' } })
    expect(checkOutLabel.className).toMatch(/-top-\[10px\]/)
    fireEvent.focus(checkOut)
    expect(checkOut.className).toMatch(/text-white/)
    fireEvent.blur(checkOut)
    expect(checkOutLabel.className).toMatch(/-top-\[10px\]/)
  })

  it('renders Travel class / Adults / Children selects with real first options and 4/4/4 spans', () => {
    const { container } = render(<BookingForm />)

    const travelClass = screen.getByLabelText('Travel class') as HTMLSelectElement
    const adults = screen.getByLabelText('Adults') as HTMLSelectElement
    const children = screen.getByLabelText('Children') as HTMLSelectElement

    // Source selects have REAL first options (no hidden placeholder).
    expect(Array.from(travelClass.options).map((option) => option.textContent)).toEqual([
      'Economy class',
      'Business class',
      'First class',
    ])
    expect(Array.from(adults.options).map((option) => option.textContent)).toEqual(['1', '2', '3'])
    expect(Array.from(children.options).map((option) => option.textContent)).toEqual([
      '0',
      '1',
      '2',
    ])
    expect(travelClass).toHaveValue('Economy class')
    expect(adults).toHaveValue('1')
    expect(children).toHaveValue('0')

    const grid = container.querySelector('form') as HTMLElement
    for (const name of ['Travel class', 'Adults', 'Children']) {
      const field = screen.getByText(name).parentElement as HTMLElement
      expect(field.className).toMatch(/md:col-span-4/)
      // Always floated: selects always have a value.
      const label = screen.getByText(name).closest('label') as HTMLLabelElement
      expect(label.className).toMatch(/-top-\[10px\]/)
      expect(label.className).toMatch(/text-white/)
      expect(label.className).toMatch(/text-\[14px\]/)
    }

    expect(travelClass.className).toMatch(/appearance-none/)
    expect(grid.contains(travelClass)).toBe(true)
    expect(grid.contains(adults)).toBe(true)
    expect(grid.contains(children)).toBe(true)
  })

  it('renders full-height 24px arrow strips at the right edge of the three selects', () => {
    render(<BookingForm />)

    const arrows = screen.getAllByText('➜')
    expect(arrows).toHaveLength(3)
    for (const arrow of arrows) {
      const strip = arrow.parentElement as HTMLElement
      expect(strip.className).toMatch(/pointer-events-none/)
      expect(strip.className).toMatch(/right-0/)
      expect(strip.className).toMatch(/bottom-0/)
      expect(strip.className).toMatch(/h-\[50px\]/)
      expect(strip.className).toMatch(/w-6/)
      expect(strip.className).toMatch(/text-card/)
      expect(strip.className).toMatch(/text-\[14px\]/)
    }
  })

  it('renders the left-aligned mustard "Check availability" button, NOT full width', () => {
    render(<BookingForm />)

    const button = screen.getByRole('button', { name: 'Check availability' })
    expect(button).toHaveAttribute('type', 'submit')
    expect(button.className).toMatch(/h-\[50px\]/)
    expect(button.className).toMatch(/bg-brand/)
    expect(button.className).toMatch(/text-ink/)
    expect(button.className).toMatch(/font-bold/)
    expect(button.className).toMatch(/px-\[50px\]/)
    expect(button.className).toMatch(/rounded-none/)
    expect(button.className).not.toMatch(/w-full/)

    const buttonSlot = button.parentElement as HTMLElement
    expect(buttonSlot.className).toMatch(/md:col-span-12/)
  })

  it('shows validation messages for missing required fields and no summary', () => {
    const { container } = render(<BookingForm />)

    fireEvent.submit(container.querySelector('form') as HTMLFormElement)

    expect(screen.getByText('Please enter your departure city or airport.')).toBeInTheDocument()
    expect(screen.getByText('Please enter your arrival city or airport.')).toBeInTheDocument()
    expect(screen.getByText('Please choose a check-in date.')).toBeInTheDocument()
    expect(screen.getByText('Please choose a check-out date.')).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('blocks submission when check-out is earlier than check-in', () => {
    const { container } = render(<BookingForm />)

    fireEvent.change(screen.getByLabelText('Flying from'), { target: { value: 'JFK' } })
    fireEvent.change(screen.getByLabelText('Flying to'), { target: { value: 'LAX' } })
    fireEvent.change(screen.getByLabelText('Check In'), { target: { value: '2026-08-14' } })
    fireEvent.change(screen.getByLabelText('Check Out'), { target: { value: '2026-08-10' } })

    fireEvent.submit(container.querySelector('form') as HTMLFormElement)

    expect(
      screen.getByText('Please choose a check-out date on or after your check-in date.'),
    ).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('submits a valid booking and shows the full summary line', async () => {
    const user = userEvent.setup()
    render(<BookingForm />)

    await user.click(screen.getByRole('radio', { name: 'Roundtrip' }))
    await user.type(screen.getByLabelText('Flying from'), 'JFK')
    await user.type(screen.getByLabelText('Flying to'), 'LAX')
    fireEvent.change(screen.getByLabelText('Check In'), { target: { value: '2026-08-10' } })
    fireEvent.change(screen.getByLabelText('Check Out'), { target: { value: '2026-08-14' } })
    await user.selectOptions(screen.getByLabelText('Travel class'), 'Business class')
    await user.selectOptions(screen.getByLabelText('Adults'), '2')
    await user.selectOptions(screen.getByLabelText('Children'), '1')

    await user.click(screen.getByRole('button', { name: 'Check availability' }))

    const status = screen.getByRole('status')
    expect(status).toHaveTextContent(
      'Roundtrip · JFK → LAX · Aug 10 – Aug 14, 2026 · Business class · 2 adults · 1 child',
    )
    expect(status.className).toMatch(/text-brand/)
    expect(status.className).toMatch(/bg-brand\/10/)
  })

  it('defaults an unselected flight type to Roundtrip in the summary', async () => {
    const user = userEvent.setup()
    render(<BookingForm />)

    await user.type(screen.getByLabelText('Flying from'), 'JFK')
    await user.type(screen.getByLabelText('Flying to'), 'LAX')
    fireEvent.change(screen.getByLabelText('Check In'), { target: { value: '2026-08-10' } })
    fireEvent.change(screen.getByLabelText('Check Out'), { target: { value: '2026-08-14' } })

    await user.click(screen.getByRole('button', { name: 'Check availability' }))

    expect(screen.getByRole('status')).toHaveTextContent(
      'Roundtrip · JFK → LAX · Aug 10 – Aug 14, 2026 · Economy class · 1 adult · 0 children',
    )
  })

  it('clears a field error once the user edits the field', () => {
    const { container } = render(<BookingForm />)

    fireEvent.submit(container.querySelector('form') as HTMLFormElement)
    expect(screen.getByText('Please enter your departure city or airport.')).toBeInTheDocument()
    expect(screen.getByText('Please choose a check-out date.')).toBeInTheDocument()

    fireEvent.change(screen.getByLabelText('Flying from'), { target: { value: 'JFK' } })
    expect(
      screen.queryByText('Please enter your departure city or airport.'),
    ).not.toBeInTheDocument()
    expect(screen.getByText('Please choose a check-out date.')).toBeInTheDocument()

    fireEvent.change(screen.getByLabelText('Check Out'), { target: { value: '2026-08-14' } })
    expect(screen.queryByText('Please choose a check-out date.')).not.toBeInTheDocument()
  })
})
