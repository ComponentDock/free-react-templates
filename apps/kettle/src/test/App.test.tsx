import { act, render, screen, within } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { App } from '../App'

const BAND_IDS = [
  'size',
  'emergency',
  'options',
  'why-us',
  'process',
  'areas',
  'testimonials',
  'faq',
  'contact',
]

afterEach(() => {
  vi.useRealTimers()
})

describe('App', () => {
  it('renders the licence strip, the header, nine bands and the footer', () => {
    render(<App />)

    expect(screen.getByText('VA DPOR #0000000000')).toBeInTheDocument()
    expect(screen.getByTestId('site-header')).toBeInTheDocument()
    BAND_IDS.forEach((id) => {
      expect(document.getElementById(id)).not.toBeNull()
    })
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByTestId('flow-panel')).toBeInTheDocument()
  })

  it('makes the skip link the first focusable element', () => {
    render(<App />)

    const skip = screen.getByRole('link', { name: 'Skip to content' })
    expect(skip).toHaveAttribute('href', '#main-content')
    expect(skip).toHaveClass('sr-only')
    expect(document.body.querySelector('a')).toBe(skip)
  })

  it('stacks the copy in the reference order', () => {
    render(<App />)

    const mains = screen.getAllByRole('main')
    expect(mains).toHaveLength(1)

    const sections = within(mains[0]!).getAllByRole('region')
    const headings = sections.map((section) => section.getAttribute('aria-labelledby'))
    expect(headings).toEqual([
      'hero-title',
      'size-title',
      'emergency-title',
      'options-title',
      'why-us-title',
      'process-title',
      'areas-title',
      'testimonials-title',
      'faq-title',
      'contact-title',
    ])
  })

  it('raises the cookie strip after 1.5 s and removes it on either answer', () => {
    vi.useFakeTimers()
    render(<App />)

    expect(screen.queryByRole('dialog')).toBeNull()

    act(() => {
      vi.advanceTimersByTime(1500)
    })
    expect(screen.getByRole('dialog', { name: 'Cookie consent' })).toBeInTheDocument()

    act(() => {
      screen.getByRole('button', { name: 'Accept All' }).click()
    })
    expect(screen.queryByRole('dialog')).toBeNull()
  })
})
