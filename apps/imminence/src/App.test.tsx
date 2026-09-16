import { describe, expect, it, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Imminence — Coming Soon')
  })

  it('renders the split-screen layout with countdown and right panel', () => {
    render(<App />)

    expect(screen.getByRole('timer', { name: /countdown/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Under Construction')
  })

  it('renders the Component Dock footer link', () => {
    render(<App />)

    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
