import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { CountdownGroup } from './CountdownGroup'

describe('CountdownGroup', () => {
  it('renders one tile per digit and names the group for assistive tech', () => {
    render(<CountdownGroup label="Days" value="35" />)

    const group = screen.getByRole('list', { name: 'Days' })

    expect(within(group).getAllByTestId('digit-tile')).toHaveLength(2)
    expect(
      within(group)
        .getAllByTestId('digit-tile')
        .map((tile) => tile.textContent),
    ).toEqual(['3', '5'])
  })

  it('keeps the pair on one line', () => {
    render(<CountdownGroup label="Sec" value="07" />)

    expect(screen.getByRole('list', { name: 'Sec' })).toHaveClass('flex', 'items-center')
  })

  it('accepts layout overrides', () => {
    render(<CountdownGroup label="Min" value="59" className="opacity-90" />)

    expect(screen.getByRole('list', { name: 'Min' })).toHaveClass('opacity-90')
  })
})
