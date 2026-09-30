import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ArticleGrid from './ArticleGrid'

describe('ArticleGrid', () => {
  it('renders 8 article cards', () => {
    render(<ArticleGrid />)
    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(8)
  })

  it('displays article titles', () => {
    render(<ArticleGrid />)
    const titles = screen.getAllByText(/How the gut microbes/i)
    expect(titles).toHaveLength(8)
  })

  it('displays dates on each card', () => {
    render(<ArticleGrid />)
    const dates = screen.getAllByText(/Posted: Dec 17, 2019/)
    expect(dates).toHaveLength(8)
  })

  it('renders avatar images with alt text', () => {
    render(<ArticleGrid />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(8)
    for (const img of images) {
      expect(img).toHaveAttribute('alt', expect.stringContaining('gut microbes'))
    }
  })

  it('uses circular avatar images', () => {
    render(<ArticleGrid />)
    const images = screen.getAllByRole('img')
    for (const img of images) {
      expect(img.className).toContain('rounded-full')
    }
  })
})
