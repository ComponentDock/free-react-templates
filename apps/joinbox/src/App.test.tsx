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

  it('renders the background image panel', () => {
    render(<App />)
    // The image panel is a div with background-image style
    const panels = document.querySelectorAll('[style*="picsum"]')
    expect(panels.length).toBe(1)
  })
})
