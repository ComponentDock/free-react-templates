import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { IconButtons } from './IconButtons'

describe('IconButtons', () => {
  it('renders section heading', () => {
    render(<IconButtons />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Icon Buttons')
  })

  it('renders icon-augmented buttons with labels', () => {
    render(<IconButtons />)
    const labels = [
      'Download',
      'Delete',
      'Add to Cart',
      'Continue',
      'Favorite',
      'Share',
      'Contact',
      'Notify',
    ]
    for (const label of labels) {
      expect(screen.getByRole('button', { name: label })).toBeInTheDocument()
    }
  })
})
