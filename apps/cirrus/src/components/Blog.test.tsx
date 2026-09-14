import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the heading', () => {
    render(<Blog />)
    expect(screen.getByText('Recent Blog')).toBeInTheDocument()
  })

  it('renders three blog cards', () => {
    render(<Blog />)
    expect(screen.getByText('Cloud Computing Trends to Watch in 2026')).toBeInTheDocument()
    expect(screen.getByText('How to Optimize Your Cloud Storage Costs')).toBeInTheDocument()
    expect(
      screen.getByText('Building Resilient Applications with Cloud Services'),
    ).toBeInTheDocument()
  })

  it('renders cover images for each post', () => {
    render(<Blog />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(3)
  })

  it('renders Read more links', () => {
    render(<Blog />)
    const links = screen.getAllByText('Read more')
    expect(links).toHaveLength(3)
  })

  it('renders meta info for posts', () => {
    render(<Blog />)
    expect(screen.getByText('May 17, 2026')).toBeInTheDocument()
    const admins = screen.getAllByText('Admin')
    expect(admins.length).toBe(3)
  })
})
