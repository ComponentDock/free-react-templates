import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders footer content', () => {
    render(<Footer />)
    expect(screen.getByText('Threadline')).toBeInTheDocument()
    expect(screen.getByText('Shopping')).toBeInTheDocument()
    expect(screen.getAllByText('Contact Us').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Newsletter')).toBeInTheDocument()
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders newsletter form', () => {
    render(<Footer />)
    expect(screen.getByLabelText(/Email for newsletter/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Subscribe to newsletter/i)).toBeInTheDocument()
  })

  it('renders shopping links', () => {
    render(<Footer />)
    expect(screen.getByText('Clothing Store')).toBeInTheDocument()
    expect(screen.getByText('Trending Shoes')).toBeInTheDocument()
  })

  it('renders contact links', () => {
    render(<Footer />)
    expect(screen.getByText('Payment Methods')).toBeInTheDocument()
    expect(screen.getByText('Delivery')).toBeInTheDocument()
  })

  it('renders copyright with current year', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })

  it('handles newsletter form submit', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByLabelText(/Email for newsletter/i)
    await user.type(input, 'test@example.com')
    await user.click(screen.getByLabelText(/Subscribe to newsletter/i))
    expect(input).toHaveValue('test@example.com')
  })
})
