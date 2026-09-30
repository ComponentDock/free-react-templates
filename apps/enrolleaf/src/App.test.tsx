import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the Sign Up heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2, name: /sign up/i })).toBeInTheDocument()
  })

  it('sets the document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('Enrolleaf — Registration Form Template')
  })

  it('renders the Component Dock footer link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders the Terms and Conditions link in the form', () => {
    render(<App />)
    const termsLink = screen.getByRole('link', {
      name: /terms and conditions/i,
    })
    expect(termsLink).toBeInTheDocument()
  })

  it('renders the Privacy Policy link in the form', () => {
    render(<App />)
    const privacyLink = screen.getByRole('link', { name: /privacy policy/i })
    expect(privacyLink).toBeInTheDocument()
  })
})
