import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SearchForm } from './SearchForm'

describe('SearchForm', () => {
  it('renders all form fields and the search button', () => {
    render(<SearchForm />)

    expect(screen.getByLabelText(/Going To/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Check-In/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Check-Out/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Travelers/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Add a Flight/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Add a Car/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Search/i })).toBeInTheDocument()
  })

  it('allows typing a destination', async () => {
    const user = userEvent.setup()
    render(<SearchForm />)

    const dest = screen.getByLabelText(/Going To/i)
    await user.type(dest, 'Paris')
    expect(dest).toHaveValue('Paris')
  })

  it('allows selecting check-in and check-out dates', async () => {
    const user = userEvent.setup()
    render(<SearchForm />)

    const checkIn = screen.getByLabelText(/Check-In/i)
    await user.type(checkIn, '2026-12-01')
    expect(checkIn).toHaveValue('2026-12-01')

    const checkOut = screen.getByLabelText(/Check-Out/i)
    await user.type(checkOut, '2026-12-07')
    expect(checkOut).toHaveValue('2026-12-07')
  })

  it('allows changing travelers dropdown', async () => {
    const user = userEvent.setup()
    render(<SearchForm />)

    const travelers = screen.getByLabelText(/Travelers/i)
    await user.selectOptions(travelers, '2 adults')
    expect(travelers).toHaveValue('2 adults')
  })

  it('toggles flight and car checkboxes', async () => {
    const user = userEvent.setup()
    render(<SearchForm />)

    const flight = screen.getByLabelText(/Add a Flight/i)
    const car = screen.getByLabelText(/Add a Car/i)

    // Flight starts checked
    expect(flight).toBeChecked()
    expect(car).not.toBeChecked()

    await user.click(flight)
    expect(flight).not.toBeChecked()

    await user.click(car)
    expect(car).toBeChecked()
  })

  it('calls onSubmit with form data when submitted', async () => {
    const user = userEvent.setup()
    const onSubmit = vi.fn()
    render(<SearchForm onSubmit={onSubmit} />)

    await user.type(screen.getByLabelText(/Going To/i), 'Tokyo')
    await user.type(screen.getByLabelText(/Check-In/i), '2026-11-15')
    await user.type(screen.getByLabelText(/Check-Out/i), '2026-11-22')
    await user.selectOptions(screen.getByLabelText(/Travelers/i), '3 adults')
    await user.click(screen.getByLabelText(/Add a Car/i))

    await user.click(screen.getByRole('button', { name: /Search/i }))

    expect(onSubmit).toHaveBeenCalledWith({
      destination: 'Tokyo',
      checkIn: '2026-11-15',
      checkOut: '2026-11-22',
      travelers: '3 adults',
      addFlight: true,
      addCar: true,
    })
  })

  it('renders the form with correct aria-label', () => {
    render(<SearchForm />)
    expect(screen.getByRole('form', { name: 'Hotel search form' })).toBeInTheDocument()
  })
})
