import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { act, fireEvent, render, screen } from '@testing-library/react'
import { App } from './App'

const advance = (ms: number) => {
  act(() => {
    vi.advanceTimersByTime(ms)
  })
}

const podcastBar = () => screen.getAllByRole('progressbar')[0]!
const albumBar = () => screen.getAllByRole('progressbar')[1]!

describe('App', () => {
  it('centres one 820 px row on the warm ground', () => {
    const { container } = render(<App />)

    const main = container.querySelector('main') as HTMLElement
    expect(main.className).toContain('flex')
    expect(main.className).toContain('justify-center')
    expect(main.className).toContain('bg-ground')
    expect(main.className).toContain('px-4')
    expect(main.className).toContain('py-[clamp(32px,6vw,80px)]')
    expect(main.className).not.toContain('min-h')

    const row = main.querySelector('.grid') as HTMLElement
    expect(row.className).toContain(
      'grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))]',
    )
    expect(row.className).toContain('items-start')
    expect(row.className).toContain('gap-6')

    const wrapper = row.parentElement as HTMLElement
    expect(wrapper.className).toContain('max-w-[820px]')
  })

  it('starts the heading outline at a visually hidden h1', () => {
    render(<App />)

    const headings = screen.getAllByRole('heading')
    expect(headings.map((heading) => heading.tagName)).toEqual(['H1', 'H2', 'H2'])
    const h1 = screen.getByRole('heading', { level: 1 })
    expect(h1.textContent).toBe('Audio players')
    expect(h1.className).toContain('sr-only')
  })

  it('offers eleven buttons in the reference tab order', () => {
    render(<App />)

    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(11)
    expect(buttons.map((button) => button.getAttribute('aria-label') ?? button.textContent)).toEqual([
      'Playback speed 1×',
      'Back 15 seconds',
      'Play',
      'Forward 30 seconds',
      'Add to queue',
      'Play',
      '1. Low Tide Lights, 3:34',
      '2. Salt in the Radio, 4:11',
      '3. Harbour Cats, 3:18',
      '4. Swimming After Midnight, 4:36',
      '5. Postcards (Reprise), 3:23',
    ])
  })

  it('carries no in-page anchors, no images and no media elements', () => {
    const { container } = render(<App />)

    expect(container.querySelectorAll('a[href="#"]')).toHaveLength(0)
    expect(container.querySelectorAll('img')).toHaveLength(0)
    expect(container.querySelector('audio')).toBeNull()
    expect(container.querySelector('video')).toBeNull()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('opens the episode 18:42 in and the album at zero', () => {
    render(<App />)

    expect(podcastBar()).toHaveAttribute('aria-valuetext', '18:42 of 42:18')
    expect(albumBar()).toHaveAttribute('aria-valuetext', '0:00 of 3:34')
    expect(podcastBar()).toHaveAttribute('aria-label', 'Episode progress')
    expect(albumBar()).toHaveAttribute('aria-label', 'Song progress')
  })

  describe('playback', () => {
    beforeEach(() => {
      vi.useFakeTimers()
    })

    afterEach(() => {
      vi.useRealTimers()
    })

    it('reveals playback in place: label, pressed state and card attribute', () => {
      const { container } = render(<App />)

      fireEvent.click(screen.getAllByRole('button', { name: 'Play' })[0]!)
      const pause = screen.getAllByRole('button', { name: 'Pause' })[0]!

      expect(pause).toHaveAttribute('aria-pressed', 'true')
      expect(container.querySelectorAll('section')[0]).toHaveAttribute('data-playing', 'true')
      expect(container.querySelectorAll('section')[1]).toHaveAttribute('data-playing', 'false')
    })

    it('advances the episode a second per second and redraws the fill', () => {
      render(<App />)

      fireEvent.click(screen.getAllByRole('button', { name: 'Play' })[0]!)
      advance(1000)

      expect(podcastBar()).toHaveAttribute('aria-valuenow', '1123')
      expect(podcastBar()).toHaveAttribute('aria-valuetext', '18:43 of 42:18')
      expect(parseFloat((screen.getAllByTestId('tonearm-fill')[0] as HTMLElement).style.width)).toBeGreaterThan(
        44.2,
      )
    })

    it('skips forward and back from the transport', () => {
      render(<App />)

      fireEvent.click(screen.getAllByRole('button', { name: 'Forward 30 seconds' })[0]!)
      expect(podcastBar()).toHaveAttribute('aria-valuenow', '1152')
      expect(screen.getByText('-23:06')).toBeInTheDocument()

      fireEvent.click(screen.getAllByRole('button', { name: 'Back 15 seconds' })[0]!)
      expect(podcastBar()).toHaveAttribute('aria-valuenow', '1137')
    })

    it('moves the playing state to a selected track and plays it', () => {
      render(<App />)

      fireEvent.click(screen.getByRole('button', { name: /Harbour Cats/ }))

      expect(albumBar()).toHaveAttribute('aria-valuemax', '198')
      expect(albumBar()).toHaveAttribute('aria-valuetext', '0:00 of 3:18')

      advance(500)
      expect(albumBar()).toHaveAttribute('aria-valuenow', '1')
      expect(albumBar()).toHaveAttribute('aria-valuetext', '0:01 of 3:18')

      const current = screen
        .getAllByRole('button')
        .filter((button) => button.getAttribute('aria-current') === 'true')
      expect(current).toHaveLength(1)
      expect(current[0]!.textContent).toContain('Harbour Cats')
    })

    it('rolls on to the next track when one finishes', () => {
      render(<App />)

      fireEvent.click(screen.getByRole('button', { name: /Swimming After Midnight/ }))
      advance(276_000)

      expect(albumBar()).toHaveAttribute('aria-valuemax', '203')
      const current = screen
        .getAllByRole('button')
        .filter((button) => button.getAttribute('aria-current') === 'true')
      expect(current[0]!.textContent).toContain('Postcards (Reprise)')
      const pauses = screen.getAllByRole('button', { name: 'Pause' })
      expect(pauses).toHaveLength(1)
      expect(pauses[0]).toHaveAttribute('aria-pressed', 'true')
    })

    it('clamps and pauses at the end of the last track', () => {
      const { container } = render(<App />)

      fireEvent.click(screen.getByRole('button', { name: /Postcards/ }))
      advance(203_000)

      expect(albumBar()).toHaveAttribute('aria-valuenow', '203')
      expect(albumBar()).toHaveAttribute('aria-valuetext', '3:23 of 3:23')
      expect(screen.getByText('-0:00')).toBeInTheDocument()
      expect(container.querySelectorAll('section')[1]).toHaveAttribute('data-playing', 'false')
    })

    it('clamps and pauses the track-less podcast at the end', () => {
      render(<App />)

      fireEvent.click(screen.getAllByRole('button', { name: 'Play' })[0]!)
      advance(2538 * 1000)

      expect(podcastBar()).toHaveAttribute('aria-valuenow', '2538')
      expect(podcastBar()).toHaveAttribute('aria-valuetext', '42:18 of 42:18')
      expect(screen.getAllByRole('button', { name: 'Play' })[0]).toHaveAttribute(
        'aria-pressed',
        'false',
      )
    })
  })
})
