import { render, screen } from '@testing-library/react'
import { Portfolio } from './Portfolio'
import { describe, expect, it } from 'vitest'

describe('Portfolio', () => {
  it('renders the section heading', () => {
    render(<Portfolio />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Featured Works')
  })

  it('renders all six portfolio items', () => {
    render(<Portfolio />)
    const items = [
      'Brand Identity',
      'Web Application',
      'Mobile App',
      'Marketing Campaign',
      'Creative Strategy',
      'Social Media',
    ]
    items.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument()
    })
  })

  it('renders category labels', () => {
    render(<Portfolio />)
    expect(screen.getAllByText('Design').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Development').length).toBe(2)
  })

  it('renders portfolio images', () => {
    render(<Portfolio />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(6)
  })
})
