import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders the navbar with brand', () => {
    render(<App />)
    expect(screen.getByText('Brand')).toBeInTheDocument()
  })

  it('renders nav links', () => {
    render(<App />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders instructional content', () => {
    render(<App />)
    expect(screen.getByText(/please click the search icon/i)).toBeInTheDocument()
  })

  it('renders footer with Component Dock link', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /component dock/i })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('search overlay is hidden by default', () => {
    render(<App />)
    const input = screen.queryByPlaceholderText('Search...')
    expect(input).not.toBeInTheDocument()
  })

  it('toggles search overlay open and closed', async () => {
    const user = userEvent.setup()
    render(<App />)
    const toggleBtn = screen.getByRole('button', { name: /toggle search/i })
    await user.click(toggleBtn)
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument()
    const closeBtn = screen.getByRole('button', { name: /close search/i })
    await user.click(closeBtn)
    expect(screen.queryByPlaceholderText('Search...')).not.toBeInTheDocument()
  })

  it('sets page title', () => {
    render(<App />)
    expect(document.title).toBe('SearchQuint — Search Form Snippet')
  })
})
