import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BookingCard, buildDays, isWindowTaken } from './BookingCard'

const TODAY = new Date(2026, 5, 5) // Friday 5 June 2026 — the strip opens on Saturday 6 June.

describe('buildDays', () => {
  it('re-dates seven consecutive days from tomorrow', () => {
    const days = buildDays(TODAY)

    expect(days).toHaveLength(7)
    expect(days[0]).toMatchObject({
      iso: '2026-06-06',
      name: 'Sat',
      day: '6',
      month: 'Jun',
      label: 'Sat 6 Jun',
    })
    expect(days[6]).toMatchObject({ iso: '2026-06-12', name: 'Fri', day: '12', month: 'Jun' })
  })

  it('rolls the month and the year over', () => {
    const days = buildDays(new Date(2026, 11, 30))

    expect(days[0]).toMatchObject({ iso: '2026-12-31', day: '31', month: 'Dec' })
    expect(days[1]).toMatchObject({ iso: '2027-01-01', day: '1', month: 'Jan' })
  })
})

describe('isWindowTaken', () => {
  it('reads the demo availability table', () => {
    expect(isWindowTaken(0, 0)).toBe(true)
    expect(isWindowTaken(0, 2)).toBe(false)
  })
})

describe('BookingCard', () => {
  it('renders the three steps, the fields and the empty summary', () => {
    render(<BookingCard today={TODAY} />)

    expect(screen.getByRole('heading', { name: 'Book a technician' })).toBeInTheDocument()
    expect(
      screen.getAllByRole('radio', {
        name: /No cooling|No heat|Tune-up|Replacement quote|Air quality/,
      }),
    ).toHaveLength(5)
    expect(screen.getByRole('radio', { name: 'No cooling' })).toBeChecked()
    expect(screen.getByLabelText('Your name')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone')).toBeInTheDocument()
    expect(screen.getByLabelText('Service address')).toBeInTheDocument()
    expect(
      screen.getByText('Choose a day and a window to see your visit here.'),
    ).toBeInTheDocument()
  })

  it('shows the seven day chips from the injected clock', () => {
    render(<BookingCard today={TODAY} />)

    expect(screen.getByRole('radio', { name: 'Sat 6 Jun' })).toBeChecked()
    expect(screen.getByRole('radio', { name: 'Sat 6 Jun' })).toHaveAttribute('value', '2026-06-06')
    expect(screen.getByRole('radio', { name: 'Fri 12 Jun' })).toBeInTheDocument()
  })

  it('marks the first two windows of the selected day as taken', () => {
    render(<BookingCard today={TODAY} />)

    expect(screen.getByRole('radio', { name: /8am to 10am/ })).toBeDisabled()
    expect(screen.getByRole('radio', { name: /10am to 12pm/ })).toBeDisabled()
    expect(screen.getByRole('radio', { name: /1pm to 3pm/ })).toBeEnabled()
    expect(screen.getAllByText('Taken')).toHaveLength(2)
    expect(screen.getAllByText('Open')).toHaveLength(2)
  })

  it('writes the chosen visit into the summary line', async () => {
    const user = userEvent.setup()
    render(<BookingCard today={TODAY} />)

    await user.click(screen.getByRole('radio', { name: 'Mon 8 Jun' }))
    await user.click(screen.getByRole('radio', { name: /3pm to 5pm/ }))

    expect(screen.getByText('Your visit: Mon 8 Jun, 3pm to 5pm.')).toBeInTheDocument()
  })

  it('clears a window that is taken on the newly chosen day', async () => {
    const user = userEvent.setup()
    render(<BookingCard today={TODAY} />)

    await user.click(screen.getByRole('radio', { name: /3pm to 5pm/ }))
    expect(screen.getByText('Your visit: Sat 6 Jun, 3pm to 5pm.')).toBeInTheDocument()

    await user.click(screen.getByRole('radio', { name: 'Sun 7 Jun' }))

    expect(
      screen.getByText('Choose a day and a window to see your visit here.'),
    ).toBeInTheDocument()
    expect(screen.getByRole('radio', { name: /3pm to 5pm/ })).toBeDisabled()
  })

  it('keeps a window that is open on the newly chosen day', async () => {
    const user = userEvent.setup()
    render(<BookingCard today={TODAY} />)

    await user.click(screen.getByRole('radio', { name: 'Sun 7 Jun' }))
    await user.click(screen.getByRole('radio', { name: /10am to 12pm/ }))

    await user.click(screen.getByRole('radio', { name: 'Mon 8 Jun' }))

    expect(screen.getByRole('radio', { name: /10am to 12pm/ })).toBeChecked()
    expect(screen.getByText('Your visit: Mon 8 Jun, 10am to 12pm.')).toBeInTheDocument()
  })

  it('confirms a complete booking without leaving the page', async () => {
    const user = userEvent.setup()
    render(<BookingCard today={TODAY} />)

    await user.click(screen.getByRole('radio', { name: /1pm to 3pm/ }))
    await user.type(screen.getByLabelText('Your name'), 'Ada Lovelace')
    await user.type(screen.getByLabelText('Phone'), '5550200200')
    await user.type(screen.getByLabelText('Service address'), '1 Cedar Way')
    await user.click(screen.getByRole('button', { name: 'Confirm this visit' }))

    expect(screen.getByRole('status')).toHaveTextContent(
      'Booked for Sat 6 Jun, 1pm to 3pm. You will get a text confirmation, not a call back.',
    )
  })

  it('refuses an incomplete booking', async () => {
    const user = userEvent.setup()
    render(<BookingCard today={TODAY} />)

    await user.click(screen.getByRole('button', { name: 'Confirm this visit' }))
    expect(screen.queryByRole('status')).not.toBeInTheDocument()

    await user.click(screen.getByRole('radio', { name: /1pm to 3pm/ }))
    await user.click(screen.getByRole('button', { name: 'Confirm this visit' }))
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('records the chosen service', async () => {
    const user = userEvent.setup()
    render(<BookingCard today={TODAY} />)

    await user.click(screen.getByRole('radio', { name: 'No heat' }))

    expect(screen.getByRole('radio', { name: 'No heat' })).toBeChecked()
    expect(screen.getByRole('radio', { name: 'No cooling' })).not.toBeChecked()
  })

  it('ignores a submit that bypasses native validation', () => {
    const { container } = render(<BookingCard today={TODAY} />)
    const form = container.querySelector('form')!

    fireEvent.submit(form)
    expect(screen.queryByRole('status')).not.toBeInTheDocument()

    fireEvent.click(screen.getByRole('radio', { name: /1pm to 3pm/ }))
    fireEvent.submit(form)
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('drops an existing confirmation when the visitor changes the slot', async () => {
    const user = userEvent.setup()
    render(<BookingCard today={TODAY} />)

    await user.click(screen.getByRole('radio', { name: /1pm to 3pm/ }))
    await user.type(screen.getByLabelText('Your name'), 'Ada Lovelace')
    await user.type(screen.getByLabelText('Phone'), '5550200200')
    await user.type(screen.getByLabelText('Service address'), '1 Cedar Way')
    await user.click(screen.getByRole('button', { name: 'Confirm this visit' }))
    expect(screen.getByRole('status')).toBeInTheDocument()

    await user.click(screen.getByRole('radio', { name: 'Mon 8 Jun' }))
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })
})
