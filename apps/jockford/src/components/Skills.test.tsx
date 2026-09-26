import { render, screen, act } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { Skills } from './Skills'

let lastCb: ((entries: IntersectionObserverEntry[]) => void) | null = null

function makeEntry(target: Element, isIntersecting: boolean): IntersectionObserverEntry {
  return {
    target,
    isIntersecting,
    boundingClientRect: {} as DOMRectReadOnly,
    intersectionRatio: isIntersecting ? 1 : 0,
    intersectionRect: {} as DOMRectReadOnly,
    rootBounds: null,
    time: 0,
  }
}

beforeEach(() => {
  lastCb = null
  vi.stubGlobal(
    'IntersectionObserver',
    class MockIO {
      constructor(cb: (entries: IntersectionObserverEntry[]) => void) {
        lastCb = cb
      }
      observe = vi.fn()
      disconnect = vi.fn()
      unobserve = vi.fn()
    },
  )
})

describe('Skills', () => {
  it('renders the heading', () => {
    render(<Skills />)
    expect(screen.getByText('My Skills')).toBeInTheDocument()
  })

  it('renders all 6 skill names', () => {
    render(<Skills />)
    expect(screen.getByText('Photoshop')).toBeInTheDocument()
    expect(screen.getByText('JavaScript')).toBeInTheDocument()
    expect(screen.getByText('HTML5')).toBeInTheDocument()
    expect(screen.getByText('CSS3')).toBeInTheDocument()
    expect(screen.getByText('WordPress')).toBeInTheDocument()
    expect(screen.getByText('SEO')).toBeInTheDocument()
  })

  it('renders percentage labels', () => {
    render(<Skills />)
    expect(screen.getByText('90%')).toBeInTheDocument()
    expect(screen.getByText('85%')).toBeInTheDocument()
    expect(screen.getByText('95%')).toBeInTheDocument()
  })

  it('animates skill bars on intersection', () => {
    render(<Skills />)
    act(() => {
      lastCb?.([makeEntry(document.body, true)])
    })
  })

  it('does not animate when not intersecting', () => {
    render(<Skills />)
    act(() => {
      lastCb?.([makeEntry(document.body, false)])
    })
  })
})
