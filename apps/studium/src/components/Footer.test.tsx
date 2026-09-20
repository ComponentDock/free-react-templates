import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders columns, copyright, and Component Dock link', () => {
    render(<Footer />)
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Help Desk')).toBeInTheDocument()
    expect(screen.getByText('Recent Courses')).toBeInTheDocument()
    expect(screen.getByText('Have a Questions?')).toBeInTheDocument()
    expect(screen.getByText(/© 2026 Studium/)).toBeInTheDocument()
    const dockLink = screen.getByText('Component Dock')
    expect(dockLink).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(dockLink).toHaveAttribute('target', '_blank')
  })

  it('handles newsletter form submission', () => {
    render(<Footer />)
    const emailInput = screen.getByPlaceholderText('Your email')
    const form = emailInput.closest('form')!
    fireEvent.submit(form)
  })
})
