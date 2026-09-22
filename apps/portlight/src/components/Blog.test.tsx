import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders section heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: /recent blog/i })).toBeInTheDocument()
  })

  it('renders all 3 blog posts', () => {
    render(<Blog />)
    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(3)
  })

  it('renders post dates', () => {
    render(<Blog />)
    expect(screen.getByText('Oct. 30, 2024')).toBeInTheDocument()
    expect(screen.getByText('Oct. 28, 2024')).toBeInTheDocument()
    expect(screen.getByText('Oct. 25, 2024')).toBeInTheDocument()
  })

  it('renders post titles', () => {
    render(<Blog />)
    expect(screen.getByText(/even the all-powerful/i)).toBeInTheDocument()
    expect(screen.getByText(/big oxford english/i)).toBeInTheDocument()
    expect(screen.getByText(/far far away behind/i)).toBeInTheDocument()
  })
})
