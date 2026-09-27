import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByText(/we're real estate king/i)).toBeInTheDocument()
  })

  it('renders search form selects', () => {
    render(<Hero />)
    expect(screen.getByLabelText(/choose location/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/property type/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/number of bedrooms/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/price range/i)).toBeInTheDocument()
  })

  it('renders search button', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /search properties/i })).toBeInTheDocument()
  })

  it('toggles sell/rent mode on toggle click', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const toggle = screen.getByRole('button', { name: /switch to rent mode/i })
    expect(screen.getByText(/sell/i)).toBeInTheDocument()
    await user.click(toggle)
    expect(screen.getByText(/rent/i)).toBeInTheDocument()
    // Toggle back to sell
    await user.click(screen.getByRole('button', { name: /switch to sell mode/i }))
    expect(screen.getByText(/sell/i)).toBeInTheDocument()
  })
})
