import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BookingForm } from './BookingForm'

describe('BookingForm', () => {
  it('renders a centered 768px near-black solid card with no image panel, no shadow and no radius', () => {
    const { container } = render(<BookingForm />)

    const card = container.querySelector('form') as HTMLElement
    expect(card).not.toBeNull()
    expect(card.className).toMatch(/max-w-\[768px\]/)
    expect(card.className).toMatch(/bg-coal/)
    expect(card.className).toMatch(/p-\[30px\]/)
    expect(card.className).not.toMatch(/shadow/)
    expect(card.className).not.toMatch(/rounded/)

    // Solid card — no split-screen image panel (no inline background image).
    expect(card.querySelector('[style*="backgroundImage"]')).toBeNull()
  })

  it('renders no heading — the form starts directly with the Name field', () => {
    const { container } = render(<BookingForm />)

    expect(screen.queryByRole('heading')).not.toBeInTheDocument()

    const controls = container.querySelectorAll('form input, form select')
    expect(controls[0]).toHaveAttribute('id', 'name')
  })

  it('renders the fields in source order with the source placeholders and boxed style', () => {
    const { container } = render(<BookingForm />)

    const controls = container.querySelectorAll('form input, form select')
    expect(Array.from(controls).map((control) => control.id)).toEqual([
      'name',
      'phone',
      'pickup',
      'destination',
      'passengers',
      'date',
      'time',
    ])

    const name = screen.getByLabelText('Name') as HTMLInputElement
    expect(name).toHaveAttribute('type', 'text')
    expect(name).toHaveAttribute('placeholder', 'Enter your Name')
    expect(name).toBeRequired()
    expect(name.className).toMatch(/border-2/)
    expect(name.className).toMatch(/border-ash/)
    expect(name.className).toMatch(/rounded-none/)
    expect(name.className).toMatch(/bg-transparent/)
    expect(name.className).toMatch(/placeholder:text-smoke/)

    const phone = screen.getByLabelText('Phone') as HTMLInputElement
    expect(phone).toHaveAttribute('type', 'tel')
    expect(phone).toHaveAttribute('placeholder', 'Enter your Phone number')
    expect(phone).toBeRequired()

    const pickup = screen.getByLabelText('Pickup Location') as HTMLInputElement
    expect(pickup).toHaveAttribute('type', 'tel')
    expect(pickup).toHaveAttribute('placeholder', 'Enter an origin location')
    expect(pickup).toBeRequired()

    const destination = screen.getByLabelText('Destination Location') as HTMLInputElement
    expect(destination).toHaveAttribute('type', 'tel')
    expect(destination).toHaveAttribute('placeholder', 'Enter a destination location')
    expect(destination).toBeRequired()
  })

  it('hides the text-field tab label until filled, then shows a white bar with dark text and a white border', async () => {
    const user = userEvent.setup()
    render(<BookingForm />)

    const name = screen.getByLabelText('Name') as HTMLInputElement
    const nameLabel = screen.getByText('Name')

    // Hidden (opacity 0) grey bar before any input.
    expect(nameLabel.className).toMatch(/opacity-0/)
    expect(nameLabel.className).toMatch(/bg-ash/)
    expect(nameLabel.className).toMatch(/text-coal/)

    // Typing reveals the label as a WHITE bar with dark #1a1b1d text and
    // turns the input border white.
    await user.type(name, 'Jane Doe')
    expect(nameLabel.className).toMatch(/opacity-100/)
    expect(nameLabel.className).toMatch(/bg-white/)
    expect(nameLabel.className).toMatch(/text-coal/)
    expect(name.className).toMatch(/border-white/)
  })

  it('keeps date/time/select labels always visible on a grey bar, turning white when filled', () => {
    render(<BookingForm />)

    const dateLabel = screen.getByText('Pickup Date')
    const timeLabel = screen.getByText('Pickup Time')
    const passengersLabel = screen.getByText('Passenger Numbers')

    for (const label of [dateLabel, timeLabel, passengersLabel]) {
      expect(label.className).toMatch(/opacity-100/)
      expect(label.className).toMatch(/bg-ash/)
      expect(label.className).toMatch(/text-coal/)
    }

    const date = screen.getByLabelText('Pickup Date') as HTMLInputElement
    fireEvent.change(date, { target: { value: '2026-08-10' } })

    expect(date).toHaveValue('2026-08-10')
    expect(dateLabel.className).toMatch(/bg-white/)
    expect(dateLabel.className).toMatch(/opacity-100/)
    expect(date.className).toMatch(/border-white/)
    expect(date.className).toMatch(/text-white/)
  })

  it('renders the Passenger Numbers select with the source options, required, and custom arrow', async () => {
    const user = userEvent.setup()
    render(<BookingForm />)

    const select = screen.getByLabelText('Passenger Numbers') as HTMLSelectElement
    expect(select).toBeRequired()
    expect(select.className).toMatch(/appearance-none/)
    expect(Array.from(select.options).map((option) => option.textContent)).toEqual([
      'Select Passenger Numbers',
      '1',
      '2',
      '3',
    ])
    expect(select).toHaveValue('')

    const arrow = screen.getByText('➜')
    expect(arrow.parentElement?.className).toMatch(/text-smoke/)

    // Choosing a value turns the select text, border and arrow white and the
    // label bar white.
    await user.selectOptions(select, '2')
    expect(select).toHaveValue('2')
    expect(select.className).toMatch(/text-white/)
    expect(select.className).toMatch(/border-white/)
    expect(screen.getByText('Passenger Numbers').className).toMatch(/bg-white/)
    expect(arrow.parentElement?.className).toMatch(/text-white/)
  })

  it('renders Pickup Date and Pickup Time side by side, required, grey when empty', () => {
    const { container } = render(<BookingForm />)

    const date = screen.getByLabelText('Pickup Date') as HTMLInputElement
    const time = screen.getByLabelText('Pickup Time') as HTMLInputElement

    expect(date).toHaveAttribute('type', 'date')
    expect(time).toHaveAttribute('type', 'time')
    expect(date).toBeRequired()
    expect(time).toBeRequired()

    expect(date.className).toMatch(/text-smoke/)
    expect(time.className).toMatch(/text-smoke/)

    const grid = container.querySelector('form .grid') as HTMLElement
    expect(grid).not.toBeNull()
    expect(grid.contains(date)).toBe(true)
    expect(grid.contains(time)).toBe(true)
  })

  it('renders a full-width solid yellow Book Now submit button with dark text', () => {
    render(<BookingForm />)

    const button = screen.getByRole('button', { name: 'Book Now' })
    expect(button).toHaveAttribute('type', 'submit')
    expect(button.className).toMatch(/w-full/)
    expect(button.className).toMatch(/h-\[55px\]/)
    expect(button.className).toMatch(/rounded-none/)
    expect(button.className).toMatch(/border-none/)
    expect(button.className).toMatch(/bg-brand/)
    expect(button.className).toMatch(/text-coal/)
  })

  it('shows validation messages for every missing field and no summary', () => {
    const { container } = render(<BookingForm />)

    fireEvent.submit(container.querySelector('form') as HTMLFormElement)

    expect(screen.getByText('Please enter your name.')).toBeInTheDocument()
    expect(screen.getByText('Please enter your phone number.')).toBeInTheDocument()
    expect(screen.getByText('Please enter your pickup location.')).toBeInTheDocument()
    expect(screen.getByText('Please enter your destination location.')).toBeInTheDocument()
    expect(screen.getByText('Please select the number of passengers.')).toBeInTheDocument()
    expect(screen.getByText('Please choose a pickup date.')).toBeInTheDocument()
    expect(screen.getByText('Please choose a pickup time.')).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('rejects an invalid phone format and blocks submission', () => {
    const { container } = render(<BookingForm />)

    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Jane Doe' } })
    fireEvent.change(screen.getByLabelText('Phone'), { target: { value: 'abc' } })
    fireEvent.change(screen.getByLabelText('Pickup Location'), { target: { value: 'Downtown' } })
    fireEvent.change(screen.getByLabelText('Destination Location'), {
      target: { value: 'Airport' },
    })
    fireEvent.change(screen.getByLabelText('Passenger Numbers'), { target: { value: '2' } })
    fireEvent.change(screen.getByLabelText('Pickup Date'), { target: { value: '2026-08-10' } })
    fireEvent.change(screen.getByLabelText('Pickup Time'), { target: { value: '09:30' } })

    fireEvent.submit(container.querySelector('form') as HTMLFormElement)

    expect(screen.getByText('Please enter a valid phone number.')).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('submits a valid booking and shows the summary line in brand yellow', async () => {
    const user = userEvent.setup()
    render(<BookingForm />)

    await user.type(screen.getByLabelText('Name'), 'Jane Doe')
    await user.type(screen.getByLabelText('Phone'), '555-010-9988')
    await user.type(screen.getByLabelText('Pickup Location'), 'Downtown')
    await user.type(screen.getByLabelText('Destination Location'), 'Airport')
    await user.selectOptions(screen.getByLabelText('Passenger Numbers'), '2')
    fireEvent.change(screen.getByLabelText('Pickup Date'), { target: { value: '2026-08-10' } })
    fireEvent.change(screen.getByLabelText('Pickup Time'), { target: { value: '09:30' } })

    await user.click(screen.getByRole('button', { name: 'Book Now' }))

    const status = screen.getByRole('status')
    expect(status).toHaveTextContent(
      '2 passengers · 2026-08-10 09:30 · Downtown → Airport · Jane Doe',
    )
    expect(status.className).toMatch(/bg-brand\/10/)
  })

  it('clears a field error once the user edits the field', async () => {
    const user = userEvent.setup()
    render(<BookingForm />)

    fireEvent.submit(document.querySelector('form') as HTMLFormElement)
    expect(screen.getByText('Please enter your name.')).toBeInTheDocument()

    await user.type(screen.getByLabelText('Name'), 'Jane')
    expect(screen.queryByText('Please enter your name.')).not.toBeInTheDocument()
  })
})
