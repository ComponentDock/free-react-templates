import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ServiceAreas } from './ServiceAreas'
import { AREAS } from '../content'

describe('ServiceAreas', () => {
  it('heads the band in Inter 700, not the editorial serif', () => {
    render(<ServiceAreas />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveTextContent(AREAS.heading)
    expect(heading).toHaveClass('text-3xl', 'font-bold', 'tracking-tight', 'sm:text-4xl')
    expect(heading).not.toHaveClass('font-serif')
    expect(screen.getByText(AREAS.intro)).toHaveClass('text-lg', 'text-ink-500')
  })

  it('lists the twelve towns as ruled columns', () => {
    const { container } = render(<ServiceAreas />)
    const list = container.querySelector('ul') as HTMLElement
    expect(list).toHaveClass('grid', 'grid-cols-2', 'gap-x-6', 'sm:grid-cols-3')

    const towns = container.querySelectorAll('li')
    expect(towns).toHaveLength(12)
    expect(Array.from(towns).map((town) => town.textContent)).toEqual(AREAS.towns)
    for (const town of Array.from(towns)) {
      expect(town).toHaveClass('border-b', 'border-ink-100', 'py-2.5', 'text-ink-700')
    }
  })

  it('carries the replace-the-list note', () => {
    render(<ServiceAreas />)
    expect(screen.getByText(AREAS.note)).toHaveClass('text-sm', 'text-ink-400')
  })
})
