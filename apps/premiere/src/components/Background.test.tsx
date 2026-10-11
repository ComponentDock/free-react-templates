import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, render } from '@testing-library/react'
import { Background } from './Background'

describe('Background', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('layers three seeded photos under the dark overlay', () => {
    const { container } = render(<Background />)

    const photos = Array.from(container.querySelectorAll('img'))
    expect(photos).toHaveLength(3)
    expect(photos[0]).toHaveAttribute('src', 'https://picsum.photos/seed/premiere-bg-1/1920/1200')
    expect(photos[2]).toHaveAttribute('src', 'https://picsum.photos/seed/premiere-bg-3/1920/1200')
    expect(photos[0]).toHaveAttribute('alt', '')
    expect(container.querySelector('.bg-overlay')).not.toBeNull()
  })

  it('cross-fades to the next photo every 7 seconds', () => {
    vi.useFakeTimers()
    const { container } = render(<Background />)
    const photos = () => Array.from(container.querySelectorAll('img'))

    expect(photos()[0]).toHaveAttribute('data-active', 'true')
    expect(photos()[1]).toHaveAttribute('data-active', 'false')

    act(() => {
      vi.advanceTimersByTime(7000)
    })

    expect(photos()[1]).toHaveAttribute('data-active', 'true')
    expect(photos()[0]).toHaveAttribute('data-active', 'false')
  })

  it('accepts a className override', () => {
    const { container } = render(<Background className="opacity-50" />)

    expect(container.firstElementChild).toHaveClass('opacity-50')
  })
})
