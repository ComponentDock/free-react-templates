import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

class MockObserver {
  callback: IntersectionObserverCallback
  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback
  }
  observe() {
    this.callback(
      [
        { isIntersecting: false } as IntersectionObserverEntry,
        { isIntersecting: true } as IntersectionObserverEntry,
      ],
      this as unknown as IntersectionObserver,
    )
  }
  disconnect() {}
  unobserve() {}
  takeRecords() {
    return []
  }
  root = null
  rootMargin = ''
  thresholds = []
}

describe('About', () => {
  it('renders the title, brand wordmarks, and final counter values without IntersectionObserver', () => {
    render(<About />)

    expect(screen.getByText('About Our Company')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: 'Some statistics that we want to show our viewers',
      }),
    ).toBeInTheDocument()

    for (const brand of [
      'PACIFIC LINE',
      'GLOBAL SHIP',
      'MERIDIAN',
      'ATLAS FREIGHT',
      'NORDCARGO',
      'ORIENT STAR',
    ]) {
      expect(screen.getByText(brand)).toBeInTheDocument()
    }

    for (const label of [
      'Packages Delivered',
      'Satisfied Clients',
      'Contries reach',
      'Tons of goods',
    ]) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
    expect(screen.getByText('$2500+')).toBeInTheDocument()
    expect(screen.getByText('$500+')).toBeInTheDocument()
    expect(screen.getByText('$70+')).toBeInTheDocument()
    expect(screen.getByText('5000')).toBeInTheDocument()
  })

  it('animates the counters when they intersect the viewport', () => {
    let timestamp = 0
    vi.stubGlobal('IntersectionObserver', MockObserver)
    vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => {
      timestamp += 100
      callback(timestamp)
      return timestamp
    })
    vi.stubGlobal('cancelAnimationFrame', vi.fn())

    render(<About />)

    expect(screen.getByText('$2500+')).toBeInTheDocument()
    expect(screen.getByText('5000')).toBeInTheDocument()

    vi.unstubAllGlobals()
  })
})
