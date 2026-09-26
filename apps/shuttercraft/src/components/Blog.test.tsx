import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the blog section heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2, name: 'Our Recent Blogs' })).toBeInTheDocument()
  })

  it('renders the subtitle text', () => {
    render(<Blog />)
    expect(screen.getByText(/Tips, stories, and insights/)).toBeInTheDocument()
  })

  it('renders all 3 blog post cards', () => {
    render(<Blog />)
    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(3)
  })

  it('renders the first blog post title', () => {
    render(<Blog />)
    expect(
      screen.getByRole('heading', {
        level: 3,
        name: 'Chasing Golden Hour Light',
      }),
    ).toBeInTheDocument()
  })

  it('renders the second blog post title', () => {
    render(<Blog />)
    expect(
      screen.getByRole('heading', {
        level: 3,
        name: 'Mastering Portrait Composition',
      }),
    ).toBeInTheDocument()
  })

  it('renders the third blog post title', () => {
    render(<Blog />)
    expect(
      screen.getByRole('heading', {
        level: 3,
        name: 'Essential Gear for Street Photography',
      }),
    ).toBeInTheDocument()
  })

  it('renders author names for each post', () => {
    render(<Blog />)
    expect(screen.getByText('Alex Morgan')).toBeInTheDocument()
    expect(screen.getByText('Jordan Lee')).toBeInTheDocument()
    expect(screen.getByText('Sam Rivera')).toBeInTheDocument()
  })

  it('renders dates for each post', () => {
    render(<Blog />)
    expect(screen.getByText('15th Dec')).toBeInTheDocument()
    expect(screen.getByText('12th Dec')).toBeInTheDocument()
    expect(screen.getByText('10th Dec')).toBeInTheDocument()
  })

  it('renders like and comment counts', () => {
    render(<Blog />)
    expect(screen.getByText('24')).toBeInTheDocument()
    expect(screen.getByText('8')).toBeInTheDocument()
    expect(screen.getByText('18')).toBeInTheDocument()
    expect(screen.getByText('5')).toBeInTheDocument()
    expect(screen.getByText('31')).toBeInTheDocument()
    expect(screen.getByText('12')).toBeInTheDocument()
  })

  it('has the blog section id', () => {
    const { container } = render(<Blog />)
    expect(container.querySelector('#blog')).toBeInTheDocument()
  })
})
