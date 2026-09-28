import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('Searchnest — Hotel Booking Search', () => {
  it('sets the document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('Searchnest — Hotel Booking Search')
  })

  it('renders the GOING TO input with placeholder', () => {
    render(<App />)
    expect(screen.getByPlaceholderText('Destination, hotel name')).toBeInTheDocument()
  })

  it('renders the CHECK-IN date input', () => {
    render(<App />)
    expect(screen.getByLabelText('Check-In')).toBeInTheDocument()
  })

  it('renders the CHECK-OUT date input', () => {
    render(<App />)
    expect(screen.getByLabelText('Check-Out')).toBeInTheDocument()
  })

  it('renders the GUESTS field showing 2 Guests by default', () => {
    render(<App />)
    expect(screen.getByText('2 Guests')).toBeInTheDocument()
  })

  it('renders the Search button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('allows typing in the destination field', async () => {
    const user = userEvent.setup()
    render(<App />)
    const input = screen.getByPlaceholderText('Destination, hotel name')
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

  it('decrements guest count when - is clicked', async () => {
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
    expect(screen.getByText(/Searchnest\. All rights reserved/)).toBeInTheDocument()
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
