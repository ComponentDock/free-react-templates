import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { SearchForm } from './SearchForm'

describe('SearchForm', () => {
  it('renders Find Your Home tab', () => {
    render(<SearchForm />)
    expect(screen.getByText('Find Your Home')).toBeInTheDocument()
  })

  it('renders House For Sale tab', () => {
    render(<SearchForm />)
    expect(screen.getByText('House For Sale')).toBeInTheDocument()
  })

  it('renders the search button', () => {
    render(<SearchForm />)
    expect(screen.getByText('Search')).toBeInTheDocument()
  })

  it('renders dropdown labels', () => {
    render(<SearchForm />)
    expect(screen.getByLabelText('Property Type')).toBeInTheDocument()
    expect(screen.getByLabelText('Title')).toBeInTheDocument()
    expect(screen.getByLabelText('City')).toBeInTheDocument()
    expect(screen.getByLabelText('Bedrooms')).toBeInTheDocument()
  })

  it('renders price and size labels', () => {
    render(<SearchForm />)
    expect(screen.getByText('Price: No Limits')).toBeInTheDocument()
    expect(screen.getByText('Size: No Limits')).toBeInTheDocument()
  })

  it('switches to House For Sale tab', async () => {
    const user = userEvent.setup()
    render(<SearchForm />)
    await user.click(screen.getByText('House For Sale'))
    expect(screen.getByText('House For Sale')).toBeInTheDocument()
  })

  it('switches back to Find Your Home tab', async () => {
    const user = userEvent.setup()
    render(<SearchForm />)
    await user.click(screen.getByText('House For Sale'))
    await user.click(screen.getByText('Find Your Home'))
    expect(screen.getByText('Find Your Home')).toBeInTheDocument()
  })

  it('has search section id', () => {
    render(<SearchForm />)
    expect(document.getElementById('search')).toBeInTheDocument()
  })
})
