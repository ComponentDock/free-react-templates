import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BookingForm } from './BookingForm'

describe('BookingForm', () => {
  it('renders the white horizontal booking bar with shadow, translucent border and sharp corners', () => {
    const { container } = render(<BookingForm />)

    const form = container.querySelector('form') as HTMLElement
    expect(form).not.toBeNull()
    expect(form.className).toMatch(/bg-white/)
    expect(form.className).toMatch(/shadow-\[0_2px_5px_-2px_rgba\(0,0,0,0\.3\)\]/)
    expect(form.className).toMatch(/border/)
    expect(form.className).toMatch(/border-bar/)
    expect(form.className).not.toMatch(/rounded/)
  })

  it('lays out three zones in a row on desktop: header 3/12, fields 7/12, button 2/12', () => {
    const { container } = render(<BookingForm />)

    const grid = container.querySelector('form > div') as HTMLElement
    expect(grid).not.toBeNull()
    expect(grid.className).toMatch(/grid-cols-1/)
    expect(grid.className).toMatch(/lg:grid-cols-12/)

    const zones = container.querySelectorAll('form > div > div')
    expect(zones).toHaveLength(3)
    expect((zones[0] as HTMLElement).className).toMatch(/lg:col-span-3/)
    expect((zones[1] as HTMLElement).className).toMatch(/lg:col-span-7/)
    expect((zones[2] as HTMLElement).className).toMatch(/lg:col-span-2/)
  })

  it('renders the "Book Now" serif taupe heading in a 110px centered header column', () => {
    const { container } = render(<BookingForm />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveTextContent('Book Now')
    expect(heading.className).toMatch(/font-display/)
    expect(heading.className).toMatch(/text-\[52px\]/)
    expect(heading.className).toMatch(/text-brand/)

    const header = container.querySelector('form h2')?.parentElement as HTMLElement
    expect(header.className).toMatch(/h-\[110px\]/)
    expect(header.className).toMatch(/py-\[15px\]/)
    expect(header.className).toMatch(/px-\[10px\]/)
    expect(header.className).toMatch(/text-center/)
  })

  it('renders the four fields in source order: Check In, Check out, Guests, Kids', () => {
    const { container } = render(<BookingForm />)

    const controls = container.querySelectorAll('form input, form select')
    expect(Array.from(controls).map((control) => control.id)).toEqual([
      'checkIn',
      'checkOut',
      'guests',
      'kids',
    ])

    const checkIn = screen.getByLabelText('Check In') as HTMLInputElement
    const checkOut = screen.getByLabelText('Check out') as HTMLInputElement
    expect(checkIn).toHaveAttribute('type', 'date')
    expect(checkOut).toHaveAttribute('type', 'date')

    const guests = screen.getByLabelText('Guests') as HTMLSelectElement
    expect(Array.from(guests.options).map((option) => option.textContent)).toEqual(['1', '2', '3'])
    expect(guests).toHaveValue('1')

    const kids = screen.getByLabelText('Kids') as HTMLSelectElement
    expect(Array.from(kids.options).map((option) => option.textContent)).toEqual(['0', '1', '2'])
    expect(kids).toHaveValue('0')
  })

  it('keeps every label STATIC above its field: block, grey, 14px, 30px line, never floating', () => {
    render(<BookingForm />)

    const ids: Record<string, string> = {
      'Check In': 'checkIn',
      'Check out': 'checkOut',
      Guests: 'guests',
      Kids: 'kids',
    }

    for (const [label, id] of Object.entries(ids)) {
      const element = screen.getByText(label) as HTMLElement
      expect(element.tagName).toBe('LABEL')
      expect(element.className).toMatch(/block/)
      expect(element.className).toMatch(/h-\[30px\]/)
      expect(element.className).toMatch(/leading-\[30px\]/)
      expect(element.className).toMatch(/text-\[14px\]/)
      expect(element.className).toMatch(/text-label/)
      expect(element.className).not.toMatch(/absolute/)
      expect(element.className).not.toMatch(/top-/)
      expect(element).toHaveAttribute('for', id)
    }
  })

  it('styles every field with the source look: transparent, sharp, borderless, 50px, 28px serif ink', () => {
    render(<BookingForm />)

    const checkIn = screen.getByLabelText('Check In') as HTMLInputElement
    expect(checkIn.className).toMatch(/h-\[50px\]/)
    expect(checkIn.className).toMatch(/bg-transparent/)
    expect(checkIn.className).toMatch(/text-\[28px\]/)
    expect(checkIn.className).toMatch(/font-bold/)
    expect(checkIn.className).toMatch(/font-display/)
    expect(checkIn.className).toMatch(/text-ink/)
    expect(checkIn.className).not.toMatch(/rounded/)
    expect(checkIn.className).not.toMatch(/border-/)

    const guests = screen.getByLabelText('Guests') as HTMLSelectElement
    expect(guests.className).toMatch(/appearance-none/)
  })

  it('floats a grey rotated ➜ arrow at the right edge of each select, without capturing pointer events', () => {
    const { container } = render(<BookingForm />)

    const arrows = container.querySelectorAll('form select + span[aria-hidden="true"]')
    expect(arrows).toHaveLength(2)
    for (const arrow of arrows) {
      expect(arrow).toHaveTextContent('➜')
      expect(arrow.className).toMatch(/pointer-events-none/)
      expect(arrow.className).toMatch(/absolute/)
      expect(arrow.className).toMatch(/right-0/)
      expect(arrow.className).toMatch(/bottom-\[20px\]/)
      expect(arrow.className).toMatch(/h-8/)
      expect(arrow.className).toMatch(/w-8/)
      expect(arrow.className).toMatch(/text-\[12px\]/)
      expect(arrow.className).toMatch(/text-label/)
      expect((arrow.querySelector('span') as HTMLElement).className).toMatch(/rotate-90/)
    }
  })

  it('renders a tall full-width solid-taupe uppercase "Check availability" submit button', () => {
    render(<BookingForm />)

    const button = screen.getByRole('button', { name: 'Check availability' })
    expect(button).toHaveAttribute('type', 'submit')
    expect(button.className).toMatch(/w-full/)
    expect(button.className).toMatch(/h-\[80px\]/)
    expect(button.className).toMatch(/bg-brand/)
    expect(button.className).toMatch(/text-white/)
    expect(button.className).toMatch(/uppercase/)
    expect(button.className).toMatch(/text-\[14px\]/)
    expect(button.className).toMatch(/font-normal/)
    expect(button.className).toMatch(/rounded-none/)
  })

  it('shows validation messages for missing dates and no summary', () => {
    const { container } = render(<BookingForm />)

    fireEvent.submit(container.querySelector('form') as HTMLFormElement)

    expect(screen.getByText('Please choose a check-in date.')).toBeInTheDocument()
    expect(screen.getByText('Please choose a check-out date.')).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('blocks submission when check-out is earlier than check-in', () => {
    const { container } = render(<BookingForm />)

    fireEvent.change(screen.getByLabelText('Check In'), { target: { value: '2026-08-13' } })
    fireEvent.change(screen.getByLabelText('Check out'), { target: { value: '2026-08-10' } })

    fireEvent.submit(container.querySelector('form') as HTMLFormElement)

    expect(
      screen.getByText('Please choose a check-out date on or after your check-in date.'),
    ).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('submits a valid reservation and shows the taupe summary line', async () => {
    const user = userEvent.setup()
    render(<BookingForm />)

    fireEvent.change(screen.getByLabelText('Check In'), { target: { value: '2026-08-10' } })
    fireEvent.change(screen.getByLabelText('Check out'), { target: { value: '2026-08-13' } })
    await user.selectOptions(screen.getByLabelText('Guests'), '2')
    await user.selectOptions(screen.getByLabelText('Kids'), '1')

    await user.click(screen.getByRole('button', { name: 'Check availability' }))

    const status = screen.getByRole('status')
    expect(status).toHaveTextContent('Aug 10 → Aug 13, 2026 · 2 Guests · 1 Kid')
    expect(status.className).toMatch(/text-brand/)
  })

  it('clears a field error once the user edits the field', () => {
    const { container } = render(<BookingForm />)

    fireEvent.submit(container.querySelector('form') as HTMLFormElement)
    expect(screen.getByText('Please choose a check-in date.')).toBeInTheDocument()
    expect(screen.getByText('Please choose a check-out date.')).toBeInTheDocument()

    fireEvent.change(screen.getByLabelText('Check In'), { target: { value: '2026-08-10' } })
    expect(screen.queryByText('Please choose a check-in date.')).not.toBeInTheDocument()
    expect(screen.getByText('Please choose a check-out date.')).toBeInTheDocument()
  })

  it('stacks the zones vertically and wraps the inner field row below the desktop breakpoint', () => {
    const { container } = render(<BookingForm />)

    const mainGrid = container.querySelector('form > div') as HTMLElement
    expect(mainGrid.className).toMatch(/grid-cols-1/)

    const innerRow = container.querySelector('form > div > div:nth-child(2) > div') as HTMLElement
    expect(innerRow).not.toBeNull()
    expect(innerRow.className).toMatch(/grid-cols-1/)
    expect(innerRow.className).toMatch(/lg:grid-cols-4/)
  })
})
