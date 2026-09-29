import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders the search overlay by default', () => {
    render(<App />)
    expect(screen.getByRole('search')).toBeInTheDocument()
    expect(screen.getByLabelText('Close search overlay')).toBeInTheDocument()
    expect(screen.getByLabelText('Search input')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /^Search$/ })).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('closes the overlay when the close button is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByLabelText('Close search overlay'))
    expect(screen.queryByRole('search')).not.toBeInTheDocument()
    expect(screen.getByText('Search closed.')).toBeInTheDocument()
  })

  it('shows reopen link after closing', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByLabelText('Close search overlay'))
    const reopen = screen.getByRole('button', { name: /reopen search/i })
    expect(reopen).toBeInTheDocument()
  })

  it('reopens the overlay when reopen button is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByLabelText('Close search overlay'))
    await user.click(screen.getByRole('button', { name: /reopen search/i }))
    expect(screen.getByRole('search')).toBeInTheDocument()
  })

  it('submits search query via button click', async () => {
    const user = userEvent.setup()
    render(<App />)
    const input = screen.getByLabelText('Search input')
    await user.type(input, 'vacation')
    await user.click(screen.getByRole('button', { name: /^search$/i }))
    await user.click(screen.getByLabelText('Close search overlay'))
    expect(screen.getByText(/last search/i)).toBeInTheDocument()
    expect(screen.getByText('vacation')).toBeInTheDocument()
  })

  it('submits search query via Enter key', async () => {
    const user = userEvent.setup()
    render(<App />)
    const input = screen.getByLabelText('Search input')
    await user.type(input, 'beach{Enter}')
    await user.click(screen.getByLabelText('Close search overlay'))
    expect(screen.getByText('beach')).toBeInTheDocument()
  })

  it('does not submit empty queries', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /^search$/i }))
    await user.click(screen.getByLabelText('Close search overlay'))
    expect(screen.queryByText(/last search/i)).not.toBeInTheDocument()
  })

  it('does not submit whitespace-only queries', async () => {
    const user = userEvent.setup()
    render(<App />)
    const input = screen.getByLabelText('Search input')
    await user.type(input, '   ')
    await user.click(screen.getByRole('button', { name: /^search$/i }))
    await user.click(screen.getByLabelText('Close search overlay'))
    expect(screen.queryByText(/last search/i)).not.toBeInTheDocument()
  })
})
