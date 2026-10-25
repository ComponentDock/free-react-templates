import { act, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { ScrollProgress } from './ScrollProgress'

function setScrollState(scrollY: number, innerHeight: number, scrollHeight: number) {
  Object.defineProperty(window, 'scrollY', { value: scrollY, configurable: true, writable: true })
  Object.defineProperty(window, 'innerHeight', { value: innerHeight, configurable: true })
  Object.defineProperty(document.documentElement, 'scrollHeight', {
    value: scrollHeight,
    configurable: true,
  })
}

function fireScroll() {
  act(() => {
    window.dispatchEvent(new Event('scroll'))
  })
}

afterEach(() => {
  vi.restoreAllMocks()
})

describe('ScrollProgress', () => {
  it('renders a progressbar at 0% on load', () => {
    setScrollState(0, 800, 2000)
    render(<ScrollProgress />)

    const bar = screen.getByRole('progressbar', { name: 'Reading progress' })
    expect(bar).toHaveAttribute('aria-valuenow', '0')
    expect(bar).toHaveStyle({ width: '0%' })
    expect(bar).toHaveClass('bg-primary-600')
  })

  it('updates the width from scrolled pixels over scrollable height', () => {
    setScrollState(0, 800, 2000)
    render(<ScrollProgress />)

    setScrollState(600, 800, 2000)
    fireScroll()

    const bar = screen.getByRole('progressbar')
    expect(bar).toHaveAttribute('aria-valuenow', '50')
    expect(bar).toHaveStyle({ width: '50%' })
  })

  it('clamps at 100% past the end of the page', () => {
    setScrollState(0, 800, 2000)
    render(<ScrollProgress />)

    setScrollState(99999, 800, 2000)
    fireScroll()

    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '100')
  })

  it('stays at 0% when the page is shorter than the viewport', () => {
    setScrollState(100, 800, 400)
    render(<ScrollProgress />)

    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0')
  })

  it('cleans up its scroll listener on unmount', () => {
    const removeSpy = vi.spyOn(window, 'removeEventListener')
    const { unmount } = render(<ScrollProgress />)

    unmount()

    expect(removeSpy).toHaveBeenCalledWith('scroll', expect.any(Function))
  })
})
