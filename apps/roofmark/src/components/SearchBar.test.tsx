import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SearchBar } from './SearchBar'

describe('SearchBar', () => {
  it('renders the title', () => {
    render(<SearchBar />)
    expect(screen.getByText('Find your home')).toBeInTheDocument()
  })

  it('renders three inputs', () => {
    render(<SearchBar />)
    expect(screen.getByPlaceholderText('Property type')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('No rooms')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Location')).toBeInTheDocument()
  })

  it('renders submit button', () => {
    render(<SearchBar />)
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('allows typing in inputs', async () => {
    const user = userEvent.setup()
    render(<SearchBar />)
    const propertyType = screen.getByPlaceholderText('Property type')
    await user.type(propertyType, 'House')
    expect(propertyType).toHaveValue('House')
  })

  it('submits form without error', async () => {
    const user = userEvent.setup()
    render(<SearchBar />)
    const button = screen.getByRole('button', { name: /search/i })
    await user.click(button)
  })
})
