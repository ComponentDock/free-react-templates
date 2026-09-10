import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BlogCards } from './BlogCards'

describe('BlogCards', () => {
  it('renders three service cards', () => {
    render(<BlogCards />)
    expect(screen.getByRole('heading', { name: 'Ocean Freight' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Air Freight' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Street Freight' })).toBeInTheDocument()
  })

  it('renders Read More links for each card', () => {
    render(<BlogCards />)
    const readMoreLinks = screen.getAllByRole('link', { name: 'Read More' })
    expect(readMoreLinks).toHaveLength(3)
  })

  it('renders service images', () => {
    render(<BlogCards />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(3)
  })
})
