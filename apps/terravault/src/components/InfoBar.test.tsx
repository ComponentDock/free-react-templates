import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { InfoBar } from './InfoBar'

describe('InfoBar', () => {
  it('renders the Terravault logo', () => {
    render(<InfoBar />)
    expect(screen.getByText('Terravault')).toBeInTheDocument()
  })

  it('renders the phone number', () => {
    render(<InfoBar />)
    expect(screen.getByText('+1 (555) 123-4567')).toBeInTheDocument()
  })

  it('renders the address', () => {
    render(<InfoBar />)
    expect(screen.getByText('123 Main Street, New York, NY')).toBeInTheDocument()
  })

  it('renders the email', () => {
    render(<InfoBar />)
    expect(screen.getByText('info@terravault.com')).toBeInTheDocument()
  })

  it('has correct phone link', () => {
    render(<InfoBar />)
    const phoneLink = screen.getByText('+1 (555) 123-4567').closest('a')
    expect(phoneLink).toHaveAttribute('href', 'tel:+15551234567')
  })

  it('has correct email link', () => {
    render(<InfoBar />)
    const emailLink = screen.getByText('info@terravault.com').closest('a')
    expect(emailLink).toHaveAttribute('href', 'mailto:info@terravault.com')
  })
})
