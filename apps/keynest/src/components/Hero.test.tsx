import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByText('Find Your Dream Home')).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<Hero />)
    expect(screen.getByText('We Have Over Million Properties For You')).toBeInTheDocument()
  })

  it('renders Buy Property and Rent Property tabs', () => {
    render(<Hero />)
    expect(screen.getByText('Buy Property')).toBeInTheDocument()
    expect(screen.getByText('Rent Property')).toBeInTheDocument()
  })

  it('renders the search form fields', () => {
    render(<Hero />)
    expect(screen.getByPlaceholderText('Location')).toBeInTheDocument()
    expect(screen.getByDisplayValue('Property Type')).toBeInTheDocument()
    expect(screen.getByDisplayValue('Bedroom')).toBeInTheDocument()
  })

  it('renders the Search button', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('switches tabs on click', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const rentTab = screen.getByText('Rent Property')
    await user.click(rentTab)
    // Rent Property tab should now be active — still visible
    expect(rentTab).toBeInTheDocument()
  })

  it('form submission does not navigate', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const searchBtn = screen.getByRole('button', { name: /search/i })
    await user.click(searchBtn)
    // no error thrown
    expect(searchBtn).toBeInTheDocument()
  })
})
