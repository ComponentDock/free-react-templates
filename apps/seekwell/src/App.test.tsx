import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('Seekwell — Travel Search', () => {
  it('sets the document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('Seekwell — Travel Search')
  })

  it('renders the three tab buttons', () => {
    render(<App />)
    expect(screen.getByRole('tab', { name: /hotels/i })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: /car/i })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: /flight/i })).toBeInTheDocument()
  })

  it('has HOTELS tab selected by default', () => {
    render(<App />)
    const hotelsTab = screen.getByRole('tab', { name: /hotels/i })
    expect(hotelsTab).toHaveAttribute('aria-selected', 'true')
  })

  it('switches to CAR tab when clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    const carTab = screen.getByRole('tab', { name: /car/i })
    await user.click(carTab)
    expect(carTab).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('tab', { name: /hotels/i })).toHaveAttribute('aria-selected', 'false')
  })

  it('switches to FLIGHT tab when clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    const flightTab = screen.getByRole('tab', { name: /flight/i })
    await user.click(flightTab)
    expect(flightTab).toHaveAttribute('aria-selected', 'true')
  })

  it('renders the Where input with placeholder', () => {
    render(<App />)
    expect(screen.getByPlaceholderText('City, region or specific hotel')).toBeInTheDocument()
  })

  it('allows typing in the Where field', async () => {
    const user = userEvent.setup()
    render(<App />)
    const input = screen.getByPlaceholderText('City, region or specific hotel')
    await user.type(input, 'Paris')
    expect(input).toHaveValue('Paris')
  })

  it('renders the Check-In date input', () => {
    render(<App />)
    expect(screen.getByLabelText('Check-In:')).toBeInTheDocument()
  })

  it('renders the Check-Out date input', () => {
    render(<App />)
    expect(screen.getByLabelText('Check-Out:')).toBeInTheDocument()
  })

  it('allows setting check-in date', async () => {
    const user = userEvent.setup()
    render(<App />)
    const checkIn = screen.getByLabelText('Check-In:')
    await user.type(checkIn, '2026-12-25')
    expect(checkIn).toHaveValue('2026-12-25')
  })

  it('allows setting check-out date', async () => {
    const user = userEvent.setup()
    render(<App />)
    const checkOut = screen.getByLabelText('Check-Out:')
    await user.type(checkOut, '2026-12-30')
    expect(checkOut).toHaveValue('2026-12-30')
  })

  it('renders the Travellers button with default value', () => {
    render(<App />)
    expect(screen.getByText('1 Adult, 0 Children, 1 Room')).toBeInTheDocument()
  })

  it('opens the travellers dropdown when clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    const travellersBtn = screen.getByRole('button', { name: /travellers/i })
    await user.click(travellersBtn)
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    expect(screen.getAllByRole('option')).toHaveLength(4)
  })

  it('selects a traveller option from the dropdown', async () => {
    const user = userEvent.setup()
    render(<App />)
    const travellersBtn = screen.getByRole('button', { name: /travellers/i })
    await user.click(travellersBtn)
    const option = screen.getByRole('option', { name: '2 Adults, 0 Children, 1 Room' })
    await user.click(option)
    expect(screen.getByText('2 Adults, 0 Children, 1 Room')).toBeInTheDocument()
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('closes the dropdown after selecting an option', async () => {
    const user = userEvent.setup()
    render(<App />)
    const travellersBtn = screen.getByRole('button', { name: /travellers/i })
    await user.click(travellersBtn)
    const option = screen.getByRole('option', { name: '2 Adults, 1 Child, 1 Room' })
    await user.click(option)
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('renders the SEARCH button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('submits the form without page reload', async () => {
    const user = userEvent.setup()
    render(<App />)
    const button = screen.getByRole('button', { name: /search/i })
    await user.click(button)
    expect(screen.getByText('1 Adult, 0 Children, 1 Room')).toBeInTheDocument()
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
    expect(screen.getByText(/Seekwell\. All rights reserved/)).toBeInTheDocument()
  })

  it('travellers button has aria-expanded false by default', () => {
    render(<App />)
    const travellersBtn = screen.getByRole('button', { name: /travellers/i })
    expect(travellersBtn).toHaveAttribute('aria-expanded', 'false')
  })

  it('travellers button has aria-expanded true when dropdown is open', async () => {
    const user = userEvent.setup()
    render(<App />)
    const travellersBtn = screen.getByRole('button', { name: /travellers/i })
    await user.click(travellersBtn)
    expect(travellersBtn).toHaveAttribute('aria-expanded', 'true')
  })

  it('marks the selected traveller option as aria-selected', async () => {
    const user = userEvent.setup()
    render(<App />)
    const travellersBtn = screen.getByRole('button', { name: /travellers/i })
    await user.click(travellersBtn)
    const defaultOption = screen.getByRole('option', { name: '1 Adult, 0 Children, 1 Room' })
    expect(defaultOption).toHaveAttribute('aria-selected', 'true')
  })

  it('has search icon rendered as decorative', () => {
    render(<App />)
    const icons = document.querySelectorAll('[aria-hidden="true"]')
    expect(icons.length).toBeGreaterThanOrEqual(1)
  })

  it('renders the search category navigation landmark', () => {
    render(<App />)
    expect(screen.getByRole('navigation', { name: /search category/i })).toBeInTheDocument()
  })
})
