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

  it('stacks the slideshow, one scrim and the three bands on a space-between column', () => {
    render(<ComingSoon />)

    const page = screen.getByTestId('coming-soon')
    const layer = screen.getByTestId('content-layer')

    expect(page).toHaveClass('relative', 'w-full')
    expect(page.firstElementChild).toBe(screen.getByTestId('slideshow'))

    // the space-between column IS the layout
    expect(layer).toHaveClass(
      'relative',
      'z-1',
      'flex',
      'min-h-screen',
      'w-full',
      'flex-col',
      'items-center',
      'justify-between',
    )

    const scrim = screen.getByTestId('scrim')

    expect(scrim).toHaveAttribute('aria-hidden', 'true')
    expect(scrim).toHaveClass('absolute', 'inset-0', '-z-10', 'bg-scrim')

    expect(Array.from(layer.children).map((child) => child.getAttribute('data-testid'))).toEqual([
      'scrim',
      'top-bar',
      'hero',
      'bottom-band',
    ])
    expect(Array.from(screen.getByTestId('bottom-band').children).map((c) => c.tagName)).toEqual([
      'DIV',
      'P',
    ])
    expect(screen.getByRole('link', { name: 'Component Dock' })).toBeInTheDocument()
  })

  it('accepts layout overrides', () => {
    render(<ComingSoon className="min-h-screen" />)

    expect(screen.getByTestId('coming-soon')).toHaveClass('min-h-screen')
  })
})
