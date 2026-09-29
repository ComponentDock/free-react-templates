import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('FindBox')).toBeInTheDocument()
  })

  it('renders the search input with placeholder', () => {
    render(<Navbar />)
    expect(screen.getByPlaceholderText('Enter keyword and hit enter...')).toBeInTheDocument()
  })

  it('renders the search button with aria-label', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('allows typing in the search input', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const input = screen.getByPlaceholderText('Enter keyword and hit enter...')
    await user.type(input, 'hello')
    expect(input).toHaveValue('hello')
  })

  it('submits the form without navigating', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const input = screen.getByPlaceholderText('Enter keyword and hit enter...')
    await user.type(input, 'test')
    await user.click(screen.getByRole('button', { name: /search/i }))
    expect(input).toHaveValue('test')
  })

  it('has a search form with role="search"', () => {
    render(<Navbar />)
    expect(screen.getByRole('search')).toBeInTheDocument()
  })
})
