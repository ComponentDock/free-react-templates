import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { EMPTY_FILTERS } from '../data/models'
import { Models } from './Models'

describe('Models', () => {
  it('renders the Popular Model heading and all six model cards with stats', () => {
    render(<Models filters={EMPTY_FILTERS} />)
    expect(screen.getByRole('heading', { name: 'Popular Model' })).toBeInTheDocument()
    for (const name of [
      'Patricia Becket',
      'Emily Stewart',
      'Sofia Scott',
      'Chloe Johnson',
      'Victoria Henderson',
      'Ella Turner',
    ]) {
      const heading = screen.getByRole('heading', { name })
      expect(heading).toBeInTheDocument()
      const article = heading.closest('article')!
      expect(within(article).getByText(/Age:/)).toBeInTheDocument()
      expect(within(article).getByText(/Height:/)).toBeInTheDocument()
      expect(within(article).getByText(/Bust:/)).toBeInTheDocument()
      expect(within(article).getByText(/Waist:/)).toBeInTheDocument()
      expect(within(article).getByText(/Hips:/)).toBeInTheDocument()
      expect(within(article).getByText(/Shoes:/)).toBeInTheDocument()
      expect(within(article).getByText(/Eyes:/)).toBeInTheDocument()
    }
    expect(screen.getAllByRole('article')).toHaveLength(6)
  })

  it('filters the grid to models matching the selected height', () => {
    render(<Models filters={{ ...EMPTY_FILTERS, height: '5.8' }} />)
    expect(screen.getByRole('heading', { name: 'Emily Stewart' })).toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: 'Patricia Becket' })).not.toBeInTheDocument()
  })

  it('combines filters with AND semantics', () => {
    render(<Models filters={{ ...EMPTY_FILTERS, height: '5.9', eyes: 'Gray' }} />)
    expect(screen.getByRole('heading', { name: 'Chloe Johnson' })).toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: 'Patricia Becket' })).not.toBeInTheDocument()
  })

  it('shows an empty state when no model matches the filters', () => {
    render(<Models filters={{ ...EMPTY_FILTERS, eyes: 'Amber', height: '5.7' }} />)
    expect(screen.getByRole('status')).toHaveTextContent('No models match your search.')
    expect(screen.queryByRole('heading', { level: 3 })).not.toBeInTheDocument()
  })
})
