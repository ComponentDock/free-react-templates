import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BookingForm } from './BookingForm'

describe('BookingForm', () => {
  it('renders a centered white card with the source radius and padding', () => {
    const { container } = render(<BookingForm />)

    const card = container.querySelector('form') as HTMLElement
    expect(card).not.toBeNull()
    expect(card.className).toMatch(/max-w-\[768px\]/)
    expect(card.className).toMatch(/bg-white/)
    expect(card.className).toMatch(/rounded-\[3px\]/)
    expect(card.className).toMatch(/p-\[30px\]/)
    expect(card.className).toMatch(/mx-auto/)
  })

  it('renders the centered serif "Make your reservation" headline in near-black', () => {
    render(<BookingForm />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('Make your reservation')
    expect(heading.className).toMatch(/font-display/)
    expect(heading.className).toMatch(/text-\[38px\]/)
    expect(heading.className).toMatch(/text-ink/)
    expect(heading.className).toMatch(/text-center/)
  })

  it('renders Check In and Check out date inputs side by side, required, with the bronze divider', () => {
    const { container } = render(<BookingForm />)

    const checkIn = screen.getByLabelText('Check In') as HTMLInputElement
    const checkOut = screen.getByLabelText('Check out') as HTMLInputElement

    expect(checkIn).toHaveAttribute('type', 'date')
    expect(checkOut).toHaveAttribute('type', 'date')
    expect(checkIn).toBeRequired()
    expect(checkOut).toBeRequired()

    // Both date fields live in the same responsive two-column grid.
    const grid = container.querySelector('form .grid') as HTMLElement
    expect(grid).not.toBeNull()
    expect(grid.className).toMatch(/md:grid-cols-2/)
    expect(grid.contains(checkIn)).toBe(true)
    expect(grid.contains(checkOut)).toBe(true)

    // Bronze ⇔ divider between the columns, hidden below the md breakpoint.
    const divider = screen.getByText('⇔')
    expect(divider.className).toMatch(/text-brand/)
    expect(divider.className).toMatch(/hidden/)
    expect(divider.className).toMatch(/md:flex/)
  })

  it('shows grey empty-date text that turns slate once a date is picked', () => {
    render(<BookingForm />)

    const checkIn = screen.getByLabelText('Check In') as HTMLInputElement
    expect(checkIn).toHaveClass('text-mist')

    fireEvent.change(checkIn, { target: { value: '2026-08-10' } })
    expect(checkIn).toHaveValue('2026-08-10')
    expect(checkIn).toHaveClass('text-slate')
    expect(checkIn).not.toHaveClass('text-mist')
  })

  it('renders the three selects with the source option sets, required, and grey arrow tabs', () => {
    render(<BookingForm />)

    const rooms = screen.getByLabelText('No of rooms') as HTMLSelectElement
    const adults = screen.getByLabelText('Adults') as HTMLSelectElement
    const children = screen.getByLabelText('Children') as HTMLSelectElement

    for (const select of [rooms, adults, children]) {
      expect(select).toBeRequired()
      expect(select.className).toMatch(/appearance-none/)
    }

    expect(Array.from(rooms.options).map((option) => option.textContent)).toEqual([
      'Select rooms',
      '1',
      '2',
      '3',
    ])
    expect(Array.from(adults.options).map((option) => option.textContent)).toEqual([
      'Select adults',
      '1',
      '2',
      '3',
    ])
    expect(Array.from(children.options).map((option) => option.textContent)).toEqual([
      'Select children',
      '0',
      '1',
      '2',
    ])

    // One rotated ➜ arrow tab per select, grey #e1e1e1 with a bronze
    // focus-within state.
    const arrows = screen.getAllByText('➜')
    expect(arrows).toHaveLength(3)
    for (const arrow of arrows) {
      const tab = arrow.parentElement as HTMLElement
      expect(tab.className).toMatch(/bg-mist/)
      expect(tab.className).toMatch(/group-focus-within:bg-brand/)
      expect(tab.className).toMatch(/pointer-events-none/)
    }
  })

  it('renders a full-width solid bronze Check availability submit button with white text', () => {
    render(<BookingForm />)

    const button = screen.getByRole('button', { name: 'Check availability' })
    expect(button).toHaveAttribute('type', 'submit')
    expect(button.className).toMatch(/w-full/)
    expect(button.className).toMatch(/h-\[50px\]/)
    expect(button.className).toMatch(/rounded-\[3px\]/)
    expect(button.className).toMatch(/border-none/)
    expect(button.className).toMatch(/bg-brand/)
    expect(button.className).toMatch(/text-white/)
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

  it('blocks submission when check-out is earlier than check-in', () => {
    const { container } = render(<BookingForm />)

    fireEvent.change(screen.getByLabelText('Check In'), { target: { value: '2026-08-13' } })
    fireEvent.change(screen.getByLabelText('Check out'), { target: { value: '2026-08-10' } })
    fireEvent.change(screen.getByLabelText('No of rooms'), { target: { value: '1' } })
    fireEvent.change(screen.getByLabelText('Adults'), { target: { value: '2' } })
    fireEvent.change(screen.getByLabelText('Children'), { target: { value: '0' } })

    fireEvent.submit(container.querySelector('form') as HTMLFormElement)

    expect(
      screen.getByText('Please choose a check-out date on or after your check-in date.'),
    ).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('submits a valid reservation and shows the bronze summary line', async () => {
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
    expect(status.className).toMatch(/text-brand/)
  })

  it('clears a field error once the user edits the field', async () => {
    const user = userEvent.setup()
    render(<BookingForm />)

    fireEvent.submit(document.querySelector('form') as HTMLFormElement)
    expect(screen.getByText('Please choose a check-in date.')).toBeInTheDocument()

    fireEvent.change(screen.getByLabelText('Check In'), { target: { value: '2026-08-10' } })
    expect(screen.queryByText('Please choose a check-in date.')).not.toBeInTheDocument()

    // Errors on untouched fields stay until those fields are edited.
    expect(screen.getByText('Please choose a check-out date.')).toBeInTheDocument()
    await user.selectOptions(screen.getByLabelText('Children'), '1')
    expect(screen.queryByText('Please select the number of children.')).not.toBeInTheDocument()
  })
})
