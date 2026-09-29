import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders the search overlay by default', () => {
    render(<App />)
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByLabelText('Close search')).toBeInTheDocument()
    expect(screen.getByLabelText('Search input')).toBeInTheDocument()
  })

  it('renders the hint text', () => {
    render(<App />)
    expect(screen.getByText(/press \[esc\] to close/i)).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('closes the overlay when the close button is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByLabelText('Close search'))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(screen.getByText('Search closed.')).toBeInTheDocument()
  })

  it('closes the overlay when Escape is pressed', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.keyboard('{Escape}')
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(screen.getByText('Search closed.')).toBeInTheDocument()
  })

  it('shows reopen link after closing', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByLabelText('Close search'))
    expect(screen.getByRole('button', { name: /reopen search/i })).toBeInTheDocument()
  })

  it('reopens the overlay when reopen button is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByLabelText('Close search'))
    await user.click(screen.getByRole('button', { name: /reopen search/i }))
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('preserves query after closing and reopening', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(screen.getByLabelText('Search input'), 'react templates')
    await user.click(screen.getByLabelText('Close search'))
    expect(screen.getByText('react templates')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /reopen search/i }))
    expect(screen.getByDisplayValue('react templates')).toBeInTheDocument()
  })

  it('accepts text input', async () => {
    const user = userEvent.setup()
    render(<App />)
    const input = screen.getByLabelText('Search input')
    await user.type(input, 'react components')
    expect(input).toHaveValue('react components')
  })

  it('does not show last search when no query was entered', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByLabelText('Close search'))
    expect(screen.queryByText(/last search/i)).not.toBeInTheDocument()
  })
})
