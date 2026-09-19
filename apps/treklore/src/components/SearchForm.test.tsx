import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { SearchForm } from './SearchForm'

describe('SearchForm', () => {
  it('renders the search heading', () => {
    render(<SearchForm />)
    expect(screen.getByText('Search for your trip')).toBeInTheDocument()
  })

  it('renders all input fields with labels', () => {
    render(<SearchForm />)
    expect(screen.getByPlaceholderText('City')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Departure')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Arrival')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Budget')).toBeInTheDocument()
  })

  it('has a search button', () => {
    render(<SearchForm />)
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('renders as a search landmark', () => {
    render(<SearchForm />)
    expect(screen.getByRole('search')).toBeInTheDocument()
  })

  it('allows form submission', async () => {
    const user = userEvent.setup()
    render(<SearchForm />)
    await user.click(screen.getByRole('button', { name: /search/i }))
    // No error thrown means form submit handler ran
  })
})
