import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders the heading "Accordion #07"', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /accordion #07/i })).toBeInTheDocument()
  })

  it('renders all three accordion questions', () => {
    render(<App />)
    expect(screen.getByText('How to manage account?')).toBeInTheDocument()
    expect(screen.getByText('How to become Pro')).toBeInTheDocument()
    expect(screen.getByText('How to create an account?')).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /more templates at component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Lamina — FAQ Accordion Template')
  })
})
