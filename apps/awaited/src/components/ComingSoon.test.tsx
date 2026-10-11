import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { ComingSoon } from './ComingSoon'

describe('ComingSoon', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-01-01T00:00:00Z'))
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('hangs a fixed full-screen slideshow behind the content column', () => {
    render(<ComingSoon className="min-h-screen" />)

    const shell = screen.getByTestId('coming-soon')
    const slideshow = screen.getByTestId('slideshow')
    const column = screen.getByTestId('content-column')

    expect(shell).toHaveClass('relative', 'w-full', 'min-h-screen')
    expect(slideshow).toHaveClass('fixed', 'inset-0', 'z-0')
    expect(column).toHaveClass(
      'relative',
      'z-1',
      'flex',
      'min-h-screen',
      'w-full',
      'flex-col',
      'items-center',
      'justify-between',
    )
  })

  it('washes the photograph with the low-opacity violet gradient and a black scrim', () => {
    render(<ComingSoon />)

    const wash = screen.getByTestId('wash')
    const scrim = screen.getByTestId('scrim')

    expect(wash).toHaveAttribute('aria-hidden', 'true')
    expect(wash).toHaveClass(
      'absolute',
      'inset-0',
      '-z-10',
      'bg-wash',
      'opacity-30',
      'bg-[linear-gradient(to_top,var(--color-wash-bottom),var(--color-wash-top))]',
    )
    expect(scrim).toHaveAttribute('aria-hidden', 'true')
    expect(scrim).toHaveClass('absolute', 'inset-0', '-z-10', 'bg-scrim')
  })

  it('spreads the top bar, the middle block and the bottom band in order', () => {
    render(<ComingSoon />)

    const column = screen.getByTestId('content-column')

    expect(Array.from(column.children).map((child) => child.getAttribute('data-testid'))).toEqual([
      'wash',
      'scrim',
      'top-bar',
      'middle-block',
      'bottom-band',
    ])
    expect(within(screen.getByTestId('bottom-band')).getByTestId('social-row')).toBeInTheDocument()
    expect(
      within(screen.getByTestId('bottom-band')).getByRole('link', { name: 'Component Dock' }),
    ).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('adds no navbar, no signup field and no scrolling section', () => {
    render(<ComingSoon />)

    expect(screen.queryByRole('navigation')).toBeNull()
    expect(screen.queryByRole('textbox')).toBeNull()
    expect(screen.queryByRole('main')).toBeNull()
  })
})
