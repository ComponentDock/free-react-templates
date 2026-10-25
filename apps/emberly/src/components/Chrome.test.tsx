import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { BackToTop, CookieStrip, ScrollProgress, SkipLink } from './Chrome'
import { FOOTER } from '../content'

afterEach(() => {
  vi.useRealTimers()
})

describe('SkipLink', () => {
  it('is the first focusable stop and targets the content', () => {
    render(<SkipLink />)
    const link = screen.getByRole('link', { name: 'Skip to content' })
    expect(link).toHaveAttribute('href', '#main-content')
    expect(link).toHaveClass('sr-only')
  })
})

describe('ScrollProgress', () => {
  it('paints the ratio it is given', () => {
    const { container } = render(<ScrollProgress progress={42} />)
    const bar = container.querySelector('[data-scroll-progress]')
    expect(bar).toHaveStyle({ width: '42%' })
    expect(container.firstElementChild).toHaveAttribute('aria-hidden', 'true')
  })
})

describe('CookieStrip', () => {
  it('slides up 1.5 s after load and unmounts on Accept All', () => {
    vi.useFakeTimers()
    render(<CookieStrip />)

    const strip = screen.getByRole('dialog', { name: 'Cookie consent' })
    expect(strip).toHaveClass('translate-y-full')
    expect(strip).toHaveClass('z-50')
    expect(screen.getByText(FOOTER.cookieCopy)).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(1500)
    })
    expect(screen.getByRole('dialog', { name: 'Cookie consent' })).toHaveClass('translate-y-0')

    fireEvent.click(screen.getByRole('button', { name: 'Accept All' }))
    expect(screen.queryByRole('dialog')).toBeNull()
    expect(document.querySelector('[data-cookie-consent]')).toBeNull()
  })

  it('also disappears on Decline', () => {
    render(<CookieStrip />)
    fireEvent.click(screen.getByRole('button', { name: 'Decline' }))
    expect(screen.queryByRole('dialog')).toBeNull()
  })
})

describe('BackToTop', () => {
  it('stays inert above 300 px and appears past it', () => {
    const { rerender } = render(<BackToTop y={120} />)
    const button = screen.getByRole('button', { name: 'Back to top' })
    expect(button).toHaveClass('pointer-events-none', 'opacity-0')

    rerender(<BackToTop y={420} />)
    expect(screen.getByRole('button', { name: 'Back to top' })).toHaveClass(
      'pointer-events-auto',
      'opacity-100',
    )
  })

  it('returns the page to the top when pressed', () => {
    const scrollTo = vi.fn()
    vi.stubGlobal('scrollTo', scrollTo)
    render(<BackToTop y={420} />)
    fireEvent.click(screen.getByRole('button', { name: 'Back to top' }))
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
    vi.unstubAllGlobals()
  })
})
