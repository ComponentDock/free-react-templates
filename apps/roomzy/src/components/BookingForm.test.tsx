import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BookingForm } from './BookingForm'

describe('BookingForm', () => {
  it('renders a centered 586px-wide form', () => {
    const { container } = render(<BookingForm />)

    const form = container.querySelector('form') as HTMLFormElement
    expect(form).not.toBeNull()
    expect(form.className).toMatch(/max-w-\[586px\]/)
    expect(form.className).toMatch(/w-full/)
  })

  it('renders Check In and Check Out date inputs side by side, both required', () => {
    render(<BookingForm />)

    const checkIn = screen.getByLabelText('Check In') as HTMLInputElement
    const checkOut = screen.getByLabelText('Check Out') as HTMLInputElement

    expect(checkIn).toHaveAttribute('type', 'date')
    expect(checkIn).toBeRequired()
    expect(checkOut).toHaveAttribute('type', 'date')
    expect(checkOut).toBeRequired()

    // Desktop: sibling columns share a divider (second field drops its left
    // border); mobile: fields stack and every field keeps its borders.
    expect(checkIn.className).not.toMatch(/sm:border-l-0/)
    expect(checkOut.className).toMatch(/sm:border-l-0/)
  })

  it('renders Adults and Children selects with the source options and custom arrows', () => {
    render(<BookingForm />)

    const adults = screen.getByLabelText('Adults (18+)') as HTMLSelectElement
    expect(Array.from(adults.options).map((option) => option.value)).toEqual(['1', '2', '3'])
    expect(adults).toHaveValue('1')

    const children = screen.getByLabelText('Children (0-17)') as HTMLSelectElement
    expect(Array.from(children.options).map((option) => option.value)).toEqual(['0', '1', '2'])
    expect(children).toHaveValue('0')

    // Adults/Children pair also stacks on mobile; the sibling drops its left
    // border on desktop only.
    expect(adults.className).not.toMatch(/sm:border-l-0/)
    expect(children.className).toMatch(/sm:border-l-0/)

    expect(screen.getAllByText('➜')).toHaveLength(3)
  })

  it('renders a required Room Type select with a placeholder and two room options', () => {
    render(<BookingForm />)

    const roomType = screen.getByLabelText('Room Type') as HTMLSelectElement
    expect(roomType).toBeRequired()
    expect(roomType.options[0]?.textContent).toBe('Select room type')
    expect(roomType.options[0]?.value).toBe('')
    expect(
      Array.from(roomType.options)
        .slice(1)
        .map((option) => option.textContent),
    ).toEqual(['Private Room (1 to 2 People)', 'Family Room (1 to 4 People)'])
  })

  it('renders Email and Phone contact fields with the source placeholders', () => {
    render(<BookingForm />)

    const email = screen.getByLabelText('Email') as HTMLInputElement
    expect(email).toHaveAttribute('type', 'email')
    expect(email).toHaveAttribute('placeholder', 'Enter your email')

    const phone = screen.getByLabelText('Phone') as HTMLInputElement
    expect(phone).toHaveAttribute('type', 'tel')
    expect(phone).toHaveAttribute('placeholder', 'Enter your phone number')
  })

  it('renders a full-width brand-colored Book Now submit button', () => {
    render(<BookingForm />)

    const button = screen.getByRole('button', { name: 'Book Now' })
    expect(button).toHaveAttribute('type', 'submit')
    expect(button.className).toMatch(/bg-primary-600/)
    expect(button.className).toMatch(/w-full/)
  })

  it('does not submit and marks the form invalid when required fields are empty', () => {
    const { container } = render(<BookingForm />)

    const form = container.querySelector('form') as HTMLFormElement
    fireEvent.submit(form)

    expect(form.checkValidity()).toBe(false)
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
    expect(screen.getByLabelText('Check In')).toBeInTheDocument()
  })

  it('blocks native submission while required fields are empty', async () => {
    const user = userEvent.setup()
    render(<BookingForm />)

    await user.click(screen.getByRole('button', { name: 'Book Now' }))

    expect(screen.queryByRole('status')).not.toBeInTheDocument()
    expect(screen.getByLabelText('Check In')).toBeInTheDocument()
  })

  it('rejects an invalid email even when the required fields are filled', () => {
    const { container } = render(<BookingForm />)

    const form = container.querySelector('form') as HTMLFormElement
    fireEvent.change(screen.getByLabelText('Check In'), { target: { value: '2026-09-01' } })
    fireEvent.change(screen.getByLabelText('Check Out'), { target: { value: '2026-09-05' } })
    fireEvent.change(screen.getByLabelText('Room Type'), {
      target: { value: 'Private Room (1 to 2 People)' },
    })
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'not-an-email' } })

    fireEvent.submit(form)

    expect(form.checkValidity()).toBe(false)
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('submits a valid booking and offers to book another stay', async () => {
    const user = userEvent.setup()
    const { container } = render(<BookingForm />)

    fireEvent.change(screen.getByLabelText('Check In'), { target: { value: '2026-09-01' } })
    fireEvent.change(screen.getByLabelText('Check Out'), { target: { value: '2026-09-05' } })
    await user.selectOptions(screen.getByLabelText('Adults (18+)'), '2')
    await user.selectOptions(screen.getByLabelText('Children (0-17)'), '1')
    await user.selectOptions(screen.getByLabelText('Room Type'), 'Family Room (1 to 4 People)')
    await user.type(screen.getByLabelText('Email'), 'guest@example.com')
    await user.type(screen.getByLabelText('Phone'), '555-010-9988')

    const form = container.querySelector('form') as HTMLFormElement
    expect(form.checkValidity()).toBe(true)

    await user.click(screen.getByRole('button', { name: 'Book Now' }))

    const status = screen.getByRole('status')
    expect(within(status).getByRole('heading', { level: 1 })).toHaveTextContent(
      'Booking request received!',
    )
    expect(screen.queryByLabelText('Check In')).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Book another stay' }))
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
    expect(screen.getByLabelText('Check In')).toHaveValue('')
    expect(screen.getByLabelText('Adults (18+)')).toHaveValue('1')
    expect(screen.getByLabelText('Room Type')).toHaveValue('')
  })
})
