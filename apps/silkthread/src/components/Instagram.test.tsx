import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Instagram } from './Instagram'

describe('Instagram', () => {
  it('renders 6 instagram images', () => {
    render(<Instagram />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(6)
  })

  it('renders instagram heading and hashtag', () => {
    render(<Instagram />)
    expect(screen.getAllByText('Instagram').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('#SilkThread')).toBeInTheDocument()
  })

  it('has accessible label', () => {
    render(<Instagram />)
    expect(screen.getByLabelText('Instagram feed')).toBeInTheDocument()
  })
})
