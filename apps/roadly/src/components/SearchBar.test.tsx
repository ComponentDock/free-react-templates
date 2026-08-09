import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SearchBar } from './SearchBar'

describe('SearchBar', () => {
  it('renders the filter dropdowns and search button', () => {
    render(<SearchBar />)
    for (const label of ['Select Model', 'Select Brand', 'Year Model', 'Price Limit']) {
      expect(screen.getByLabelText(label)).toBeInTheDocument()
    }
    expect(screen.getByRole('button', { name: /Search/i })).toBeInTheDocument()
  })

  it('offers model and brand options', () => {
    render(<SearchBar />)
    const model = screen.getByLabelText('Select Model')
    expect(model.querySelectorAll('option').length).toBeGreaterThan(1)
    const brand = screen.getByLabelText('Select Brand')
    expect(brand.textContent).toMatch(/Audi/i)
  })
})
