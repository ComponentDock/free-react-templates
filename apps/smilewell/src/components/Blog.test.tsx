import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: 'Our Blog' })).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<Blog />)
    expect(screen.getByText('Latest Blog Posts')).toBeInTheDocument()
  })

  it('renders the featured post', () => {
    render(<Blog />)
    expect(screen.getByText('Every Smile Is Precious')).toBeInTheDocument()
    expect(screen.getByText(/Your smile is one of the first things/)).toBeInTheDocument()
  })

  it('renders the Read More link for the featured post', () => {
    render(<Blog />)
    expect(screen.getByRole('link', { name: 'Read More' })).toBeInTheDocument()
  })

  it('renders all 4 compact blog posts', () => {
    render(<Blog />)
    expect(screen.getByText('How to Choose the Right Dentist')).toBeInTheDocument()
    expect(screen.getByText('Tips for Kids Dental Health')).toBeInTheDocument()
    expect(screen.getByText('The Benefits of Regular Checkups')).toBeInTheDocument()
    expect(screen.getByText('Modern Dentistry Innovations')).toBeInTheDocument()
  })

  it('renders dates and authors for posts', () => {
    render(<Blog />)
    expect(screen.getAllByText('Oct 20, 2024').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Dr. Bob Carry').length).toBeGreaterThanOrEqual(1)
  })

  it('renders the featured blog image', () => {
    render(<Blog />)
    const img = screen.getByRole('img', { name: 'Every Smile Is Precious' })
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
