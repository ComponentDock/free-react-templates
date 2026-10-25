import { act, render } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Reveal } from '../components/Reveal'
import { stubMedia, restoreMedia } from './helpers'

type ObserverCallback = (entries: { isIntersecting: boolean }[]) => void

function installObserver(options: { intersect: boolean }) {
  const instances: { callback: ObserverCallback; disconnected: boolean }[] = []

  class FakeObserver {
    callback: ObserverCallback
    disconnected = false

    constructor(callback: ObserverCallback) {
      this.callback = callback
      instances.push(this)
    }

    observe() {}
    unobserve() {}
    disconnect() {
      this.disconnected = true
    }
  }

  vi.stubGlobal('IntersectionObserver', FakeObserver)
  return { instances, options }
}

describe('Reveal', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
    restoreMedia()
  })

  it('leaves above-the-fold content alone', () => {
    const { instances } = installObserver({ intersect: true })
    const { container } = render(<Reveal>Visible immediately</Reveal>)

    expect(container.firstElementChild).toHaveAttribute('data-animate', 'idle')
    expect(instances).toHaveLength(0)
  })

  it('hides content that starts below the fold and reveals it on intersection', () => {
    const { instances } = installObserver({ intersect: true })
    vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue({
      top: 2000,
      bottom: 2100,
      height: 100,
      left: 0,
      right: 0,
      width: 0,
      x: 0,
      y: 2000,
      toJSON: () => ({}),
    })

    const { container } = render(
      <Reveal delay={150} className="extra">
        Late content
      </Reveal>,
    )
    const wrapper = container.firstElementChild as HTMLElement

    expect(wrapper).toHaveAttribute('data-animate', 'hidden')
    expect(wrapper).toHaveClass('opacity-0', 'extra')
    expect(wrapper).toHaveStyle({ transitionDelay: '150ms' })

    act(() => instances[0]!.callback([{ isIntersecting: false }]))
    expect(wrapper).toHaveAttribute('data-animate', 'hidden')

    act(() => instances[0]!.callback([{ isIntersecting: true }]))
    expect(wrapper).toHaveAttribute('data-animate', 'shown')
    expect(wrapper).toHaveClass('opacity-100')

    vi.restoreAllMocks()
  })

  it('bails out entirely when motion is reduced', () => {
    const { instances } = installObserver({ intersect: true })
    vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue({
      top: 2000,
      bottom: 2100,
      height: 100,
      left: 0,
      right: 0,
      width: 0,
      x: 0,
      y: 2000,
      toJSON: () => ({}),
    })
    stubMedia(true)

    render(<Reveal>Not animated</Reveal>)

    expect(instances).toHaveLength(0)
    vi.restoreAllMocks()
  })

  it('does nothing when the environment has no IntersectionObserver', () => {
    vi.stubGlobal('IntersectionObserver', undefined)
    vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue({
      top: 2000,
      bottom: 2100,
      height: 100,
      left: 0,
      right: 0,
      width: 0,
      x: 0,
      y: 2000,
      toJSON: () => ({}),
    })

    const { container } = render(<Reveal>No observer</Reveal>)

    expect(container.firstElementChild).toHaveAttribute('data-animate', 'idle')
    vi.restoreAllMocks()
  })
})
