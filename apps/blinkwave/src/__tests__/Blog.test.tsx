import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Blog } from '../components/Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByText(/latest news and updates/i)).toBeInTheDocument()
  })

  it('renders all 3 blog post titles', () => {
    render(<Blog />)
    expect(screen.getByText(/fiber optics are transforming/i)).toBeInTheDocument()
    expect(screen.getByText(/5 tips to boost/i)).toBeInTheDocument()
    expect(screen.getByText(/why uptime guarantees matter/i)).toBeInTheDocument()
  })

  it('renders Read More links', () => {
    render(<Blog />)
    const links = screen.getAllByText('Read More')
    expect(links).toHaveLength(3)
  })

  it('renders blog images', () => {
    render(<Blog />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(3)
  })
})
