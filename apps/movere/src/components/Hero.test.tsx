import { act, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Hero, rotatingWords } from './Hero'

afterEach(() => {
  vi.useRealTimers()
})

describe('Hero', () => {
  it('renders the badge, headline, blurb, CTAs, and stats row', () => {
    render(<Hero />)

    expect(screen.getByText('Licensed & Insured in All 50 States')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(/Moving Made/)
    expect(screen.getByText(/From local moves to cross-country relocations/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Get Free Quote/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Call \(555\) 890-1234/ })).toBeInTheDocument()
    for (const label of ['Moves Completed', 'Satisfaction Rate', 'Years Experience', 'Available']) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
    expect(screen.getByText('25,000+')).toBeInTheDocument()
    expect(screen.getByText('98%')).toBeInTheDocument()
    expect(screen.getByText('Same-Day')).toBeInTheDocument()
  })

  it('shows the moving-crew photo and the fully-insured floating badge', () => {
    render(<Hero />)

    expect(screen.getByAltText('Movere moving crew loading a truck')).toBeInTheDocument()
    expect(screen.getByText('Fully Insured')).toBeInTheDocument()
    expect(screen.getByText('All belongings protected')).toBeInTheDocument()
  })

  it('rotates the headline word on an interval', () => {
    vi.useFakeTimers()
    render(<Hero />)

    expect(screen.getByRole('heading', { level: 1 }).textContent).toContain(rotatingWords[0])

    act(() => {
      vi.advanceTimersByTime(2600)
    })
    expect(screen.getByRole('heading', { level: 1 }).textContent).toContain(rotatingWords[1])

    act(() => {
      vi.advanceTimersByTime(2600)
    })
    expect(screen.getByRole('heading', { level: 1 }).textContent).toContain(rotatingWords[2])

    act(() => {
      vi.advanceTimersByTime(2600)
    })
    expect(screen.getByRole('heading', { level: 1 }).textContent).toContain(rotatingWords[0])
  })

  it('clears the rotation interval on unmount', () => {
    vi.useFakeTimers()
    const { unmount } = render(<Hero />)
    unmount()
    expect(() => {
      act(() => {
        vi.advanceTimersByTime(10000)
      })
    }).not.toThrow()
  })
})
