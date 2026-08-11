import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BookingForm } from './BookingForm'

describe('BookingForm', () => {
  it('renders the near-black booking card with sharp corners and no shadow', () => {
    const { container } = render(<BookingForm />)

    const card = container.querySelector('form')?.parentElement as HTMLElement
    expect(card).not.toBeNull()
    expect(card.className).toMatch(/relative/)
    expect(card.className).toMatch(/max-w-\[642px\]/)
    expect(card.className).toMatch(/bg-panel/)
    expect(card.className).not.toMatch(/rounded/)
    expect(card.className).not.toMatch(/shadow/)
  })

  it('renders the full-width photo header panel with the seeded interior photo and dark-grey scrim', () => {
    const { container } = render(<BookingForm />)

    const panel = container.querySelector('form')?.parentElement?.firstElementChild as HTMLElement
    expect(panel).not.toBeNull()
    expect(panel.style.backgroundImage).toContain('picsum.photos/seed/guestly-1/1280/600')
    expect(panel.className).toMatch(/bg-cover/)
    expect(panel.className).toMatch(/bg-center/)
    expect(panel.className).toMatch(/pt-\[85px\]/)
    expect(panel.className).toMatch(/px-\[25px\]/)
    expect(panel.className).toMatch(/pb-\[25px\]/)

    const scrim = panel.querySelector('[aria-hidden="true"]') as HTMLElement
    expect(scrim).not.toBeNull()
    expect(scrim.className).toMatch(/bg-scrim/)
    expect(scrim.className).toMatch(/absolute/)
    expect(scrim.className).toMatch(/inset-0/)
  })

  it('renders the "Reserve your Room" h2 in Medula One white capitalized with a subtitle', () => {
    render(<BookingForm />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveTextContent('Reserve your Room')
    expect(heading.className).toMatch(/font-display/)
    expect(heading.className).toMatch(/text-\[58px\]/)
    expect(heading.className).toMatch(/text-white/)
    expect(heading.className).toMatch(/capitalize/)

    const subtitle = screen.getByText(/Lorem ipsum dolor sit amet consectetur/)
    expect(subtitle.className).toMatch(/text-\[18px\]/)
    expect(subtitle.className).toMatch(/text-white/)
  })

  it('renders Arrival and Departure date inputs side by side, required, with NO divider', () => {
    const { container } = render(<BookingForm />)

    const arrival = screen.getByLabelText('Arrival date') as HTMLInputElement
    const departure = screen.getByLabelText('Departure date') as HTMLInputElement

    expect(arrival).toHaveAttribute('type', 'date')
    expect(departure).toHaveAttribute('type', 'date')
    expect(arrival).toBeRequired()
    expect(departure).toBeRequired()

    const grid = container.querySelector('form .grid') as HTMLElement
    expect(grid).not.toBeNull()
    expect(grid.className).toMatch(/md:grid-cols-2/)
    expect(grid.contains(arrival)).toBe(true)
    expect(grid.contains(departure)).toBe(true)

    expect(screen.queryByText('⇔')).not.toBeInTheDocument()
  })

  it('shows dim-white empty-date text that turns white once a date is picked', () => {
    render(<BookingForm />)

    const arrival = screen.getByLabelText('Arrival date') as HTMLInputElement
    expect(arrival).toHaveClass('text-dim')

    fireEvent.change(arrival, { target: { value: '2026-08-10' } })
    expect(arrival).toHaveValue('2026-08-10')
    expect(arrival).toHaveClass('text-white')
    expect(arrival).not.toHaveClass('text-dim')
  })

  it('renders pill inputs with the source fill, border and focus state', () => {
    render(<BookingForm />)

    const arrival = screen.getByLabelText('Arrival date') as HTMLInputElement
    expect(arrival.className).toMatch(/h-\[45px\]/)
    expect(arrival.className).toMatch(/rounded-\[40px\]/)
    expect(arrival.className).toMatch(/border-2/)
    expect(arrival.className).toMatch(/border-dim/)
    expect(arrival.className).toMatch(/bg-transparent/)
    expect(arrival.className).toMatch(/text-\[16px\]/)
    expect(arrival.className).toMatch(/font-bold/)
    expect(arrival.className).toMatch(/focus:bg-white/)
    expect(arrival.className).toMatch(/focus:text-ink/)
  })

  it('renders Rooms, Adults and Kids selects in a single three-column row with source defaults', () => {
    const { container } = render(<BookingForm />)

    const rooms = screen.getByLabelText('Rooms') as HTMLSelectElement
    const adults = screen.getByLabelText('Adults') as HTMLSelectElement
    const kids = screen.getByLabelText('Kids') as HTMLSelectElement

    expect(Array.from(rooms.options).map((option) => option.textContent)).toEqual(['1', '2', '3'])
    expect(Array.from(adults.options).map((option) => option.textContent)).toEqual(['1', '2', '3'])
    expect(Array.from(kids.options).map((option) => option.textContent)).toEqual(['0', '1', '2'])
    expect(rooms).toHaveValue('1')
    expect(adults).toHaveValue('1')
    expect(kids).toHaveValue('0')
    expect(rooms).not.toBeRequired()
    expect(adults).not.toBeRequired()
    expect(kids).not.toBeRequired()

    const grids = container.querySelectorAll('form .grid')
    expect(grids).toHaveLength(2)
    expect((grids[1] as HTMLElement).className).toMatch(/md:grid-cols-3/)
    expect((grids[1] as HTMLElement).contains(rooms)).toBe(true)
    expect((grids[1] as HTMLElement).contains(adults)).toBe(true)
    expect((grids[1] as HTMLElement).contains(kids)).toBe(true)
  })

  it('renders three floating dim-white arrow glyphs with NO tab background', () => {
    render(<BookingForm />)

    const arrows = screen.getAllByText('➜')
    expect(arrows).toHaveLength(3)
    for (const arrow of arrows) {
      const glyph = arrow.parentElement as HTMLElement
      expect(glyph.className).toMatch(/text-dim/)
      expect(glyph.className).toMatch(/pointer-events-none/)
      expect(glyph.className).toMatch(/bottom-\[7px\]/)
      expect(glyph.className).toMatch(/right-\[10px\]/)
      expect(glyph.className).not.toMatch(/bg-/)
    }
  })

  it('renders static uppercase orange labels above every field, indented 20px', () => {
    render(<BookingForm />)

    for (const name of ['Arrival date', 'Departure date', 'Rooms', 'Adults', 'Kids']) {
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

  it('renders a full-width pill orange uppercase Check availability submit button', () => {
    render(<BookingForm />)

    const button = screen.getByRole('button', { name: 'Check availability' })
    expect(button).toHaveAttribute('type', 'submit')
    expect(button.className).toMatch(/w-full/)
    expect(button.className).toMatch(/h-\[55px\]/)
    expect(button.className).toMatch(/rounded-\[40px\]/)
    expect(button.className).toMatch(/bg-brand/)
    expect(button.className).toMatch(/text-\[18px\]/)
    expect(button.className).toMatch(/uppercase/)
    expect(button.className).toMatch(/text-white/)
  })

  it('shows validation messages for missing required fields and no summary', () => {
    const { container } = render(<BookingForm />)

    fireEvent.submit(container.querySelector('form') as HTMLFormElement)

    expect(screen.getByText('Please choose an arrival date.')).toBeInTheDocument()
    expect(screen.getByText('Please choose a departure date.')).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('blocks submission when departure is earlier than arrival', () => {
    const { container } = render(<BookingForm />)

    fireEvent.change(screen.getByLabelText('Arrival date'), { target: { value: '2026-08-13' } })
    fireEvent.change(screen.getByLabelText('Departure date'), { target: { value: '2026-08-10' } })

    fireEvent.submit(container.querySelector('form') as HTMLFormElement)

    expect(
      screen.getByText('Please choose a departure date on or after your arrival date.'),
    ).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('submits a valid reservation and shows the orange summary line', async () => {
    const user = userEvent.setup()
    render(<BookingForm />)

    fireEvent.change(screen.getByLabelText('Arrival date'), { target: { value: '2026-08-10' } })
    fireEvent.change(screen.getByLabelText('Departure date'), { target: { value: '2026-08-13' } })
    await user.selectOptions(screen.getByLabelText('Rooms'), '2')
    await user.selectOptions(screen.getByLabelText('Adults'), '2')
    await user.selectOptions(screen.getByLabelText('Kids'), '1')

    await user.click(screen.getByRole('button', { name: 'Check availability' }))

    const status = screen.getByRole('status')
    expect(status).toHaveTextContent(
      'Arrival 2026-08-10 → Departure 2026-08-13 · 2 rooms · 2 adults · 1 kid',
    )
    expect(status.className).toMatch(/text-brand/)
    expect(status.className).toMatch(/bg-brand\/10/)
  })

  it('clears a field error once the user edits the field', () => {
    const { container } = render(<BookingForm />)

    fireEvent.submit(container.querySelector('form') as HTMLFormElement)
    expect(screen.getByText('Please choose an arrival date.')).toBeInTheDocument()
    expect(screen.getByText('Please choose a departure date.')).toBeInTheDocument()

    fireEvent.change(screen.getByLabelText('Arrival date'), { target: { value: '2026-08-10' } })
    expect(screen.queryByText('Please choose an arrival date.')).not.toBeInTheDocument()
    expect(screen.getByText('Please choose a departure date.')).toBeInTheDocument()

    fireEvent.change(screen.getByLabelText('Departure date'), { target: { value: '2026-08-13' } })
    expect(screen.queryByText('Please choose a departure date.')).not.toBeInTheDocument()
  })
})
