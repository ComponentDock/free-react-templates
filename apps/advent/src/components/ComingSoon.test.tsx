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

  it('renders one wash screen holding the pinned bar, the centred block and the attribution', () => {
    const { container } = render(<ComingSoon />)

    const screenWrapper = container.firstElementChild

    expect(screenWrapper).toHaveClass(
      'min-h-screen',
      'w-full',
      'flex-wrap',
      'flex-col',
      'items-center',
      'justify-between',
      'bg-wash',
      'px-[15px]',
      'pb-[30px]',
    )
    expect(screenWrapper?.className).toContain('linear-gradient(to_top')
    expect(screenWrapper).not.toHaveClass('pt-[50px]')

    const bar = screenWrapper?.children[0]
    expect(bar).toHaveClass('w-[360px]', 'rounded-b-bar')

    const middle = screenWrapper?.children[1]
    expect(middle).toHaveClass(
      'flex',
      'w-full',
      'flex-col',
      'items-center',
      'pt-[50px]',
      'pb-[80px]',
    )

    expect(screenWrapper?.children[2]?.tagName).toBe('FOOTER')

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent("We're Launching Soon")
    expect(screen.getAllByTestId(/countdown-cell-/)).toHaveLength(4)
    expect(screen.getByRole('button', { name: 'Get Updates' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toBeInTheDocument()
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument()
  })

  it('accepts a className override on the wrapper', () => {
    const { container } = render(<ComingSoon className="selection:bg-white" />)

    expect(container.firstElementChild).toHaveClass('selection:bg-white')
  })
})
