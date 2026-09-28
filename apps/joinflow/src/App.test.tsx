import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the Register heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Register')
  })

  it('renders the form with submit button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /register/i })).toHaveAttribute('type', 'submit')
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders the social login buttons', () => {
    render(<App />)
    const socialButtons = screen.getAllByRole('link')
    const socialNames = socialButtons.map((b) => b.getAttribute('aria-label') || b.textContent)
    expect(socialNames.some((n) => n?.toLowerCase().includes('facebook'))).toBe(true)
    expect(socialNames.some((n) => n?.toLowerCase().includes('twitter'))).toBe(true)
    expect(socialNames.some((n) => n?.toLowerCase().includes('google'))).toBe(true)
  })

  it('renders the divider text', () => {
    render(<App />)
    const dividers = screen.getAllByText('— or —')
    expect(dividers.length).toBeGreaterThanOrEqual(1)
  })
})
