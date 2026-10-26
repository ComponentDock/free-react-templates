import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { PODCAST } from '../data'
import { usePlayer } from '../hooks/usePlayer'
import { ProgressRow } from './ProgressRow'
import { Transport } from './Transport'

function Harness() {
  const player = usePlayer({ duration: PODCAST.duration, elapsed: PODCAST.elapsed })
  return (
    <>
      <ProgressRow variant="podcast" player={player} />
      <Transport player={player} />
    </>
  )
}

describe('Transport', () => {
  it('lays out five circular controls 8 px apart in the reference order', () => {
    const { container } = render(<Harness />)

    const row = container.querySelector('.tonearm-play')!.parentElement as HTMLElement
    expect(row.className).toContain('flex')
    expect(row.className).toContain('items-center')
    expect(row.className).toContain('justify-between')
    expect(row.className).toContain('gap-2')
    expect(row.className).toContain('mt-[14px]')

    expect([...row.children].map((child) => child.getAttribute('aria-label'))).toEqual([
      'Playback speed 1×',
      'Back 15 seconds',
      'Play',
      'Forward 30 seconds',
      'Add to queue',
    ])
  })

  it('names the speed control with its current rate', () => {
    render(<Harness />)

    const speed = screen.getByRole('button', { name: 'Playback speed 1×' })
    expect(speed.className).toContain('size-[46px]')
    expect(speed.className).toContain('rounded-full')
    expect(speed.className).toContain('focus-visible:outline-amber')

    fireEvent.click(speed)
    expect(screen.getByRole('button', { name: 'Playback speed 1.5×' })).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Playback speed 1.5×' }))
    expect(screen.getByRole('button', { name: 'Playback speed 2×' })).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Playback speed 2×' }))
    expect(screen.getByRole('button', { name: 'Playback speed 1×' })).toBeInTheDocument()
  })

  it('renders the skip numerals over a 26 px stroked arrow', () => {
    render(<Harness />)

    const back = screen.getByRole('button', { name: 'Back 15 seconds' })
    expect(back.className).toContain('tonearm-skip')
    expect(back.className).toContain('size-[46px]')
    expect(back.querySelector('svg')).toHaveClass('h-[26px]', 'w-[26px]')

    const glyph = back.querySelector('span')!
    expect(glyph.textContent).toBe('15')
    expect(glyph.className).toContain('absolute')
    expect(glyph.className).toContain('text-[9px]')

    expect(screen.getByRole('button', { name: 'Forward 30 seconds' }).textContent).toContain('30')
  })

  it('skips ±seconds and leaves the play state alone', () => {
    render(<Harness />)

    const play = screen.getByRole('button', { name: 'Play' })
    fireEvent.click(screen.getByRole('button', { name: 'Forward 30 seconds' }))
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '1152')
    expect(play).toHaveAttribute('aria-pressed', 'false')

    fireEvent.click(screen.getByRole('button', { name: 'Back 15 seconds' }))
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '1137')
  })

  it('swaps the disc label and pressed state together', () => {
    render(<Harness />)

    const play = screen.getByRole('button', { name: 'Play' })
    expect(play.className).toContain('size-[68px]')
    expect(play.className).toContain('bg-white')
    expect(play.className).toContain('shadow-play')
    expect(play.className).toContain('tonearm-play')
    expect(play.querySelectorAll('svg')).toHaveLength(2)

    fireEvent.click(play)

    const pause = screen.getByRole('button', { name: 'Pause' })
    expect(pause).toHaveAttribute('aria-pressed', 'true')
    expect(screen.queryByRole('button', { name: 'Play' })).toBeNull()
  })

  it('makes the queue button a real toggle instead of a dead control', () => {
    render(<Harness />)

    const queue = screen.getByRole('button', { name: 'Add to queue' })
    expect(queue).toHaveAttribute('aria-pressed', 'false')

    fireEvent.click(queue)
    expect(screen.getByRole('button', { name: 'Added to queue' })).toHaveAttribute(
      'aria-pressed',
      'true',
    )

    fireEvent.click(screen.getByRole('button', { name: 'Added to queue' }))
    expect(screen.getByRole('button', { name: 'Add to queue' })).toHaveAttribute(
      'aria-pressed',
      'false',
    )
  })
})
