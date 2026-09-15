import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders About Us section', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { level: 3, name: 'About Us' })).toBeInTheDocument()
  })

  it('renders Contact Info section', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { level: 3, name: 'Contact Info' })).toBeInTheDocument()
  })

  it('renders Donation section', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { level: 3, name: 'Donation' })).toBeInTheDocument()
  })

  it('renders address', () => {
    render(<Footer />)
    expect(screen.getByText(/198 West 21th Street/)).toBeInTheDocument()
  })

  it('renders email', () => {
    render(<Footer />)
    expect(screen.getByText('info@embrace.org')).toBeInTheDocument()
  })

  it('renders phone', () => {
    render(<Footer />)
    expect(screen.getByText('+123 456 7890')).toBeInTheDocument()
  })

  it('renders Donate Now button', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /donate now/i })).toBeInTheDocument()
  })

  it('renders Component Dock link in copyright', () => {
    render(<Footer />)
    expect(screen.getByText('Component Dock')).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('renders Back to top button', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const btn = screen.getByText('Back to top')
    await user.click(btn)
    expect(btn).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Github')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
    expect(screen.getByLabelText('YouTube')).toBeInTheDocument()
  })
})
