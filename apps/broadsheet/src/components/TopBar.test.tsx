import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders the logo', () => {
    render(<TopBar />)
    expect(screen.getByText('BroadSheet')).toBeInTheDocument()
  })

  it('renders login and register links', () => {
    render(<TopBar />)
    expect(screen.getByText('Login')).toBeInTheDocument()
    expect(screen.getByText('Register')).toBeInTheDocument()
  })

  it('renders a search input', () => {
    render(<TopBar />)
    expect(screen.getByLabelText('Search')).toBeInTheDocument()
  })

  it('allows typing in the search input', async () => {
    const user = userEvent.setup()
    render(<TopBar />)
    const input = screen.getByLabelText('Search')
    await user.type(input, 'test query')
    expect(input).toHaveValue('test query')
  })

  it('renders a submit search button', () => {
    render(<TopBar />)
    expect(screen.getByLabelText('Submit search')).toBeInTheDocument()
  })

  it('handles form submission without navigating', async () => {
    const user = userEvent.setup()
    render(<TopBar />)
    await user.type(screen.getByLabelText('Search'), 'test')
    await user.click(screen.getByLabelText('Submit search'))
    expect(screen.getByLabelText('Search')).toHaveValue('test')
  })
})
