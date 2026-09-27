import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Recent Blog')
  })

  it('shows at least three blog posts', () => {
    render(<Blog />)
    expect(screen.getByText('Why Location is Key When Buying Property')).toBeInTheDocument()
    expect(screen.getByText('First-Time Buyer Guide: What to Expect')).toBeInTheDocument()
    expect(screen.getByText('Top 5 Home Staging Tips for Sellers')).toBeInTheDocument()
  })

  it('shows Read More links', () => {
    render(<Blog />)
    const links = screen.getAllByText('Read More')
    expect(links.length).toBeGreaterThanOrEqual(3)
  })
})
