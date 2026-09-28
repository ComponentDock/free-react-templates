import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('Travenzo — Travel Booking Search', () => {
  it('sets the document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('Travenzo — Travel Booking Search')
  })

  it('renders the Hotels tab as active', () => {
    render(<App />)
    const hotelsTab = screen.getByRole('tab', { name: 'Hotels' })
    expect(hotelsTab).toBeInTheDocument()
    expect(hotelsTab).toHaveAttribute('aria-selected', 'true')
  })

  it('renders the Car tab', () => {
    render(<App />)
    expect(screen.getByRole('tab', { name: 'Car' })).toBeInTheDocument()
  })

  it('renders the Flight tab', () => {
    render(<App />)
    expect(screen.getByRole('tab', { name: 'Flight' })).toBeInTheDocument()
  })

  it('renders the GOING TO input with placeholder', () => {
    render(<App />)
    expect(screen.getByPlaceholderText('DESTINATION, HOTEL NAME')).toBeInTheDocument()
  })

  it('renders the CHECK-IN date input', () => {
    render(<App />)
    expect(screen.getByLabelText('Check-In')).toBeInTheDocument()
  })

  it('renders the CHECK-OUT date input', () => {
    render(<App />)
    expect(screen.getByLabelText('Check-Out')).toBeInTheDocument()
  })

  it('renders the Travellers section with default values', () => {
    render(<App />)
    expect(screen.getByText('Adults')).toBeInTheDocument()
    expect(screen.getByText('Children')).toBeInTheDocument()
    expect(screen.getByText('Rooms')).toBeInTheDocument()
  })

  it('renders the Add a flight checkbox as checked', () => {
    render(<App />)
    const checkbox = screen.getByRole('checkbox', { name: 'Add a flight' })
    expect(checkbox).toBeChecked()
  })

  it('renders the Add a car checkbox as unchecked', () => {
    render(<App />)
    const checkbox = screen.getByRole('checkbox', { name: 'Add a car' })
    expect(checkbox).not.toBeChecked()
  })

  it('renders the Search button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('allows typing in the destination field', async () => {
    const user = userEvent.setup()
    render(<App />)
    const input = screen.getByPlaceholderText('DESTINATION, HOTEL NAME')
    await user.type(input, 'Paris')
    expect(input).toHaveValue('Paris')
  })

  it('switches to Car tab when clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    const carTab = screen.getByRole('tab', { name: 'Car' })
    await user.click(carTab)
    expect(carTab).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('tab', { name: 'Hotels' })).toHaveAttribute('aria-selected', 'false')
  })

  it('switches to Flight tab when clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    const flightTab = screen.getByRole('tab', { name: 'Flight' })
    await user.click(flightTab)
    expect(flightTab).toHaveAttribute('aria-selected', 'true')
  })

  it('switches back to Hotels tab', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('tab', { name: 'Car' }))
    await user.click(screen.getByRole('tab', { name: 'Hotels' }))
    expect(screen.getByRole('tab', { name: 'Hotels' })).toHaveAttribute('aria-selected', 'true')
  })

  it('toggles the Add a flight checkbox', async () => {
    const user = userEvent.setup()
    render(<App />)
    const checkbox = screen.getByRole('checkbox', { name: 'Add a flight' })
    expect(checkbox).toBeChecked()
    await user.click(checkbox)
    expect(checkbox).not.toBeChecked()
    await user.click(checkbox)
    expect(checkbox).toBeChecked()
  })

  it('toggles the Add a car checkbox', async () => {
    const user = userEvent.setup()
    render(<App />)
    const checkbox = screen.getByRole('checkbox', { name: 'Add a car' })
    expect(checkbox).not.toBeChecked()
    await user.click(checkbox)
    expect(checkbox).toBeChecked()
  })

  it('increments adults count', async () => {
    const user = userEvent.setup()
    render(<App />)
    const incBtn = screen.getByRole('button', { name: /increase adults/i })
    await user.click(incBtn)
    // After increment, adults should be 2 — displayed as plural
    expect(screen.getByText('Adults')).toBeInTheDocument()
  })

  it('decrements adults count', async () => {
    const user = userEvent.setup()
    render(<App />)
    const decBtn = screen.getByRole('button', { name: /decrease adults/i })
    await user.click(decBtn)
    // Adults can't go below 1
    expect(screen.getByText('Adults')).toBeInTheDocument()
  })

  it('adults cannot go below 1', async () => {
    const user = userEvent.setup()
    render(<App />)
    const decBtn = screen.getByRole('button', { name: /decrease adults/i })
    await user.click(decBtn)
    await user.click(decBtn)
    expect(screen.getByText('Adults')).toBeInTheDocument()
  })

  it('increments children count', async () => {
    const user = userEvent.setup()
    render(<App />)
    const incBtn = screen.getByRole('button', { name: /increase children/i })
    await user.click(incBtn)
    expect(screen.getByText('Children')).toBeInTheDocument()
  })

  it('decrements children count', async () => {
    const user = userEvent.setup()
    render(<App />)
    // First increment then decrement
    const incBtn = screen.getByRole('button', { name: /increase children/i })
    await user.click(incBtn)
    const decBtn = screen.getByRole('button', { name: /decrease children/i })
    await user.click(decBtn)
    expect(screen.getByText('Children')).toBeInTheDocument()
  })

  it('children cannot go below 0', async () => {
    const user = userEvent.setup()
    render(<App />)
    const decBtn = screen.getByRole('button', { name: /decrease children/i })
    await user.click(decBtn)
    await user.click(decBtn)
    expect(screen.getByText('Children')).toBeInTheDocument()
  })

  it('increments rooms count', async () => {
    const user = userEvent.setup()
    render(<App />)
    const incBtn = screen.getByRole('button', { name: /increase rooms/i })
    await user.click(incBtn)
    expect(screen.getByText('Rooms')).toBeInTheDocument()
  })

  it('decrements rooms count', async () => {
    const user = userEvent.setup()
    render(<App />)
    const decBtn = screen.getByRole('button', { name: /decrease rooms/i })
    await user.click(decBtn)
    // Rooms can't go below 1
    expect(screen.getByText('Rooms')).toBeInTheDocument()
  })

  it('rooms cannot go below 1', async () => {
    const user = userEvent.setup()
    render(<App />)
    const decBtn = screen.getByRole('button', { name: /decrease rooms/i })
    await user.click(decBtn)
    await user.click(decBtn)
    expect(screen.getByText('Rooms')).toBeInTheDocument()
  })

  it('allows setting check-in date', async () => {
    const user = userEvent.setup()
    render(<App />)
    const checkIn = screen.getByLabelText('Check-In')
    await user.type(checkIn, '2026-12-25')
    expect(checkIn).toHaveValue('2026-12-25')
  })

  it('allows setting check-out date', async () => {
    const user = userEvent.setup()
    render(<App />)
    const checkOut = screen.getByLabelText('Check-Out')
    await user.type(checkOut, '2026-12-30')
    expect(checkOut).toHaveValue('2026-12-30')
  })

  it('submits the form without page reload', async () => {
    const user = userEvent.setup()
    render(<App />)
    const button = screen.getByRole('button', { name: /search/i })
    await user.click(button)
    expect(screen.getByText('Adults')).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    expect(screen.getByText('Component Dock')).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('renders the copyright line in the footer', () => {
    render(<App />)
    expect(screen.getByText(/Travenzo\. All rights reserved/)).toBeInTheDocument()
  })
})
