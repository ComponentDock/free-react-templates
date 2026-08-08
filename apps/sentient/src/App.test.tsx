import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

class MockIntersectionObserver {
  static instances: MockIntersectionObserver[] = []
  callback: IntersectionObserverCallback

  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback
    MockIntersectionObserver.instances.push(this)
  }

  readonly root = null
  readonly rootMargin = ''
  readonly thresholds = [0]

  observe() {}
  unobserve() {}
  disconnect() {}

  takeRecords(): IntersectionObserverEntry[] {
    return []
  }
}

beforeEach(() => {
  MockIntersectionObserver.instances = []
  vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)
})

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('App', () => {
  it('renders the full page composition with landmark structure', () => {
    render(<App />)

    expect(document.title).toBe('Sentient — AI Platform Template')

    expect(screen.getByRole('link', { name: /skip to main content/i })).toHaveAttribute(
      'href',
      '#main',
    )

    const banner = screen.getByRole('banner')
    expect(within(banner).getByRole('link', { name: 'Sentient home' })).toBeInTheDocument()
    expect(within(banner).getByRole('link', { name: 'Try Free' })).toBeInTheDocument()

    const main = screen.getByRole('main')
    const level1 = screen.getByRole('heading', { level: 1 })
    expect(level1.textContent).toMatch(/Build Intelligent Apps/)
    for (const heading of [
      'AI That Actually Works',
      'From Data to Intelligence in Minutes',
      'AI for Every Industry',
      'Usage-based pricing that scales',
      'Built by Developers, for Developers',
      'Trusted by AI-first teams',
      'Frequently Asked Questions',
      'The Future of AI is Here',
    ]) {
      expect(within(main).getByRole('heading', { level: 2, name: heading })).toBeInTheDocument()
    }

    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByText(/© 2026 Sentient/i)).toBeInTheDocument()
  })
})
