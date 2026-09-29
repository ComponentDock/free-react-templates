import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders overlay with dark background on load', () => {
    render(<App />)
    expect(screen.getByRole('search')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument()
  })

  it('renders close button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: 'Close search overlay' })).toBeInTheDocument()
  })

  it('renders footer with Component Dock link', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /Component Dock/i })).toBeInTheDocument()
  })

  it('dismisses overlay when close button is clicked', async () => {
    render(<App />)
    await userEvent.click(screen.getByRole('button', { name: 'Close search overlay' }))
    expect(screen.getByText('Search closed.')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Reopen search' })).toBeInTheDocument()
  })

  it('shows last search query after closing', async () => {
    render(<App />)
    const input = screen.getByPlaceholderText('Search...')
    await userEvent.type(input, 'vacation')
    await userEvent.click(screen.getByRole('button', { name: 'Search' }))
    await userEvent.click(screen.getByRole('button', { name: 'Close search overlay' }))
    expect(screen.getByText('vacation')).toBeInTheDocument()
  })

  it('reopens search overlay', async () => {
    render(<App />)
    await userEvent.click(screen.getByRole('button', { name: 'Close search overlay' }))
    expect(screen.getByText('Search closed.')).toBeInTheDocument()
    await userEvent.click(screen.getByRole('button', { name: 'Reopen search' }))
    expect(screen.getByRole('search')).toBeInTheDocument()
  })
})
