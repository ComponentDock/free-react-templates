import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Collections } from './Collections'
import { COLLECTIONS } from '../data'

describe('Collections', () => {
  it('renders three collection cards with labels, names and images', () => {
    const { container } = render(<Collections />)

    for (const collection of COLLECTIONS) {
      const card = screen.getByRole('link', { name: new RegExp(collection.label) })
      expect(card).toHaveAttribute('href', collection.href)
      expect(screen.getAllByText('Collections').length).toBe(COLLECTIONS.length)
      const image = screen.getByRole('img', { name: `${collection.label} collection` })
      expect(image).toHaveAttribute('src', collection.image)
    }

    /* Hover zoom: the image scales to 1.1 on card hover. */
    const firstImage = container.querySelector('img')
    expect(firstImage).toHaveClass('group-hover:scale-110')
  })
})
