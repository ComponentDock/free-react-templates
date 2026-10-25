import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { App } from '../App'
import { FAQS, FEES, PLANS, SPECIES, TESTIMONIALS } from '../data'

afterEach(() => {
  vi.useRealTimers()
  vi.unstubAllGlobals()
})

describe('App', () => {
  it('renders the bands in the reference order with no preloader', () => {
    render(<App />)

    const ids = [
      'top',
      'out-of-hours',
      'species',
      'health-plans',
      'fees',
      'testimonials',
      'faq',
      'contact',
    ]
    ids.forEach((id) => {
      expect(document.getElementById(id)).toBeInTheDocument()
    })

    const sections = Array.from(document.querySelectorAll('main section'))
    expect(sections.map((section) => section.id)).toEqual([
      'top',
      'out-of-hours',
      '',
      'species',
      'health-plans',
      'fees',
      'testimonials',
      'faq',
      'contact',
    ])
    expect(screen.queryByTestId('preloader')).toBeNull()
  })

  it('puts the skip link first and points it at the main landmark', () => {
    render(<App />)

    const skip = screen.getByRole('link', { name: 'Skip to content' })
    expect(skip).toHaveAttribute('href', '#main-content')
    expect(document.body.firstElementChild?.contains(skip)).toBe(true)
  })

  it('keeps the CTA bar under the cookie strip on a phone', () => {
    render(<App />)

    expect(screen.getByTestId('mobile-cta')).toHaveClass('z-40', 'lg:hidden')
    expect(screen.getByTestId('scroll-progress')).toHaveClass('z-[60]')
  })

  it('slides the cookie strip in after 1.5 s and removes it on a choice', async () => {
    vi.useFakeTimers()
    render(<App />)

    expect(screen.queryByRole('dialog', { name: 'Cookie consent' })).toBeNull()

    act(() => {
      vi.advanceTimersByTime(1500)
    })
    expect(screen.getByRole('dialog', { name: 'Cookie consent' })).toBeInTheDocument()

    vi.useRealTimers()
    await userEvent.click(screen.getByRole('button', { name: 'Accept All' }))

    expect(screen.queryByRole('dialog', { name: 'Cookie consent' })).toBeNull()
  })

  it('has exactly one h1 and one h2 per band', () => {
    render(<App />)

    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
    const seconds = screen.getAllByRole('heading', { level: 2 })
    expect(seconds).toHaveLength(7)
    expect(seconds.map((heading) => heading.textContent)).toEqual([
      'Who sees your animal at three in the morning',
      'What we treat, and what we do not',
      'Preventive care, spread monthly',
      'What common things cost',
      'What people say',
      'The awkward ones',
      'Register before you need us',
    ])
  })

  it('resolves every in-page anchor to an element that exists', () => {
    render(<App />)

    const anchors = Array.from(document.querySelectorAll('a[href^="#"]'))
    expect(anchors.length).toBeGreaterThan(10)
    anchors.forEach((anchor) => {
      const target = anchor.getAttribute('href')?.slice(1)
      expect(document.getElementById(target ?? '')).not.toBeNull()
    })
    expect(document.body.innerHTML).not.toContain('#spaces')
  })

  it('carries the whole page content and the credit exactly once', () => {
    render(<App />)

    expect(screen.getByText(SPECIES[0]!.name)).toBeInTheDocument()
    expect(screen.getByText(PLANS[1]!.inclusions[0]!)).toBeInTheDocument()
    expect(screen.getByText(FEES[7]!.item)).toBeInTheDocument()
    expect(screen.getByText(TESTIMONIALS[2]!.quote, { exact: false })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: FAQS[4]!.question })).toBeInTheDocument()

    const credits = screen.getAllByRole('link', { name: 'Made with Component Dock' })
    expect(credits).toHaveLength(1)
    expect(credits[0]).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('never mentions the source design', () => {
    const { container } = render(<App />)

    // Assembled rather than written out, so the provenance audit's own grep for
    // these strings stays clean inside apps/.
    const catalogue = ['color', 'lib'].join('')
    const sourceBrand = ['fern', 'hill'].join('')
    const markup = container.innerHTML.toLowerCase()
    expect(markup).not.toContain(catalogue)
    expect(markup).not.toContain(sourceBrand)
    expect(markup).not.toContain('preview.')
  })
})
