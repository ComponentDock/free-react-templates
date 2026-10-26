import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { StayList } from './StayList'

describe('StayList', () => {
  it('renders three cards in one column with a single h1-free heading each', () => {
    const { container } = render(<StayList />)

    const cards = container.querySelectorAll('article')
    expect(cards).toHaveLength(3)
    expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(3)
    expect(container.querySelectorAll('h1')).toHaveLength(0)
  })

  it('labels every amenity list and keeps the reference order of listings', () => {
    render(<StayList />)

    expect(screen.getAllByRole('list', { name: 'Amenities' })).toHaveLength(3)
    const titles = screen.getAllByRole('heading', { level: 2 }).map((h) => h.textContent)
    expect(titles).toEqual([
      'Cedar House with Pool and Sea View',
      'Garden Villa near the Rice Terraces',
      'Cliffside Studio with Caldera Terrace',
    ])
  })

  it('stays a single-column grid at every width', () => {
    const { container } = render(<StayList />)

    const list = container.firstElementChild as HTMLElement
    expect(list.className).toContain('grid')
    expect(list.className).toContain('gap-5')
    expect(list.className).not.toContain('sm:')
    expect(list.className).not.toContain('auto-fit')
  })

  it('gives the page exactly three title links and no other anchor', () => {
    const { container } = render(<StayList />)

    expect(container.querySelectorAll('a')).toHaveLength(3)
    expect(container.querySelectorAll('button, form')).toHaveLength(0)
  })
})
