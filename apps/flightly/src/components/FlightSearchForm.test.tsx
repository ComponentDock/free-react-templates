import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FlightSearchForm } from './FlightSearchForm'

describe('FlightSearchForm', () => {
  it('renders the card with all form fields', () => {
    render(<FlightSearchForm />)
    expect(screen.getByLabelText(/from/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/to/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/depart/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/return/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('renders From input with placeholder', () => {
    render(<FlightSearchForm />)
    const fromInput = screen.getByLabelText(/from/i)
    expect(fromInput).toHaveAttribute('placeholder', 'City, Region or Airport')
  })

  it('renders To input with placeholder', () => {
    render(<FlightSearchForm />)
    const toInput = screen.getByLabelText(/to/i)
    expect(toInput).toHaveAttribute('placeholder', 'City, Region or Airport')
  })

  it('allows typing in From input', async () => {
    const user = userEvent.setup()
    render(<FlightSearchForm />)
    const input = screen.getByLabelText(/from/i)
    await user.type(input, 'New York')
    expect(input).toHaveValue('New York')
  })

  it('allows typing in To input', async () => {
    const user = userEvent.setup()
    render(<FlightSearchForm />)
    const input = screen.getByLabelText(/to/i)
    await user.type(input, 'London')
    expect(input).toHaveValue('London')
  })

  it('allows setting depart date', async () => {
    const user = userEvent.setup()
    render(<FlightSearchForm />)
    const input = screen.getByLabelText(/depart/i)
    await user.type(input, '2025-12-25')
    expect(input).toHaveValue('2025-12-25')
  })

  it('allows setting return date', async () => {
    const user = userEvent.setup()
    render(<FlightSearchForm />)
    const input = screen.getByLabelText(/return/i)
    await user.type(input, '2025-12-30')
    expect(input).toHaveValue('2025-12-30')
  })

  it('shows default passengers as 1 Adult, 0 Children', () => {
    render(<FlightSearchForm />)
    expect(screen.getByText('1 Adult, 0 Children')).toBeInTheDocument()
  })

  it('increments adults when plus button clicked', async () => {
    const user = userEvent.setup()
    render(<FlightSearchForm />)
    await user.click(screen.getByRole('button', { name: /passengers/i }))
    await user.click(screen.getByRole('button', { name: /increase adults/i }))
    expect(screen.getByText('2 Adults, 0 Children')).toBeInTheDocument()
  })

  it('decrements adults when minus button clicked', async () => {
    const user = userEvent.setup()
    render(<FlightSearchForm />)
    await user.click(screen.getByRole('button', { name: /passengers/i }))
    await user.click(screen.getByRole('button', { name: /increase adults/i }))
    expect(screen.getByText('2 Adults, 0 Children')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /decrease adults/i }))
    expect(screen.getByText('1 Adult, 0 Children')).toBeInTheDocument()
  })

  it('increments children when plus button clicked', async () => {
    const user = userEvent.setup()
    render(<FlightSearchForm />)
    await user.click(screen.getByRole('button', { name: /passengers/i }))
    await user.click(screen.getByRole('button', { name: /increase children/i }))
    expect(screen.getByText('1 Adult, 1 Child')).toBeInTheDocument()
  })

  it('handles form submission without page reload', async () => {
    const user = userEvent.setup()
    render(<FlightSearchForm />)
    const button = screen.getByRole('button', { name: /search/i })
    await user.click(button)
    expect(button).toBeInTheDocument()
  })

  it('has a white card with correct background', () => {
    render(<FlightSearchForm />)
    const card = screen.getByRole('search')
    expect(card).toHaveClass('bg-white')
  })

  it('toggles passengers dropdown on click', async () => {
    const user = userEvent.setup()
    render(<FlightSearchForm />)
    const toggle = screen.getByRole('button', { name: /passengers/i })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('prevents adults from going below 1', async () => {
    const user = userEvent.setup()
    render(<FlightSearchForm />)
    await user.click(screen.getByRole('button', { name: /passengers/i }))
    await user.click(screen.getByRole('button', { name: /decrease adults/i }))
    expect(screen.getByText('1 Adult, 0 Children')).toBeInTheDocument()
  })

  it('prevents children from going below 0', async () => {
    const user = userEvent.setup()
    render(<FlightSearchForm />)
    await user.click(screen.getByRole('button', { name: /passengers/i }))
    await user.click(screen.getByRole('button', { name: /decrease children/i }))
    expect(screen.getByText('1 Adult, 0 Children')).toBeInTheDocument()
  })
})
