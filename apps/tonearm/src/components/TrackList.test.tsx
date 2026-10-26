import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import { ALBUM } from '../data'
import { TrackList } from './TrackList'

describe('TrackList', () => {
  it('renders five rows in order with their lengths', () => {
    render(<TrackList tracks={ALBUM.tracks} currentIndex={0} onSelect={() => {}} />)

    const rows = within(screen.getByRole('list')).getAllByRole('listitem')
    expect(rows).toHaveLength(5)
    expect(rows.map((row) => row.textContent)).toEqual([
      '1Low Tide Lights3:34',
      '2Salt in the Radio4:11',
      '3Harbour Cats3:18',
      '4Swimming After Midnight4:36',
      '5Postcards (Reprise)3:23',
    ])
  })

  it('marks exactly one row as current', () => {
    render(<TrackList tracks={ALBUM.tracks} currentIndex={2} onSelect={() => {}} />)

    const buttons = screen.getAllByRole('button')
    expect(buttons.filter((button) => button.getAttribute('aria-current') === 'true')).toHaveLength(
      1,
    )
    expect(buttons[2]).toHaveAttribute('aria-current', 'true')
    expect(buttons[0]).not.toHaveAttribute('aria-current')
  })

  it('keeps the number and the equaliser in the same grid cell', () => {
    const { container } = render(
      <TrackList tracks={ALBUM.tracks} currentIndex={0} onSelect={() => {}} />,
    )

    const row = screen.getAllByRole('button')[0]!
    expect(row.className).toContain('grid-cols-[22px_1fr_auto]')
    expect(row.className).toContain('gap-3')
    expect(row.className).toContain('px-3')
    expect(row.className).toContain('py-2.5')
    expect(row.className).toContain('rounded-row')
    expect(row.className).toContain('hover:bg-row-hover')
    expect(row.className).toContain('aria-[current=true]:bg-teal-row')

    const num = row.querySelector('.tonearm-num')!
    const eq = row.querySelector('.tonearm-eq')!
    expect(num.className).toContain('col-start-1')
    expect(num.className).toContain('row-start-1')
    expect(eq.className).toContain('col-start-1')
    expect(eq.className).toContain('row-start-1')
    expect(eq.querySelectorAll('i')).toHaveLength(3)
    expect(container.querySelectorAll('img')).toHaveLength(0)
  })

  it('reports the index of the row that was clicked', () => {
    const onSelect = vi.fn()
    render(<TrackList tracks={ALBUM.tracks} currentIndex={0} onSelect={onSelect} />)

    fireEvent.click(screen.getByRole('button', { name: /Harbour Cats/ }))
    expect(onSelect).toHaveBeenCalledWith(2)
  })
})
