import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders the heading "Frequently Asked Questions"', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /frequently asked questions/i })).toBeInTheDocument()
  })

  it('renders all five accordion questions', () => {
    render(<App />)
    expect(screen.getByText('How do I manage my account settings?')).toBeInTheDocument()
    expect(screen.getByText('What payment methods are accepted?')).toBeInTheDocument()
    expect(screen.getByText('Can I cancel my subscription at any time?')).toBeInTheDocument()
    expect(screen.getByText('How do I contact support?')).toBeInTheDocument()
    expect(screen.getByText('What is your refund policy?')).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /more templates at component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Gather — Accordion Template')
  })
})
