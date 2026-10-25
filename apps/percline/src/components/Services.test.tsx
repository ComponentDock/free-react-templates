import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'

describe('Services', () => {
  it('renders the six cells with their price lines in order', () => {
    const { container } = render(<Services />)
    const cells = container.querySelectorAll('li')
    expect(cells).toHaveLength(6)

    const prices = Array.from(container.querySelectorAll('li > p:last-child')).map(
      (node) => node.textContent,
    )
    expect(prices).toEqual([
      'From $425',
      'From $375',
      'From $295',
      'Quoted after evaluation',
      'From $240',
      'From $495',
    ])
    expect(screen.getByText('Real estate inspection')).toHaveClass('text-lg', 'font-bold')
    expect(screen.getByText(/Starting prices are sample data/)).toHaveClass('text-ink-400')
  })

  it('is a hairline grid over the ink ground', () => {
    const { container } = render(<Services />)
    const grid = container.querySelector('ul')
    expect(grid).toHaveClass('gap-px', 'bg-ink-100', 'rounded-2xl', 'lg:grid-cols-3')
  })
})
