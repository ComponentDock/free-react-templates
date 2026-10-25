import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { AREAS } from '../content'
import { Areas } from './Areas'

describe('Areas', () => {
  it('lists the twelve towns on bottom rules', () => {
    render(<Areas />)
    const towns = screen.getAllByRole('listitem')
    expect(towns).toHaveLength(12)
    expect(towns[0]).toHaveTextContent('Albuquerque')
    expect(towns[11]).toHaveTextContent('Edgewood')
    towns.forEach((town) => {
      expect(town.className).toContain('border-b')
    })
  })

  it('splits the band five / seven with the list in two columns at base', () => {
    const { container } = render(<Areas />)
    expect(container.querySelector('.lg\\:col-span-5')).not.toBeNull()
    expect(container.querySelector('.lg\\:col-span-7')).not.toBeNull()
    expect(screen.getByRole('list').className).toContain('grid-cols-2')
  })

  it('carries the heading, lede and the plain-text note', () => {
    render(<Areas />)
    expect(screen.getByRole('heading', { level: 2, name: AREAS.heading })).toBeInTheDocument()
    expect(screen.getByText(AREAS.lede)).toBeInTheDocument()
    expect(screen.getByText(AREAS.note)).toBeInTheDocument()
  })
})
