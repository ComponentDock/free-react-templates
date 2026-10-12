import { fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { ScrollTop, SHOW_AT } from './ScrollTop'

function tokens(element: Element): string[] {
  return (element.getAttribute('class') ?? '').split(' ')
}

function scrollTo(y: number): void {
  Object.defineProperty(window, 'scrollY', { value: y, configurable: true, writable: true })
  fireEvent.scroll(window)
}

afterEach(() => {
  vi.restoreAllMocks()
  Object.defineProperty(window, 'scrollY', { value: 0, configurable: true, writable: true })
})

describe('the back-to-the-top control', () => {
  it('stays out of the page until the visitor has scrolled, then fades in', () => {
    render(<ScrollTop />)

    expect(screen.queryByRole('button', { name: 'Back to the top' })).toBeNull()

    scrollTo(SHOW_AT)

    expect(screen.queryByRole('button', { name: 'Back to the top' })).toBeNull()

    scrollTo(SHOW_AT + 1)

    const control = screen.getByRole('button', { name: 'Back to the top' })

    expect(tokens(control)).toContain('rounded-full')
    expect(tokens(control)).toContain('bg-brand')
    expect(tokens(control)).toContain('h-[50px]')
    expect(tokens(control)).toContain('w-[50px]')
    expect(control.querySelector('svg')?.getAttribute('aria-hidden')).toBe('true')

    scrollTo(0)

    expect(screen.queryByRole('button', { name: 'Back to the top' })).toBeNull()
  })

  it('returns the visitor to the invitation when it is used', () => {
    const scroll = vi.spyOn(window, 'scrollTo').mockImplementation(() => {})
    render(<ScrollTop />)

    scrollTo(SHOW_AT + 10)
    fireEvent.click(screen.getByRole('button', { name: 'Back to the top' }))

    expect(scroll).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
  })
})
