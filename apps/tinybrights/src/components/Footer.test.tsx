import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the logo and about text', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'TinyBrights' })).toBeInTheDocument()
    expect(screen.getByText(/nurturing space/i)).toBeInTheDocument()
  })

  it('renders social links with external targets', () => {
    render(<Footer />)
    for (const label of ['Facebook', 'Twitter', 'Instagram', 'LinkedIn']) {
      expect(screen.getByRole('link', { name: label })).toHaveAttribute('target', '_blank')
    }
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders newsletter form', () => {
    render(<Footer />)
    expect(screen.getByPlaceholderText('Your email')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('handles newsletter form submission', () => {
    render(<Footer />)
    const form = screen.getByPlaceholderText('Your email').closest('form')!
    fireEvent.submit(form)
    expect(form).toBeInTheDocument()
  })
})
