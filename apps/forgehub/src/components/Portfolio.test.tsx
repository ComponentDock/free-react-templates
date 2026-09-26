import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders heading', () => {
    render(<Portfolio />)
    expect(screen.getByText('Our Works')).toBeInTheDocument()
  })

  it('renders 6 portfolio items', () => {
    render(<Portfolio />)
    const titles = [
      'Bonzai Tree',
      'Simple Woman',
      'Fruits',
      'Design Material',
      'Handy Food',
      'Cat With Cup',
    ]
    titles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument()
    })
  })

  it('renders category labels', () => {
    render(<Portfolio />)
    const categories = screen.getAllByText(/Web Application|Branding|Website/)
    expect(categories.length).toBeGreaterThanOrEqual(3)
  })
})
