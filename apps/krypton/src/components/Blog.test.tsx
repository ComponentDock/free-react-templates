import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading and blog cards', () => {
    render(<Blog />)

    expect(screen.getByRole('heading', { name: 'Latest News' })).toBeInTheDocument()

    const posts = [
      'The Future of Digital Design',
      'Building Scalable Web Apps',
      'Marketing in 2026',
    ]
    for (const title of posts) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
  })

  it('shows Read More links for each post', () => {
    render(<Blog />)

    const links = screen.getAllByRole('link', { name: 'Read More →' })
    expect(links.length).toBe(3)
  })

  it('has the correct section landmark', () => {
    render(<Blog />)
    expect(screen.getByRole('region', { name: 'Blog' })).toBeInTheDocument()
  })
})
