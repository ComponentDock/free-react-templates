import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Service } from './Service'
import { SERVICE } from '../content'

describe('Service', () => {
  it('renders four cells in one hairline grid', () => {
    const { container } = render(<Service />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(SERVICE.heading)
    expect(screen.getByText(SERVICE.lede)).toBeInTheDocument()

    const grid = container.querySelector('[data-service-grid]') as HTMLElement
    expect(grid.className).toContain('gap-px')
    expect(grid.className).toContain('bg-ink-100')
    expect(grid.className).toContain('rounded-2xl')

    const cells = container.querySelectorAll('[data-service-cell]')
    expect(cells).toHaveLength(4)
    cells.forEach((cell, index) => {
      expect(cell.textContent).toContain(SERVICE.cells[index]!.title)
      expect(cell.textContent).toContain(SERVICE.cells[index]!.body)
      expect(cell.textContent).toContain(SERVICE.cells[index]!.price)
    })
  })
})
