import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ShowGrid } from './ShowGrid'
import { TRENDING_SHOWS } from '../data'

describe('ShowGrid', () => {
  it('renders the section heading', () => {
    render(<ShowGrid title="Trending Now" shows={TRENDING_SHOWS} />)
    expect(screen.getByText('Trending Now')).toBeInTheDocument()
  })

  it('renders all cards', () => {
    render(<ShowGrid title="Trending Now" shows={TRENDING_SHOWS} />)
    for (const show of TRENDING_SHOWS) {
      expect(screen.getByText(show.title)).toBeInTheDocument()
    }
  })

  it('renders View All link when viewAll is true', () => {
    render(<ShowGrid title="Trending Now" shows={TRENDING_SHOWS} viewAll />)
    expect(screen.getByText('View All')).toBeInTheDocument()
  })

  it('does not render View All link when viewAll is false', () => {
    render(<ShowGrid title="Popular Shows" shows={TRENDING_SHOWS} />)
    expect(screen.queryByText('View All')).not.toBeInTheDocument()
  })

  it('renders a red accent bar before the heading', () => {
    const { container } = render(<ShowGrid title="Trending Now" shows={TRENDING_SHOWS} />)
    const accentBar = container.querySelector('.bg-brand')
    expect(accentBar).toBeInTheDocument()
  })
})
