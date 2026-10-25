import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'
import { SERVICES } from '../content'

describe('Services', () => {
  it('renders the six priced cells in a hairline grid', () => {
    const { container } = render(<Services />)

    const cells = Array.from(container.querySelectorAll('#services li'))
    expect(cells).toHaveLength(6)
    SERVICES.items.forEach((item, index) => {
      const cell = cells[index] as HTMLElement
      expect(within(cell).getByRole('heading', { name: item.name })).toBeInTheDocument()
      expect(within(cell).getByText(item.body)).toBeInTheDocument()
      expect(within(cell).getByText(item.price)).toHaveClass('text-primary-700', 'font-bold')
    })

    const grid = container.querySelector('#services ul')
    expect(grid).toHaveClass('gap-px', 'bg-ink-100', 'rounded-2xl', 'sm:grid-cols-2', 'lg:grid-cols-3')
    expect(cells[0]).toHaveClass('bg-white')
  })

  it('keeps the sample-price footnote below the grid', () => {
    render(<Services />)
    expect(screen.getByText(SERVICES.footnote)).toHaveClass('text-ink-400')
  })

  it('sets the eyebrow in the bold blue treatment the light bands use', () => {
    render(<Services />)
    expect(screen.getByText(SERVICES.eyebrow)).toHaveClass('font-bold', 'text-primary-700')
  })
})
