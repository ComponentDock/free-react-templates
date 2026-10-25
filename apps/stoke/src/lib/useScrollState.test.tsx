import { fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { useScrollState } from './useScrollState'

function Progress() {
  const { y, progress } = useScrollState()
  return (
    <p data-testid="read">
      {y}:{progress}
    </p>
  )
}

function setMetrics(scrollY: number, scrollHeight: number) {
  Object.defineProperty(window, 'scrollY', { configurable: true, value: scrollY })
  Object.defineProperty(window, 'innerHeight', { configurable: true, value: 1000 })
  Object.defineProperty(document.documentElement, 'scrollHeight', {
    configurable: true,
    value: scrollHeight,
  })
}

afterEach(() => {
  Object.defineProperty(window, 'scrollY', { configurable: true, value: 0 })
  Object.defineProperty(document.documentElement, 'scrollHeight', {
    configurable: true,
    value: 0,
  })
})

describe('useScrollState', () => {
  it('reads the scroll position at mount', () => {
    setMetrics(500, 3000)
    render(<Progress />)
    expect(screen.getByTestId('read')).toHaveTextContent('500:25')
  })

  it('re-reads the position on every scroll event', () => {
    setMetrics(0, 3000)
    render(<Progress />)
    setMetrics(1500, 3000)
    fireEvent.scroll(window)
    expect(screen.getByTestId('read')).toHaveTextContent('1500:75')
  })

  it('clamps a document shorter than the viewport to 100 %', () => {
    setMetrics(40, 500)
    render(<Progress />)
    expect(screen.getByTestId('read')).toHaveTextContent('40:100')
  })

  it('stops listening when it unmounts', () => {
    const remove = vi.spyOn(window, 'removeEventListener')
    const { unmount } = render(<Progress />)
    unmount()
    expect(remove).toHaveBeenCalledWith('scroll', expect.any(Function))
  })
})
