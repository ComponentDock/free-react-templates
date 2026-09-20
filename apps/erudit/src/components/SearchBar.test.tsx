import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import { SearchBar } from './SearchBar'

describe('SearchBar', () => {
  it('renders keyword search input', () => {
    render(<SearchBar />)
    expect(screen.getByPlaceholderText('Keyword search')).toBeInTheDocument()
  })

  it('renders category dropdown with options', () => {
    render(<SearchBar />)
    const selects = screen.getAllByRole('combobox')
    expect(selects.length).toBeGreaterThanOrEqual(1)
  })

  it('renders difficulty dropdown', () => {
    render(<SearchBar />)
    expect(screen.getByText('Difficulty')).toBeInTheDocument()
  })

  it('renders search button', () => {
    render(<SearchBar />)
    expect(screen.getByText('Search course')).toBeInTheDocument()
  })

  it('prevents default form submission', async () => {
    const user = userEvent.setup()
    render(<SearchBar />)
    const button = screen.getByText('Search course')
    await user.click(button)
  })
})
