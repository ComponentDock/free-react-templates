import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders Sign Up link', () => {
    render(<Footer />)
    const link = screen.getByText('Sign Up')
    expect(link).toBeInTheDocument()
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByText('Sign Up')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('link opens in new tab', () => {
    render(<Footer />)
    const link = screen.getByText('Sign Up')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders "Don\'t have an account?" text', () => {
    render(<Footer />)
    expect(screen.getByText(/don't have an account/i)).toBeInTheDocument()
  })
})
