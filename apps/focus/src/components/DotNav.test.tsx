import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { render, screen, within, fireEvent, act } from '@testing-library/react'
import { App } from '../App'
import { DotNav } from './DotNav'

/* Triggerable IntersectionObserver: lets tests drive the scroll-spy. */
class TriggerableObserver {
  static instances: TriggerableObserver[] = []
  callback: IntersectionObserverCallback

  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback
    TriggerableObserver.instances.push(this)
  }

  observe = vi.fn()
  unobserve = vi.fn()
  disconnect = vi.fn()
  takeRecords = () => []

  trigger(entries: Array<Partial<IntersectionObserverEntry>>) {
    this.callback(entries as IntersectionObserverEntry[], this as unknown as IntersectionObserver)
  }
}

const LABELS = ['Home', 'About', 'Services', 'Gallery', 'Testimony', 'Contact']

describe('DotNav', () => {
  beforeEach(() => {
    TriggerableObserver.instances = []
    vi.stubGlobal('IntersectionObserver', TriggerableObserver)
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('renders all six section labels on the right-edge rail', () => {
    render(<App />)
    const nav = screen.getByRole('navigation', { name: 'Section navigation' })
    for (const label of LABELS) {
      expect(within(nav).getByText(label)).toBeInTheDocument()
    }
    expect(within(nav).getAllByRole('link')).toHaveLength(6)
  })

  it('marks Home as the active section on first paint', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('aria-current', 'true')
    expect(screen.getByRole('link', { name: 'About' })).not.toHaveAttribute('aria-current')
  })

  it('moves the active dot when the scroll-spy sees another section', () => {
    render(<App />)
    const observer = TriggerableObserver.instances[0]!
    act(() => {
      observer.trigger([{ target: document.getElementById('about')!, isIntersecting: true }])
    })
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('aria-current', 'true')
    expect(screen.getByRole('link', { name: 'Home' })).not.toHaveAttribute('aria-current')
  })

  it('ignores entries for sections that scroll out of view', () => {
    render(<App />)
    const observer = TriggerableObserver.instances[0]!
    act(() => {
      observer.trigger([{ target: document.getElementById('about')!, isIntersecting: false }])
    })
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('aria-current', 'true')
    expect(screen.getByRole('link', { name: 'About' })).not.toHaveAttribute('aria-current')
  })

  it('smooth-scrolls to a section when its label is clicked', () => {
    const scrollSpy = vi.spyOn(Element.prototype, 'scrollIntoView')
    render(<App />)
    const contactLink = screen.getByRole('link', { name: 'Contact' })
    contactLink.addEventListener('click', (event) => event.preventDefault(), { once: true })
    fireEvent.click(contactLink)
    expect(scrollSpy).toHaveBeenCalledWith({ behavior: 'smooth' })
  })

  it('observes every section and disconnects on unmount', () => {
    const { unmount } = render(<DotNav />)
    const observer = TriggerableObserver.instances[0]!
    expect(observer.observe).toHaveBeenCalledTimes(6)
    unmount()
    expect(observer.disconnect).toHaveBeenCalled()
  })
})
