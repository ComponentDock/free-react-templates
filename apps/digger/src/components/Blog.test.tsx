import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders blog posts', () => {
    render(<Blog />)
    expect(screen.getByText('Our Blog')).toBeInTheDocument()
    expect(screen.getByText('How to Choose the Right Mining Equipment')).toBeInTheDocument()
    expect(screen.getByText('Sustainable Mining Practices for the Future')).toBeInTheDocument()
  })

  it('renders Read More links', () => {
    render(<Blog />)
    const links = screen.getAllByText(/Read More/)
    expect(links.length).toBeGreaterThanOrEqual(1)
  })
})
