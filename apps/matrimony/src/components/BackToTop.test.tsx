import { fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { BackToTop, SHOW_AFTER } from './BackToTop'
import { mockReducedMotion } from '../test/match-media'

function scrollTo(offset: number): void {
  Object.defineProperty(window, 'scrollY', { configurable: true, value: offset })
  fireEvent.scroll(window)
}

afterEach(() => {
  Object.defineProperty(window, 'scrollY', { configurable: true, value: 0 })
  vi.restoreAllMocks()
})

describe('BackToTop', () => {
  it('stays away until the page has left the hero', () => {
    render(<BackToTop />)

    expect(screen.queryByRole('button', { name: 'Back to top' })).toBeNull()
  })

  it('appears past the threshold, returns to the top and goes away again', () => {
    const spy = vi.spyOn(window, 'scrollTo')

    render(<BackToTop />)

    scrollTo(SHOW_AFTER + 1)

    const control = screen.getByRole('button', { name: 'Back to top' })

    expect(control).toHaveClass('fixed', 'bg-brand', 'rounded-full')

    fireEvent.click(control)

    expect(spy).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })

    scrollTo(0)

    expect(screen.queryByRole('button', { name: 'Back to top' })).toBeNull()
  })

  it('jumps instantly when the visitor asks for reduced motion', () => {
    const spy = vi.spyOn(window, 'scrollTo')

    mockReducedMotion()
    render(<BackToTop />)
    scrollTo(1200)

    fireEvent.click(screen.getByRole('button', { name: 'Back to top' }))

    expect(spy).toHaveBeenCalledWith({ top: 0, behavior: 'instant' })
  })
})
