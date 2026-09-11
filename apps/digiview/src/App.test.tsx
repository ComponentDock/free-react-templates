import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

class MockIntersectionObserver {
  callback: IntersectionObserverCallback
  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback
  }
  observe() {
    this.callback(
      [{ isIntersecting: true, target: document.body } as unknown as IntersectionObserverEntry],
      this as unknown as IntersectionObserver,
    )
  }
  unobserve() {}
  disconnect() {}
}

beforeEach(() => {
  vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)
})
afterEach(() => {
  vi.unstubAllGlobals()
})

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /Our Services/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /Our Projects/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /About DigiView/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /Our Process/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /Frequently Asked Questions/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /Get In Touch/i })).toBeInTheDocument()
    expect(screen.getByText(/Component Dock/)).toBeInTheDocument()
  })

  it('sets document title', () => {
    render(<App />)
    expect(document.title).toBe('DigiView — Digital Agency Template')
  })
})
