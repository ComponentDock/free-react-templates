import { act } from 'react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  afterEach(() => {
    cleanup()
    vi.useRealTimers()
  })

  it('renders the headline, CTA link and cream right-half band', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Grow Up Your/)
    expect(heading.textContent).toContain('Business')

    expect(screen.getByRole('link', { name: 'View Our Services' })).toBeInTheDocument()

    // The right half carries the cream background (split-hero design).
    const creamBand = document.querySelector('.bg-cream')
    expect(creamBand).not.toBeNull()
  })

  it('cycles the typed headline word while mounted', () => {
    vi.useFakeTimers()
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toContain('Business')

    act(() => {
      vi.advanceTimersByTime(2000)
    })
    expect(heading.textContent).toContain('Startups')

    act(() => {
      vi.advanceTimersByTime(2000)
    })
    expect(heading.textContent).toContain('Organization')
  })
})
