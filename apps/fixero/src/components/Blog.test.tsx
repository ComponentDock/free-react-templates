import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the heading', () => {
    render(<Blog />)
    expect(screen.getByText('Our Blog')).toBeInTheDocument()
  })

  it('renders all 3 blog posts', () => {
    render(<Blog />)
    expect(screen.getByText('Top Tips For Your Next Home Renovation')).toBeInTheDocument()
    expect(screen.getByText('Choosing The Right Construction Materials')).toBeInTheDocument()
    expect(screen.getByText('Why Professional Finishing Matters')).toBeInTheDocument()
  })

  it('renders post dates', () => {
    render(<Blog />)
    expect(screen.getAllByText(/July/)).toHaveLength(3)
  })
})
