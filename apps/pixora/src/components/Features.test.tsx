import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'
import { features } from '../data'

describe('Features', () => {
  it('renders a card for every feature with an uppercase title and a blurb', () => {
    render(<Features />)
    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(features.length)
    for (const feature of features) {
      expect(screen.getByRole('heading', { name: feature.title })).toBeInTheDocument()
    }
    expect(screen.getAllByText(/thoughtful, modern layouts/i)).toHaveLength(features.length)
  })
})
