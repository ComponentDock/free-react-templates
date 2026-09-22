import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('displays the section heading', () => {
    render(<Blog />)
    expect(screen.getByText('Latest News')).toBeInTheDocument()
  })

  it('displays all 3 blog posts', () => {
    render(<Blog />)
    expect(screen.getByText('Top 10 Hidden Gems in the City')).toBeInTheDocument()
    expect(screen.getByText('A Guide to Fine Dining')).toBeInTheDocument()
    expect(screen.getByText('Wellness Retreats Guide')).toBeInTheDocument()
  })

  it('displays dates', () => {
    render(<Blog />)
    expect(screen.getByText('Sep 15, 2026')).toBeInTheDocument()
    expect(screen.getByText('Sep 10, 2026')).toBeInTheDocument()
    expect(screen.getByText('Sep 5, 2026')).toBeInTheDocument()
  })

  it('displays blog images', () => {
    render(<Blog />)
    expect(screen.getByAltText('Top 10 Hidden Gems in the City')).toBeInTheDocument()
  })
})
