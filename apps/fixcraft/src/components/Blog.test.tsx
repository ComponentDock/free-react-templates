import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders heading', () => {
    render(<Blog />)
    expect(screen.getByText('Latest news from our blog')).toBeDefined()
  })

  it('renders three blog cards', () => {
    render(<Blog />)
    const articles = screen.getAllByText('Best wheel alignment & air conditioning')
    expect(articles).toHaveLength(3)
  })

  it('renders blog post images', () => {
    render(<Blog />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(3)
  })
})
