import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BookingBar } from './BookingBar'

describe('BookingBar', () => {
  it('renders three labeled select elements', () => {
    render(<BookingBar />)
    expect(screen.getByLabelText(/arrival date/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/departure date/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/rooms/i)).toBeInTheDocument()
  })

  it('renders Request a Quote button', () => {
    render(<BookingBar />)
    expect(screen.getByRole('button', { name: /request a quote/i })).toBeInTheDocument()
  })

  it('allows selecting options from dropdowns', async () => {
    const user = userEvent.setup()
    render(<BookingBar />)

    const arrivalSelect = screen.getByLabelText(/arrival date/i)
    await user.selectOptions(arrivalSelect, '10')
    expect(arrivalSelect).toHaveValue('10')
  })

  it('handles form submission', async () => {
    const user = userEvent.setup()
    render(<BookingBar />)

    await user.selectOptions(screen.getByLabelText(/arrival date/i), '5')
    await user.selectOptions(screen.getByLabelText(/departure date/i), '15')
    await user.selectOptions(screen.getByLabelText(/rooms/i), '2')
    await user.click(screen.getByRole('button', { name: /request a quote/i }))
  })
})
