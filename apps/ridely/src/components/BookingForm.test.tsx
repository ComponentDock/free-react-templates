import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BookingForm } from './BookingForm'

describe('BookingForm', () => {
  it('renders a centered 768px near-black split card with a 310px image panel and no shadow', () => {
    const { container } = render(<BookingForm />)

    const card = container.querySelector('div.relative') as HTMLElement
    expect(card).not.toBeNull()
    expect(card.className).toMatch(/max-w-\[768px\]/)
    expect(card.className).toMatch(/bg-coal/)
    expect(card.className).not.toMatch(/shadow/)

    const panel = card.querySelector('[aria-hidden="true"]') as HTMLElement
    expect(panel).not.toBeNull()
    expect(panel.className).toMatch(/w-\[310px\]/)
    expect(panel.className).toMatch(/hidden/)
    expect(panel.className).toMatch(/min-\[481px\]:block/)
    expect(panel.style.backgroundImage).toContain('picsum.photos/seed/ridely-1')
  })

  it('renders the "Book Your Taxi" header white, 42px, weight 400, uppercase and centered', () => {
    render(<BookingForm />)

    const heading = screen.getByRole('heading', { level: 2, name: 'Book Your Taxi' })
    expect(heading.className).toMatch(/text-white/)
    expect(heading.className).toMatch(/text-\[42px\]/)
    expect(heading.className).toMatch(/font-normal/)
    expect(heading.className).toMatch(/uppercase/)
    expect(heading.className).toMatch(/text-center/)
  })

  it('renders the fields in source order with the source placeholders and underline style', () => {
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
    expect(name.className).toMatch(/border-b-2/)
    expect(name.className).toMatch(/border-ash/)
    expect(name.className).toMatch(/rounded-none/)
    expect(name.className).toMatch(/bg-transparent/)
    expect(name.className).toMatch(/placeholder:text-smoke/)
    expect(name.className).toMatch(/capitalize/)

    const phone = screen.getByLabelText('Phone') as HTMLInputElement
    expect(phone).toHaveAttribute('type', 'tel')
    expect(phone).toHaveAttribute('placeholder', 'Enter your Phone number')

    const pickup = screen.getByLabelText('Pickup Location') as HTMLInputElement
    expect(pickup).toHaveAttribute('type', 'tel')
    expect(pickup).toHaveAttribute('placeholder', 'Enter an origin location')

    const destination = screen.getByLabelText('Destination Location') as HTMLInputElement
    expect(destination).toHaveAttribute('type', 'tel')
    expect(destination).toHaveAttribute('placeholder', 'Enter a destination location')
  })

  it('floats the text-field label and reveals the typed text on focus, hiding both on blur', async () => {
    const user = userEvent.setup()
    render(<BookingForm />)

    const name = screen.getByLabelText('Name') as HTMLInputElement
    const nameLabel = screen.getByText('Name')

    // Hidden + transparent text before any interaction.
    expect(nameLabel.className).toMatch(/opacity-0/)
    expect(nameLabel.className).toMatch(/top-\[26px\]/)
    expect(name.className).toMatch(/text-transparent/)

    // Focus: label floats up in yellow, typed text becomes visible.
    await user.click(name)
    expect(nameLabel.className).toMatch(/opacity-100/)
    expect(nameLabel.className).toMatch(/text-brand/)
    expect(nameLabel.className).toMatch(/top-0/)
    expect(name.className).toMatch(/text-white/)

    // Blur with an empty value: label and text hide again.
    await user.tab()
    expect(nameLabel.className).toMatch(/opacity-0/)
    expect(name.className).toMatch(/text-transparent/)
  })

  it('keeps the label floated and the text visible once the field has a value', async () => {
    const user = userEvent.setup()
    render(<BookingForm />)

    const name = screen.getByLabelText('Name') as HTMLInputElement
    const nameLabel = screen.getByText('Name')

    await user.type(name, 'Jane Doe')
    await user.tab()

    expect(name).toHaveValue('Jane Doe')
    expect(nameLabel.className).toMatch(/opacity-100/)
    expect(nameLabel.className).toMatch(/text-brand/)
    expect(name.className).toMatch(/text-white/)
  })

  it('keeps date/time/select labels always visible grey, turning yellow on focus', async () => {
    const user = userEvent.setup()
    render(<BookingForm />)

    const dateLabel = screen.getByText('Pickup Date')
    const timeLabel = screen.getByText('Pickup Time')
    const passengersLabel = screen.getByText('Passenger Numbers')

    for (const label of [dateLabel, timeLabel, passengersLabel]) {
      expect(label.className).toMatch(/opacity-100/)
      expect(label.className).toMatch(/text-smoke/)
    }

    await user.click(screen.getByLabelText('Pickup Date'))
    expect(dateLabel.className).toMatch(/text-brand/)
    expect(dateLabel.className).toMatch(/top-0/)

    await user.tab()
    expect(timeLabel.className).toMatch(/text-brand/)
    expect(timeLabel.className).toMatch(/top-0/)
  })

  it('renders the Passenger Numbers select with the source options, required, and custom arrow', async () => {
    const user = userEvent.setup()
    render(<BookingForm />)

    const select = screen.getByLabelText('Passenger Numbers') as HTMLSelectElement
    expect(select).toBeRequired()
    expect(select.className).toMatch(/appearance-none/)
    expect(Array.from(select.options).map((option) => option.value)).toEqual(['', '1', '2', '3'])
    expect(select).toHaveValue('')

    expect(screen.getAllByText('➜')).toHaveLength(1)

    // Choosing a value floats the label in yellow and shows white text.
    await user.selectOptions(select, '2')
    expect(select).toHaveValue('2')
    expect(select.className).toMatch(/text-white/)
    expect(screen.getByText('Passenger Numbers').className).toMatch(/text-brand/)
    expect(screen.getByText('Passenger Numbers').className).toMatch(/top-0/)
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

  it('turns the date text white once a value is picked', () => {
    render(<BookingForm />)

    const date = screen.getByLabelText('Pickup Date') as HTMLInputElement
    fireEvent.change(date, { target: { value: '2026-08-10' } })

    expect(date).toHaveValue('2026-08-10')
    expect(date.className).toMatch(/text-white/)
  })

  it('renders a full-width outlined yellow Book Now submit button', () => {
    render(<BookingForm />)

    const button = screen.getByRole('button', { name: 'Book Now' })
    expect(button).toHaveAttribute('type', 'submit')
    expect(button.className).toMatch(/w-full/)
    expect(button.className).toMatch(/h-\[55px\]/)
    expect(button.className).toMatch(/rounded-none/)
    expect(button.className).toMatch(/border-brand/)
    expect(button.className).toMatch(/text-brand/)
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
