import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the three dark-footer widgets', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveClass('bg-ink')
    expect(screen.getByRole('heading', { name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Newsletter' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Follow Us' })).toBeInTheDocument()
    expect(screen.getByText('Stay update with our latest')).toBeInTheDocument()
    expect(screen.getByText('Let us be social')).toBeInTheDocument()
  })

  it('validates the newsletter email and confirms a valid subscription', () => {
    render(<Footer />)
    const input = screen.getByRole('textbox', { name: 'Email address' })
    const button = screen.getByRole('button', { name: 'Subscribe' })
    expect(button).toHaveClass('bb-btn')
    fireEvent.click(button)
    expect(screen.getByText('Please enter a valid email address')).toHaveAttribute('role', 'alert')
    fireEvent.change(input, { target: { value: 'ada@example.com' } })
    fireEvent.click(button)
    expect(screen.getByRole('status')).toHaveTextContent('Thanks for subscribing!')
  })

  it('shows social links and the mandatory Component Dock credit', () => {
    render(<Footer />)
    for (const label of ['Facebook', 'Twitter', 'Dribbble', 'Behance']) {
      expect(screen.getByRole('link', { name: label })).toHaveClass('social-link')
    }
    const credit = screen.getByRole('link', { name: 'Component Dock' })
    expect(credit).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(
      screen.getByText(new RegExp(`Copyright © ${new Date().getFullYear()}`)),
    ).toBeInTheDocument()
  })
})
