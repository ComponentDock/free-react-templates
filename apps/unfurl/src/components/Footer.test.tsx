import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Footer from './Footer'

describe('Footer', () => {
  it('renders the logo', () => {
    render(<Footer />)
    expect(screen.getByText('Unfurl')).toBeInTheDocument()
  })

  it('renders social links', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: /facebook/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /twitter/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /instagram/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /dribbble/i })).toBeInTheDocument()
  })

  it('renders Component Dock link', () => {
    render(<Footer />)

    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders copyright with current year', () => {
    render(<Footer />)

    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })

  it('renders Made with text', () => {
    render(<Footer />)
    expect(screen.getByText(/Made with/)).toBeInTheDocument()
  })
})
