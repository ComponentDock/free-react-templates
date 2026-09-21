import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders the address', () => {
    render(<TopBar />)
    expect(screen.getByText(/198 West 21th Street/i)).toBeInTheDocument()
  })

  it('renders the phone number', () => {
    render(<TopBar />)
    expect(screen.getByText('+1235 235 598')).toBeInTheDocument()
  })

  it('renders the email', () => {
    render(<TopBar />)
    expect(screen.getByText('info@yoursite.com')).toBeInTheDocument()
  })

  it('renders the address icon', () => {
    render(<TopBar />)
    expect(screen.getByRole('link', { name: /198 West 21th Street/i })).toBeInTheDocument()
  })

  it('renders the phone link with correct href', () => {
    render(<TopBar />)
    const phoneLink = screen.getByText('+1235 235 598').closest('a')
    expect(phoneLink).toHaveAttribute('href', 'tel:+1235235598')
  })

  it('renders the email link with correct href', () => {
    render(<TopBar />)
    const emailLink = screen.getByText('info@yoursite.com').closest('a')
    expect(emailLink).toHaveAttribute('href', 'mailto:info@yoursite.com')
  })
})
