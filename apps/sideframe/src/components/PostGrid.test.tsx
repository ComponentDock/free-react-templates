import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PostGrid } from './PostGrid'

describe('PostGrid', () => {
  it('renders all 8 blog posts', () => {
    render(<PostGrid />)
    const posts = screen.getAllByRole('link')
    expect(posts).toHaveLength(8)
  })

  it('displays post titles', () => {
    render(<PostGrid />)
    expect(
      screen.getByText('How the gut microbes you are born with affect your lifelong health'),
    ).toBeInTheDocument()
    expect(screen.getByText('Morning Light at the Park')).toBeInTheDocument()
  })

  it('has a 2-column grid on desktop', () => {
    const { container } = render(<PostGrid />)
    expect(container.firstChild).toHaveClass('grid', 'grid-cols-1', 'md:grid-cols-2')
  })

  it('applies custom className', () => {
    const { container } = render(<PostGrid className="extra" />)
    expect(container.firstChild).toHaveClass('extra')
  })
})
