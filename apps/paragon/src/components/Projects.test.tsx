import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react'
import {
  HERO_INTERVAL_MS,
  PROJECT_BLURB,
  PROJECT_CAPTION,
  PROJECT_IMAGES,
  PROJECT_TITLE,
  PROJECTS_HEADING,
} from '../data'
import { Projects } from './Projects'

afterEach(() => {
  vi.useRealTimers()
  cleanup()
})

describe('Projects', () => {
  it('renders the heading, view-all link and the first caption panel', () => {
    const { container } = render(<Projects />)
    expect(screen.getByRole('region', { name: 'Projects' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: PROJECTS_HEADING })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /View All Projects/ })).toHaveAttribute(
      'href',
      '#contact',
    )

    const img = container.querySelector('img')
    expect(img).toHaveAttribute('src', PROJECT_IMAGES[0]!.image)
    expect(img).toHaveAttribute('alt', PROJECT_IMAGES[0]!.alt)

    expect(screen.getByText(PROJECT_CAPTION)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: PROJECT_TITLE })).toBeInTheDocument()
    expect(screen.getByText(PROJECT_BLURB)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /View This Project/ })).toHaveAttribute(
      'href',
      '#contact',
    )
  })

  it('navigates projects with next/prev (wrapping) and dots', () => {
    render(<Projects />)
    const dots = screen.getAllByRole('button', { name: /Go to project/ })
    expect(dots).toHaveLength(3)
    expect(dots[0]).toHaveAttribute('aria-current', 'true')

    fireEvent.click(screen.getByRole('button', { name: 'Next project' }))
    expect(dots[1]).toHaveAttribute('aria-current', 'true')

    fireEvent.click(screen.getByRole('button', { name: 'Next project' }))
    fireEvent.click(screen.getByRole('button', { name: 'Next project' }))
    expect(dots[0]).toHaveAttribute('aria-current', 'true')

    // Prev from slide 1 wraps back to the last slide.
    fireEvent.click(screen.getByRole('button', { name: 'Previous project' }))
    expect(dots[2]).toHaveAttribute('aria-current', 'true')

    // A dot click jumps straight to that project.
    fireEvent.click(dots[1] as HTMLElement)
    expect(dots[1]).toHaveAttribute('aria-current', 'true')
  })

  it('auto-advances and clears the timer on unmount', () => {
    vi.useFakeTimers()
    const { unmount } = render(<Projects />)

    act(() => {
      vi.advanceTimersByTime(HERO_INTERVAL_MS)
    })
    expect(screen.getAllByRole('button', { name: /Go to project/ })[1]).toHaveAttribute(
      'aria-current',
      'true',
    )
    expect(vi.getTimerCount()).toBe(1)

    unmount()
    expect(vi.getTimerCount()).toBe(0)
  })
})
