import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders twelve project cards, each with an image and a search icon', () => {
    render(<Portfolio />)
    expect(screen.getByRole('heading', { name: 'Portfolio', level: 2 })).toBeInTheDocument()
    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(12)
    for (let index = 1; index <= 12; index += 1) {
      expect(screen.getByRole('img', { name: `Project ${index}` })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: `View Project ${index}` })).toBeInTheDocument()
    }
  })
})
