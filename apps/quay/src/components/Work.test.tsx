import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Work } from './Work'
import { works } from '../data'

describe('Work', () => {
  it('renders the section heading and the View All Works link', () => {
    render(<Work />)

    expect(screen.getByRole('heading', { name: /Our Work/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'View All Works' })).toBeInTheDocument()
  })

  it('renders exactly four portfolio cards in a 2-column grid', () => {
    const { container } = render(<Work />)

    const images = container.querySelectorAll('img')
    expect(images).toHaveLength(4)
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(4)
    expect(screen.getAllByRole('link', { name: 'Read More' })).toHaveLength(4)
  })

  it('shows a title, location, placeholder image, and read-more link per card', () => {
    const { container } = render(<Work />)

    for (const item of works) {
      expect(screen.getByRole('heading', { name: item.title })).toBeInTheDocument()
      expect(screen.getByText(item.location)).toBeInTheDocument()
    }

    const images = container.querySelectorAll('img')
    images.forEach((img, i) => {
      expect(img.getAttribute('src')).toContain('picsum.photos/seed/quay-work-')
      expect(img.getAttribute('alt')).toBe(works[i]?.alt)
    })
  })
})
