import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BlogList } from './BlogList'

describe('BlogList', () => {
  it('renders twelve distinct blog entries with circular thumbnails', () => {
    render(<BlogList />)
    const articles = screen.getAllByRole('article')
    expect(articles.length).toBe(12)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(12)
    for (const image of images) {
      expect(image.getAttribute('src')).toMatch(/picsum\.photos\/seed\/memoir-/)
      expect(image.className).toContain('rounded-full')
    }
  })

  it('renders titles, meta rows and Read More links', () => {
    render(<BlogList />)
    expect(screen.getAllByRole('link', { name: /Read More/i }).length).toBe(12)
    expect(screen.getAllByText(/2019/i).length).toBeGreaterThanOrEqual(12)
    expect(screen.getAllByText(/Comment/i).length).toBeGreaterThanOrEqual(12)
  })

  it('uses distinct titles', () => {
    render(<BlogList />)
    const titles = screen
      .getAllByRole('heading', { level: 3 })
      .map((heading) => heading.textContent)
    expect(new Set(titles).size).toBe(12)
  })
})
