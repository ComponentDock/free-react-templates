import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LISTINGS } from '../data/listings'
import { ListingGrid } from './ListingGrid'

describe('ListingGrid', () => {
  it('lays the listings on the arithmetic auto-fit grid', () => {
    render(<ListingGrid listings={LISTINGS} savedIds={[]} onToggle={() => {}} />)

    const grid = screen.getAllByRole('article')[0]!.parentElement!
    expect(grid.className).toContain('grid')
    expect(grid.className).toContain('grid-cols-[repeat(auto-fit,minmax(min(100%,290px),1fr))]')
    expect(grid.className).toContain('gap-6')
    expect(grid.className).not.toMatch(/(sm|md|lg|xl):/)
    expect(grid.children).toHaveLength(3)
    ;[...grid.children].forEach((card) => expect(card.tagName).toBe('ARTICLE'))
  })

  it('passes the saved state down to the right card only', () => {
    render(
      <ListingGrid listings={LISTINGS} savedIds={['listing-7-banyan-lane']} onToggle={() => {}} />,
    )

    const pressed = screen
      .getAllByRole('button')
      .map((button) => button.getAttribute('aria-pressed'))
    expect(pressed).toEqual(['false', 'true', 'false'])
  })

  it('reports the pressed listing back to its owner', async () => {
    const onToggle = vi.fn()
    const user = userEvent.setup()
    render(<ListingGrid listings={LISTINGS} savedIds={[]} onToggle={onToggle} />)

    await user.click(screen.getByRole('button', { name: 'Save 22 Lagoon Drive to favourites' }))
    expect(onToggle).toHaveBeenCalledTimes(1)
    expect(onToggle.mock.calls[0]![0]).toBe(LISTINGS[2])
  })
})
