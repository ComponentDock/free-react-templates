import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders 6 portfolio items', () => {
    render(<Portfolio />)
    const images = screen.getAllByAltText('Corporate and Brand Identity')
    expect(images).toHaveLength(6)
  })

  it('renders portfolio titles in hover overlays', () => {
    render(<Portfolio />)
    const titles = screen.getAllByText('Corporate and Brand Identity')
    expect(titles.length).toBeGreaterThanOrEqual(6)
  })

  it('renders category labels', () => {
    render(<Portfolio />)
    const categories = screen.getAllByText('Brand Identity')
    expect(categories).toHaveLength(6)
  })
})
