import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the blog heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: /our blog/i })).toBeInTheDocument()
  })

  it('renders three blog posts', () => {
    render(<Blog />)
    const postCards = screen.getAllByRole('heading', { name: /where do you learn html/i })
    expect(postCards).toHaveLength(3)
  })

  it('renders blog post titles', () => {
    render(<Blog />)
    const titles = screen.getAllByRole('heading', { name: /where do you learn html/i })
    expect(titles).toHaveLength(3)
  })

  it('renders author names', () => {
    render(<Blog />)
    expect(screen.getByText('Ham Brook')).toBeInTheDocument()
    const jamesEntries = screen.getAllByText('James Phelps')
    expect(jamesEntries).toHaveLength(2)
  })

  it('renders Continue Reading links', () => {
    render(<Blog />)
    const links = screen.getAllByRole('link', { name: /continue reading/i })
    expect(links).toHaveLength(3)
  })

  it('renders blog post images', () => {
    render(<Blog />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(3)
  })
})
