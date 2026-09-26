import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders the quote text', () => {
    render(<Gallery />)
    expect(screen.getByText(/The camera makes you forget/i)).toBeInTheDocument()
  })

  it('renders 6 gallery items', () => {
    render(<Gallery />)
    const viewButtons = screen.getAllByText(/view gallery/i)
    expect(viewButtons).toHaveLength(6)
  })

  it('renders gallery item titles', () => {
    render(<Gallery />)
    const titles = screen.getAllByText(/Red Passion/i)
    expect(titles.length).toBeGreaterThan(0)
  })

  it('renders gallery item artist names', () => {
    render(<Gallery />)
    const artists = screen.getAllByText(/Artist: John Doe/i)
    expect(artists).toHaveLength(6)
  })

  it('renders See All Galleries button', () => {
    render(<Gallery />)
    expect(screen.getByRole('link', { name: /see all galleries/i })).toBeInTheDocument()
  })
})
