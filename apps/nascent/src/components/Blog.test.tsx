import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders section heading', () => {
    render(<Blog />)
    expect(screen.getByText('Our latest blog')).toBeInTheDocument()
  })

  it('renders three blog cards', () => {
    render(<Blog />)
    expect(screen.getByText('Introducing Workspaces 2.0')).toBeInTheDocument()
    expect(screen.getByText('How we scaled to 1M users')).toBeInTheDocument()
    expect(screen.getByText('Building a design system from scratch')).toBeInTheDocument()
  })

  it('renders category badges', () => {
    render(<Blog />)
    expect(screen.getByText('Product')).toBeInTheDocument()
    expect(screen.getByText('Engineering')).toBeInTheDocument()
    expect(screen.getByText('Design')).toBeInTheDocument()
  })

  it('renders blog excerpts', () => {
    render(<Blog />)
    expect(screen.getByText(/completely rebuilt workspace/)).toBeInTheDocument()
    expect(screen.getByText(/Behind the scenes/)).toBeInTheDocument()
    expect(screen.getByText(/Lessons learned/)).toBeInTheDocument()
  })

  it('renders blog images', () => {
    render(<Blog />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(3)
  })
})
