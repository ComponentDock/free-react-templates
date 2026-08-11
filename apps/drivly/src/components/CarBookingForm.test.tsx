import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CarBookingForm } from './CarBookingForm'

describe('CarBookingForm', () => {
  it('renders the dark card body with the source fill, padding and radius', () => {
    const { container } = render(<CarBookingForm />)

    const form = container.querySelector('form') as HTMLFormElement
    expect(form).not.toBeNull()
    expect(form.className).toMatch(/bg-ink/)
    expect(form.className).toMatch(/px-\[20px\]/)
    expect(form.className).toMatch(/py-\[30px\]/)
    expect(form.className).toMatch(/rounded-\[3px\]/)
    expect(form.className).not.toMatch(/shadow/)
  })

  it('renders the centered gold "Book a car" header ABOVE the dark card', () => {
    const { container } = render(<CarBookingForm />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('Book a car')
    expect(heading.className).toMatch(/text-\[58px\]/)
    expect(heading.className).toMatch(/uppercase/)
    expect(heading.className).toMatch(/font-bold/)
    expect(heading.className).toMatch(/text-brand/)

    const header = heading.parentElement as HTMLElement
    expect(header.className).toMatch(/text-center/)
    expect(header.className).toMatch(/mb-\[25px\]/)

    const card = container.querySelector('form') as HTMLElement
    expect(card.parentElement?.contains(heading)).toBe(true)
    expect(card.contains(heading)).toBe(false)
  })

  it('renders the fields in source order with placeholders', () => {
    const { container } = render(<CarBookingForm />)

    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone')).toBeInTheDocument()
    expect(screen.getByLabelText('Pickup Location')).toBeInTheDocument()
    expect(screen.getByLabelText('Destination')).toBeInTheDocument()
    expect(screen.getByLabelText('Pickup Date')).toBeInTheDocument()
    expect(screen.getByLabelText('Hour')).toBeInTheDocument()
    expect(screen.getByLabelText('Min')).toBeInTheDocument()
    expect(screen.getByLabelText('AM/PM')).toBeInTheDocument()

    const controls = Array.from(container.querySelectorAll('input, select')).map(
      (control) => control.id,
    )
    expect(controls).toEqual([
      'name',
      'email',
      'phone',
      'pickup',
      'destination',
      'pickupDate',
      'hour',
      'min',
      'ampm',
    ])

    expect(screen.getByLabelText('Name')).toHaveAttribute('placeholder', 'Enter your name')
    expect(screen.getByLabelText('Email')).toHaveAttribute('placeholder', 'Enter your email')
    expect(screen.getByLabelText('Phone')).toHaveAttribute('placeholder', 'Enter your phone number')
    expect(screen.getByLabelText('Pickup Location')).toHaveAttribute(
      'placeholder',
      'Enter ZIP/Location',
    )
    expect(screen.getByLabelText('Destination')).toHaveAttribute(
      'placeholder',
      'Enter ZIP/Location',
    )
  })

  it('renders fields with the source styling: 45px, 3px radius, #f5f5f5 fill, no border', () => {
    render(<CarBookingForm />)

    const name = screen.getByLabelText('Name') as HTMLInputElement
    expect(name.className).toMatch(/h-\[45px\]/)
    expect(name.className).toMatch(/rounded-\[3px\]/)
    expect(name.className).toMatch(/border-0/)
    expect(name.className).toMatch(/bg-field/)
    expect(name.className).toMatch(/text-\[14px\]/)
    expect(name.className).toMatch(/font-normal/)
    expect(name.className).toMatch(/text-ink/)
    expect(name.className).toMatch(/placeholder:text-placeholder/)
  })

  it('keeps labels STATIC above the field — white, 12px, uppercase — and never floats them', () => {
    render(<CarBookingForm />)

    const label = screen.getByText('Name').closest('label') as HTMLLabelElement
    expect(label).not.toBeNull()
    expect(label.className).toMatch(/text-white/)
    expect(label.className).toMatch(/text-\[12px\]/)
    expect(label.className).toMatch(/uppercase/)
    expect(label.className).toMatch(/font-normal/)
    expect(label.className).toMatch(/mb-\[5px\]/)
    expect(label.className).toMatch(/block/)
    expect(label.htmlFor).toBe('name')
    expect(label.className).not.toMatch(/text-brand/)
    expect(label.className).not.toMatch(/top-/)

    const name = screen.getByLabelText('Name')
    fireEvent.focus(name)
    fireEvent.change(name, { target: { value: 'Alex' } })
    expect(label.className).not.toMatch(/text-brand/)
    expect(label.className).not.toMatch(/top-/)
  })

  it('renders the required Pickup Date as a native date input with light-grey empty value', () => {
    render(<CarBookingForm />)

    const pickupDate = screen.getByLabelText('Pickup Date') as HTMLInputElement
    expect(pickupDate).toHaveAttribute('type', 'date')
    expect(pickupDate).toBeRequired()
    expect(pickupDate).toHaveClass('text-placeholder')

    fireEvent.change(pickupDate, { target: { value: '2026-08-10' } })
    expect(pickupDate).toHaveClass('text-ink')
    expect(pickupDate).not.toHaveClass('text-placeholder')
  })

  it('renders Hour/Min/AM-PM selects with the source options and arrow glyphs', () => {
    const { container } = render(<CarBookingForm />)

    const hour = screen.getByLabelText('Hour') as HTMLSelectElement
    const min = screen.getByLabelText('Min') as HTMLSelectElement
    const ampm = screen.getByLabelText('AM/PM') as HTMLSelectElement

    expect(Array.from(hour.options).map((option) => option.textContent)).toEqual([
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
    ])
    expect(Array.from(min.options).map((option) => option.textContent)).toEqual([
      '05',
      '10',
      '15',
      '20',
      '25',
      '30',
      '35',
      '40',
      '45',
      '50',
      '55',
    ])
    expect(Array.from(ampm.options).map((option) => option.textContent)).toEqual(['AM', 'PM'])
    expect(hour).toHaveValue('1')
    expect(min).toHaveValue('05')
    expect(ampm).toHaveValue('AM')

    for (const select of [hour, min, ampm]) {
      expect(select.className).toMatch(/appearance-none/)
      const arrow = select.parentElement?.querySelector('span[aria-hidden="true"]') as HTMLElement
      expect(arrow).not.toBeNull()
      expect(arrow.className).toMatch(/text-ink/)
      expect(arrow.className).toMatch(/pointer-events-none/)
      expect(arrow.className).toMatch(/bottom-\[6px\]/)
      expect(arrow.className).toMatch(/right-0/)
      expect(arrow.className).toMatch(/text-\[14px\]/)
      expect(arrow.querySelector('span')?.className).toMatch(/rotate-90/)
      expect(arrow).toHaveTextContent('➜')
    }

    const timeGrid = hour.closest('.grid') as HTMLElement
    expect(timeGrid.className).toMatch(/sm:col-span-7/)
    expect(timeGrid.querySelectorAll('.grid')).toHaveLength(0)
    expect(container.querySelectorAll('form .grid')).toHaveLength(3)
  })

  it('renders a full-width gold Book Now submit button with dark uppercase text', () => {
    render(<CarBookingForm />)

    const button = screen.getByRole('button', { name: 'Book Now' })
    expect(button).toHaveAttribute('type', 'submit')
    expect(button.className).toMatch(/w-full/)
    expect(button.className).toMatch(/h-\[50px\]/)
    expect(button.className).toMatch(/rounded-\[3px\]/)
    expect(button.className).toMatch(/bg-brand/)
    expect(button.className).toMatch(/text-ink/)
    expect(button.className).toMatch(/uppercase/)
    expect(button.className).toMatch(/font-bold/)
  })

  it('shows validation messages for missing required fields and no summary', () => {
    const { container } = render(<CarBookingForm />)

    fireEvent.submit(container.querySelector('form') as HTMLFormElement)

    expect(screen.getByText('Please enter your name.')).toBeInTheDocument()
    expect(screen.getByText('Please enter your email address.')).toBeInTheDocument()
    expect(screen.getByText('Please enter your phone number.')).toBeInTheDocument()
    expect(screen.getByText('Please enter your pickup location.')).toBeInTheDocument()
    expect(screen.getByText('Please enter your destination.')).toBeInTheDocument()
    expect(screen.getByText('Please choose a pickup date.')).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()

    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'not-an-email' } })
    fireEvent.submit(container.querySelector('form') as HTMLFormElement)
    expect(screen.getByText('Please enter a valid email address.')).toBeInTheDocument()
  })

  it('submits a valid booking and shows the gold summary line', async () => {
    const user = userEvent.setup()
    render(<CarBookingForm />)

    await user.type(screen.getByLabelText('Name'), 'Alex')
    await user.type(screen.getByLabelText('Email'), 'alex@example.com')
    await user.type(screen.getByLabelText('Phone'), '555-0100')
    await user.type(screen.getByLabelText('Pickup Location'), 'Downtown')
    await user.type(screen.getByLabelText('Destination'), 'Airport')
    fireEvent.change(screen.getByLabelText('Pickup Date'), { target: { value: '2026-08-10' } })
    await user.selectOptions(screen.getByLabelText('Hour'), '10')
    await user.selectOptions(screen.getByLabelText('Min'), '05')
    await user.selectOptions(screen.getByLabelText('AM/PM'), 'AM')

    await user.click(screen.getByRole('button', { name: 'Book Now' }))

    const status = screen.getByRole('status')
    expect(status).toHaveTextContent('Downtown → Airport · Aug 10, 2026 · 10:05 AM')
    expect(status.className).toMatch(/text-brand/)
    expect(status.className).toMatch(/bg-brand\/10/)
  })

  it('clears a field error once the user edits the field', async () => {
    const user = userEvent.setup()
    const { container } = render(<CarBookingForm />)

    fireEvent.submit(container.querySelector('form') as HTMLFormElement)
    expect(screen.getByText('Please enter your name.')).toBeInTheDocument()
    expect(screen.getByText('Please choose a pickup date.')).toBeInTheDocument()

    await user.type(screen.getByLabelText('Name'), 'Alex')
    expect(screen.queryByText('Please enter your name.')).not.toBeInTheDocument()
    expect(screen.getByText('Please choose a pickup date.')).toBeInTheDocument()

    fireEvent.change(screen.getByLabelText('Pickup Date'), { target: { value: '2026-08-10' } })
    expect(screen.queryByText('Please choose a pickup date.')).not.toBeInTheDocument()
  })
})
