import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SearchBar } from './SearchBar'

describe('SearchBar', () => {
  it('renders the search form with inputs and submit button', () => {
    render(<SearchBar />)
    expect(screen.getByRole('heading', { name: /Find Your Home/i })).toBeInTheDocument()
    expect(screen.getByLabelText('Property Type')).toBeInTheDocument()
    expect(screen.getByLabelText('No of Rooms')).toBeInTheDocument()
    expect(screen.getByLabelText('Location')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Search/i })).toBeInTheDocument()
  })

  it('has the correct select options', () => {
    render(<SearchBar />)
    const typeSelect = screen.getByLabelText('Property Type')
    expect(typeSelect).toHaveDisplayValue('Select Type')
  })
})
