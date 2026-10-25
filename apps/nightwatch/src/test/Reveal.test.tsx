import { act, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Reveal } from '../components/Reveal'
import { nativeHeight, restoreMedia, stubMedia } from './helpers'

type Cb = (entries: Array<{ isIntersecting: boolean }>) => void

function stubObserver(rectTop: number) {
  const captured: { cb: Cb | null; disconnected: boolean } = { cb: null, disconnected: false }

  vi.spyOn(Element.prototype, 'getBoundingClientRect').mockReturnValue({
    top: rectTop,
    bottom: rectTop + 100,
    left: 0,
    right: 100,
    width: 100,
    height: 100,
    x: 0,
    y: rectTop,
    toJSON: () => ({}),
  })

  class Observer {
    constructor(cb: Cb) {
      captured.cb = cb
    }
    observe() {}
    disconnect() {
      captured.disconnected = true
    }
  }

  vi.stubGlobal('IntersectionObserver', Observer)
  return captured
}

afterEach(() => {
  vi.unstubAllGlobals()
  vi.restoreAllMocks()
  restoreMedia()
})

describe('Reveal', () => {
  it('leaves above-the-fold content visible', () => {
    const captured = stubObserver(0)
    render(<Reveal>Above the fold</Reveal>)

    expect(screen.getByText('Above the fold')).toHaveAttribute('data-animate', 'idle')
    expect(captured.cb).toBeNull()
  })

  it('hides a lower band, then reveals it when it intersects', () => {
    const captured = stubObserver(nativeHeight)
    render(<Reveal delay={150}>Lower band</Reveal>)
    const wrapper = screen.getByText('Lower band')

    expect(wrapper).toHaveAttribute('data-animate', 'hidden')
    expect(wrapper).toHaveClass('opacity-0', 'translate-y-5')
    expect(wrapper).toHaveStyle({ transitionDelay: '150ms' })

    act(() => captured.cb?.([{ isIntersecting: false }]))
    expect(wrapper).toHaveAttribute('data-animate', 'hidden')

    act(() => captured.cb?.([{ isIntersecting: true }]))
    expect(wrapper).toHaveAttribute('data-animate', 'shown')
    expect(wrapper).toHaveClass('opacity-100', 'translate-y-0')
    expect(captured.disconnected).toBe(true)
  })

  it('never hides anything when motion is reduced', () => {
    const captured = stubObserver(nativeHeight)
    stubMedia(true)
    render(<Reveal>Reduced</Reveal>)

    expect(screen.getByText('Reduced')).toHaveAttribute('data-animate', 'idle')
    expect(captured.cb).toBeNull()
  })

  it('skips the observer where IntersectionObserver does not exist', () => {
    stubObserver(nativeHeight)
    vi.stubGlobal('IntersectionObserver', undefined)
    render(<Reveal>No observer</Reveal>)

    expect(screen.getByText('No observer')).toHaveAttribute('data-animate', 'idle')
  })
})
