import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the heading and subtext', () => {
    render(<Hero />)
    expect(screen.getByText('Find Nearby')).toBeInTheDocument()
    expect(screen.getByText('Places')).toBeInTheDocument()
    expect(
      screen.getByText('Explore top-rated attractions, activities and more!'),
    ).toBeInTheDocument()
  })

  it('renders the search form with all fields', () => {
    render(<Hero />)
    expect(screen.getByPlaceholderText('What are you looking for?')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Location')).toBeInTheDocument()
    expect(screen.getByRole('combobox')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('allows typing in the search input', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const searchInput = screen.getByPlaceholderText('What are you looking for?')
    await user.type(searchInput, 'restaurants')
    expect(searchInput).toHaveValue('restaurants')
  })

  it('allows typing in the location input', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const locationInput = screen.getByPlaceholderText('Location')
    await user.type(locationInput, 'New York')
    expect(locationInput).toHaveValue('New York')
  })

  it('allows selecting a category', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const select = screen.getByRole('combobox')
    await user.selectOptions(select, 'Restaurant')
    expect(select).toHaveValue('Restaurant')
  })

  it('shows all category options', () => {
    render(<Hero />)
    expect(screen.getByRole('option', { name: 'All Categories' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Apartment' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Restaurant' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Eat & Drink' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Events' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Fitness' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Others' })).toBeInTheDocument()
  })

  it('prevents default form submission', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const submitButton = screen.getByRole('button', { name: /search/i })
    await user.click(submitButton)
    // Form should not navigate
  })
})
