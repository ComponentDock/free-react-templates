import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByText('Latest From Our Blog Page')).toBeInTheDocument()
  })

  it('renders 3 blog posts', () => {
    render(<Blog />)
    expect(screen.getByText(/Subdue lesser beast winged/)).toBeInTheDocument()
    expect(screen.getByText(/You dominion signs good/)).toBeInTheDocument()
    expect(screen.getByText(/First fowl winged of likeness/)).toBeInTheDocument()
  })

  it('renders category tags', () => {
    render(<Blog />)
    expect(screen.getByText('Chemical Research')).toBeInTheDocument()
    expect(screen.getByText('Construction')).toBeInTheDocument()
    expect(screen.getByText('Engineering')).toBeInTheDocument()
  })

  it('renders author and date for posts', () => {
    render(<Blog />)
    const authorEntries = screen.getAllByText('By Michal')
    expect(authorEntries.length).toBe(3)
  })
})
