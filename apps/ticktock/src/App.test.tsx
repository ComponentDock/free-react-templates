import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the page title', () => {
    render(<App />)
    expect(document.title).toBe('TickTock — Smart Timepieces')
  })

  it('renders the hero heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Smart New Future')
  })

  it('renders the navbar', () => {
    render(<App />)
    expect(screen.getAllByText('TickTock').length).toBeGreaterThanOrEqual(1)
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /component dock/i })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
