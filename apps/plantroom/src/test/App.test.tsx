import { describe, expect, it, vi } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from '../App'

describe('App', () => {
  it('renders the bands in the reference order with no preloader overlay', () => {
    render(<App />)

    const ids = [
      'response',
      'agreement',
      'why-us',
      'sectors',
      'areas',
      'testimonials',
      'faq',
      'contact',
    ]
    ids.forEach((id) => {
      expect(document.getElementById(id)).toBeInTheDocument()
    })

    const main = document.getElementById('main-content')
    expect(main?.querySelector('section')).toHaveClass('bg-ink-50')
    expect(screen.queryByTestId('preloader')).toBeNull()
  })

  it('puts the skip link first and points it at the main landmark', () => {
    render(<App />)

    const skip = screen.getByRole('link', { name: 'Skip to content' })
    expect(skip).toHaveAttribute('href', '#main-content')
    expect(document.body.firstElementChild?.contains(skip)).toBe(true)
  })

  it('shows the licence strip above the header', () => {
    render(<App />)

    const strip = screen.getByTestId('licence-bar')
    const header = screen.getByTestId('site-header')
    expect(strip.compareDocumentPosition(header) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
  })

  it('slides the cookie strip in after 1.5 s and removes it on a choice', async () => {
    vi.useFakeTimers()
    render(<App />)

    expect(screen.queryByRole('dialog', { name: 'Cookie consent' })).toBeNull()

    act(() => {
      vi.advanceTimersByTime(1500)
    })
    const strip = screen.getByRole('dialog', { name: 'Cookie consent' })
    expect(strip).toBeInTheDocument()

    vi.useRealTimers()
    await userEvent.click(screen.getByRole('button', { name: 'Accept All' }))

    expect(screen.queryByRole('dialog', { name: 'Cookie consent' })).toBeNull()
  })

  it('has exactly one h1 and keeps every heading level below it', () => {
    render(<App />)

    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
    expect(screen.getAllByRole('heading', { level: 2 }).length).toBeGreaterThan(6)
  })

  it('resolves every in-page anchor to an element that exists', () => {
    render(<App />)

    const anchors = Array.from(document.querySelectorAll('a[href^="#"]'))
    expect(anchors.length).toBeGreaterThan(10)
    anchors.forEach((anchor) => {
      const target = anchor.getAttribute('href')?.slice(1)
      expect(document.getElementById(target ?? '')).not.toBeNull()
    })
  })

  it('offers the Component Dock credit and no source-brand string anywhere', () => {
    const { container } = render(<App />)

    expect(screen.getByRole('link', { name: 'Made with Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
    expect(container.innerHTML.toLowerCase()).not.toContain('https://preview.')
    expect(screen.getAllByRole('link', { name: 'Made with Component Dock' })).toHaveLength(1)
  })
})
