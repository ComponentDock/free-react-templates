import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopFundraisers } from './TopFundraisers'

describe('TopFundraisers', () => {
  it('shows the heading and six fundraiser cards', () => {
    const { container } = render(<TopFundraisers />)
    expect(screen.getByRole('heading', { level: 2, name: 'Top Fundraisers' })).toBeInTheDocument()
    const cards = container.querySelectorAll('article.fundraise-item')
    expect(cards).toHaveLength(6)
    expect(screen.getAllByRole('heading', { level: 4, name: 'Children Needs Food' })).toHaveLength(
      6,
    )
    expect(screen.getAllByText('Last donation 1w ago')).toHaveLength(6)
    expect(screen.getAllByText('$8,100 raised of $30,000')).toHaveLength(6)
  })

  it('shows a green progress fill on every card', () => {
    const { container } = render(<TopFundraisers />)
    const fills = container.querySelectorAll('.bg-success')
    expect(fills).toHaveLength(6)
    for (const fill of fills) {
      expect(fill).toHaveStyle({ width: '27%' })
    }
  })

  it('collapses to a single column on narrow viewports', () => {
    const { container } = render(<TopFundraisers />)
    expect(container.querySelector('.grid')).toHaveClass('grid-cols-1')
    expect(container.querySelector('.grid')).toHaveClass('lg:grid-cols-3')
  })
})
