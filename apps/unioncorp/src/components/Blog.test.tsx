import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders section heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Recent From Blog')
  })

  it('renders all 3 blog posts', () => {
    render(<Blog />)
    expect(
      screen.getByText('Incorporation is A Big Milestone for Your Business'),
    ).toBeInTheDocument()
    expect(
      screen.getByText('Smart Investment Strategies for Growing Businesses'),
    ).toBeInTheDocument()
    expect(screen.getByText('Understanding Tax Reform: What It Means for You')).toBeInTheDocument()
  })

  it('renders Read More links', () => {
    render(<Blog />)
    const readMoreLinks = screen.getAllByText('Read More')
    expect(readMoreLinks).toHaveLength(3)
  })

  it('applies custom className', () => {
    const { container } = render(<Blog className="extra" />)
    expect(container.firstElementChild).toHaveClass('extra')
  })
})
