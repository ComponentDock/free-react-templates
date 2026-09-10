import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the onboarding heading', () => {
    render(<App />)
    expect(screen.getByText(/tell us about yours/i)).toBeInTheDocument()
  })

  it('sets the document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('Runic — Onboarding Wizard')
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders step dots', () => {
    render(<App />)
    const tabs = screen.getAllByRole('tab')
    expect(tabs).toHaveLength(3)
  })

  it('renders Continue button on step 1', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /next step/i })).toBeInTheDocument()
  })
})
