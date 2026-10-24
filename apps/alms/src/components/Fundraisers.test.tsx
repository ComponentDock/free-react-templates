import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Fundraisers } from './Fundraisers'
import { fundraisers } from '../data'

describe('Fundraisers', () => {
  it('renders the section header and the view-all link', () => {
    render(<Fundraisers />)
    expect(screen.getByRole('heading', { name: 'Latest Fundraisers' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'View All Fundraisers' })).toHaveAttribute(
      'href',
      '#fundraisers',
    )
  })

  it('renders six fundraiser cards with titles', () => {
    render(<Fundraisers />)
    for (const item of fundraisers) {
      expect(screen.getByRole('heading', { name: item.title })).toBeInTheDocument()
    }
    expect(screen.getByRole('heading', { name: 'Clean Water for Urban Schools' })).toBeVisible()
  })

  it('reports each campaign at forty percent funded', () => {
    render(<Fundraisers />)
    const bars = screen.getAllByRole('progressbar')
    expect(bars).toHaveLength(6)
    expect(bars[0]).toHaveAttribute('aria-valuenow', '40')
    expect(bars[0]).toHaveAttribute('aria-label', 'Clean Water for Urban Schools funding progress')
    const fill = bars[0]?.firstElementChild as HTMLElement
    expect(fill).toHaveStyle({ width: '40%' })
  })

  it('renders the raised-of-goal line on every card', () => {
    render(<Fundraisers />)
    expect(screen.getAllByText('$12,000 raised of $30,000')).toHaveLength(6)
    expect(screen.getAllByText('Last donation 1w ago')).toHaveLength(6)
  })
})
