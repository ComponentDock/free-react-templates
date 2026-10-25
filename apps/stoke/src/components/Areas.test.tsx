import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Areas } from './Areas'
import { AREAS_NOTE, TOWNS } from '../content'

describe('Areas', () => {
  it('lists the twelve covered towns in the reference order', () => {
    render(<Areas />)
    const items = screen.getAllByRole('listitem').map((item) => item.textContent)
    expect(items).toEqual([...TOWNS])
    expect(items[0]).toBe('Tulsa')
  })

  it('has an h2 but no eyebrow — the reference asymmetry', () => {
    const { container } = render(<Areas />)
    expect(screen.getByRole('heading', { level: 2, name: 'Where we run at night' })).toBeInTheDocument()
    expect(container.querySelector('.uppercase')).toBeNull()
  })

  it('marks each town row with the hairline bottom border', () => {
    render(<Areas />)
    expect(screen.getByText('Broken Arrow')).toHaveClass('border-b', 'border-ink-100')
  })

  it('closes the band with the sample note', () => {
    render(<Areas />)
    expect(screen.getByText(AREAS_NOTE)).toBeInTheDocument()
  })
})
