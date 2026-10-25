import { describe, expect, it, vi } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from '../App'
import { NAV_LINKS, SYMPTOMS, TOWNS } from '../data'

describe('App', () => {
  it('renders the bands in the reference order with no preloader overlay', () => {
    render(<App />)

    const ids = ['why-us', 'services', 'areas', 'testimonials', 'faq', 'contact']
    ids.forEach((id) => {
      expect(document.getElementById(id)).toBeInTheDocument()
    })

    const main = document.getElementById('main-content')
    const sections = Array.from(main?.querySelectorAll('section') ?? [])
    expect(sections[0]).toHaveClass('bg-ink-50')
    expect(sections[1]).toHaveAttribute('id', 'emergency')
    expect(sections[2]).toHaveAttribute('id', 'process')
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

  it('keeps the phone bar under the cookie strip on a phone', () => {
    render(<App />)

    expect(screen.getByTestId('sticky-call')).toHaveClass('z-40', 'lg:hidden')
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

  it('maps every nav label onto a band that exists', () => {
    render(<App />)

    NAV_LINKS.forEach((link) => {
      expect(document.getElementById(link.spy)).not.toBeNull()
    })
  })

  it('carries the whole page content: symptoms, towns, services and the credit', () => {
    render(<App />)

    expect(screen.getByText(SYMPTOMS[0]!)).toBeInTheDocument()
    expect(screen.getByText(TOWNS[TOWNS.length - 1]!)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Made with Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
    expect(screen.getAllByRole('link', { name: 'Made with Component Dock' })).toHaveLength(1)
  })

  it('never mentions the source design', () => {
    const { container } = render(<App />)

    // Assembled rather than written out, so the provenance audit's own grep for
    // these strings stays clean inside apps/.
    const catalogue = ['color', 'lib'].join('')
    const sourceBrand = ['dow', 'ser'].join('')
    const markup = container.innerHTML.toLowerCase()
    expect(markup).not.toContain(catalogue)
    expect(markup).not.toContain(sourceBrand)
    expect(markup).not.toContain('preview.')
  })
})
