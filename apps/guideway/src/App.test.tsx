import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import { act, render, screen } from '@testing-library/react'
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

  trigger(isIntersecting: boolean) {
    this.callback(
      [{ isIntersecting } as IntersectionObserverEntry],
      this as unknown as IntersectionObserver,
    )
  }
}

beforeEach(() => {
  MockIntersectionObserver.instances = []
  vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)
})

afterEach(() => {
  vi.unstubAllGlobals()
  vi.useRealTimers()
})

function installFakeTimers() {
  vi.useFakeTimers({
    toFake: [
      'setTimeout',
      'clearTimeout',
      'setInterval',
      'clearInterval',
      'requestAnimationFrame',
      'cancelAnimationFrame',
      'performance',
      'Date',
    ],
  })
}

describe('App', () => {
  it('renders the Guideway brand', () => {
    render(<App />)
    const logos = screen.getAllByText('Guideway')
    expect(logos.length).toBeGreaterThanOrEqual(1)
  })

  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getByText('We Are The Best Consulting Agency')).toBeInTheDocument()
    expect(screen.getByText('Our Main Features')).toBeInTheDocument()
    expect(screen.getByText('Our Best Services')).toBeInTheDocument()
    expect(screen.getByText('Our Recent Projects')).toBeInTheDocument()
    expect(screen.getByText('Our Clients Say')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Request A Quote' })).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /component dock/i })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Guideway — Consulting Business Landing Page')
  })

  it('renders stats counters after animation completes', async () => {
    installFakeTimers()
    render(<App />)

    act(() => {
      for (const observer of MockIntersectionObserver.instances) {
        observer.trigger(true)
      }
    })

    await act(async () => {
      await vi.advanceTimersByTimeAsync(2100)
    })

    expect(screen.getByText('705')).toBeInTheDocument()
    expect(screen.getByText('809')).toBeInTheDocument()
    expect(screen.getByText('335')).toBeInTheDocument()
    expect(screen.getByText('35')).toBeInTheDocument()
  })
})
