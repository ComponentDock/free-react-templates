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
  window.localStorage.clear()
  document.documentElement.classList.remove('dark')
  MockIntersectionObserver.instances = []
  vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)
})

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('App', () => {
  it('composes the navbar, all sections, and the footer with the correct landmarks and title', () => {
    render(<App />)

    expect(document.title).toBe('Jobfield — Job Board Template')

    const banner = screen.getByRole('banner')
    expect(within(banner).getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toBe('Find Your Dream Job')

    const expectedH2s = [
      'Latest Opportunities',
      'Explore by Category',
      'Companies Hiring Now',
      'Your Path to Success',
      'Success Stories',
      'Frequently Asked Questions',
      'Never Miss an Opportunity',
      'Ready to Take the Next Step?',
    ]
    for (const name of expectedH2s) {
      expect(screen.getByRole('heading', { level: 2, name })).toBeInTheDocument()
    }

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('defaults to light mode', () => {
    render(<App />)

    expect(document.documentElement.classList.contains('dark')).toBe(false)
    expect(window.localStorage.getItem('jobfield-theme')).toBe('light')
  })

  it('renders the cookie consent dialog and the back-to-top button', () => {
    render(<App />)

    expect(screen.getByRole('region', { name: 'Cookie consent' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Back to top' })).toBeInTheDocument()
  })
})
