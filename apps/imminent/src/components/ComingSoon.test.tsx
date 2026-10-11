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

  it('paints one full-viewport photo screen under the brand wash', () => {
    const { container } = render(<ComingSoon />)

    const wrapper = container.firstElementChild

    expect(wrapper).toHaveClass(
      'relative',
      'flex',
      'min-h-screen',
      'w-full',
      'flex-col',
      'bg-wash',
      'bg-cover',
      'bg-center',
      'bg-no-repeat',
    )
    // this slug's washed wrapper carries NO padding of its own
    expect(wrapper).not.toHaveClass('px-[15px]')
    expect(wrapper).not.toHaveClass('pt-[30px]')
    expect(wrapper?.getAttribute('style')).toContain(
      'https://picsum.photos/seed/imminent-bg/1900/900',
    )

    const overlay = wrapper?.children[0]

    expect(overlay).toHaveAttribute('aria-hidden', 'true')
    expect(overlay).toHaveClass('absolute', 'inset-0', 'opacity-90')
    expect(overlay?.className).toContain('linear-gradient(to_top')
    expect(overlay?.className).toContain('var(--color-wash-bottom)')
    expect(overlay?.className).toContain('var(--color-wash-top)')
  })

  it('pads an inner min-h-screen box stacking the top bar, the column and the countdown', () => {
    const { container } = render(<ComingSoon />)

    const wrapper = container.firstElementChild

    expect(wrapper?.children).toHaveLength(2)

    const padded = wrapper?.children[1]

    expect(padded).toHaveClass(
      'relative',
      'flex',
      'min-h-screen',
      'w-full',
      'flex-col',
      'px-[15px]',
      'pt-[30px]',
      'pb-[50px]',
    )
    expect(padded?.children).toHaveLength(3)
    expect(padded?.children[0]?.tagName).toBe('HEADER')
    expect(padded?.children[1]).toContainElement(screen.getByText(/Our website is/))
    expect(padded?.children[2]).toContainElement(screen.getByTestId('countdown-ring-days'))
  })

  it('renders no navbar and no footer band', () => {
    const { container } = render(<ComingSoon />)

    expect(container.querySelector('nav')).toBeNull()
    expect(container.querySelector('footer')).toBeNull()
    expect(screen.getByRole('link', { name: 'Imminent' })).toBeInTheDocument()
    expect(screen.getAllByTestId(/^countdown-ring-/)).toHaveLength(4)
    expect(screen.getByRole('link', { name: 'Component Dock' })).toBeInTheDocument()
  })

  it('accepts a className override on the wrapper', () => {
    const { container } = render(<ComingSoon className="selection:bg-white" />)

    expect(container.firstElementChild).toHaveClass('selection:bg-white')
  })
})
