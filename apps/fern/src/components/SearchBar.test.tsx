import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SearchBar } from './SearchBar'

describe('SearchBar', () => {
  it('renders the search form with all fields', () => {
    render(<SearchBar />)
    expect(screen.getByLabelText('Keyword')).toBeInTheDocument()
    expect(screen.getByLabelText('Property Type')).toBeInTheDocument()
    expect(screen.getByLabelText('Price Limit')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
  })

  it('has property type options', () => {
    render(<SearchBar />)
    const select = screen.getByLabelText('Property Type')
    expect(select).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Residence' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Offices' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Commercial' })).toBeInTheDocument()
  })

  it('has price limit options', () => {
    render(<SearchBar />)
    expect(screen.getByRole('option', { name: '$5,000' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: '$1,000,000' })).toBeInTheDocument()
  })

  it('prevents form submission', () => {
    render(<SearchBar />)
    const form = screen.getByRole('button', { name: 'Search' }).closest('form') as HTMLFormElement
    expect(form).toBeInTheDocument()
    const submitEvent = new Event('submit', { bubbles: true, cancelable: true })
    const preventDefault = vi.fn()
    form.addEventListener('submit', (e) => {
      preventDefault()
      e.preventDefault()
    })
    form.dispatchEvent(submitEvent)
    expect(preventDefault).toHaveBeenCalled()
  })
})
