import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the blog heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Latest from the Blog')
  })

  it('renders all three blog posts', () => {
    render(<Blog />)
    expect(screen.getByText('The Art of Composition')).toBeInTheDocument()
    expect(screen.getByText('Shooting in Low Light')).toBeInTheDocument()
    expect(screen.getByText('Finding Your Style')).toBeInTheDocument()
  })

  it('renders blog post excerpts', () => {
    render(<Blog />)
    expect(screen.getByText(/Understanding composition is the foundation/)).toBeInTheDocument()
  })

  it('renders blog post dates', () => {
    render(<Blog />)
    expect(screen.getByText('18th Dec')).toBeInTheDocument()
    expect(screen.getByText('14th Dec')).toBeInTheDocument()
    expect(screen.getByText('10th Dec')).toBeInTheDocument()
  })

  it('renders blog post images', () => {
    render(<Blog />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(3)
  })
})
