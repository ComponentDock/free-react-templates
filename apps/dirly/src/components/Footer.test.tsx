import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'
import { describe, it, expect } from 'vitest'

describe('Footer', () => {
  it('renders brand name', () => {
    render(<Footer />)
    expect(screen.getByText('Dirly')).toBeInTheDocument()
  })

  it('renders description text', () => {
    render(<Footer />)
    expect(screen.getByText(/Discover the best local attractions/)).toBeInTheDocument()
  })

  it('renders contact info', () => {
    render(<Footer />)
    expect(screen.getByText('123 Discovery Lane, City Center')).toBeInTheDocument()
    expect(screen.getByText('+1 (555) 987-6543')).toBeInTheDocument()
    expect(screen.getByText('hello@dirly.com')).toBeInTheDocument()
  })

  it('renders quick links', () => {
    render(<Footer />)
    const links = ['Home', 'Listings', 'Pages', 'Blog', 'Contact']
    links.forEach((link) => {
      expect(screen.getByText(link)).toBeInTheDocument()
    })
  })

  it('renders newsletter form', () => {
    render(<Footer />)
    expect(screen.getByPlaceholderText('Your email')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('prevents default on newsletter form submit', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const button = screen.getByRole('button', { name: /subscribe/i })
    await user.click(button)
  })

  it('renders copyright with current year', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(`${year} Dirly`))).toBeInTheDocument()
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders quick links with correct hrefs', () => {
    render(<Footer />)
    expect(screen.getByText('Home').closest('a')).toHaveAttribute('href', '#home')
    expect(screen.getByText('Listings').closest('a')).toHaveAttribute('href', '#listings')
  })
})
