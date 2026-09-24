import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the heading', () => {
    render(<Blog />)
    expect(screen.getByText('Recent blog')).toBeInTheDocument()
  })

  it('renders all three blog posts', () => {
    render(<Blog />)
    expect(
      screen.getByText('Understanding Heart Health: Tips for a Healthy Lifestyle'),
    ).toBeInTheDocument()
    expect(screen.getByText('The Importance of Regular Health Check-ups')).toBeInTheDocument()
    expect(screen.getByText('Pediatric Care: What Every Parent Should Know')).toBeInTheDocument()
  })

  it('shows Read more links', () => {
    render(<Blog />)
    const links = screen.getAllByText('Read more')
    expect(links).toHaveLength(3)
  })

  it('shows post meta information', () => {
    render(<Blog />)
    expect(screen.getByText(/Sep 10, 2026/)).toBeInTheDocument()
    expect(screen.getByText(/Dr. Sarah Mitchell/)).toBeInTheDocument()
  })

  it('renders blog post images', () => {
    render(<Blog />)
    expect(
      screen.getByAltText('Understanding Heart Health: Tips for a Healthy Lifestyle'),
    ).toBeInTheDocument()
  })

  it('has the correct section id', () => {
    render(<Blog />)
    const section = document.getElementById('blog')
    expect(section).toBeInTheDocument()
  })
})
