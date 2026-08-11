import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BookingForm } from './BookingForm'

describe('BookingForm', () => {
  it('renders the white booking card with the source radius and shadow', () => {
    const { container } = render(<BookingForm />)

    const card = container.querySelector('form')?.parentElement as HTMLElement
    expect(card).not.toBeNull()
    expect(card.className).toMatch(/relative/)
    expect(card.className).toMatch(/max-w-\[912px\]/)
    expect(card.className).toMatch(/bg-white/)
    expect(card.className).toMatch(/rounded-\[6px\]/)
    expect(card.className).toMatch(/shadow-\[0_5px_10px_-5px/)
  })

  it('renders the photo panel overlapping the card left edge with the seeded landmark photo and taupe scrim', () => {
    const { container } = render(<BookingForm />)

    const panel = container.querySelector('form')?.parentElement?.firstElementChild as HTMLElement
    expect(panel).not.toBeNull()
    expect(panel.style.backgroundImage).toContain('picsum.photos/seed/hostly-1/500/700')
    expect(panel.className).toMatch(/bg-cover/)
    expect(panel.className).toMatch(/bg-center/)
    expect(panel.className).toMatch(/md:absolute/)
    expect(panel.className).toMatch(/md:left-\[25px\]/)
    expect(panel.className).toMatch(/md:top-\[-25px\]/)
    expect(panel.className).toMatch(/md:bottom-\[-25px\]/)
    expect(panel.className).toMatch(/md:w-\[400px\]/)

    const scrim = panel.querySelector('[aria-hidden="true"]') as HTMLElement
    expect(scrim).not.toBeNull()
    expect(scrim.className).toMatch(/bg-brand\/78/)
    expect(scrim.className).toMatch(/absolute/)
    expect(scrim.className).toMatch(/inset-0/)
  })

  it('renders the "Make your reservation" h2 in Playfair Display 900 white with a subtitle', () => {
    render(<BookingForm />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveTextContent('Make your reservation')
    expect(heading.className).toMatch(/font-display/)
    expect(heading.className).toMatch(/text-\[42px\]/)
    expect(heading.className).toMatch(/text-white/)
    expect(heading.className).toMatch(/capitalize/)

    const subtitle = screen.getByText(/Lorem ipsum dolor sit amet consectetur/)
    expect(subtitle.className).toMatch(/text-\[18px\]/)
    expect(subtitle.className).toMatch(/text-white/)
  })

  it('renders Check In and Check Out date inputs side by side, required, with NO divider', () => {
    const { container } = render(<BookingForm />)

    const checkIn = screen.getByLabelText('Check In') as HTMLInputElement
    const checkOut = screen.getByLabelText('Check Out') as HTMLInputElement

    expect(checkIn).toHaveAttribute('type', 'date')
    expect(checkOut).toHaveAttribute('type', 'date')
    expect(checkIn).toBeRequired()
    expect(checkOut).toBeRequired()

    const grid = container.querySelector('form .grid') as HTMLElement
    expect(grid).not.toBeNull()
    expect(grid.className).toMatch(/md:grid-cols-2/)
    expect(grid.contains(checkIn)).toBe(true)
    expect(grid.contains(checkOut)).toBe(true)

    expect(screen.queryByText('⇔')).not.toBeInTheDocument()
  })

  it('shows light-grey empty-date text that turns near-black once a date is picked', () => {
    render(<BookingForm />)

    const checkIn = screen.getByLabelText('Check In') as HTMLInputElement
    expect(checkIn).toHaveClass('text-mist')

    fireEvent.change(checkIn, { target: { value: '2026-08-10' } })
    expect(checkIn).toHaveValue('2026-08-10')
    expect(checkIn).toHaveClass('text-ink')
    expect(checkIn).not.toHaveClass('text-mist')
  })

  it('renders pill inputs with the source fill, border and focus background', () => {
    render(<BookingForm />)

    const checkIn = screen.getByLabelText('Check In') as HTMLInputElement
    expect(checkIn.className).toMatch(/h-\[45px\]/)
    expect(checkIn.className).toMatch(/rounded-\[40px\]/)
    expect(checkIn.className).toMatch(/border-mist/)
    expect(checkIn.className).toMatch(/bg-white/)
    expect(checkIn.className).toMatch(/text-\[16px\]/)
    expect(checkIn.className).toMatch(/font-bold/)
    expect(checkIn.className).toMatch(/focus:bg-soft/)
  })

  it('renders Adults (1-3) and Children (0-2) selects with the source defaults and floating arrows', () => {
    render(<BookingForm />)

    const adults = screen.getByLabelText('Adults') as HTMLSelectElement
    const children = screen.getByLabelText('Children') as HTMLSelectElement

    expect(Array.from(adults.options).map((option) => option.textContent)).toEqual(['1', '2', '3'])
    expect(Array.from(children.options).map((option) => option.textContent)).toEqual([
      '0',
      '1',
      '2',
    ])
    expect(adults).toHaveValue('1')
    expect(children).toHaveValue('0')
    expect(adults).not.toBeRequired()
    expect(children).not.toBeRequired()
  })

  it('renders the full-width Room Type select with placeholder and the source options', () => {
    render(<BookingForm />)

    const roomType = screen.getByLabelText('Room Type') as HTMLSelectElement
    expect(roomType).toBeRequired()
    expect(roomType.className).toMatch(/appearance-none/)
    expect(roomType).toHaveValue('')
    expect(roomType).toHaveClass('text-mist')

    expect(Array.from(roomType.options).map((option) => option.textContent)).toEqual([
      'Select room type',
      'Private Room (1 to 2 People)',
      'Family Room (1 to 4 People)',
    ])
  })

  it('renders three floating light-grey arrow glyphs with NO tab background', () => {
    render(<BookingForm />)

    const arrows = screen.getAllByText('➜')
    expect(arrows).toHaveLength(3)
    for (const arrow of arrows) {
      const glyph = arrow.parentElement as HTMLElement
      expect(glyph.className).toMatch(/text-mist/)
      expect(glyph.className).toMatch(/pointer-events-none/)
      expect(glyph.className).toMatch(/bottom-\[5px\]/)
      expect(glyph.className).toMatch(/right-\[3px\]/)
      expect(glyph.className).not.toMatch(/bg-/)
    }
  })

  it('renders static uppercase taupe labels above every field, indented 20px', () => {
    render(<BookingForm />)

    for (const name of ['Check In', 'Check Out', 'Adults', 'Children', 'Room Type']) {
      const label = screen.getByText(name).closest('label') as HTMLLabelElement
      expect(label).not.toBeNull()
      expect(label.className).toMatch(/text-brand/)
      expect(label.className).toMatch(/uppercase/)
      expect(label.className).toMatch(/ml-\[20px\]/)
      expect(label.className).toMatch(/text-\[14px\]/)
      expect(label.className).toMatch(/leading-\[24px\]/)
      expect(label.htmlFor).toBeTruthy()
    }
  })

  it('renders a full-width pill taupe Check availability submit button', () => {
    render(<BookingForm />)

    const button = screen.getByRole('button', { name: 'Check availability' })
    expect(button).toHaveAttribute('type', 'submit')
    expect(button.className).toMatch(/w-full/)
    expect(button.className).toMatch(/h-\[55px\]/)
    expect(button.className).toMatch(/rounded-\[40px\]/)
    expect(button.className).toMatch(/bg-brand\/90/)
    expect(button.className).toMatch(/text-\[18px\]/)
    expect(button.className).toMatch(/text-white/)
  })

  it('shows validation messages for missing required fields and no summary', () => {
    const { container } = render(<BookingForm />)

    fireEvent.submit(container.querySelector('form') as HTMLFormElement)

    expect(screen.getByText('Please choose a check-in date.')).toBeInTheDocument()
    expect(screen.getByText('Please choose a check-out date.')).toBeInTheDocument()
    expect(screen.getByText('Please select a room type.')).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('blocks submission when check-out is earlier than check-in', () => {
    const { container } = render(<BookingForm />)

    fireEvent.change(screen.getByLabelText('Check In'), { target: { value: '2026-08-13' } })
    fireEvent.change(screen.getByLabelText('Check Out'), { target: { value: '2026-08-10' } })

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
    fireEvent.change(screen.getByLabelText('Check Out'), { target: { value: '2026-08-13' } })
    await user.selectOptions(screen.getByLabelText('Room Type'), 'Private Room (1 to 2 People)')

    await user.click(screen.getByRole('button', { name: 'Check availability' }))

    const status = screen.getByRole('status')
    expect(status).toHaveTextContent(
      'Check-in 2026-08-10 → Check-out 2026-08-13 · 1 adult · 0 children · Private Room (1 to 2 People)',
    )
    expect(status.className).toMatch(/text-brand/)
    expect(status.className).toMatch(/bg-brand\/10/)
  })

  it('clears a field error once the user edits the field', async () => {
    const user = userEvent.setup()
    const { container } = render(<BookingForm />)

    fireEvent.submit(container.querySelector('form') as HTMLFormElement)
    expect(screen.getByText('Please choose a check-in date.')).toBeInTheDocument()

    fireEvent.change(screen.getByLabelText('Check In'), { target: { value: '2026-08-10' } })
    expect(screen.queryByText('Please choose a check-in date.')).not.toBeInTheDocument()

    expect(screen.getByText('Please choose a check-out date.')).toBeInTheDocument()
    await user.selectOptions(screen.getByLabelText('Room Type'), 'Family Room (1 to 4 People)')
    expect(screen.queryByText('Please select a room type.')).not.toBeInTheDocument()
  })
})
