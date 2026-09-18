import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'
import { describe, expect, it } from 'vitest'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Recent News')
  })

  it('renders all three blog posts', () => {
    render(<Blog />)
    const titles = screen.getAllByText('Molestie at elementum eu facilisis sed odio')
    expect(titles.length).toBe(3)
  })

  it('renders blog meta information', () => {
    render(<Blog />)
    expect(screen.getAllByText('John Doe').length).toBe(3)
    expect(screen.getAllByText('18 Oct').length).toBe(3)
  })

  it('renders Read more links', () => {
    render(<Blog />)
    const links = screen.getAllByText('Read more')
    expect(links.length).toBe(3)
  })

  it('renders blog images', () => {
    render(<Blog />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(3)
  })
})
