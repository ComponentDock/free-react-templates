import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: /From Our Blog/i })).toBeInTheDocument()
  })

  it('renders all three blog posts', () => {
    render(<Blog />)
    expect(screen.getByText('The Future of Creative Design')).toBeInTheDocument()
    expect(screen.getByText('Building Brands That Last')).toBeInTheDocument()
    expect(screen.getByText('Digital Strategy Essentials')).toBeInTheDocument()
  })

  it('renders post metadata', () => {
    render(<Blog />)
    expect(screen.getByText('Sep 10, 2026')).toBeInTheDocument()
    expect(screen.getByText('Alex Morgan')).toBeInTheDocument()
    expect(screen.getByText('Jamie Lee')).toBeInTheDocument()
    expect(screen.getByText('Taylor Reed')).toBeInTheDocument()
  })

  it('renders blog post images', () => {
    render(<Blog />)
    expect(screen.getByRole('img', { name: 'The Future of Creative Design' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Building Brands That Last' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Digital Strategy Essentials' })).toBeInTheDocument()
  })

  it('renders post excerpts', () => {
    render(<Blog />)
    expect(screen.getByText(/Exploring emerging trends/i)).toBeInTheDocument()
    expect(screen.getByText(/deep dive into the principles/i)).toBeInTheDocument()
    expect(screen.getByText(/Key strategies every business/i)).toBeInTheDocument()
  })
})
