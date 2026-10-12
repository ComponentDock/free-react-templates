import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ComingSoon } from './ComingSoon'

describe('ComingSoon', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-01-01T00:00:00Z'))
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('stacks the slideshow, one scrim and the three bands in order', () => {
    render(<ComingSoon />)

    const page = screen.getByTestId('coming-soon')
    const layer = screen.getByTestId('content-layer')

    expect(page).toHaveClass('relative', 'w-full')
    expect(page.firstElementChild).toBe(screen.getByTestId('slideshow'))

    expect(layer).toHaveClass('relative', 'z-1', 'min-h-screen', 'w-full')

    const scrim = screen.getByTestId('scrim')

    expect(scrim).toHaveAttribute('aria-hidden', 'true')
    expect(scrim).toHaveClass('absolute', 'inset-0', '-z-10', 'bg-scrim')

    expect(Array.from(layer.children).map((child) => child.getAttribute('data-testid'))).toEqual([
      'scrim',
      'top-bar',
      'hero-row',
      null,
    ])
    expect(screen.getByRole('link', { name: 'Component Dock' })).toBeInTheDocument()
  })

  it('accepts layout overrides', () => {
    render(<ComingSoon className="min-h-screen" />)

    expect(screen.getByTestId('coming-soon')).toHaveClass('min-h-screen')
  })
})
