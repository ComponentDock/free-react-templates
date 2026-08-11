import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BookingForm } from './BookingForm'

describe('BookingForm', () => {
  it('renders the dark translucent card with the source radius, padding and NO shadow/border', () => {
    const { container } = render(<BookingForm />)

    const card = container.querySelector('form')?.parentElement as HTMLElement
    expect(card).not.toBeNull()
    expect(card.className).toMatch(/bg-card/)
    expect(card.className).toMatch(/rounded-\[6px\]/)
    expect(card.className).toMatch(/p-10/)
    expect(card.className).not.toMatch(/shadow/)
    expect(card.className).not.toMatch(/border/)
    expect(card.className).not.toMatch(/max-w/)
  })

  it('renders Roundtrip, One way and Multi-City radios with white circles and a red checked dot', () => {
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
    expect(roundtripLabel.className).toMatch(/font-normal/)
    expect(roundtripLabel.className).toMatch(/text-white/)

    const oneWayLabel = screen.getByText('One way').closest('label') as HTMLLabelElement
    expect(oneWayLabel.className).toMatch(/ml-\[15px\]/)

    const circle = roundtripLabel.querySelector('span[aria-hidden="true"]') as HTMLElement
    expect(circle).not.toBeNull()
    expect(circle.className).toMatch(/h-5/)
    expect(circle.className).toMatch(/w-5/)
    expect(circle.className).toMatch(/rounded-full/)
    expect(circle.className).toMatch(/bg-white/)
    expect(circle.className).not.toMatch(/border/)

    expect(circle.querySelector('.bg-brand')).not.toBeNull()
    const oneWayCircle = oneWayLabel.querySelector('span[aria-hidden="true"]') as HTMLElement
    expect(oneWayCircle.querySelector('.bg-brand')).toBeNull()

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
    const { container } = render(<BookingForm />)

    const from = screen.getByLabelText('Flying from') as HTMLInputElement
    const to = screen.getByLabelText('Flying to') as HTMLInputElement

    expect(from).toHaveAttribute('type', 'text')
    expect(to).toHaveAttribute('type', 'text')
    expect(from).toHaveAttribute('placeholder', 'City or airport')
    expect(to).toHaveAttribute('placeholder', 'City or airport')

    const grid = container.querySelectorAll('form .grid')[0] as HTMLElement
    expect(grid.className).toMatch(/grid-cols-1/)
    expect(grid.className).toMatch(/md:grid-cols-2/)
    expect(grid.contains(from)).toBe(true)
    expect(grid.contains(to)).toBe(true)
  })

  it('renders Departing and Returning required date inputs in the source 3/3 column spans', () => {
    const { container } = render(<BookingForm />)

    const departing = screen.getByLabelText('Departing') as HTMLInputElement
    const returning = screen.getByLabelText('Returning') as HTMLInputElement

    expect(departing).toHaveAttribute('type', 'date')
    expect(returning).toHaveAttribute('type', 'date')
    expect(departing).toBeRequired()
    expect(returning).toBeRequired()

    const grid = container.querySelectorAll('form .grid')[1] as HTMLElement
    expect(grid.className).toMatch(/grid-cols-1/)
    expect(grid.className).toMatch(/md:grid-cols-12/)
    expect((departing.parentElement as HTMLElement).className).toMatch(/md:col-span-3/)
    expect((returning.parentElement as HTMLElement).className).toMatch(/md:col-span-3/)
    expect(grid.contains(departing)).toBe(true)
    expect(grid.contains(returning)).toBe(true)
  })

  it('shows faded empty-date text that turns near-black once a date is picked', () => {
    render(<BookingForm />)

    const departing = screen.getByLabelText('Departing') as HTMLInputElement
    expect(departing).toHaveClass('text-faded')

    fireEvent.change(departing, { target: { value: '2026-08-10' } })
    expect(departing).toHaveValue('2026-08-10')
    expect(departing).toHaveClass('text-ink')
    expect(departing).not.toHaveClass('text-faded')
  })

  it('renders inputs as white borderless 50px pills with dark text and faded placeholders', () => {
    render(<BookingForm />)

    const from = screen.getByLabelText('Flying from') as HTMLInputElement
    expect(from.className).toMatch(/h-\[50px\]/)
    expect(from.className).toMatch(/rounded-\[40px\]/)
    expect(from.className).toMatch(/border-none/)
    expect(from.className).toMatch(/bg-white/)
    expect(from.className).toMatch(/px-\[25px\]/)
    expect(from.className).toMatch(/text-\[16px\]/)
    expect(from.className).toMatch(/font-normal/)
    expect(from.className).toMatch(/text-ink/)
    expect(from.className).toMatch(/placeholder:text-faded/)
  })

  it('renders Adults, Children and Travel class selects with source options and defaults', () => {
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

    const grid = container.querySelectorAll('form .grid')[2] as HTMLElement
    expect(grid.className).toMatch(/md:grid-cols-12/)
    const adultsField = screen.getByText('Adults (18+)').parentElement as HTMLElement
    const childrenField = screen.getByText('Children (0-17)').parentElement as HTMLElement
    const travelField = screen.getByText('Travel class').parentElement as HTMLElement
    expect(adultsField.className).toMatch(/md:col-span-2/)
    expect(childrenField.className).toMatch(/md:col-span-2/)
    expect(travelField.className).toMatch(/md:col-span-3/)
  })

  it('renders three floating arrow glyphs at the right edge of the selects', () => {
    render(<BookingForm />)

    const arrows = screen.getAllByText('➜')
    expect(arrows).toHaveLength(3)
    for (const arrow of arrows) {
      const glyph = arrow.parentElement as HTMLElement
      expect(glyph.className).toMatch(/text-arrow/)
      expect(glyph.className).toMatch(/pointer-events-none/)
      expect(glyph.className).toMatch(/bottom-\[6px\]/)
      expect(glyph.className).toMatch(/right-\[10px\]/)
      expect(glyph.className).toMatch(/text-\[14px\]/)
    }
  })

  it('renders static white uppercase labels above every field, associated via htmlFor', () => {
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
      expect(label.className).toMatch(/text-white/)
      expect(label.className).toMatch(/uppercase/)
      expect(label.className).toMatch(/text-\[12px\]/)
      expect(label.className).toMatch(/font-normal/)
      expect(label.className).toMatch(/ml-\[20px\]/)
      expect(label.className).toMatch(/mb-\[5px\]/)
      expect(label.className).toMatch(/leading-\[24px\]/)
      expect(label.className).toMatch(/h-\[24px\]/)
      expect(label.className).not.toMatch(/absolute/)
      expect(label.htmlFor).toBeTruthy()
      expect(document.getElementById(label.htmlFor)).not.toBeNull()
    }
  })

  it('renders a full-width red uppercase Show flights pill button', () => {
    render(<BookingForm />)

    const button = screen.getByRole('button', { name: 'Show flights' })
    expect(button).toHaveAttribute('type', 'submit')
    expect(button.className).toMatch(/w-full/)
    expect(button.className).toMatch(/h-\[50px\]/)
    expect(button.className).toMatch(/rounded-\[40px\]/)
    expect(button.className).toMatch(/bg-brand/)
    expect(button.className).toMatch(/text-white/)
    expect(button.className).toMatch(/uppercase/)
    expect(button.className).toMatch(/text-\[14px\]/)
    expect(button.className).toMatch(/font-normal/)
    expect(button.className).toMatch(/hover:opacity-90/)
  })

  it('shows validation messages for missing required fields and no summary', () => {
    const { container } = render(<BookingForm />)

    fireEvent.submit(container.querySelector('form') as HTMLFormElement)

    expect(screen.getByText('Please enter a departure city or airport.')).toBeInTheDocument()
    expect(screen.getByText('Please enter an arrival city or airport.')).toBeInTheDocument()
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

  it('submits a valid reservation and shows the red-styled summary line', async () => {
    const user = userEvent.setup()
    render(<BookingForm />)

    await user.type(screen.getByLabelText('Flying from'), 'JFK')
    await user.type(screen.getByLabelText('Flying to'), 'LHR')
    fireEvent.change(screen.getByLabelText('Departing'), { target: { value: '2026-08-10' } })
    fireEvent.change(screen.getByLabelText('Returning'), { target: { value: '2026-08-17' } })
    await user.selectOptions(screen.getByLabelText('Adults (18+)'), '2')
    await user.selectOptions(screen.getByLabelText('Children (0-17)'), '1')

    await user.click(screen.getByRole('button', { name: 'Show flights' }))

    const status = screen.getByRole('status')
    expect(status).toHaveTextContent(
      'JFK → LHR · Aug 10 – Aug 17, 2026 · 2 adults, 1 child · Economy class',
    )
    expect(status.className).toMatch(/text-brand/)
    expect(status.className).toMatch(/bg-brand\/10/)
  })

  it('clears a field error once the user edits the field', () => {
    const { container } = render(<BookingForm />)

    fireEvent.submit(container.querySelector('form') as HTMLFormElement)
    expect(screen.getByText('Please enter a departure city or airport.')).toBeInTheDocument()
    expect(screen.getByText('Please choose a returning date.')).toBeInTheDocument()

    fireEvent.change(screen.getByLabelText('Flying from'), { target: { value: 'JFK' } })
    expect(screen.queryByText('Please enter a departure city or airport.')).not.toBeInTheDocument()
    expect(screen.getByText('Please choose a returning date.')).toBeInTheDocument()

    fireEvent.change(screen.getByLabelText('Returning'), { target: { value: '2026-08-17' } })
    expect(screen.queryByText('Please choose a returning date.')).not.toBeInTheDocument()
  })
})
