import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BookingForm } from './BookingForm'

describe('BookingForm', () => {
  it('renders the FIND A ROOM heading in brand blue, uppercase, wide tracking', () => {
    render(<BookingForm />)

    const heading = screen.getByRole('heading', { level: 3 })
    expect(heading).toHaveTextContent('FIND A ROOM')
    // h3 — 35px Poppins-Medium #3e91f7, letter-spacing 3px, margin-bottom 22px.
    expect(heading.className).toMatch(/text-\[35px\]/)
    expect(heading.className).toMatch(/font-medium/)
    expect(heading.className).toMatch(/uppercase/)
    expect(heading.className).toMatch(/tracking-\[3px\]/)
    expect(heading.className).toMatch(/text-brand/)
    expect(heading.className).toMatch(/mb-\[22px\]/)
  })

  it('renders the white form card with the source padding', () => {
    const { container } = render(<BookingForm />)

    const form = container.querySelector('form') as HTMLFormElement
    expect(form).not.toBeNull()
    // .form — width 100%, padding 57px 46px 55px, background #fff (30px 20px ≤767px).
    expect(form.className).toMatch(/bg-white/)
    expect(form.className).toMatch(/px-\[46px\]/)
    expect(form.className).toMatch(/pt-\[57px\]/)
    expect(form.className).toMatch(/pb-\[55px\]/)
    expect(form.className).toMatch(/max-\[767px\]:px-5/)
  })

  it('renders Name and Phone inputs with required labels and source placeholders', () => {
    render(<BookingForm />)

    const name = screen.getByLabelText('Name *') as HTMLInputElement
    const phone = screen.getByLabelText('Phone *') as HTMLInputElement
    expect(name).toHaveAttribute('type', 'text')
    expect(name).toHaveAttribute('placeholder', 'Your Name')
    expect(phone).toHaveAttribute('type', 'text')
    expect(phone).toHaveAttribute('placeholder', 'Phone')
    expect(name).toBeRequired()
    expect(phone).toBeRequired()
    // .form-control — height 42px, flat white, 1px #e6e6e6 border, 13px #666 text.
    expect(name.className).toMatch(/h-\[42px\]/)
    expect(name.className).toMatch(/border-border/)
    expect(name.className).toMatch(/bg-white/)
    expect(name.className).toMatch(/text-ink/)
  })

  it('renders Check-in and Check-out date inputs with left calendar icons', () => {
    const { container } = render(<BookingForm />)

    const checkIn = screen.getByLabelText('Check-in *') as HTMLInputElement
    const checkOut = screen.getByLabelText('Check-out *') as HTMLInputElement
    expect(checkIn).toHaveAttribute('type', 'date')
    expect(checkOut).toHaveAttribute('type', 'date')
    expect(checkIn).toBeRequired()
    expect(checkOut).toBeRequired()
    // Date inputs keep the left padding for the calendar icon (padding-left 39px).
    expect(checkIn.className).toMatch(/pl-\[39px\]/)

    for (const label of ['Check-in *', 'Check-out *']) {
      const field = screen.getByText(label).parentElement as HTMLElement
      const icon = field.querySelector('svg') as SVGElement
      expect(icon).not.toBeNull()
      // .lnr-calendar-full — absolute left 16px top 43px, 15px, #666.
      expect(icon.getAttribute('class')).toMatch(/left-4/)
      expect(icon.getAttribute('class')).toMatch(/top-\[43px\]/)
      expect(icon.getAttribute('class')).toMatch(/h-\[15px\]/)
      expect(icon.getAttribute('class')).toMatch(/text-ink/)
      expect(icon).toHaveAttribute('aria-hidden', 'true')
    }
    // 2 calendar + 2 chevron-down icons (the consent checkmark is a 5th SVG,
    // asserted in the checkbox test).
    expect(container.querySelectorAll('svg')).toHaveLength(5)
  })

  it('renders Adults and Children selects with options 1-6 defaulting to 1', () => {
    render(<BookingForm />)

    const adults = screen.getByLabelText('Adults *') as HTMLSelectElement
    const children = screen.getByLabelText('Children *') as HTMLSelectElement
    // Source selects offer 1-6; the "Chidren" typo is fixed to "Children".
    expect([...adults.options].map((option) => option.value)).toEqual([
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
    ])
    expect([...children.options].map((option) => option.value)).toEqual([
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
    ])
    expect(adults).toHaveValue('1')
    expect(children).toHaveValue('1')
    // Native select appearance stripped for the custom chevron.
    expect(adults.className).toMatch(/appearance-none/)
    expect(adults.className).toMatch(/h-\[42px\]/)
  })

  it('renders the BOOK ROOM button in brand blue with the hover slide-swap', () => {
    render(<BookingForm />)

    const button = screen.getByRole('button', { name: 'BOOK ROOM' })
    expect(button).toHaveAttribute('type', 'submit')
    // 173×42px, margin-top 30px, #3e91f7 bg, white uppercase 15px text,
    // letter-spacing 3px, hover #0072fd (slide-swap is pure CSS, no JS).
    expect(button.className).toMatch(/w-\[173px\]/)
    expect(button.className).toMatch(/h-\[42px\]/)
    expect(button.className).toMatch(/mt-\[30px\]/)
    expect(button.className).toMatch(/bg-brand/)
    expect(button.className).toMatch(/hover:bg-brand-hover/)
    expect(button.className).toMatch(/uppercase/)
    expect(button.className).toMatch(/text-\[15px\]/)
    expect(button.className).toMatch(/tracking-\[3px\]/)
    // Two stacked labels — the duplicate is hidden from the a11y tree.
    expect(button.querySelectorAll('span')).toHaveLength(2)
    expect(button.querySelector('span[aria-hidden="true"]')).not.toBeNull()
  })

  it('toggles the consent checkbox with the custom checkmark', () => {
    render(<BookingForm />)

    const checkbox = screen.getByRole('checkbox', {
      name: /booking terms and conditions/i,
    })
    expect(checkbox).not.toBeChecked()

    fireEvent.click(checkbox)
    expect(checkbox).toBeChecked()

    fireEvent.click(checkbox)
    expect(checkbox).not.toBeChecked()
  })

  it('shows validation messages for missing fields and no summary', () => {
    const { container } = render(<BookingForm />)

    fireEvent.submit(container.querySelector('form') as HTMLFormElement)

    expect(screen.getByText('Please enter your name.')).toBeInTheDocument()
    expect(screen.getByText('Please enter your phone number.')).toBeInTheDocument()
    expect(screen.getByText('Please choose a check-in date.')).toBeInTheDocument()
    expect(screen.getByText('Please choose a check-out date.')).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('blocks a check-out date earlier than the check-in date', () => {
    const { container } = render(<BookingForm />)

    fireEvent.change(screen.getByLabelText('Name *'), { target: { value: 'Ada' } })
    fireEvent.change(screen.getByLabelText('Phone *'), { target: { value: '123' } })
    fireEvent.change(screen.getByLabelText('Check-in *'), { target: { value: '2026-08-14' } })
    fireEvent.change(screen.getByLabelText('Check-out *'), { target: { value: '2026-08-10' } })
    fireEvent.submit(container.querySelector('form') as HTMLFormElement)

    expect(
      screen.getByText('The check-out date must be on or after the check-in date.'),
    ).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('submits a valid booking and shows the summary line', async () => {
    const user = userEvent.setup()
    render(<BookingForm />)

    await user.type(screen.getByLabelText('Name *'), 'Ada Lovelace')
    await user.type(screen.getByLabelText('Phone *'), '+1 555 0100')
    fireEvent.change(screen.getByLabelText('Check-in *'), { target: { value: '2026-08-10' } })
    fireEvent.change(screen.getByLabelText('Check-out *'), { target: { value: '2026-08-14' } })
    fireEvent.change(screen.getByLabelText('Adults *'), { target: { value: '2' } })
    fireEvent.change(screen.getByLabelText('Children *'), { target: { value: '1' } })

    await user.click(screen.getByRole('button', { name: 'BOOK ROOM' }))

    const status = screen.getByRole('status')
    expect(status).toHaveTextContent(
      'Room booked for Ada Lovelace: 10 Aug 2026 to 14 Aug 2026, 2 adults, 1 child',
    )
    expect(status.className).toMatch(/text-brand/)
  })

  it('clears a field error once the user edits the field', () => {
    const { container } = render(<BookingForm />)

    fireEvent.submit(container.querySelector('form') as HTMLFormElement)
    expect(screen.getByText('Please enter your name.')).toBeInTheDocument()
    expect(screen.getByText('Please choose a check-in date.')).toBeInTheDocument()

    fireEvent.change(screen.getByLabelText('Name *'), { target: { value: 'Ada' } })
    expect(screen.queryByText('Please enter your name.')).not.toBeInTheDocument()
    expect(screen.getByText('Please choose a check-in date.')).toBeInTheDocument()
  })
})
