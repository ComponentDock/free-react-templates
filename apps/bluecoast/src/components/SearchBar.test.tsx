import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { SearchBar } from './SearchBar'

describe('SearchBar', () => {
  it('renders all filter dropdowns', () => {
    render(<SearchBar />)
    expect(screen.getByDisplayValue('For rent')).toBeInTheDocument()
    expect(screen.getByDisplayValue('All types')).toBeInTheDocument()
    expect(screen.getByDisplayValue('City')).toBeInTheDocument()
    expect(screen.getByDisplayValue('Bedrooms')).toBeInTheDocument()
    expect(screen.getByDisplayValue('Bathrooms')).toBeInTheDocument()
  })

  it('renders the search button', () => {
    render(<SearchBar />)
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('has a gradient-styled search button', () => {
    render(<SearchBar />)
    const btn = screen.getByRole('button', { name: /search/i })
    expect(btn.className).toContain('from-brand-blue')
    expect(btn.className).toContain('to-brand-green')
  })

  it('renders selects with pill-shaped styling', () => {
    render(<SearchBar />)
    const selects = screen.getAllByRole('combobox')
    expect(selects.length).toBe(5)
    selects.forEach((select) => {
      expect(select.className).toContain('rounded-full')
    })
  })
})
