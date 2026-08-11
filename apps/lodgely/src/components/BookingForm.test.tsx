import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BookingForm } from './BookingForm'

describe('BookingForm', () => {
  it('renders the dark 586px form panel with a soft drop shadow and sharp corners', () => {
    const { container } = render(<BookingForm />)

    const panel = container.querySelector('form') as HTMLElement
    expect(panel).not.toBeNull()
    expect(panel.className).toMatch(/max-w-\[586px\]/)
    expect(panel.className).toMatch(/bg-panel/)
    expect(panel.className).toMatch(/p-10/)
    expect(panel.className).toMatch(/shadow-\[0px_5px_15px_-5px_rgba\(0,0,0,0\.8\)\]/)
    expect(panel.className).not.toMatch(/rounded/)
  })

  it('renders the centered white sans-serif headline (body font, NOT serif)', () => {
    render(<BookingForm />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('Make your reservation')
    expect(heading.className).toMatch(/text-\[42px\]/)
    expect(heading.className).toMatch(/font-bold/)
    expect(heading.className).toMatch(/text-white/)
    expect(heading.className).toMatch(/capitalize/)
    expect(heading.className).not.toMatch(/font-serif/)

    const header = heading.parentElement as HTMLElement
    expect(header.className).toMatch(/text-center/)
    expect(header.className).toMatch(/mb-\[25px\]/)
  })

  it('renders the fields in source order with static white labels above each control', () => {
    const { container } = render(<BookingForm />)

    const controls = container.querySelectorAll('form input, form select')
    expect(Array.from(controls).map((control) => control.id)).toEqual([
      'checkIn',
      'checkOut',
      'rooms',
      'adults',
      'children',
    ])

    for (const labelText of ['Check In', 'Check out', 'No of rooms', 'Adults', 'Children']) {
      const label = screen.getByText(labelText)
      expect(label.className).toMatch(/text-sm/)
      expect(label.className).toMatch(/font-normal/)
      expect(label.className).toMatch(/tracking-\[0\.4px\]/)
      expect(label.className).toMatch(/text-white/)
      expect(label).toHaveAttribute('for', expect.any(String))
    }

    // Labels are associated with their controls (accessible).
    expect(screen.getByLabelText('Check In')).toHaveAttribute('id', 'checkIn')
    expect(screen.getByLabelText('Check out')).toHaveAttribute('id', 'checkOut')
    expect(screen.getByLabelText('No of rooms')).toHaveAttribute('id', 'rooms')
    expect(screen.getByLabelText('Adults')).toHaveAttribute('id', 'adults')
    expect(screen.getByLabelText('Children')).toHaveAttribute('id', 'children')
  })

  it('renders Check In and Check out as required date inputs side by side with NO divider', () => {
    const { container } = render(<BookingForm />)

    const checkIn = screen.getByLabelText('Check In') as HTMLInputElement
    const checkOut = screen.getByLabelText('Check out') as HTMLInputElement

    expect(checkIn).toHaveAttribute('type', 'date')
    expect(checkOut).toHaveAttribute('type', 'date')
    expect(checkIn).toBeRequired()
    expect(checkOut).toBeRequired()

    // Dark inputs: #2d2d2d fill, no border, sharp corners, white 14px text.
    expect(checkIn.className).toMatch(/bg-input/)
    expect(checkIn.className).toMatch(/border-none/)
    expect(checkIn.className).toMatch(/rounded-none/)
    expect(checkIn.className).toMatch(/text-sm/)
    expect(checkIn.className).toMatch(/h-\[50px\]/)

    // Empty date inputs show the dim smoke color; NO ⇔ divider between them.
    expect(checkIn.className).toMatch(/text-smoke/)
    expect(screen.queryByText('⇔')).not.toBeInTheDocument()

    const dateGrid = container.querySelector('form .grid') as HTMLElement
    expect(dateGrid).not.toBeNull()
    expect(dateGrid.contains(checkIn)).toBe(true)
    expect(dateGrid.contains(checkOut)).toBe(true)
  })

  it('turns a filled date input white and clears its error on edit', async () => {
    const user = userEvent.setup()
    render(<BookingForm />)

    const checkIn = screen.getByLabelText('Check In') as HTMLInputElement
    expect(checkIn.className).toMatch(/text-smoke/)

    await user.type(checkIn, '2026-08-10')
    expect(checkIn).toHaveValue('2026-08-10')
    expect(checkIn.className).toMatch(/text-white/)
  })

  it('renders the three selects with the source option sets and floating white arrow glyphs', () => {
    render(<BookingForm />)

    const rooms = screen.getByLabelText('No of rooms') as HTMLSelectElement
    const adults = screen.getByLabelText('Adults') as HTMLSelectElement
    const children = screen.getByLabelText('Children') as HTMLSelectElement

    for (const select of [rooms, adults, children]) {
      expect(select.className).toMatch(/appearance-none/)
      expect(select.className).toMatch(/bg-input/)
      expect(select.className).toMatch(/rounded-none/)
    }

    expect(Array.from(rooms.options).map((option) => option.value)).toEqual(['', '1', '2', '3'])
    expect(Array.from(adults.options).map((option) => option.value)).toEqual(['', '1', '2', '3'])
    expect(Array.from(children.options).map((option) => option.value)).toEqual(['', '0', '1', '2'])

    // Floating white 32×32 arrow glyphs (rotated ➜), one per select, no tab bg.
    const arrows = screen.getAllByText('➜')
    expect(arrows).toHaveLength(3)
    for (const arrow of arrows) {
      const wrapper = arrow.parentElement as HTMLElement
      expect(wrapper.className).toMatch(/h-8/)
      expect(wrapper.className).toMatch(/w-8/)
      expect(wrapper.className).toMatch(/bottom-1\.5/)
      expect(wrapper.className).toMatch(/right-1\.5/)
      expect(wrapper.className).toMatch(/text-white/)
    }
  })

  it('renders a full-width olive-green Check availability submit button with white text', () => {
    render(<BookingForm />)

    const button = screen.getByRole('button', { name: 'Check availability' })
    expect(button).toHaveAttribute('type', 'submit')
    expect(button.className).toMatch(/w-full/)
    expect(button.className).toMatch(/h-\[50px\]/)
    expect(button.className).toMatch(/rounded-none/)
    expect(button.className).toMatch(/border-none/)
    expect(button.className).toMatch(/bg-brand/)
    expect(button.className).toMatch(/text-white/)
    expect(button.className).toMatch(/tracking-\[0\.4px\]/)
    expect(button.className).toMatch(/font-normal/)
  })

  it('shows validation messages for every missing field and no summary', () => {
    const { container } = render(<BookingForm />)

    fireEvent.submit(container.querySelector('form') as HTMLFormElement)

    expect(screen.getByText('Please choose a check-in date.')).toBeInTheDocument()
    expect(screen.getByText('Please choose a check-out date.')).toBeInTheDocument()
    expect(screen.getByText('Please select the number of rooms.')).toBeInTheDocument()
    expect(screen.getByText('Please select the number of adults.')).toBeInTheDocument()
    expect(screen.getByText('Please select the number of children.')).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('rejects a check-out date before check-in and blocks submission', () => {
    const { container } = render(<BookingForm />)

    fireEvent.change(screen.getByLabelText('Check In'), { target: { value: '2026-08-13' } })
    fireEvent.change(screen.getByLabelText('Check out'), { target: { value: '2026-08-10' } })
    fireEvent.change(screen.getByLabelText('No of rooms'), { target: { value: '1' } })
    fireEvent.change(screen.getByLabelText('Adults'), { target: { value: '2' } })
    fireEvent.change(screen.getByLabelText('Children'), { target: { value: '0' } })

    fireEvent.submit(container.querySelector('form') as HTMLFormElement)

    expect(screen.getByText('Check-out cannot be before check-in.')).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('submits a valid booking and shows the summary line in brand olive', async () => {
    const user = userEvent.setup()
    render(<BookingForm />)

    fireEvent.change(screen.getByLabelText('Check In'), { target: { value: '2026-08-10' } })
    fireEvent.change(screen.getByLabelText('Check out'), { target: { value: '2026-08-13' } })
    await user.selectOptions(screen.getByLabelText('No of rooms'), '1')
    await user.selectOptions(screen.getByLabelText('Adults'), '2')
    await user.selectOptions(screen.getByLabelText('Children'), '0')

    await user.click(screen.getByRole('button', { name: 'Check availability' }))

    const status = screen.getByRole('status')
    expect(status).toHaveTextContent(
      'Check-in 2026-08-10 → Check-out 2026-08-13 · 1 room · 2 adults · 0 children',
    )
    expect(status.className).toMatch(/bg-brand\/10/)
  })

  it('clears a field error once the user edits the field', async () => {
    const user = userEvent.setup()
    render(<BookingForm />)

    fireEvent.submit(document.querySelector('form') as HTMLFormElement)
    expect(screen.getByText('Please choose a check-in date.')).toBeInTheDocument()

    await user.type(screen.getByLabelText('Check In'), '2026-08-10')
    expect(screen.queryByText('Please choose a check-in date.')).not.toBeInTheDocument()
  })
})
