import { act, render } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Reveal } from '../components/Reveal'
import { belowFold, installIO, resetIO, resetMedia, stubMedia } from './helpers'

afterEach(() => {
  vi.restoreAllMocks()
  resetIO()
  resetMedia()
})

describe('Reveal', () => {
  it('leaves an in-view block at full opacity', () => {
    const { container } = render(<Reveal>Above the fold</Reveal>)

    const block = container.firstElementChild
    expect(block).toHaveAttribute('data-animate', 'idle')
    expect(block).not.toHaveClass('opacity-0')
    expect(block).toHaveStyle({ transitionDelay: '0ms' })
  })

  it('hides a below-the-fold block, then reveals it once it intersects', () => {
    belowFold()
    const io = installIO()

    const { container, unmount } = render(
      <Reveal delay={200} className="band-head">
        Below
      </Reveal>,
    )
    const block = container.firstElementChild
    expect(block).toHaveAttribute('data-animate', 'hidden')
    expect(block).toHaveClass('opacity-0', 'translate-y-5', 'band-head')
    expect(block).toHaveStyle({ transitionDelay: '200ms' })
    expect(io.count()).toBe(1)

    act(() => io.fire(0, false))
    expect(block).toHaveAttribute('data-animate', 'hidden')

    act(() => io.fire(0, true))
    expect(block).toHaveAttribute('data-animate', 'shown')
    expect(block).toHaveClass('opacity-100')
    expect(io.isDisconnected(0)).toBe(true)

    unmount()
    expect(io.isDisconnected(0)).toBe(true)
  })

  it('does not hide anything when motion is reduced', () => {
    belowFold()
    stubMedia(true)
    const io = installIO()

    const { container } = render(<Reveal>Reduced</Reveal>)

    expect(container.firstElementChild).toHaveAttribute('data-animate', 'idle')
    expect(io.count()).toBe(0)
  })

  it('does not hide anything when the observer is missing', () => {
    belowFold()
    resetIO()

    const { container } = render(<Reveal>No observer</Reveal>)

    expect(container.firstElementChild).toHaveAttribute('data-animate', 'idle')
  })
})
