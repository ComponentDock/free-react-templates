import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { act, fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

class MockIntersectionObserver {
  static instances: MockIntersectionObserver[] = []
  callback: IntersectionObserverCallback
  observed: Element[] = []
  disconnected = false

  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback
    MockIntersectionObserver.instances.push(this)
  }

  observe(element: Element) {
    this.observed.push(element)
  }

  disconnect() {
    this.disconnected = true
  }

  unobserve() {}
  takeRecords() {
    return []
  }
}

function renderNavbar() {
  return render(
    <>
      <Navbar />
      <main>
        <section id="buttons" />
        <section id="signup" />
        <section id="carousel" />
      </main>
    </>,
  )
}

function fire(
  observer: MockIntersectionObserver,
  entries: { id: string; isIntersecting: boolean }[],
) {
  act(() => {
    observer.callback(
      entries.map((entry) => ({
        target: { id: entry.id },
        isIntersecting: entry.isIntersecting,
      })) as unknown as IntersectionObserverEntry[],
      observer as unknown as IntersectionObserver,
    )
  })
}

describe('Navbar', () => {
  beforeEach(() => {
    MockIntersectionObserver.instances = []
    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true, writable: true })
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('renders the transparent bar with its brand, links and social icons', () => {
    const { container } = renderNavbar()

    const nav = container.querySelector('nav')!
    expect(nav.className).toContain('absolute')
    expect(nav.className).not.toContain('bg-white')
    expect(screen.getByRole('link', { name: 'buildkit.' })).toHaveAttribute('href', '#home')

    const components = screen.getByRole('button', { name: /Components/ })
    expect(components).toHaveAttribute('aria-expanded', 'false')
    expect(components.className).toContain('text-white')

    expect(screen.getByRole('link', { name: /Download/ })).toHaveAttribute('href', '#signup')
    expect(screen.getByRole('link', { name: 'Facebook' })).toHaveAttribute(
      'href',
      'https://www.facebook.com/',
    )
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
  })

  it('opens and closes the Components dropdown', async () => {
    renderNavbar()

    const components = screen.getByRole('button', { name: /Components/ })
    expect(screen.queryByRole('link', { name: 'All Components' })).not.toBeInTheDocument()

    await userEvent.click(components)
    expect(components).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('link', { name: 'All Components' })).toHaveAttribute('href', '#buttons')
    expect(screen.getByRole('link', { name: 'Documentation' })).toHaveAttribute(
      'href',
      '#typography',
    )

    await userEvent.click(components)
    expect(components).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('link', { name: 'All Components' })).not.toBeInTheDocument()
  })

  it('reveals the link list from the Menu toggler', async () => {
    const { container } = renderNavbar()

    const collapse = container.querySelector('#buildkit-nav-collapse')!
    const toggler = screen.getByRole('button', { name: 'Toggle navigation' })
    expect(collapse.className).toContain('hidden')
    expect(toggler).toHaveAttribute('aria-expanded', 'false')

    await userEvent.click(toggler)
    expect(toggler).toHaveAttribute('aria-expanded', 'true')
    expect(collapse.className).toContain('flex')
    expect(collapse.className).not.toContain('hidden')

    await userEvent.click(toggler)
    expect(collapse.className).toContain('hidden')
  })

  it('turns into the fixed white bar with a violet active link once scrolled', () => {
    const { container } = renderNavbar()

    Object.defineProperty(window, 'scrollY', { value: 200, configurable: true, writable: true })
    fireEvent.scroll(window)

    const nav = container.querySelector('nav')!
    expect(nav.className).toContain('fixed')
    expect(nav.className).toContain('bg-white')
    expect(screen.getByRole('link', { name: 'buildkit.' }).className).toContain('text-heading')
    expect(screen.getByRole('button', { name: /Components/ }).className).toContain(
      'text-primary-600',
    )
    expect(screen.getByRole('link', { name: /Download/ }).className).not.toContain(
      'text-primary-600',
    )

    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true, writable: true })
    fireEvent.scroll(window)

    expect(container.querySelector('nav')!.className).not.toContain('bg-white')
  })

  it('tracks the section in view through the intersection observer', () => {
    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)
    const { unmount } = renderNavbar()

    const observer = MockIntersectionObserver.instances[0]!
    expect(observer.observed).toHaveLength(3)

    Object.defineProperty(window, 'scrollY', { value: 200, configurable: true, writable: true })
    fireEvent.scroll(window)

    fire(observer, [{ id: 'signup', isIntersecting: true }])
    expect(screen.getByRole('link', { name: /Download/ }).className).toContain('text-primary-600')

    // non-intersecting and unmapped sections leave the active item alone
    fire(observer, [{ id: 'buttons', isIntersecting: false }])
    fire(observer, [{ id: 'carousel', isIntersecting: true }])
    expect(screen.getByRole('link', { name: /Download/ }).className).toContain('text-primary-600')

    fire(observer, [{ id: 'typography', isIntersecting: true }])
    expect(screen.getByRole('button', { name: /Components/ }).className).toContain(
      'text-primary-600',
    )
    expect(screen.getByRole('link', { name: /Download/ }).className).not.toContain(
      'text-primary-600',
    )

    unmount()
    expect(observer.disconnected).toBe(true)
  })

  it('renders without an intersection observer implementation', () => {
    vi.stubGlobal('IntersectionObserver', undefined)

    expect(() => renderNavbar()).not.toThrow()
    expect(screen.getByRole('link', { name: 'buildkit.' })).toBeInTheDocument()
  })
})
