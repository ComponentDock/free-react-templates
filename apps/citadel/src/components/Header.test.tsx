import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Header } from './Header'

describe('Header', () => {
  it('renders the logo', () => {
    render(<Header />)
    expect(screen.getByText('itadel')).toBeInTheDocument()
  })

  it('renders the phone number', () => {
    render(<Header />)
    expect(screen.getByText('+1 (800) 256-3562')).toBeInTheDocument()
  })

  it('renders the email', () => {
    render(<Header />)
    expect(screen.getByText('support@citadel.com')).toBeInTheDocument()
  })

  it('renders top bar navigation links', () => {
    render(<Header />)
    expect(screen.getByText('News & Media')).toBeInTheDocument()
    expect(screen.getByText('Review')).toBeInTheDocument()
    expect(screen.getByText('FAQ')).toBeInTheDocument()
  })

  it('renders all main navigation links', () => {
    render(<Header />)
    const navLinks = ['Home', 'About', 'Services', 'Projects', 'Blog', 'Contact']
    for (const link of navLinks) {
      expect(screen.getByText(link)).toBeInTheDocument()
    }
  })

  it('renders the search button', () => {
    render(<Header />)
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('renders the Get a Quote button', () => {
    render(<Header />)
    expect(screen.getByText('Get a Quote')).toBeInTheDocument()
  })

  it('search button is clickable', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const btn = screen.getByRole('button', { name: /search/i })
    await user.click(btn)
  })
})
