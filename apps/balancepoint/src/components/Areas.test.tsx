import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { AREAS_COPY, TOWNS } from '../content'
import { Areas } from './Areas'

describe('Areas', () => {
  it('lists the twelve towns as plain text on hairline rules', () => {
    render(<Areas />)
    expect(TOWNS).toHaveLength(12)
    const items = screen.getAllByRole('listitem')
    expect(items).toHaveLength(12)
    TOWNS.forEach((town, index) => {
      expect(items[index]).toHaveTextContent(town)
      expect(items[index]!.className).toContain('border-b')
    })
  })

  it('splits five / seven and stacks the list two-up then three-up', () => {
    render(<Areas />)
    const list = screen.getByRole('list')
    expect(list.className).toContain('grid-cols-2')
    expect(list.className).toContain('sm:grid-cols-3')
    expect((document.getElementById('areas') as HTMLElement).className).toContain('bg-white')
  })

  it('carries the heading, the lede and the towns note', () => {
    render(<Areas />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(AREAS_COPY.heading)
    expect(screen.getByText(AREAS_COPY.lede)).toBeInTheDocument()
    expect(screen.getByText(AREAS_COPY.footnote)).toBeInTheDocument()
  })
})
