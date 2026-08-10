import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders three blog cards with overlapping date blocks', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: 'Recent Posts' })).toBeInTheDocument()
    const cards = screen.getAllByRole('article')
    expect(cards.length).toBe(3)
    expect(screen.getByText('31')).toBeInTheDocument()
    expect(screen.getByText('27')).toBeInTheDocument()
    expect(screen.getByText('26')).toBeInTheDocument()
    expect(screen.getAllByText('December').length).toBe(3)
    expect(screen.getAllByText('2018').length).toBe(3)
  })

  it('renders post titles with seeded cover photos', () => {
    render(<Blog />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(3)
    for (const image of images) {
      expect(image.getAttribute('src')).toMatch(/picsum\.photos\/seed\/shanti-/)
    }
  })
})
