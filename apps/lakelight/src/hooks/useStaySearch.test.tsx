import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { addDays, iso, nightsBetween, prettyDate, useStaySearch } from './useStaySearch'

function Panel() {
  const search = useStaySearch()

  return (
    <form onSubmit={search.onSubmit} noValidate>
      <input
        data-testid="where"
        value={search.where}
        onChange={search.onWhereChange}
        aria-label="where"
      />
      <input
        data-testid="in"
        type="date"
        value={search.checkIn}
        min={search.today}
        onChange={search.onCheckInChange}
        aria-label="in"
      />
      <input
        data-testid="out"
        type="date"
        value={search.checkOut}
        min={search.earliestCheckOut}
        onChange={search.onCheckOutChange}
        aria-label="out"
      />
      <select data-testid="guests" value={search.guest} onChange={search.onGuestChange}>
        <option value="2 guests">2 guests</option>
        <option value="4 guests">4 guests</option>
      </select>
      <button type="submit">go</button>
      <p role="status">{search.message}</p>
    </form>
  )
}

describe('date helpers', () => {
  it('builds local date strings without shifting the day', () => {
    expect(iso(new Date(2026, 11, 2))).toBe('2026-12-02')
    expect(iso(new Date(2026, 0, 9))).toBe('2026-01-09')
  })

  it('adds days across a month boundary', () => {
    expect(addDays('2026-11-30', 3)).toBe('2026-12-03')
    expect(addDays('2027-02-27', 2)).toBe('2027-03-01')
  })

  it('counts whole nights', () => {
    expect(nightsBetween('2026-12-02', '2026-12-05')).toBe(3)
    expect(nightsBetween('2027-03-27', '2027-03-29')).toBe(2)
  })

  it('prints a short day and month', () => {
    expect(prettyDate('2026-12-02')).toBe('2 Dec')
  })
})

describe('useStaySearch', () => {
  it('pre-fills the dates three weeks out and a two-guest party', () => {
    render(<Panel />)

    const today = iso(new Date())
    const checkIn = addDays(today, 21)

    expect(screen.getByLabelText('in')).toHaveValue(checkIn)
    expect(screen.getByLabelText('out')).toHaveValue(addDays(checkIn, 3))
    expect(screen.getByLabelText('in')).toHaveAttribute('min', today)
    expect(screen.getByLabelText('out')).toHaveAttribute('min', addDays(checkIn, 1))
    expect(screen.getByTestId('guests')).toHaveValue('2 guests')
    expect(screen.getByRole('status')).toHaveTextContent('')
  })

  it('rolls the check-out forward when the check-in passes it', () => {
    render(<Panel />)

    fireEvent.change(screen.getByLabelText('in'), { target: { value: '2027-06-01' } })

    expect(screen.getByLabelText('out')).toHaveValue('2027-06-02')
    expect(screen.getByLabelText('out')).toHaveAttribute('min', '2027-06-02')
  })

  it('keeps a check-out that is already far enough ahead', () => {
    render(<Panel />)
    const before = screen.getByLabelText('out').getAttribute('value')

    fireEvent.change(screen.getByLabelText('in'), { target: { value: '2026-11-20' } })

    expect(screen.getByLabelText('in')).toHaveValue('2026-11-20')
    expect(screen.getByLabelText('out').getAttribute('value')).toBe(before)
  })

  it('leaves the dates alone when the check-in is cleared', () => {
    render(<Panel />)
    const before = screen.getByLabelText('out').getAttribute('value')

    fireEvent.change(screen.getByLabelText('in'), { target: { value: '' } })

    expect(screen.getByLabelText('in')).toHaveValue('')
    expect(screen.getByLabelText('out').getAttribute('value')).toBe(before)
  })

  it('reports the search in the reference sentence shape', async () => {
    const user = userEvent.setup()
    render(<Panel />)

    await user.type(screen.getByLabelText('where'), 'Ordesa, Spain')
    await user.click(screen.getByRole('button', { name: 'go' }))

    expect(screen.getByRole('status')).toHaveTextContent(
      /^Searching stays in Ordesa, Spain for 2 guests, \d{1,2} \w{3} to \d{1,2} \w{3} \(3 nights\)…$/,
    )
  })

  it('prints the singular night and the chosen party size', async () => {
    const user = userEvent.setup()
    render(<Panel />)

    await user.type(screen.getByLabelText('where'), '  Gavarnie, France  ')
    await user.selectOptions(screen.getByTestId('guests'), '4 guests')
    fireEvent.change(screen.getByLabelText('in'), { target: { value: '2027-06-01' } })
    fireEvent.change(screen.getByLabelText('out'), { target: { value: '2027-06-02' } })
    await user.click(screen.getByRole('button', { name: 'go' }))

    expect(screen.getByRole('status')).toHaveTextContent(
      'Searching stays in Gavarnie, France for 4 guests, 1 Jun to 2 Jun (1 night)…',
    )
  })

  it('asks for a destination instead of leaving the old sentence in place', async () => {
    const user = userEvent.setup()
    render(<Panel />)

    await user.type(screen.getByLabelText('where'), 'Ordesa, Spain')
    await user.click(screen.getByRole('button', { name: 'go' }))
    await user.clear(screen.getByLabelText('where'))
    await user.click(screen.getByRole('button', { name: 'go' }))

    expect(screen.getByRole('status')).toHaveTextContent('Choose a destination.')
  })

  it('refuses a check-out that is not after the check-in', async () => {
    const user = userEvent.setup()
    render(<Panel />)

    await user.type(screen.getByLabelText('where'), 'Ordesa, Spain')
    fireEvent.change(screen.getByLabelText('out'), { target: { value: '' } })
    await user.click(screen.getByRole('button', { name: 'go' }))

    expect(screen.getByRole('status')).toHaveTextContent('Check out has to be after check in.')
  })
})
