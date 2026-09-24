import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TrendingGrid } from './TrendingGrid'

describe('TrendingGrid', () => {
  it('renders four trending article cards', () => {
    render(<TrendingGrid />)
    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(4)
  })

  it('renders TRENDING badges on each card', () => {
    render(<TrendingGrid />)
    const badges = screen.getAllByText('Trending')
    expect(badges).toHaveLength(4)
  })

  it('renders article titles', () => {
    render(<TrendingGrid />)
    expect(screen.getByText(/Building On Consumer Preferences/)).toBeInTheDocument()
    expect(screen.getByText(/Calling Time On Irresponsible/)).toBeInTheDocument()
    expect(screen.getByText(/The Pomelo Case/)).toBeInTheDocument()
    expect(screen.getByText(/Valuable Lessons To Take Away/)).toBeInTheDocument()
  })

  it('renders images with picsum placeholder URLs', () => {
    render(<TrendingGrid />)
    const images = screen.getAllByRole('img')
    for (const img of images) {
      expect(img.getAttribute('src')).toMatch(/picsum\.photos\/seed\/headliner-/)
    }
  })
})
