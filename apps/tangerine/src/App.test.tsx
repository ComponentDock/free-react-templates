import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Tangerine — Sign Up Form')
  })

  it('renders the split-screen layout with photo panel and form', () => {
    render(<App />)

    // The form panel should have the #f6f7fc background
    const formPanel = screen.getByText('Sign Up').closest('div')?.parentElement
    expect(formPanel).toBeInTheDocument()

    // Sign Up heading is present
    expect(screen.getByRole('heading', { level: 2, name: 'Sign Up' })).toBeInTheDocument()

    // Form fields
    expect(screen.getByLabelText('Your Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Password')).toBeInTheDocument()
    expect(screen.getByLabelText('Re-type Password')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Register' })).toBeInTheDocument()
  })

  it('renders the Component Dock footer', () => {
    render(<App />)

    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()

    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders the decorative photo panel', () => {
    const { container } = render(<App />)

    // The photo panel is an aria-hidden div with background-image
    const photoPanel = container.querySelector('[aria-hidden="true"]')
    expect(photoPanel).toBeInTheDocument()
    expect(photoPanel).toHaveClass('bg-cover', 'bg-center')
  })

  it('includes the terms checkbox and link', () => {
    render(<App />)

    const checkbox = screen.getByRole('checkbox', { name: /agree/i })
    expect(checkbox).toBeChecked()

    const termsLink = screen.getByRole('link', {
      name: 'Terms and Conditions',
    })
    expect(termsLink).toHaveAttribute('href', '#terms')
  })
})
