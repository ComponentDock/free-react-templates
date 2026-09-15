import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Reservation } from './Reservation'

describe('Reservation', () => {
  it('renders the flight tab by default', () => {
    render(<Reservation />)
    expect(screen.getByText('Find Flights')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Search Location')).toBeInTheDocument()
  })

  it('switches to hotel tab', async () => {
    const user = userEvent.setup()
    render(<Reservation />)
    await user.click(screen.getByRole('tab', { name: /Hotel/ }))
    expect(screen.getByText('Find Hotel')).toBeInTheDocument()
    expect(screen.getByText('Book Now')).toBeInTheDocument()
  })

  it('switches to car rent tab', async () => {
    const user = userEvent.setup()
    render(<Reservation />)
    await user.click(screen.getByRole('tab', { name: /Car Rent/ }))
    expect(screen.getByText('Find Car')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Start date')).toBeInTheDocument()
  })

  it('switches to cruises tab', async () => {
    const user = userEvent.setup()
    render(<Reservation />)
    await user.click(screen.getByRole('tab', { name: /Cruises/ }))
    expect(screen.getByText('Find Cruises')).toBeInTheDocument()
    expect(screen.getByText('Suite')).toBeInTheDocument()
  })

  it('has proper aria attributes', () => {
    render(<Reservation />)
    expect(screen.getByRole('tab', { name: /Flight/ })).toHaveAttribute('aria-selected', 'true')
  })

  it('submits flight form without navigation', async () => {
    const user = userEvent.setup()
    render(<Reservation />)
    await user.click(screen.getByText('Find Flights'))
    // Form submit is prevented — no page navigation
    expect(screen.getByText('Find Flights')).toBeInTheDocument()
  })

  it('submits hotel form without navigation', async () => {
    const user = userEvent.setup()
    render(<Reservation />)
    await user.click(screen.getByRole('tab', { name: /Hotel/ }))
    await user.click(screen.getByText('Find Hotel'))
    expect(screen.getByText('Find Hotel')).toBeInTheDocument()
  })

  it('submits car rent form without navigation', async () => {
    const user = userEvent.setup()
    render(<Reservation />)
    await user.click(screen.getByRole('tab', { name: /Car Rent/ }))
    await user.click(screen.getByText('Find Car'))
    expect(screen.getByText('Find Car')).toBeInTheDocument()
  })

  it('submits cruises form without navigation', async () => {
    const user = userEvent.setup()
    render(<Reservation />)
    await user.click(screen.getByRole('tab', { name: /Cruises/ }))
    await user.click(screen.getByText('Find Cruises'))
    expect(screen.getByText('Find Cruises')).toBeInTheDocument()
  })
})
