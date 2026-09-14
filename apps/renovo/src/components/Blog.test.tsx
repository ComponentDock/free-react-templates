import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders section heading', () => {
    render(<Blog />)
    expect(screen.getByText('Latest posts from our blog')).toBeInTheDocument()
  })

  it('renders all 4 blog posts', () => {
    render(<Blog />)
    expect(screen.getByText('Signs Your Laptop Needs Professional Repair')).toBeInTheDocument()
    expect(screen.getByText('How to Protect Your Phone from Water Damage')).toBeInTheDocument()
    expect(screen.getByText('Data Backup Strategies Everyone Should Know')).toBeInTheDocument()
    expect(screen.getByText('When to Repair vs Replace Your Device')).toBeInTheDocument()
  })

  it('renders post dates', () => {
    render(<Blog />)
    expect(screen.getByText('12 August, 2025')).toBeInTheDocument()
  })

  it('renders post excerpts', () => {
    render(<Blog />)
    expect(screen.getByText(/warning signs that indicate/)).toBeInTheDocument()
  })

  it('renders blog images', () => {
    render(<Blog />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(4)
  })
})
