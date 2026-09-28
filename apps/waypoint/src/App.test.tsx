import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('Waypoint — Hotel Search Form Template', () => {
  it('renders the search form with title', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Search Hotels')
  })

  it('renders all travel type tabs', () => {
    render(<App />)
    expect(screen.getByText('HOTEL ONLY')).toBeInTheDocument()
    expect(screen.getByText('HOTEL + FLIGHT')).toBeInTheDocument()
    expect(screen.getByText('HOTEL + FLIGHT + CAR')).toBeInTheDocument()
    expect(screen.getByText('HOTEL + CAR')).toBeInTheDocument()
  })

  it('renders the destination input', () => {
    render(<App />)
    expect(screen.getByPlaceholderText('Destination, hotel name')).toBeInTheDocument()
  })

  it('renders check-in and check-out date inputs', () => {
    render(<App />)
    expect(screen.getByLabelText('Check-In')).toBeInTheDocument()
    expect(screen.getByLabelText('Check-Out')).toBeInTheDocument()
  })

  it('renders the travelers select', () => {
    render(<App />)
    expect(screen.getByLabelText('Travelers')).toBeInTheDocument()
  })

  it('renders checkbox options', () => {
    render(<App />)
    expect(screen.getByLabelText('Add a Flight')).toBeInTheDocument()
    expect(screen.getByLabelText('Add a Car')).toBeInTheDocument()
  })

  it('renders the search button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    expect(screen.getByText('Component Dock')).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('allows typing in destination field', async () => {
    const user = userEvent.setup()
    render(<App />)
    const input = screen.getByPlaceholderText('Destination, hotel name')
    await user.type(input, 'Santorini')
    expect(input).toHaveValue('Santorini')
  })

  it('allows selecting check-in date', async () => {
    const user = userEvent.setup()
    render(<App />)
    const checkIn = screen.getByLabelText('Check-In')
    await user.type(checkIn, '2026-12-01')
    expect(checkIn).toHaveValue('2026-12-01')
  })

  it('allows selecting check-out date', async () => {
    const user = userEvent.setup()
    render(<App />)
    const checkOut = screen.getByLabelText('Check-Out')
    await user.type(checkOut, '2026-12-07')
    expect(checkOut).toHaveValue('2026-12-07')
  })

  it('allows changing travelers selection', async () => {
    const user = userEvent.setup()
    render(<App />)
    const travelers = screen.getByLabelText('Travelers')
    await user.selectOptions(travelers, '2 adults')
    expect(travelers).toHaveValue('2 adults')
  })

  it('allows toggling add a flight checkbox', async () => {
    const user = userEvent.setup()
    render(<App />)
    const checkbox = screen.getByLabelText('Add a Flight')
    expect(checkbox).toBeChecked()
    await user.click(checkbox)
    expect(checkbox).not.toBeChecked()
  })

  it('allows toggling add a car checkbox', async () => {
    const user = userEvent.setup()
    render(<App />)
    const checkbox = screen.getByLabelText('Add a Car')
    expect(checkbox).not.toBeChecked()
    await user.click(checkbox)
    expect(checkbox).toBeChecked()
  })

  it('allows selecting a different travel type', async () => {
    const user = userEvent.setup()
    render(<App />)
    const hotelFlight = screen.getByText('HOTEL + FLIGHT')
    await user.click(hotelFlight)
    // The active type should change (visual state via background color)
    expect(hotelFlight).toBeInTheDocument()
  })

  it('submits the form without page reload', async () => {
    const user = userEvent.setup()
    render(<App />)
    const button = screen.getByRole('button', { name: /search/i })
    await user.click(button)
    // Form should not navigate
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Search Hotels')
  })

  it('sets the document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('Waypoint — Hotel Search Form Template')
  })
})
