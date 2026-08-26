import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders the heading "Bootstrap Accordion #3"', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /bootstrap accordion #3/i })).toBeInTheDocument()
  })

  it('renders all three accordion questions', () => {
    render(<App />)
    expect(screen.getByText('How to download and register?')).toBeInTheDocument()
    expect(screen.getByText('How to create your paypal account?')).toBeInTheDocument()
    expect(screen.getByText('How to link your paypal and bank account?')).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /more templates at component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Pleat — Interactive Accordion Template')
  })

  it('first accordion item is expanded by default', () => {
    render(<App />)
    const firstButton = screen.getByRole('button', { name: 'How to download and register?' })
    expect(firstButton).toHaveAttribute('aria-expanded', 'true')
    expect(
      screen.getByRole('region', { name: 'How to download and register?' }),
    ).toBeInTheDocument()
  })
})
