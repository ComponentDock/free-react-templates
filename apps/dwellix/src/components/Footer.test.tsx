import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand logo', () => {
    render(<Footer />)
    expect(screen.getByText(/DWELL/)).toBeInTheDocument()
    expect(screen.getByText(/IX/)).toBeInTheDocument()
  })

  it('renders social icons', () => {
    render(<Footer />)
    // Footer has social icons twice (brand section + aria labels)
    const fbIcons = screen.getAllByLabelText('Facebook')
    expect(fbIcons.length).toBeGreaterThanOrEqual(1)
  })

  it('renders contact info', () => {
    render(<Footer />)
    expect(screen.getByText('(12) 345 6789')).toBeInTheDocument()
    expect(screen.getByText('info@dwellix.com')).toBeInTheDocument()
  })

  it('renders property cities', () => {
    render(<Footer />)
    expect(screen.getByText('New York')).toBeInTheDocument()
    expect(screen.getByText('Los Angeles')).toBeInTheDocument()
    expect(screen.getByText('Chicago')).toBeInTheDocument()
  })

  it('renders newsletter form', () => {
    render(<Footer />)
    expect(screen.getByPlaceholderText('Enter your email...')).toBeInTheDocument()
    expect(screen.getByLabelText('Subscribe')).toBeInTheDocument()
  })

  it('renders copyright with Component Dock link', () => {
    render(<Footer />)
    expect(screen.getByText(/Dwellix/)).toBeInTheDocument()
    const cdLink = screen.getByText('Component Dock')
    expect(cdLink).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders footer menu links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Properties' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Agents' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })

  it('does not navigate on newsletter submit', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const emailInput = screen.getByPlaceholderText('Enter your email...')
    await user.type(emailInput, 'test@example.com')
    const submitBtn = screen.getByLabelText('Subscribe')
    await user.click(submitBtn)
    expect(emailInput).toHaveValue('test@example.com')
  })
})
