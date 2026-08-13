import { describe, expect, it, vi } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand wordmark with a teal dot and the six anchor links', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: 'Liftoff.' })).toHaveAttribute('href', '#home-section')
    for (const label of ['Home', 'Features', 'About Us', 'Testimonials', 'Blog', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: 'Features' })).toHaveAttribute(
      'href',
      '#features-section',
    )
  })

  it('opens and closes the mobile offcanvas menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    // The offcanvas panel duplicates the nav links next to the desktop ones.
    expect(screen.getAllByRole('link', { name: 'Testimonials' })).toHaveLength(2)

    await user.click(screen.getAllByRole('link', { name: 'Blog' })[1]!)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('highlights the active section via scrollspy', () => {
    const callbacks: IntersectionObserverCallback[] = []
    const observed: string[] = []

    class FakeObserver implements IntersectionObserver {
      readonly root = null
      readonly rootMargin = ''
      readonly scrollMargin = ''
      readonly thresholds = [0]

      observe = (target: Element): void => {
        observed.push(target.id)
      }

      disconnect = (): void => {
        /* no-op */
      }

      unobserve = (): void => {
        /* no-op */
      }

      takeRecords = (): IntersectionObserverEntry[] => []
    }

    vi.stubGlobal(
      'IntersectionObserver',
      class extends FakeObserver {
        constructor(callback: IntersectionObserverCallback) {
          super()
          callbacks.push(callback)
        }
      },
    )

    render(
      <div>
        <Navbar />
        <section id="home-section" />
        <section id="features-section" />
        <section id="about-section" />
        <section id="testimonials-section" />
        <section id="blog-section" />
        <section id="contact-section" />
      </div>,
    )

    // Every section is observed.
    expect(observed).toEqual([
      'home-section',
      'features-section',
      'about-section',
      'testimonials-section',
      'blog-section',
      'contact-section',
    ])

    // Simulate the features section entering the viewport.
    const entry = {
      isIntersecting: true,
      target: { id: 'features-section' },
    } as unknown as IntersectionObserverEntry
    act(() => {
      callbacks[0]!([entry], {} as IntersectionObserver)
    })

    expect(screen.getByRole('link', { name: 'Home' })).not.toHaveAttribute('aria-current')
    expect(screen.getByRole('link', { name: 'Features' })).toHaveAttribute('aria-current', 'true')

    // A leaving section does not steal the active highlight.
    act(() => {
      callbacks[0]!(
        [
          {
            isIntersecting: false,
            target: { id: 'blog-section' },
          } as unknown as IntersectionObserverEntry,
        ],
        {} as IntersectionObserver,
      )
    })
    expect(screen.getByRole('link', { name: 'Features' })).toHaveAttribute('aria-current', 'true')

    vi.unstubAllGlobals()
  })
})
