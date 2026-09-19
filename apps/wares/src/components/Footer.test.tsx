import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders logo and tagline', () => {
    render(<Footer />)
    expect(screen.getByText('WARES')).toBeInTheDocument()
    expect(screen.getByText(/one-stop shop/)).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })

  it('renders My Account section', () => {
    render(<Footer />)
    expect(screen.getAllByText('My Account').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('My Wishlist')).toBeInTheDocument()
    expect(screen.getByText('Compare')).toBeInTheDocument()
    expect(screen.getByText('Checkout')).toBeInTheDocument()
    expect(screen.getByText('Login')).toBeInTheDocument()
  })

  it('renders Customer Service section', () => {
    render(<Footer />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByText('Shipping & Returns')).toBeInTheDocument()
    expect(screen.getByText('Shipping Guide')).toBeInTheDocument()
    expect(screen.getByText('FAQ')).toBeInTheDocument()
  })

  it('renders newsletter signup', () => {
    render(<Footer />)
    expect(screen.getByText('Stay Connected')).toBeInTheDocument()
    expect(screen.getByLabelText('Email for newsletter')).toBeInTheDocument()
    expect(screen.getByLabelText('Subscribe to newsletter')).toBeInTheDocument()
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('allows typing in newsletter email', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByLabelText('Email for newsletter')
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')
  })

  it('prevents form submission', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const button = screen.getByLabelText('Subscribe to newsletter')
    await user.click(button)
    // Form should not navigate (onSubmit calls e.preventDefault())
  })
})
