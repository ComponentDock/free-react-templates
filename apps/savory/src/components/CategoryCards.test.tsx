import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CategoryCards } from './CategoryCards'

describe('CategoryCards', () => {
  it('renders three category cards with an image, tag and title', () => {
    render(<CategoryCards />)

    for (const title of ['Healthy Food', 'Organic Cuisine', 'Vegetarian Food']) {
      expect(screen.getByText(title)).toBeInTheDocument()
    }
    expect(screen.getAllByText('The Best')).toHaveLength(3)
    expect(screen.getAllByRole('img')).toHaveLength(3)
  })
})
