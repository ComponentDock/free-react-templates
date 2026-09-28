import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('Findly — Travel Services Search', () => {
  it('sets the document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('Findly — Travel Services Search')
  })

  it('renders the navbar with logo', () => {
    render(<App />)
    expect(screen.getByText('Findly')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<App />)
    expect(screen.getByText('Destinations')).toBeInTheDocument()
    expect(screen.getByText('Deals')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
  })

  it('renders the Book Now button in navbar', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /book now/i })).toHaveAttribute('href', '#search')
  })

  it('renders the hero heading', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 1, name: /find your next adventure/i }),
    ).toBeInTheDocument()
  })

  it('renders the hero subtitle', () => {
    render(<App />)
    expect(screen.getByText(/search thousands of destinations/i)).toBeInTheDocument()
  })

  it('renders the destination input with placeholder', () => {
    render(<App />)
    expect(screen.getByPlaceholderText('City, country, or region')).toBeInTheDocument()
  })

  it('renders the check-in date input', () => {
    render(<App />)
    expect(screen.getByLabelText('Check-In')).toBeInTheDocument()
  })

  it('renders the check-out date input', () => {
    render(<App />)
    expect(screen.getByLabelText('Check-Out')).toBeInTheDocument()
  })

  it('renders the guests field showing 2 Guests by default', () => {
    render(<App />)
    expect(screen.getByText('2 Guests')).toBeInTheDocument()
  })

  it('renders the search button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('allows typing in the destination field', async () => {
    const user = userEvent.setup()
    render(<App />)
    const input = screen.getByPlaceholderText('City, country, or region')
    await user.type(input, 'Paris')
    expect(input).toHaveValue('Paris')
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

  it('increments guest count when + is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    const incBtn = screen.getByRole('button', { name: /increase guests/i })
    await user.click(incBtn)
    expect(screen.getByText('3 Guests')).toBeInTheDocument()
  })

  it('decrements guest count when − is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    const decBtn = screen.getByRole('button', { name: /decrease guests/i })
    await user.click(decBtn)
    expect(screen.getByText('1 Guest')).toBeInTheDocument()
  })

  it('guest count cannot go below 1', async () => {
    const user = userEvent.setup()
    render(<App />)
    const decBtn = screen.getByRole('button', { name: /decrease guests/i })
    await user.click(decBtn)
    await user.click(decBtn)
    expect(screen.getByText('1 Guest')).toBeInTheDocument()
  })

  it('submits the form without page reload', async () => {
    const user = userEvent.setup()
    render(<App />)
    const button = screen.getByRole('button', { name: /search/i })
    await user.click(button)
    expect(screen.getByText('2 Guests')).toBeInTheDocument()
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
    expect(screen.getByText(/Findly\. All rights reserved/)).toBeInTheDocument()
  })

  it('handles multiple guest increments and decrements', async () => {
    const user = userEvent.setup()
    render(<App />)
    const incBtn = screen.getByRole('button', { name: /increase guests/i })
    const decBtn = screen.getByRole('button', { name: /decrease guests/i })
    await user.click(incBtn)
    await user.click(incBtn)
    expect(screen.getByText('4 Guests')).toBeInTheDocument()
    await user.click(decBtn)
    expect(screen.getByText('3 Guests')).toBeInTheDocument()
  })
})
