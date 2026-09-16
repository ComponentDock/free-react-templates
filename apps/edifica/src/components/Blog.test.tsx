import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2, name: /recent blog/i })).toBeInTheDocument()
  })

  it('renders three blog cards', () => {
    render(<Blog />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(3)
  })

  it('renders blog titles', () => {
    render(<Blog />)
    expect(screen.getByText(/modern construction trends/i)).toBeInTheDocument()
    expect(screen.getByText(/sustainable building materials/i)).toBeInTheDocument()
    expect(screen.getByText(/professional architecture design/i)).toBeInTheDocument()
  })
})
