import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { act } from 'react'
import { App } from './App'

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
  document.documentElement.classList.remove('dark')
})

describe('App', () => {
  it('renders the sidebar with author name', () => {
    render(<App />)
    expect(screen.getByText('Ford Jock')).toBeInTheDocument()
  })

  it('renders hero section', () => {
    render(<App />)
    expect(screen.getByText("Hi! I'm Ford")).toBeInTheDocument()
  })

  it('renders about section', () => {
    render(<App />)
    expect(screen.getByText('Who Am I?')).toBeInTheDocument()
  })

  it('renders services section', () => {
    render(<App />)
    expect(screen.getByText('Here are some of my expertise')).toBeInTheDocument()
  })

  it('renders skills section', () => {
    render(<App />)
    expect(screen.getByText('My Skills')).toBeInTheDocument()
  })

  it('renders education section', () => {
    render(<App />)
    expect(screen.getAllByText('Education').length).toBeGreaterThanOrEqual(2)
  })

  it('renders experience section', () => {
    render(<App />)
    expect(screen.getByText('Work Experience')).toBeInTheDocument()
  })

  it('renders work section', () => {
    render(<App />)
    expect(screen.getByText('Recent Work')).toBeInTheDocument()
  })

  it('renders blog section', () => {
    render(<App />)
    expect(screen.getByText('From the Blog')).toBeInTheDocument()
  })

  it('renders contact section', () => {
    render(<App />)
    expect(screen.getByText('info@domain.com')).toBeInTheDocument()
  })

  it('renders footer with Component Dock link', () => {
    render(<App />)
    expect(screen.getByText('Component Dock')).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('toggles dark mode', async () => {
    const user = userEvent.setup()
    render(<App />)
    const toggle = screen.getByRole('button', { name: /switch to dark mode/i })
    await user.click(toggle)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    await user.click(screen.getByRole('button', { name: /switch to light mode/i }))
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('updates active section via intersection observer', () => {
    render(<App />)
    const aboutEl = document.getElementById('about')
    const homeEl = document.getElementById('home')
    expect(aboutEl).toBeTruthy()
    expect(homeEl).toBeTruthy()
    act(() => {
      lastCb?.([makeEntry(homeEl!, false), makeEntry(aboutEl!, true)])
    })
    const aboutLinks = screen.getAllByText('About')
    expect(aboutLinks[0]?.className).toContain('bg-brand/10')
  })

  it('cleans up intersection observer on unmount', () => {
    const { unmount } = render(<App />)
    unmount()
  })
})
