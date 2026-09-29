import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { SearchBar } from './SearchBar'

describe('SearchBar', () => {
  it('renders a text input with placeholder', () => {
    render(<SearchBar />)
    expect(screen.getByPlaceholderText('Search Jobs...')).toBeInTheDocument()
  })

  it('renders a categories dropdown', () => {
    render(<SearchBar />)
    expect(screen.getByRole('combobox')).toBeInTheDocument()
    expect(screen.getByText('Categories')).toBeInTheDocument()
  })

  it('renders a search button', () => {
    render(<SearchBar />)
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('allows typing in the search input', async () => {
    const user = userEvent.setup()
    render(<SearchBar />)
    const input = screen.getByPlaceholderText('Search Jobs...')
    await user.type(input, 'developer')
    expect(input).toHaveValue('developer')
  })

  it('allows selecting a category', async () => {
    const user = userEvent.setup()
    render(<SearchBar />)
    const select = screen.getByRole('combobox')
    await user.selectOptions(select, 'Design')
    expect(select).toHaveValue('Design')
  })

  it('has accessible labels', () => {
    render(<SearchBar />)
    expect(screen.getByLabelText('Search jobs')).toBeInTheDocument()
    expect(screen.getByLabelText('Category')).toBeInTheDocument()
  })
})
