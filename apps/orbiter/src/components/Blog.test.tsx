import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the subheading', () => {
    render(<Blog />)
    expect(screen.getByText('Our Blogs')).toBeInTheDocument()
  })

  it('renders the heading', () => {
    render(<Blog />)
    expect(screen.getByText('Recent Blog Posts')).toBeInTheDocument()
  })

  it('renders three blog post cards', () => {
    render(<Blog />)
    expect(screen.getByText('How to build a successful digital strategy')).toBeInTheDocument()
    expect(screen.getByText('The future of web development trends')).toBeInTheDocument()
    expect(screen.getByText('Branding tips for startups')).toBeInTheDocument()
  })

  it('renders date badges for each post', () => {
    render(<Blog />)
    expect(screen.getByText('15 Jan')).toBeInTheDocument()
    expect(screen.getByText('28 Feb')).toBeInTheDocument()
    expect(screen.getByText('10 Mar')).toBeInTheDocument()
  })

  it('renders Read more links for each post', () => {
    render(<Blog />)
    const readMoreLinks = screen.getAllByText('Read more')
    expect(readMoreLinks).toHaveLength(3)
  })

  it('renders excerpt text for posts', () => {
    render(<Blog />)
    expect(screen.getByText(/Discover the key elements/)).toBeInTheDocument()
    expect(screen.getByText(/Explore emerging technologies/)).toBeInTheDocument()
    expect(screen.getByText(/Learn essential branding/)).toBeInTheDocument()
  })
})
