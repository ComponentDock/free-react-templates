import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the hero heading', () => {
    render(<Hero />)
    expect(screen.getByText(/we're real estate king/i)).toBeInTheDocument()
  })

  it('renders the search properties heading', () => {
    render(<Hero />)
    expect(screen.getByText('Search Properties For')).toBeInTheDocument()
  })

  it('renders sell and rent toggle buttons', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: 'Sell' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Rent' })).toBeInTheDocument()
  })

  it('defaults sell button to active state', () => {
    render(<Hero />)
    const sellBtn = screen.getByRole('button', { name: 'Sell' })
    expect(sellBtn).toHaveClass('bg-brand')
  })

  it('toggles between sell and rent', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    const rentBtn = screen.getByRole('button', { name: 'Rent' })
    await user.click(rentBtn)
    expect(rentBtn).toHaveClass('bg-brand')

    const sellBtn = screen.getByRole('button', { name: 'Sell' })
    expect(sellBtn).toHaveClass('bg-gray-100')

    // Click sell to toggle back
    await user.click(sellBtn)
    expect(sellBtn).toHaveClass('bg-brand')
  })

  it('renders location dropdown', () => {
    render(<Hero />)
    expect(screen.getByLabelText('Choose locations')).toBeInTheDocument()
  })

  it('renders property type dropdown', () => {
    render(<Hero />)
    expect(screen.getByLabelText('Property Type')).toBeInTheDocument()
  })

  it('renders bedrooms dropdown', () => {
    render(<Hero />)
    expect(screen.getByLabelText('Bedrooms')).toBeInTheDocument()
  })

  it('renders search button', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /search properties/i })).toBeInTheDocument()
  })

  it('renders price range slider', () => {
    render(<Hero />)
    expect(screen.getByLabelText('Minimum price')).toBeInTheDocument()
  })

  it('renders area range slider', () => {
    render(<Hero />)
    expect(screen.getByLabelText('Minimum area')).toBeInTheDocument()
  })
})
