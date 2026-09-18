import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section title', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Latest News')
  })

  it('renders 3 blog post cards', () => {
    render(<Blog />)
    expect(screen.getByText('Bitcoin Reaches New All-Time High')).toBeInTheDocument()
    expect(screen.getByText('Ethereum 2.0 Launch Date Announced')).toBeInTheDocument()
    expect(screen.getByText('DeFi Market Sees Record Growth')).toBeInTheDocument()
  })

  it('renders blog post excerpts', () => {
    render(<Blog />)
    expect(screen.getByText(/Bitcoin has surpassed/)).toBeInTheDocument()
    expect(screen.getByText(/highly anticipated upgrade/)).toBeInTheDocument()
    expect(screen.getByText(/Decentralized finance protocols/)).toBeInTheDocument()
  })

  it('renders date badges for all posts', () => {
    render(<Blog />)
    expect(screen.getAllByText('Sep')).toHaveLength(3)
    expect(screen.getByText('15')).toBeInTheDocument()
    expect(screen.getByText('12')).toBeInTheDocument()
    expect(screen.getByText('08')).toBeInTheDocument()
  })

  it('renders Read More links', () => {
    render(<Blog />)
    const links = screen.getAllByText('Read More')
    expect(links).toHaveLength(3)
  })
})
