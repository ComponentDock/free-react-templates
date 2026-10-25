import { fireEvent, render } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { ScrollProgress } from './ScrollProgress'

function setDocumentHeight(scrollHeight: number, innerHeight: number, scrollY: number) {
  Object.defineProperty(document.documentElement, 'scrollHeight', {
    configurable: true,
    value: scrollHeight,
  })
  Object.defineProperty(window, 'innerHeight', { configurable: true, value: innerHeight })
  Object.defineProperty(window, 'scrollY', { configurable: true, value: scrollY })
}

describe('ScrollProgress', () => {
  afterEach(() => {
    Object.defineProperty(document.documentElement, 'scrollHeight', {
      configurable: true,
      value: 0,
    })
    Object.defineProperty(window, 'innerHeight', { configurable: true, value: 768 })
    Object.defineProperty(window, 'scrollY', { configurable: true, value: 0 })
  })

  it('stays empty when the page does not scroll', () => {
    const { container } = render(<ScrollProgress />)

    const bar = container.firstElementChild as HTMLElement
    expect(bar.style.width).toBe('0%')
    expect(bar).toHaveAttribute('aria-hidden', 'true')
  })

  it('tracks the scrolled fraction of the page', () => {
    setDocumentHeight(2000, 1000, 500)
    const { container } = render(<ScrollProgress />)

    fireEvent.scroll(window)

    const bar = container.firstElementChild as HTMLElement
    expect(bar.style.width).toBe('50%')
  })

  it('caps at the full width and follows a resize', () => {
    setDocumentHeight(2000, 1000, 4000)
    const { container } = render(<ScrollProgress />)

    fireEvent.resize(window)

    const bar = container.firstElementChild as HTMLElement
    expect(bar.style.width).toBe('100%')
  })

  it('stops listening once unmounted', () => {
    const remove = vi.spyOn(window, 'removeEventListener')
    const { unmount } = render(<ScrollProgress />)

    unmount()

    expect(remove).toHaveBeenCalledWith('scroll', expect.any(Function))
    expect(remove).toHaveBeenCalledWith('resize', expect.any(Function))
  })
})
