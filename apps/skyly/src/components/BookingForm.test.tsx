import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BookingForm } from './BookingForm'

describe('BookingForm', () => {
  it('renders the white flight-search card with the source radius, shadow and padding', () => {
    const { container } = render(<BookingForm />)

    const card = container.querySelector('form')?.parentElement as HTMLElement
    expect(card).not.toBeNull()
    expect(card.className).toMatch(/max-w-\[642px\]/)
    expect(card.className).toMatch(/bg-white/)
    expect(card.className).toMatch(/rounded-\[4px\]/)
    expect(card.className).toMatch(/shadow-\[0_0_10px_-5px/)
    expect(card.className).toMatch(/pt-\[45px\]/)
    expect(card.className).toMatch(/px-\[25px\]/)
    expect(card.className).toMatch(/pb-\[25px\]/)
  })

  it('renders Roundtrip, One way and Multi-City radio pills with the custom circles', () => {
    const { container } = render(<BookingForm />)

    const roundtrip = screen.getByRole('radio', { name: 'Roundtrip' })
    const oneWay = screen.getByRole('radio', { name: 'One way' })
    const multiCity = screen.getByRole('radio', { name: 'Multi-City' })

    expect(roundtrip).toBeChecked()
    expect(oneWay).not.toBeChecked()
    expect(multiCity).not.toBeChecked()

    const roundtripLabel = screen.getByText('Roundtrip').closest('label') as HTMLLabelElement
    expect(roundtripLabel.className).toMatch(/pl-\[30px\]/)
    expect(roundtripLabel.className).toMatch(/pt-\[4px\]/)
    expect(roundtripLabel.className).toMatch(/font-bold/)
    expect(roundtripLabel.className).toMatch(/text-ink/)

    const oneWayLabel = screen.getByText('One way').closest('label') as HTMLLabelElement
    expect(oneWayLabel.className).toMatch(/ml-\[15px\]/)

    const circle = roundtripLabel.querySelector('span[aria-hidden="true"]') as HTMLElement
    expect(circle).not.toBeNull()
    expect(circle.className).toMatch(/h-5/)
    expect(circle.className).toMatch(/w-5/)
    expect(circle.className).toMatch(/rounded-full/)
    expect(circle.className).toMatch(/border-2/)
    expect(circle.className).toMatch(/border-mist/)

    expect(roundtripLabel.querySelector('.bg-brand')).not.toBeNull()
    expect(oneWayLabel.querySelector('.bg-brand')).toBeNull()

    expect(container.querySelectorAll('input[type="radio"]')).toHaveLength(3)
  })

  it('switches the selected flight type when another radio is clicked', async () => {
    const user = userEvent.setup()
    render(<BookingForm />)

    expect(screen.getByRole('radio', { name: 'Roundtrip' })).toBeChecked()

    await user.click(screen.getByRole('radio', { name: 'Multi-City' }))

    expect(screen.getByRole('radio', { name: 'Multi-City' })).toBeChecked()
    expect(screen.getByRole('radio', { name: 'Roundtrip' })).not.toBeChecked()
  })

  it('renders Flying from and Flying to text inputs with the City or airport placeholder', () => {
    render(<BookingForm />)

    const from = screen.getByLabelText('Flying from') as HTMLInputElement
    const to = screen.getByLabelText('Flying to') as HTMLInputElement

    expect(from).toHaveAttribute('type', 'text')
    expect(to).toHaveAttribute('type', 'text')
    expect(from).toHaveAttribute('placeholder', 'City or airport')
    expect(to).toHaveAttribute('placeholder', 'City or airport')
  })

  it('renders Departing and Returning date inputs side by side, required, with NO divider', () => {
    const { container } = render(<BookingForm />)

    const departing = screen.getByLabelText('Departing') as HTMLInputElement
    const returning = screen.getByLabelText('Returning') as HTMLInputElement

    expect(departing).toHaveAttribute('type', 'date')
    expect(returning).toHaveAttribute('type', 'date')
    expect(departing).toBeRequired()
    expect(returning).toBeRequired()

    const grids = container.querySelectorAll('form .grid')
    const grid = grids[1] as HTMLElement
    expect(grid).not.toBeNull()
    expect(grid.className).toMatch(/md:grid-cols-2/)
    expect(grid.contains(departing)).toBe(true)
    expect(grid.contains(returning)).toBe(true)

    expect(screen.queryByText('⇔')).not.toBeInTheDocument()
  })

  it('shows light-grey empty-date text that turns near-black once a date is picked', () => {
    render(<BookingForm />)

    const departing = screen.getByLabelText('Departing') as HTMLInputElement
    expect(departing).toHaveClass('text-mist')

    fireEvent.change(departing, { target: { value: '2026-08-10' } })
    expect(departing).toHaveValue('2026-08-10')
    expect(departing).toHaveClass('text-ink')
    expect(departing).not.toHaveClass('text-mist')
  })

  it('renders inputs with the source fill, border, radius and focus state', () => {
    render(<BookingForm />)

    const departing = screen.getByLabelText('Departing') as HTMLInputElement
    expect(departing.className).toMatch(/h-\[65px\]/)
    expect(departing.className).toMatch(/rounded-\[4px\]/)
    expect(departing.className).toMatch(/border-2/)
    expect(departing.className).toMatch(/border-mist/)
    expect(departing.className).toMatch(/bg-white/)
    expect(departing.className).toMatch(/pt-\[24px\]/)
    expect(departing.className).toMatch(/text-\[16px\]/)
    expect(departing.className).toMatch(/font-bold/)
    expect(departing.className).toMatch(/focus:bg-soft/)
  })

  it('renders Adults, Children and Travel class selects in a single three-column row with source defaults', () => {
    const { container } = render(<BookingForm />)

    const adults = screen.getByLabelText('Adults (18+)') as HTMLSelectElement
    const children = screen.getByLabelText('Children (0-17)') as HTMLSelectElement
    const travelClass = screen.getByLabelText('Travel class') as HTMLSelectElement

    expect(Array.from(adults.options).map((option) => option.textContent)).toEqual(['1', '2', '3'])
    expect(Array.from(children.options).map((option) => option.textContent)).toEqual([
      '0',
      '1',
      '2',
    ])
    expect(Array.from(travelClass.options).map((option) => option.textContent)).toEqual([
      'Economy class',
      'Business class',
      'First class',
    ])
    expect(adults).toHaveValue('1')
    expect(children).toHaveValue('0')
    expect(travelClass).toHaveValue('Economy class')
    expect(adults).not.toBeRequired()
    expect(children).not.toBeRequired()
    expect(travelClass).not.toBeRequired()

    const grids = container.querySelectorAll('form .grid')
    expect(grids).toHaveLength(3)
    expect((grids[2] as HTMLElement).className).toMatch(/md:grid-cols-3/)
    expect((grids[2] as HTMLElement).contains(adults)).toBe(true)
    expect((grids[2] as HTMLElement).contains(children)).toBe(true)
    expect((grids[2] as HTMLElement).contains(travelClass)).toBe(true)
  })

  it('renders three floating light-grey arrow glyphs with NO tab background', () => {
    render(<BookingForm />)

    const arrows = screen.getAllByText('➜')
    expect(arrows).toHaveLength(3)
    for (const arrow of arrows) {
      const glyph = arrow.parentElement as HTMLElement
      expect(glyph.className).toMatch(/text-mist/)
      expect(glyph.className).toMatch(/pointer-events-none/)
      expect(glyph.className).toMatch(/bottom-\[6px\]/)
      expect(glyph.className).toMatch(/right-\[6px\]/)
      expect(glyph.className).not.toMatch(/bg-/)
    }
  })

  it('renders floating light-blue labels at the top edge of every field, associated with its control', () => {
    render(<BookingForm />)

    for (const name of [
      'Flying from',
      'Flying to',
      'Departing',
      'Returning',
      'Adults (18+)',
      'Children (0-17)',
      'Travel class',
    ]) {
      const label = screen.getByText(name).closest('label') as HTMLLabelElement
      expect(label).not.toBeNull()
      expect(label.className).toMatch(/text-label/)
      expect(label.className).toMatch(/uppercase/)
      expect(label.className).toMatch(/text-\[12px\]/)
      expect(label.className).toMatch(/font-bold/)
      expect(label.className).toMatch(/leading-\[24px\]/)
      expect(label.className).toMatch(/top-\[6px\]/)
      expect(label.className).toMatch(/left-\[20px\]/)
      expect(label.htmlFor).toBeTruthy()
    }
  })

  it('renders a full-width solid blue uppercase Show flights submit button', () => {
    render(<BookingForm />)

    const button = screen.getByRole('button', { name: 'Show flights' })
    expect(button).toHaveAttribute('type', 'submit')
    expect(button.className).toMatch(/w-full/)
    expect(button.className).toMatch(/h-\[65px\]/)
    expect(button.className).toMatch(/rounded-\[4px\]/)
    expect(button.className).toMatch(/bg-brand/)
    expect(button.className).toMatch(/text-\[18px\]/)
    expect(button.className).toMatch(/uppercase/)
    expect(button.className).toMatch(/text-white/)
    expect(button.className).toMatch(/font-normal/)
  })

  it('shows validation messages for missing required fields and no summary', () => {
    const { container } = render(<BookingForm />)

    fireEvent.submit(container.querySelector('form') as HTMLFormElement)

    expect(screen.getByText('Please choose a departing date.')).toBeInTheDocument()
    expect(screen.getByText('Please choose a returning date.')).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('blocks submission when returning is earlier than departing', () => {
    const { container } = render(<BookingForm />)

    fireEvent.change(screen.getByLabelText('Departing'), { target: { value: '2026-08-13' } })
    fireEvent.change(screen.getByLabelText('Returning'), { target: { value: '2026-08-10' } })

    fireEvent.submit(container.querySelector('form') as HTMLFormElement)

    expect(
      screen.getByText('Please choose a returning date on or after your departing date.'),
    ).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('submits a valid reservation and shows the blue summary line', async () => {
    const user = userEvent.setup()
    render(<BookingForm />)

    await user.type(screen.getByLabelText('Flying from'), 'JFK')
    await user.type(screen.getByLabelText('Flying to'), 'LHR')
    fireEvent.change(screen.getByLabelText('Departing'), { target: { value: '2026-08-10' } })
    fireEvent.change(screen.getByLabelText('Returning'), { target: { value: '2026-08-13' } })
    await user.selectOptions(screen.getByLabelText('Adults (18+)'), '2')
    await user.selectOptions(screen.getByLabelText('Children (0-17)'), '1')

    await user.click(screen.getByRole('button', { name: 'Show flights' }))

    const status = screen.getByRole('status')
    expect(status).toHaveTextContent(
      'Roundtrip · JFK → LHR · 2026-08-10 → 2026-08-13 · 2 adults · 1 child · Economy class',
    )
    expect(status.className).toMatch(/text-brand/)
    expect(status.className).toMatch(/bg-brand\/10/)
  })

  it('clears a field error once the user edits the field', () => {
    const { container } = render(<BookingForm />)

    fireEvent.submit(container.querySelector('form') as HTMLFormElement)
    expect(screen.getByText('Please choose a departing date.')).toBeInTheDocument()
    expect(screen.getByText('Please choose a returning date.')).toBeInTheDocument()

    fireEvent.change(screen.getByLabelText('Departing'), { target: { value: '2026-08-10' } })
    expect(screen.queryByText('Please choose a departing date.')).not.toBeInTheDocument()
    expect(screen.getByText('Please choose a returning date.')).toBeInTheDocument()

    fireEvent.change(screen.getByLabelText('Returning'), { target: { value: '2026-08-13' } })
    expect(screen.queryByText('Please choose a returning date.')).not.toBeInTheDocument()
  })
})
