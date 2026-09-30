import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ArticleGrid from './ArticleGrid'

describe('ArticleGrid', () => {
  it('renders all article cards', () => {
    render(<ArticleGrid />)
    const articles = screen.getAllByText(/How the gut microbes/i)
    expect(articles).toHaveLength(8)
  })

  it('renders article dates', () => {
    render(<ArticleGrid />)
    const dates = screen.getAllByText(/Posted: Dec 17, 2019/)
    expect(dates).toHaveLength(8)
  })

  it('renders article thumbnails', () => {
    render(<ArticleGrid />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(8)
  })

  it('renders articles in a grid layout', () => {
    const { container } = render(<ArticleGrid />)
    const grid = container.querySelector('.grid')
    expect(grid).toBeInTheDocument()
  })
})
