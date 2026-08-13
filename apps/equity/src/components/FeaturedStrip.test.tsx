import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeaturedStrip } from './FeaturedStrip'

describe('FeaturedStrip', () => {
  it('shows three overlapping cards with title, paragraph, and Read more link', () => {
    render(<FeaturedStrip />)

    for (const title of ['Business Analytics', 'Investment Solutions', 'Individual Approach']) {
      const card = screen.getByRole('heading', { level: 3, name: title }).closest('article')!
      expect(card).toHaveTextContent('Lorem ipsum dolor sit amet')
      expect(card.querySelector('a')).toHaveAttribute('href', '#services')
    }
  })
})
