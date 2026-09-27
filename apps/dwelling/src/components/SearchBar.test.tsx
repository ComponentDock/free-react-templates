import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { SearchBar } from './SearchBar'

describe('SearchBar', () => {
  it('renders the heading', () => {
    render(<SearchBar />)
    expect(screen.getByText('Where would you rather live?')).toBeInTheDocument()
  })

  it('renders the location input', () => {
    render(<SearchBar />)
    expect(screen.getByPlaceholderText('Enter city or zip')).toBeInTheDocument()
  })

  it('renders property type dropdown', () => {
    render(<SearchBar />)
    expect(screen.getByLabelText('Property Type')).toBeInTheDocument()
  })

  it('renders city dropdown', () => {
    render(<SearchBar />)
    expect(screen.getByLabelText('City')).toBeInTheDocument()
  })

  it('renders price range dropdown', () => {
    render(<SearchBar />)
    expect(screen.getByLabelText('Price Range')).toBeInTheDocument()
  })

  it('renders the search button', () => {
    render(<SearchBar />)
    expect(screen.getByText('Search')).toBeInTheDocument()
  })

  it('renders the more filters button', () => {
    render(<SearchBar />)
    expect(screen.getByText('More Filters')).toBeInTheDocument()
  })

  it('allows typing in the location input', async () => {
    const user = userEvent.setup()
    render(<SearchBar />)
    const input = screen.getByPlaceholderText('Enter city or zip')
    await user.type(input, 'New York')
    expect(input).toHaveValue('New York')
  })

  it('allows selecting a property type', async () => {
    const user = userEvent.setup()
    render(<SearchBar />)
    const select = screen.getByLabelText('Property Type')
    await user.selectOptions(select, 'Villa')
    expect(select).toHaveValue('Villa')
  })
})
