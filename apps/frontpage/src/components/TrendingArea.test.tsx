import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TrendingArea } from './TrendingArea'

describe('TrendingArea', () => {
  it('renders the Trending heading', () => {
    render(<TrendingArea />)
    expect(screen.getByRole('heading', { name: /Trending/i })).toBeInTheDocument()
  })

  it('renders the hero article with category badge and title', () => {
    render(<TrendingArea />)
    expect(screen.getByRole('heading', { name: /The Future of AI/i })).toBeInTheDocument()
    expect(screen.getByText('Technology')).toBeInTheDocument()
    const heroImg = screen.getByRole('img', { name: /The Future of AI/i })
    expect(heroImg).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })

  it('renders three small article cards', () => {
    render(<TrendingArea />)
    for (const title of [
      'Stock Markets Rally on Positive Economic Data',
      'New Study Reveals Benefits of Mediterranean Diet',
      'Championship Finals Set for Epic Showdown This Weekend',
    ]) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
      expect(screen.getByRole('img', { name: title })).toBeInTheDocument()
    }
  })

  it('renders five sidebar items', () => {
    render(<TrendingArea />)
    const sidebarHeadings = screen.getAllByRole('heading', { level: 4 })
    expect(sidebarHeadings.length).toBeGreaterThanOrEqual(5)
    expect(screen.getByText(/Senate Passes New Infrastructure Bill/)).toBeInTheDocument()
  })

  it('renders all images with picsum sources', () => {
    render(<TrendingArea />)
    const images = screen.getAllByRole('img')
    for (const img of images) {
      expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    }
  })
})
